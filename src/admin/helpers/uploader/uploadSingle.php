<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$tableName = isset($_POST["tableName"]) ? (string)$_POST["tableName"] : "";

	if ($tableName == "") {
		http_response_code(400);
		echo json_encode([
			"error" => "Missing table name",
			"success" => false,
		]);
		exit;
	}

	$UPLOAD_URL = "/uploads/" . $tableName;
	$UPLOAD_DIR = $_SERVER["DOCUMENT_ROOT"] . $UPLOAD_URL;

	if ($_SERVER["REQUEST_METHOD"] !== "POST") {
		http_response_code(405);
		echo json_encode([
			"success" => false,
			"error" => "Method not allowed"
		]);
		exit;
	}

	$id = isset($_POST["id"]) ? (int)$_POST["id"] : 0;

	if ($id <= 0) {
		http_response_code(400);
		echo json_encode([
			"success" => false,
			"error" => "Missing record id"
		]);
		exit;
	}

	if (!isset($_FILES["image"])) {
		http_response_code(400);
		echo json_encode([
			"success" => false,
			"error" => "No image uploaded"
		]);
		exit;
	}

	$file = $_FILES["image"];
	if ($file["error"] !== UPLOAD_ERR_OK) {
		http_response_code(400);
		echo json_encode([
			'success' => false,
			'error'=>'Upload error'
		]);
		exit;
	}

	$allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
	$maxSize = 2 * 1024 * 1024;

	if ($file["size"] > $maxSize) {
		echo json_encode([
			"success" => false,
			"error" => "Too large (>2MB)"
		]);
		exit;
	}

	$finfo = new finfo(FILEINFO_MIME_TYPE);
	$mime  = $finfo->file($file["tmp_name"]) ?: "application/octet-stream";

	if (!in_array($mime, $allowed, true)) {
		echo json_encode([
			"success" => false,
			"error" => "Unsupported type"
		]);
		exit;
	}

	$ext = match ($mime) {
		"image/avif" => ".avif",
		"image/jpeg" => ".jpeg",
		"image/png" => ".png",
		"image/webp" => ".webp",
		default => ""
	};

	$basename = bin2hex(random_bytes(16)) . $ext;
	$destPath = $UPLOAD_DIR . "/" . $basename;

	if (!move_uploaded_file($file['tmp_name'], $destPath)) {
		echo json_encode(['success'=>false,'error'=>'Failed to move file']); exit;
	}

	$newUrl = $UPLOAD_URL . "/" . rawurlencode($basename);

	try {
		R::begin();

		$item = R::load($tableName, $id);
		if (!$item->id) {
			@unlink($destPath);
			throw new RuntimeException('Record not found');
		}

		$oldUrl = (string)($item->image ?? "");
		$item->image = $newUrl;

		R::store($item);
		R::commit();

		if ($oldUrl) {		
			$oldBasename = basename(parse_url($oldUrl, PHP_URL_PATH) ?: "");
			$oldPath = $oldBasename ? $UPLOAD_DIR . "/" . $oldBasename : "";
			if ($oldBasename && is_file($oldPath)) { @unlink($oldPath); }
		}

		echo json_encode(['success'=>true,'id'=>(int)$item->id,'image'=>$newUrl]);
	} catch (Throwable $t) {
		R::rollback();
		@unlink($destPath);
		http_response_code(500);
		echo json_encode(['success'=>false,'error'=>$t->getMessage()]);
	}

?>
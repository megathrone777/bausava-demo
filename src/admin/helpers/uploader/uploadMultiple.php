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
			"error" => "Method not allowed",
			"success" => false,
		]);
		exit;
	}

	$id = isset($_POST["id"]) ? (int)$_POST["id"] : 0;

	if ($id <= 0) {
		http_response_code(400);
		echo json_encode([
			"error" => "Missing item id",
			"success" => false,
		]);
		exit;
	}
	
	if (!isset($_FILES["images"])) {
		http_response_code(400);
		echo json_encode([
			"success" => false,
			"error" => "No files uploaded"
		]);
		exit;
	}

	// $mode = isset($_POST['mode']) && $_POST['mode']==='replace' ? 'replace' : 'append';
	$mode = "append";
	$allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
	$maxSize = 2 * 1024 * 1024;
	$files = $_FILES["images"];
	$count = is_array($files["name"]) ? count($files["name"]) : 0;
	$uploadedUrls = [];
	$errors = [];

	try {
		R::begin();

		$item = R::load($tableName, $id);
		if (!$item->id) throw new RuntimeException("Record not found");

		for ($i = 0; $i < $count; $i++) {
			if ($files["error"][$i] !== UPLOAD_ERR_OK) {
				$errors[] = "Upload error code {$files['error'][$i]} for {$files['name'][$i]}";
				continue;
			}

			$tmp = $files["tmp_name"][$i];
			$name = $files["name"][$i];
			$size = $files["size"][$i];

			if ($size > $maxSize) {
				$errors[] = "$name is too large";
				continue;
			}

			$finfo = new finfo(FILEINFO_MIME_TYPE);
			$mime  = $finfo->file($tmp) ?: "application/octet-stream";

			if (!in_array($mime, $allowed, true)) {
				$errors[] = "$name not allowed ($mime)";
				continue;
			}

			$ext = match($mime) {
				"image/avif" => ".avif",
				"image/jpeg" => ".jpeg",
				"image/png" => ".png",
				"image/webp" => ".webp",
				default => ""
			};

			$basename = bin2hex(random_bytes(16)).$ext;
			$dest = $UPLOAD_DIR . "/" . $basename;
			
			if (!move_uploaded_file($tmp, $dest)) {
				$errors[] = "Failed to move $name";
				continue;
			}

			$uploadedUrls[] = $UPLOAD_URL . "/" . rawurlencode($basename);
		}

		$existing = [];
		
		if (!empty($item->images)) {
			$decoded = json_decode((string)$item->images, true);
			if (is_array($decoded)) $existing = $decoded;
		}

		$newList = ($mode === "replace")
			? $uploadedUrls
			: array_values(array_unique(array_merge($existing, $uploadedUrls)));

		$item->images = json_encode($newList, JSON_UNESCAPED_SLASHES);
		
		R::store($item);
		R::commit();

		$statusOk = count($uploadedUrls) > 0 && count($errors) === 0;
		http_response_code($statusOk ? 200 : 400);
		
		echo json_encode([
			"errors" => $errors,
			"id" => (int)$item->id,
			"images" => $newList,
			"mode" => $mode,
			"success" => $statusOk,
			"uploaded" => $uploadedUrls,
		]);
	} catch (Throwable $t) {
		R::rollback();
		http_response_code(500);

		echo json_encode([
			'success'=>false,
			'error'=>$t->getMessage()
		]);
	}
?>
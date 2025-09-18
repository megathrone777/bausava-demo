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
	$url = isset($_POST["url"]) ? trim($_POST["url"]) : '';

	if ($id <= 0 || $url === "") {
		http_response_code(400);
		echo json_encode([
			"error" => "Missing record id or url",
			"success" => false,
		]);
		exit;
	}

	try {
		R::begin();

		$item = R::load($tableName, $id);

		if (!$item->id) throw new RuntimeException("Record not found");

		$images = [];

		if (!empty($item->images)) {
			$decoded = json_decode((string)$item->images, true);
			if (is_array($decoded)) $images = $decoded;
		}

		$before = count($images);
		$images = array_values(array_filter($images, fn($u) => $u !== $url));
		if (count($images) === $before) throw new RuntimeException("URL not found on record");

		$item->images = json_encode($images, JSON_UNESCAPED_SLASHES);
		R::store($item);
		R::commit();

		// Best-effort file removal
		$base = basename(parse_url($url, PHP_URL_PATH) ?: "");
		$path = $base ? $UPLOAD_DIR . "/" . $base : "";
		if ($base && is_file($path)) @unlink($path);

		echo json_encode([
			"id" => (int)$item->id,
			"images" => $images,
			"success" => true,
		]);
	} catch (Throwable $t) {
		R::rollback();
		http_response_code(500);
		echo json_encode([
			"error" => $t->getMessage(),
			"success" => false,
		]);
	}

<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";
	require_once $_SERVER["DOCUMENT_ROOT"] . "/src/admin/helpers/slugify.php";

	$badges = $_POST["badges"];
	$price = $_POST["price"];
	$title = $_POST["title"];
	$type = $_POST["type"];

	$newBadges = [];
	foreach($badges as $key => $badge) {
		$newBadges[] = $badge;
	}

	$house = R::dispense("houses");
	$house->title = $title;
	$house->price = $price;
	$house->type = $type;
	$house->badges = json_encode($newBadges, false);

	$newHouseId = R::store($house);

	if (isset($newHouseId)) {
		$UPLOAD_URL = "/uploads/houses";
		$UPLOAD_DIR = $_SERVER["DOCUMENT_ROOT"] . $UPLOAD_URL;
		
		$files = $_FILES["images"];
		$count = is_array($files["name"]) ? count($files["name"]) : 0;
		$allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
		$maxSize = 2 * 1024 * 1024;
		$mode = "append";
		$uploadedUrls = [];
		$errors = [];

		$newHouse = R::load("houses", $newHouseId);
	
		if (!$newHouse->id) throw new RuntimeException("Record not found");

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
			$mime = $finfo->file($tmp) ?: "application/octet-stream";

			if (!in_array($mime, $allowed, true)) {
				$errors[] = "$name not allowed ($mime)";
				continue;
			}

			$ext = match($mime) {
				"image/avif" => ".avif",
				"image/jpeg" => ".jpg",
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
		
		if (!empty($newHouse->images)) {
			$decoded = json_decode((string)$newHouse->images, true);
			if (is_array($decoded)) $existing = $decoded;
		}

		$newList = ($mode === "replace")
			? $uploadedUrls
			: array_values(array_unique(array_merge($existing, $uploadedUrls)));

		$newHouse->images = json_encode($newList, JSON_UNESCAPED_SLASHES);
		$newHouse->slug = slugify($title . $newHouseId);
		
		R::store($newHouse);

		$statusOk = count($uploadedUrls) > 0 && count($errors) === 0;
		
		if ($statusOk) {
			header("Location: /admin/houses");
			exit;
		}

		header("Location: /admin/houses");
	}
?>
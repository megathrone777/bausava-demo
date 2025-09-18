<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";
	require_once $_SERVER["DOCUMENT_ROOT"] . "/src/admin/helpers/slugify.php";

	$badges = $_POST["badges"];
	$category = $_POST["category"];
	$price = $_POST["price"];
	$title = $_POST["title"];
	$type = $_POST["type"];

	$newBadges = [];
	foreach($badges as $key => $badge) {
		$newBadges[] = $badge;
	}

	$project = R::dispense("projects");
	$project->category = $category;
	$project->title = $title;
	$project->price = $price;
	$project->type = $type;
	$project->badges = json_encode($newBadges, false);

	$newProjectId = R::store($project);

	if (isset($newProjectId)) {
		$UPLOAD_URL = "/uploads/projects";
		$UPLOAD_DIR = $_SERVER["DOCUMENT_ROOT"] . $UPLOAD_URL;
		
		$files = $_FILES["images"];
		$count = is_array($files["name"]) ? count($files["name"]) : 0;
		$allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
		$maxSize = 2 * 1024 * 1024;
		$mode = "append";
		$uploadedUrls = [];
		$errors = [];

		$newProject = R::load("projects", $newProjectId);
	
		if (!$newProject->id) throw new RuntimeException("Record not found");

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
		
		if (!empty($newProject->images)) {
			$decoded = json_decode((string)$newProject->images, true);
			if (is_array($decoded)) $existing = $decoded;
		}

		$newList = ($mode === "replace")
			? $uploadedUrls
			: array_values(array_unique(array_merge($existing, $uploadedUrls)));

		$newProject->images = json_encode($newList, JSON_UNESCAPED_SLASHES);
		$newProject->slug = slugify($title . $newProjectId);
		
		R::store($newProject);

		$statusOk = count($uploadedUrls) > 0 && count($errors) === 0;
		
		if ($statusOk) {
			header("Location: /admin/projects");
			exit;
		}

		header("Location: /admin/projects");
	}
?>
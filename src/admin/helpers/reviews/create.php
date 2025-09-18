<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$title = $_POST["title"];
	$text = $_POST["text"];
	$url = $_POST["url"];

	$review = R::dispense("reviews");
	$review->title = $title;
	$review->text = $text;
	$review->url = $url;

	$newReviewId = R::store($review);

	if (isset($newReviewId) && $_FILES["images"]) {
		$UPLOAD_URL = "/uploads/reviews";
		$UPLOAD_DIR = $_SERVER["DOCUMENT_ROOT"] . $UPLOAD_URL;
		
		$file = $_FILES["images"];
		$allowed = ["image/jpeg", "image/png", "image/webp", "image/avif"];
		$maxSize = 2 * 1024 * 1024;
		$newReview = R::load("reviews", $newReviewId);
	
		if (!$newReview->id) throw new RuntimeException("Record not found");

		$tmp = $file["tmp_name"][0];
		$name = $file["name"];
		$size = $file["size"];

		if ($size > $maxSize) {
			echo "Size error";
		}

		$finfo = new finfo(FILEINFO_MIME_TYPE);
		$mime = $finfo->file($tmp) ?: "application/octet-stream";

		if (!in_array($mime, $allowed, true)) {
			echo "Wrong format";
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
			echo "Failed to move file";
		}

		$uploadedUrl = $UPLOAD_URL . "/" . rawurlencode($basename);
		$newReview->image = $uploadedUrl;
		
		R::store($newReview);
		
		if (strlen($uploadedUrl) > 0) {
			header("Location: /admin/reviews");
		};
	};
?>
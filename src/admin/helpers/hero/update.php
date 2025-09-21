<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$uploadURL = "/uploads/hero/";
	$badges = $_POST["badges"];
	$id = $_POST["id"];
	$text = $_POST["text"];
	$title = $_POST["title"];
	$mediaText = $_POST["media_text"];
	$mediaTitle = $_POST["media_title"];
	$mediaValue = $_POST["media_value"];
	$imageName = empty($_FILES["image"]) ? null : $_FILES["image"]["tmp_name"];

	$newBadges = [];
	foreach($badges as $key => $badge) {
		$newBadges[] = $badge;
	}

	$hero = R::load("hero", $id);

	if ($imageName) {
		if (file_exists($hero->image)) unlink($hero->image);

		$imageExt = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION);
		$imageDest = sprintf(
			$_SERVER["DOCUMENT_ROOT"] . $uploadURL . "%s.%s",
			sha1_file($imageName),
			$imageExt
		);

		if (move_uploaded_file($imageName, $imageDest)) {
			$imagePath = $uploadURL . pathinfo($imageDest, PATHINFO_BASENAME);
			$hero->image = $imagePath;
		}
	}

	$hero->title = $title;
	$hero->text = $text;
	$hero->media_text = $mediaText;
	$hero->media_title = $mediaTitle;
	$hero->media_value = $mediaValue;
	$hero->badges = json_encode($newBadges, false);

	R::store($hero);
	header("Location: /admin/hero");
?>
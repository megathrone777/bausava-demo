<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$title = $_POST["title"];
	$text = $_POST["text"];
	$url = $_POST["url"];

	$review = R::load("reviews", $id);
	$review->title = $title;
	$review->text = $text;
	$review->url = $url;

	R::store($review);
	header("Location: /admin/reviews");
?>
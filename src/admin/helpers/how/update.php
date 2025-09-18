<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$title = $_POST["title"];
	$text = $_POST["text"];

	$howItem = R::load("how_it_works", $id);
	$howItem->title = $title;
	$howItem->text = $text;

	R::store($howItem);
	header("Location: /admin/how-it-works");
?>
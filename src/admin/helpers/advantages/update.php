<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$title = $_POST["title"];

	$advantage = R::load("advantages", $id);
	$advantage->title = $title;

	R::store($advantage);
	header("Location: /admin/advantages");
?>
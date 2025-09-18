<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$href = $_POST["href"];
	$title = $_POST["title"];

	$field = R::load("contacts", $id);
	$field->href = $href;
	$field->title = $title;

	R::store($field);
	header("Location: /admin/contacts");
?>
<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$price = $_POST["price"];
	$title = $_POST["title"];

	$type = R::load("calculator_types", $id);
	$type->price = $price;
	$type->title = $title;

	R::store($type);
	header("Location: /admin/calculator");
?>
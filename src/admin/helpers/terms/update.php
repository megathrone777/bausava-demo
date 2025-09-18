<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$text = $_POST["text"];

	$textContent = R::load("terms", "1");
	$textContent->text = $text;

	R::store($textContent);
	header("Location: /admin/terms");
?>
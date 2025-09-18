<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$placeholder = $_POST["placeholder"];

	$field = R::load("calculate_fields", $id);
	$field->placeholder = $placeholder;

	R::store($field);
	header("Location: /admin/calculate");
?>
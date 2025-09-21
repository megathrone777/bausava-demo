<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$label = $_POST["label"];
	$min = is_numeric($_POST["min"]) ? $_POST["min"] : null;
	$placeholder = empty($_POST["placeholder"]) ? null : $_POST["placeholder"];
	$options = empty($_POST["options"]) ? null : $_POST["options"];

	$field = R::load("request_fields", $id);
	$field->label = $label;

	if ($placeholder) {
		$field->placeholder = $placeholder;
	}

	if ($options) {
		$field->options = json_encode(explode(",", $options));
	}

	if (!is_null($min)) {
		$field->min = $min;
	}

	R::store($field);
	header("Location: /admin/request");
?>
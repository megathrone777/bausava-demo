<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$name = $_POST["name"];
	$factor = $_POST["factor"];

	$condition = R::dispense("conditions");
	$condition->name = $name;
	$condition->factor = $factor;

	R::store($condition);
	header("Location: /admin/calculator");
?>
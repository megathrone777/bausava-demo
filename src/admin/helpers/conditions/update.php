<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$factor = $_POST["factor"];

	$condition = R::load("conditions", $id);
	$condition->factor = $factor;

	R::store($condition);
	header("Location: /admin/calculator");
?>
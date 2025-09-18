<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$factor = $_POST["factor"];

	$standard = R::load("standards", $id);
	$standard->factor = $factor;

	R::store($standard);
	header("Location: /admin/calculator");
?>
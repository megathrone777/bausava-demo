<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$name = $_POST["name"];
	$factor = $_POST["factor"];

	$standard = R::dispense("standards");
	$standard->name = $name;
	$standard->factor = $factor;

	R::store($standard);
	header("Location: /admin/calculator");
?>
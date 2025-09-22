<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$name = $_POST["name"];
	$factor = $_POST["factor"];

	$location = R::dispense("locations");
	$location->name = $name;
	$location->factor = $factor;

	R::store($location);
	header("Location: /admin/calculator");
?>
<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$factor = $_POST["factor"];

	$location = R::load("locations", $id);
	$location->factor = $factor;

	R::store($location);
	header("Location: /admin/calculator");
?>
<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$badges = $_POST["badges"];
	$description = $_POST["description"];
	$features = $_POST["features"];
	$price = $_POST["price"];
	$title = $_POST["title"];
	$type = $_POST["type"];

	$newBadges = [];
	foreach($badges as $key => $badge) {
		$newBadges[] = $badge;
	}

	$newFeatures = [];
	foreach($features as $key => $feature) {
		$newFeatures[] = $feature;
	}

	$house = R::load("houses", $id);
	$house->description = $description;
	$house->title = $title;
	$house->price = $price;
	$house->type = $type;
	$house->badges = json_encode($newBadges, false);
	$house->features = json_encode($newFeatures, false);

	R::store($house);
	header("Location: /admin/houses");
?>
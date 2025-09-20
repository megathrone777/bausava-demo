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

	$offer = R::load("offers", $id);
	$offer->description = $description;
	$offer->title = $title;
	$offer->price = $price;
	$offer->type = $type;
	$offer->badges = json_encode($newBadges, false);
	$offer->features = json_encode($newFeatures, false);

	R::store($offer);
	header("Location: /admin/offers");
?>
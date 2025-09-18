<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$badges = $_POST["badges"];
	$price = $_POST["price"];
	$title = $_POST["title"];
	$type = $_POST["type"];

	$newBadges = [];
	foreach($badges as $key => $badge) {
		$newBadges[] = $badge;
	}

	$offer = R::load("offers", $id);
	$offer->title = $title;
	$offer->price = $price;
	$offer->type = $type;
	$offer->badges = json_encode($newBadges, false);

	R::store($offer);
	header("Location: /admin/offers");
?>
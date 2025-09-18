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

	$house = R::load("houses", $id);
	$house->title = $title;
	$house->price = $price;
	$house->type = $type;
	$house->badges = json_encode($newBadges, false);

	R::store($house);
	header("Location: /admin/offers");
?>
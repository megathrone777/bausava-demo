<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$name = $_POST["name"];
	$title = $_POST["title"];
	$text = $_POST["text"];
	$icon = $_POST["icon"];
	$features = $_POST["features"];
	$button = $_POST["button"];

	$newFeatures = [];
	foreach($features as $feature) {
		$newFeatures[] = array(
			"text" => $feature['text'],
			"title" => $feature['title']
		);
	}

	$service = R::load("services", $id);
	$service->title = $title;
	$service->name = $name;
	$service->icon = $icon;
	$service->text = $text;
	$service->features = json_encode($newFeatures, FALSE);
	$service->button = $button;

	R::store($service);
	header("Location: /admin/services");
?>
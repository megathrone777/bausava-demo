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

	$project = R::load("projects", $id);
	$project->description = $description;
	$project->title = $title;
	$project->price = $price;
	$project->type = $type;
	$project->badges = json_encode($newBadges, false);
	$project->features = json_encode($newFeatures, false);

	R::store($project);
	header("Location: /admin/projects");
?>
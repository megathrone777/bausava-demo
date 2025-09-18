<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$category = $_POST["category"];
	$projects = R::findAll("projects", "WHERE category = " . $category . " ORDER BY id DESC LIMIT 8");
	$projectsTotal = R::count("projects", "WHERE category = " . $category);

	$items = [];

	foreach ($projects as $project) {
		$items[] = array(
			"badges" => json_decode($project->badges),
			"image" => json_decode($project->images)[0] ?? "",
			"id" => $project->id,
			"price" => $project->price,
			"slug" => $project->slug,
			"title" => $project->title,
			"type" => $project->type,
		);
	};

	echo json_encode(
		array(
			"count" => count($items),
			"items" => $items,
			"total" => $projectsTotal
		)
	);
?>
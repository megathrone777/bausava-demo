<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$category = $_POST["category"];
	$limit = $_POST["limit"];
	$offset = $_POST["offset"];
	$projects = R::findAll("projects", "WHERE category = " . $category . " ORDER BY id DESC LIMIT " . $limit . " OFFSET " . $offset);

	$items = [];

	foreach ($projects as $project) {
		$items[] = array(
			"badges" => json_decode($project->badges),
			"id" => $project->id,
			"image" => json_decode($project->images)[0] ?? "",
			"price" => $project->price,
			"slug" => $project->slug,
			"title" => $project->title,
			"type" => $project->type,
		);
	};

	echo json_encode(
		array(
			"count" => count($items),
			"items" => array_reverse($items)
		)
	);
?>
<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$limit = $_POST["limit"];
	$offset = $_POST["offset"];
	$houses = R::findAll("houses", "ORDER BY id DESC LIMIT " . $limit . " OFFSET " . $offset);

	$items = [];

	foreach ($houses as $house) {
		$items[] = array(
			"badges" => json_decode($house->badges),
			"image" => json_decode($house->images)[0] ?? "",
			"id" => $house->id,
			"price" => $house->price,
			"slug" => $house->slug,
			"title" => $house->title,
			"type" => $house->type,
		);
	};

	echo json_encode(
		array(
			"count" => count($items),
			"items" => array_reverse($items)
		)
	);
?>
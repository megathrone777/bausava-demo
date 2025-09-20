<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$limit = $_POST["limit"];
	$offset = $_POST["offset"];
	$offers = R::findAll("offers", "ORDER BY id DESC LIMIT " . $limit . " OFFSET " . $offset);

	$items = [];

	foreach ($offers as $offer) {
		$items[] = array(
			"badges" => json_decode($offer->badges),
			"image" => json_decode($offer->images)[0] ?? "",
			"id" => $offer->id,
			"price" => $offer->price,
			"slug" => $offer->slug,
			"title" => $offer->title,
			"type" => $offer->type,
		);
	};

	echo json_encode(
		array(
			"count" => count($items),
			"items" => $items
		)
	);
?>
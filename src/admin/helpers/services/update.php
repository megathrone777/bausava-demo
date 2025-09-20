<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$name = $_POST["name"];
	$title = $_POST["title"];
	$text = $_POST["text"];
	$icon = $_POST["icon"];
	$features = $_POST["features"];
	$faqs = $_POST["faqs"];
	$button = $_POST["button"];
	$help = $_POST["help"];

	$newFeatures = [];
	foreach($features as $feature) {
		$newFeatures[] = array(
			"text" => $feature["text"],
			"title" => $feature["title"]
		);
	}

	$newFaqs = [];
	foreach($faqs as $faq) {
		$newFaqs[] = array(
			"answer" => $faq["answer"],
			"question" => $faq["question"]
		);
	}

	$newHelp;
	if ($help) {
		var_dump(array(
				"content" => $help["content"],
				"text" => $help["text"],
				"title" => $help["title"],
		));
		$newHelp = json_encode(
			array(
				"content" => $help["content"],
				"text" => $help["text"],
				"title" => $help["title"],
			),
			FALSE
		);
	}

	$service = R::load("services", $id);
	$service->title = $title;
	$service->name = $name;
	$service->icon = $icon;
	$service->text = $text;
	$service->features = json_encode($newFeatures, FALSE);
	$service->faqs = json_encode($newFaqs, FALSE);
	$service->button = $button;
	$service->help = $newHelp;

	R::store($service);
	header("Location: /admin/services");
?>
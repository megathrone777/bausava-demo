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
	$packages = $_POST["packages"];
	$packagesTitle = $_POST["packagesTitle"];

	$newFeatures = [];
	foreach($features as $feature) {
		$newFeatures[] = array(
			"text" => $feature["text"],
			"title" => $feature["title"]
		);
	}

	$newFaqs = [];
	foreach($faqs as $faq) {
		if (strlen($faq["answer"]) > 0 && strlen($faq["question"]) > 0) {
			$newFaqs[] = array(
				"answer" => $faq["answer"],
				"question" => $faq["question"]
			);
		}
	}

	$newPackages = [];
	if (isset($packages)) {
		foreach($packages as $package) {
			$newPackages[] = array(
				"badge" => $package["badge"],
				"featured" => $package["featured"],
				"label" => $package["label"],
				"value" => $package["value"],
				"text" => $package["text"]
			);
		}
	}

	$newHelp;
	if (isset($help)) {
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
	$service->packages = json_encode($newPackages, FALSE);
	$service->packages_title = $packagesTitle;

	R::store($service);
	header("Location: /admin/services");
?>
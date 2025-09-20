<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$button = $_POST["button"];
	$icon = $_POST["icon"];
	$name = $_POST["name"];
	$text = $_POST["text"];
	$title = $_POST["title"];
	$faqs = !empty($_POST["faqs"]) ? $_POST["faqs"] : null;
	$features = !empty($_POST["features"]) ? $_POST["features"] : null;
	$help = !empty($_POST["help"]) ? $_POST["help"] : null;
	$packages = !empty($_POST["packages"]) ? $_POST["packages"] : null;
	$packagesTitle = !empty($_POST["packagesTitle"]) ? $_POST["packagesTitle"] : null;

	$newFeatures = [];
	if ($features) {
		foreach($features as $feature) {
			$newFeatures[] = array(
				"text" => $feature["text"],
				"title" => $feature["title"]
			);
		}
	}

	$newFaqs = [];
	if ($faqs) {
		foreach($faqs as $faq) {
			if (strlen($faq["answer"]) > 0 && strlen($faq["question"]) > 0) {
				$newFaqs[] = array(
					"answer" => $faq["answer"],
					"question" => $faq["question"]
				);
			}
		}
	}

	$newPackages = [];
	if ($packages) {
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
	if ($help) {
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
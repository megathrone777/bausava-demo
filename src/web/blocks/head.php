<?php
	require_once "helpers/getString.php";

	$page = R::findOne("menu", "url = ?", ["/" . explode("/", $pathname)[1]]);
	$logo = R::findOne("settings", "id = 1");
	
	if ($pathname === "/offers") {
		$title = getString("offersTitle");
		$description = "";
		$keywords = "";
	} elseif (preg_match("#^/offers/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		$offer = R::findOne("offers", "slug = ?", [$slug]);
		$title = $offer->title;
		$description = "";
		$keywords = "";
	}	elseif (preg_match("#^/offer/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		$offer = R::findOne("offers", "slug = ?", [$slug]);
		$title = $offer->title;
		$description = "";
		$keywords = "";
	} elseif (preg_match("#^/services/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		$service = R::findOne("services", "slug = ?", [$slug]);
		$title = $service->title;
		$description = $service->title;
		$keywords = "";
	} elseif (preg_match("#^/projects/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		$category = R::findOne("projects_categories", "slug = ?", [$slug]);
		$title = $category->title;
		$description = "";
		$keywords = "";
	} elseif (preg_match("#^/project/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		$project = R::findOne("projects", "slug = ?", [$slug]);
		$title = $project->title;
		$description = "";
		$keywords = "";
	} elseif (preg_match("#^/house/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		$house = R::findOne("houses", "slug = ?", [$slug]);
		$title = $house->title;
		$description = "";
		$keywords = "";
	}	elseif (preg_match("#^/products/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		$service = R::findOne("services", "slug = ?", [$slug]);
		$title = $service->title;
		$description = $service->title;
		$keywords = "";
	} else {
		if (isset($page)) {
			$title = $page->titleMeta ?? $page->title;
			$description = $page->description ?? "";
			$keywords = $page->keywords ?? "";
		} else {
			$title = "Page not found";
			$description = "404 - Page not found";
			$keywords = "";
		}
	}

	$serverUrl = isset($_SERVER["HTTPS"]) ? "https://" : "http://" . $_SERVER["SERVER_NAME"] . ($pathname !== "/" ? $pathname : "");
?>

<head>
	<meta charset="utf-8">
	<meta content="initial-scale=1.0, width=device-width" name="viewport">
	<meta content="<?= $serverUrl; ?>" property="og:url">
	<meta content="Výstavba rodínnych domu na klíč,rekonstrukce bytu a komerčních prostor v Praze a po celé Česke Republice" property="og:title">
	<meta content="Výstavba a rekonstrukce prostor v České republice" property="og:description">
	<meta content="website" property="og:type">
	<meta content="<?= $logo->image; ?>" property="og:image">
	<meta content="telephone=no" name="format-detection">

	<?php if (strlen($description) > 0): ?>
		<meta content="<?= $description; ?>" name="description">
	<?php endif; ?>

	<?php if (strlen($keywords) > 0): ?>
		<meta content="<?= $keywords; ?>" name="keywords">
	<?php endif; ?>
	
	<title><?= $title; ?> | BAUSAVA</title>
	<style>
		@font-face {
			font-display: block;
			font-family: "Avenir";
			font-weight: 400;
			src: url("/src/web/assets/fonts/AvenirNext-Regular.woff");
		}

		@font-face {
			font-display: block;
			font-family: "Avenir";
			font-weight: 500;
			src: url("/src/web/assets/fonts/AvenirNext-Medium.woff");
		}

		@font-face {
			font-display: block;
			font-family: "Avenir";
			font-weight: 600;
			src: url("/src/web/assets/fonts/AvenirNext-SemiBold.woff");
		}

		@font-face {
			font-display: block;
			font-family: "Avenir";
			font-weight: 700;
			src: url("/src/web/assets/fonts/AvenirNext-Bold.woff");
		}

		@font-face {
			font-display: block;
			font-family: "Avenir";
			font-weight: 900;
			src: url("/src/web/assets/fonts/AvenirNext-Heavy.woff");
		}
	</style>

	<link href="/src/web/assets/favicon.ico" rel="shortcut icon" type="image/x-icon">
	<link href="/src/web/assets/favicon.png" rel="apple-touch-icon">
	<link href="/src/web/assets/favicon.png" rel="apple-touch-icon" sizes="76x76">
	<link href="/src/web/assets/favicon.png" rel="apple-touch-icon" sizes="152x152">
	<link href="/src/web/assets/favicon.png" rel="apple-touch-startup-image">
	<link href="/build/web/css/init.css" rel="stylesheet">
	<script src="/build/web/js/init.js" type="module"></script>
</head>
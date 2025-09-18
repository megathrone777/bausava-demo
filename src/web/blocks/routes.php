<?php
	if (preg_match("#^/house/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		include_once "pages/house/index.php";
	} elseif (preg_match("#^/offer/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		include_once "pages/offer/index.php";
	} elseif (preg_match("#^/services/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		include_once "pages/service/index.php";
	} elseif (preg_match("#^/projects/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		include_once "pages/projects/index.php";
	} elseif (preg_match("#^/project/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		include_once "pages/project/index.php";
	} elseif (preg_match("#^/products/([^/]+)$#", $pathname, $matches)) {
		$slug = $matches[1];
		include_once "pages/product/index.php";
	} else {
		switch ($pathname) {
			case "/":
				include_once "pages/home/index.php";
				break;
			case "/terms":
				include_once "pages/terms.php";
				break;
			case "/offers":
				include_once "pages/offers/index.php";
				break;
			default:
				include_once "pages/404.php";
				break;
		}
	}
?>
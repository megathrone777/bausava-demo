<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$title = $_POST["title"];
	$titleMeta = $_POST["titleMeta"];

	$menuItem = R::load("menu", $id);
	$menuItem->title = $title;
	$menuItem->titleMeta = $titleMeta;

	R::store($menuItem);
	header("Location: /admin/menu");
?>
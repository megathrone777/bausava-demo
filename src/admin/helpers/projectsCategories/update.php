<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];
	$title = $_POST["title"];

	$category = R::load("projects_categories", $id);
	$category->title = $title;

	R::store($category);
	header("Location: /admin/projects");
?>
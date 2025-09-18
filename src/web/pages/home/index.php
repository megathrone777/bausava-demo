<?php
	$sections = R::findAll("sections", "ORDER BY position ASC");

	include_once "hero.php";

	foreach ($sections as $section) {
		if ($section->name == "services") {
			include_once "services/index.php";
			continue;
		}

		if ($section->name == "projects") {
			include_once "projects/index.php";
			continue;
		}

		if ($section->name == "offers") {
  		include_once "offers/index.php";
			continue;
		}

		include_once $section->name . ".php";
	}

  include_once "blocks/contacts.php";
?>
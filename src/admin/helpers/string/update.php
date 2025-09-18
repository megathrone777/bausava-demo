<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$backUrl = $_POST["back"];
	$name = $_POST["name"];
	$value = $_POST["value"];
	$string = R::findOne("strings", "name = ?", [$name]);

	if ($string) {
		$newString = R::load("strings", $string->id);
		$newString->value = $value;

		R::store($newString);
		header("Location: " . $backUrl);
	}
?>
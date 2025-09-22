<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];

	if (isset($id)) {
		R::trash("offers", $id);
		header("Location: /admin/offers");
	}
?>
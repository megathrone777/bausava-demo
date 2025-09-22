<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$id = $_POST["id"];

	if (isset($id)) {
		R::trash("houses", $id);
		header("Location: /admin/houses");
	}
?>
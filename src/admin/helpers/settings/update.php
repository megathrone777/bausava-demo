<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$newPassword = empty($_POST["password"]) ? null : $_POST["password"];
	$user = R::load("users", "1");

	if ($newPassword) {
		$user->password = password_hash($newPassword, PASSWORD_DEFAULT);
		R::store($user);
	}

	header("Location: /admin/settings");
?>
<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$uploadURL = "/uploads/settings/";
	$newEmail = $_POST["email"];
	$newPassword = $_POST["password"];
	$email = R::load("settings", "2");
	$user = R::load("users", "1");

	if (isset($newPassword) && strlen($newPassword) > 0) {
		$user->password = password_hash($newPassword, PASSWORD_DEFAULT);
		R::store($user);
	}

	$email->email = $newEmail;

	R::store($email);
	header("Location: /admin/settings");
?>
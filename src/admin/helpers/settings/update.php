<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$email = empty($_POST["email"]) ? null : $_POST["email"];
	$password = empty($_POST["password"]) ? null : $_POST["password"];

	if ($email) {
		$settings = R::load("settings", "1");
		$settings->email = $email;
		R::store($settings);
	}

	if ($password) {
		$user = R::load("users", "1");
		$user->password = password_hash($password, PASSWORD_DEFAULT);
		R::store($user);
	}

	header("Location: /admin/settings");
?>
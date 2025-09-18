<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	$name = "";
	$message = "";
	
	$name = $_POST["name"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	$type = $_POST["type"];
	$message = $_POST["message"];
	
	$to = R::findOne("settings", "id = 2")->email;
	$subject = "Сообщение контактной формы";
	$body = "Имя: " . $name .
		"\r\n" . "Телефон: " . $phone .
		"\r\n" . "Email: " . $email .
		"\r\n" . "Тип объекта: " . $type .
		"\r\n" . "Сообщение: " . $message;

	$headers = array(
    "From" => "info@info.cz",
    "Reply-To" => "info@info.cz",
    "X-Mailer" => "PHP/" . phpversion()
	);
		
	if (isset($phone) && isset($email) && isset($type)) {
		$response = mail($to, $subject, $body, $headers);

		if ($response) {
			echo "success";
		} else {
			echo "error";
		}
	}
?>
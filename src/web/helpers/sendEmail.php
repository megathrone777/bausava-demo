<?php
	$root = $_SERVER["DOCUMENT_ROOT"];

	require_once $root . "/lib/PHPMailer.php";
	require_once $root . "/lib/SMTP.php";
	require_once $root . "/lib/Exception.php";
	require_once $root . "/config.php";

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	$email = R::findOne("contacts", "id = 2")->title;
	$logoUrl = R::findOne("settings", "id = 1")->image;
	$emailHtml = "";

	$fields = array(
		"emailOrPhone" => $_POST["emailOrPhone"],
		"title" => $_POST["title"],
	);

	if ($_POST["template"] == "contacts") {
		require_once $root . "/src/web/blocks/emailTemplates/contacts.php";

		$fields["name"] = $_POST["name"];
		$fields["message"] = $_POST["message"];
		$emailHtml = renderTemplate($fields);
	} else {
		require_once $root . "/src/web/blocks/emailTemplates/evaluation.php";

		$fields["type"] = $_POST["type"];
		$fields["location"] = $_POST["location"];
		$fields["square"] = $_POST["square"];
		$emailHtml = renderTemplate($fields);
	}

	$mail = new PHPMailer(true);

	try {
		$mail->isSMTP();
		$mail->Host = $_ENV["MAIL_HOST"];
		$mail->Port = $_ENV["MAIL_PORT"];
		$mail->SMTPAuth = false;
		$mail->SMTPSecure = false;

		$mail->CharSet = "UTF-8";
		$mail->Encoding = "base64";

		$mail->addEmbeddedImage($root . $logoUrl, "logo_cid", "logo.png", "base64", "image/png");
		$mail->setFrom($email, "BAUSAVA");
		$mail->addAddress($email, "BAUSAVA");

		$mail->isHTML(true);
		$mail->Subject = $fields["title"];
		$mail->Body = $emailHtml;
		// $mail->AltBody = "";

		$mail->send();
		echo json_encode(array("success" => true));
	} catch (Exception $error) {
		echo json_encode(array(
			"error" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}",
			"success" => false)
		);
	}
?>
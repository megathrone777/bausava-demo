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
	$fields = array("title" => $_POST["title"]);

	$mail = new PHPMailer(true);

	if ($_POST["template"] == "contacts") {
		require_once $root . "/src/web/blocks/emailTemplates/contacts.php";

		$fields["emailOrPhone"] = $_POST["emailOrPhone"];
		$fields["name"] = $_POST["name"];
		$fields["message"] = $_POST["message"];
		$emailHtml = renderTemplate($fields);
	} elseif ($_POST["template"] == "request") {
		require_once $root . "/src/web/blocks/emailTemplates/request.php";

		if (!empty($_FILES['files']) && is_array($_FILES['files']['name'])) {
			$names = $_FILES['files']['name'];
			$tmps  = $_FILES['files']['tmp_name'];
			$errs  = $_FILES['files']['error'];
			$sizes = $_FILES['files']['size'];

			$maxSize = 10 * 1024 * 1024;
			$allowed = null;

			for ($i = 0, $n = count($names); $i < $n; $i++) {
				if ($errs[$i] === UPLOAD_ERR_NO_FILE) continue;
				if ($errs[$i] !== UPLOAD_ERR_OK) continue;
				if ($sizes[$i] <= 0) continue;

				$tmp  = $tmps[$i];
				$name = $names[$i];

				if ($allowed) {
					$type = mime_content_type($tmp) ?: "application/octet-stream";
					if (!in_array($type, $allowed, true)) continue;
				}

				if ($sizes[$i] > $maxSize) continue;

				$mail->addAttachment($tmp, $name);
			}
		}

		$emailHtml = renderTemplate($_POST);
	} else {
		require_once $root . "/src/web/blocks/emailTemplates/evaluation.php";

		$fields["emailOrPhone"] = $_POST["emailOrPhone"];
		$fields["type"] = $_POST["type"];
		$fields["location"] = $_POST["location"];
		$fields["square"] = $_POST["square"];
		$emailHtml = renderTemplate($fields);
	}

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
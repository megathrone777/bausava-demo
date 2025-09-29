<?php
	$root = $_SERVER["DOCUMENT_ROOT"];

	require_once $root . "/lib/PHPMailer.php";
	require_once $root . "/lib/SMTP.php";
	require_once $root . "/lib/Exception.php";
	require_once $root . "/config.php";

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

	$setting = R::findOne("settings", "id = 1");
	$logo = $setting->image;
	$email = $_ENV["MAIL_TO"] ? $_ENV["MAIL_TO"] : $setting->email;
	$emailHtml = "";
	$fields = array("title" => $_POST["title"]);

	$mailer = new PHPMailer(true);

	if ($_POST["template"] == "contacts") {
		require_once $root . "/src/web/blocks/emailTemplates/contacts.php";

		$fields["emailOrPhone"] = $_POST["emailOrPhone"];
		$fields["name"] = $_POST["name"];
		$fields["message"] = $_POST["message"];
		$emailHtml = renderTemplate($fields);
	} elseif ($_POST["template"] == "request") {
		require_once $root . "/src/web/blocks/emailTemplates/request.php";

		if (!empty($_FILES["files"]) && is_array($_FILES["files"]["name"])) {
			$names = $_FILES["files"]["name"];
			$tmps = $_FILES["files"]["tmp_name"];
			$errs = $_FILES["files"]["error"];
			$sizes = $_FILES["files"]["size"];

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

				$mailer->addAttachment($tmp, $name);
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
		$mailer->isSMTP();
		$mailer->Host = "smtp.websupport.cz";
		$mailer->Port = 465;
		$mailer->SMTPAuth = true;
		$mailer->Username = "info@bausava.eu";
    $mailer->Password = "zqUbQsa(N7/~S`51`h*8";
		$mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

		$mailer->CharSet = "UTF-8";
		$mailer->Encoding = "base64";

		$mailer->addEmbeddedImage($root . $logo, "logo_cid", "logo.png", "base64", "image/png");
		$mailer->setFrom("info@bausava.eu", "BAUSAVA");
		$mailer->addAddress($email, "BAUSAVA");

		$mailer->isHTML(true);
		$mailer->Subject = $fields["title"];
		$mailer->Body = $emailHtml;
		// $mail->AltBody = "";

		$mailer->send();
		echo json_encode(array("success" => true));
	} catch (Exception $error) {
		echo json_encode(array(
			"error" => "Message could not be sent. Mailer Error: {$mailer->ErrorInfo}",
			"success" => false)
		);
	}
?>
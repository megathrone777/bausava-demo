<?php
	function renderTemplate($fields) {
		ob_start();
?>
		<!doctype html>
		<html lang="cs">
			<head>
				<meta charset="utf-8">

				<title>
					<?= htmlspecialchars($fields["title"]); ?>
				</title>

				<style>
					body {
						background-color: white;
						font-family: "Verdana", sans-serif;
						padding: 20px;
					}

					.wrapper {
						background-image: linear-gradient(#ffffff, #e8dccf);
						border-radius: 16px;
						border: 1px solid #8b6b4a;
						margin-inline: auto;
						max-width: 600px;
						padding: 20px;
					}
					
					h1 {
						color: #2b2118;
						font-size: 36px;
						font-weight: bold;
						text-align: center;
					}

					p {
						text-align: center;
					}

					img {
						display: inline-block;
						height: 100%;
					}
				</style>
			</head>

			<body>
				<div class="wrapper">
					<p style="height: 40px;">
						<a
							href="https://bausava.eu"
							target="_blank"
						>
							<img 
								alt="Bausava logo."
								src="cid:logo_cid"
							>
						</a>
					</p>

					<h1><?= $fields["title"]; ?></h1>

					<p>
						<strong>Jméno a příjmení: </strong>
						<span><?= $fields["name"]; ?></span>
					</p>

					<p>
						<strong>E-mail / Telefon: </strong>
						<span><?= $fields["emailOrPhone"]; ?></span>
					</p>

					<?php if (isset($fields["message"])): ?>
						<p>
							<strong>Krátký popis nemovitosti / projektu: </strong>
						</p>

						<p><?= $fields["message"]; ?></p>
					<?php endif; ?>
				</div>
			</body>
		</html>
		
		<?php
			return ob_get_clean();
	}

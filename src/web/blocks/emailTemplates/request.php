<?php
	function renderTemplate($fields) {
		ob_start();

		$labels = array(
			"ground" => "Pozemek",
			"project" => "Projekt",
			"permission" => "Povolení",
			"range" => "Rozsah",
			"design" => "Konstrukční systém",
			"budget" => "Rozpočet (Kč)",
			"energy" => "Energetický standard",
			"square" => "Užitná plocha (m&sup2;)",
			"rooms" => "Počet pokojů",
			"location" => "Lokalita / parcela",
			"model" => "Katalogový dům",
			"date" => "Preferovaný termín",
			"name" => "Jméno a příjmení",
			"phone" => "Telefon",
			"email" => "E-mail",
			"message" => "Poznámka"
		);
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

					<?php foreach($fields as $key => $field): ?>
						<?php
							if ($key == "title" || $key == "template") {
								continue;
							}
						?>
							<p>
								<strong><?= $labels[$key]; ?>: </strong>
								<span><?= $field; ?></span>
							</p>
					<?php endforeach; ?>
				</div>
			</body>
		</html>
		
		<?php
			return ob_get_clean();
	}

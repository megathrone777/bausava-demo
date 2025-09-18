<?php
	$packages = array(
		array(
			"description" => "Chytré minimum pro rychlé zlepšení: nové povrchy, sanita, svítidla, lokální opravy.",
			"label" => "EKONOM",
			"text" => "Podle rozsahu a stavu; přesnou kalkulaci připravíme po obhlídce.",
			"value" => "od 9 000 Kč/m<sup>2</sup>",
		),
		array(
			"description" => "Kompletní modernizace: nové rozvody (elektro/voda/odpady), koupelna, kuchyň, podlahy, dveře, malby.",
			"label" => "STANDARD",
			"text" => "Včetně koordinace profesí a dozoru.",
			"value" => "od 15 000 Kč/m<sup>2</sup>",
		),
		array(
			"description" => "Nadstandardní materiály, truhlář na míru, akustika, světelný design, vizualizace.",
			"label" => "PREMIUM",
			"text" => "Finální cena dle návrhu a standardu materiálů.",
			"value" => "od 22 000 Kč/m<sup>2</sup>",
		)
	);
?>

<div class="mb-4">
	<h2
		class="
			font-bold
			mb-5
			text-xl
		"
	>
		Balíčky a orientační ceny
	</h2>

	<div
		class="
			grid
			gap-6
			mb-2
			md:grid-cols-3
		"
	>
		<?php foreach ($packages as $index => $package): ?>
			<div
				class="
					bg-white
					p-6
					rounded-2xl
					shadow-sm
					<?= $index == 1 ? "ring-2 ring-stone-900" : "ring-1 ring-stone-200"; ?>
				"
			>
				<h3
					class="
						font-semibold
						text-black
						uppercase
					"
				>
					<?= $package["label"]; ?>
				</h3>

				<p
					class="
						mt-2
						text-primary text-sm
					"
				>
					<?= $package["description"]; ?>
				</p>

				<div
					class="
						mt-4
						text-2xl
						font-extrabold
						text-black
					"
				>
					<?= $package["value"]; ?>
				</div>

				<p class="text-xs text-primary">
					<?= $package["text"]; ?>
				</p>
			</div>
		<?php endforeach; ?>
	</div>

	<p class="text-xs text-primary">
		Ceny jsou orientační bez DPH; přesná nabídka po prohlídce a technickém auditu.
	</p>
</div>
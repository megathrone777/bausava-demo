<?php
	$steps = array(
		(object) array(
			"text" => "Krátký hovor, ověření cílů (rychlý prodej, maximální cena, pronájem), základní data o bytě, termíny. Navrhneme termín prohlídky.",
			"title" => "Nezávazná konzultace (online/telefon)"
		),
		(object) array(
			"text" => "Zhodnotíme dispozici, stav instalací, akustiku, světlo, technická rizika, právní stav (kolaudace, prohlášení vlastníka, SVJ). Zjistíme, zda jsou nutné ohlášení/povolení.",
			"title" => "Prohlídka & technický audit"
		),
		(object) array(
			"text" => "Návrh dispozičních úprav, standardů, rychlých vizuálních zásahů a energetických zlepšení s nejlepší návratností. Vytvoříme moodboardy a vizualizace, aby bylo vše jasné.",
			"title" => "Koncept zhodnocení"
		),
		(object) array(
			"text" => "Přehledná položková kalkulace, odhad nárůstu tržní ceny, scénáře (basic/optimal/premium), časový plán a milníky s kontrolou kvality.",
			"title" => "Rozpočet, návratnost & harmonogram"
		),
		(object) array(
			"text" => "Uzavřeme Smlouvu o dílo, sjednáme práva z vad a SLA komunikace. Zajistíme projektovou dokumentaci, případná vyjádření a postup dle stavebního zákona.",
			"title" => "Smlouvy a povolení"
		),
		(object) array(
			"text" => "Koordinujeme profesní týmy, dohlížíme na kvalitu, BOZP a stavební deník. Průběžné reporty (foto/video), kontrolní dny a změnové listy.",
			"title" => "Realizace na klíč"
		),
		(object) array(
			"text" => "Profesionální homestaging, foto/video, půdorysy, 3D, textace inzerce, energetická třída v materiálech, cenová strategie, vyjednávání a právní servis.",
			"title" => "Homestaging & prodejní strategie"
		),
		(object) array(
			"text" => "Organizace prohlídek, rezervace, smlouvy, bezpečná úschova, předání. Finální report s porovnáním plánu vs. skutečnosti a doporučeními do budoucna.",
			"title" => "Prodej / pronájem & vyúčtování"
		)
	);
?>

<div class="box">
	<h3
		class="
			font-bold
			mb-5
			text-xl
		"
	>
		Jak postupujeme – <?= count($steps); ?> jasných kroků
	</h3>
	
	<ul
		class="
			gap-6
			grid
			md:grid-cols-2
		"
	>
		<?php foreach($steps as $index => $step): ?>
			<li class="flex gap-3">
				<span
					class="
						bg-amber-200
						flex
						flex-none
						font-bold
						h-8
						indent-px
						items-center
						justify-center
						leading-[33px]
						rounded-full
						w-8
					"
				>
					<?= $index + 1; ?>
				</span>
				
				<div>
					<p
						class="
							font-semibold
							leading-7
							min-h-8
						"
					>
						<?= $step->title; ?>
					</p>
				
					<p class="text-stone-700">
						<?= $step->text; ?>
					</p>
				</div>
			</li>
		<?php endforeach; ?>
	</ul>
</div>
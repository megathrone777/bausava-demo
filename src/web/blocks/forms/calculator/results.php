<?php require_once "theme/button.php"; ?>

<div class="box">
	<h3 class="font-bold text-xl">
		Výsledek odhadu
	</h3>

	<div
		class="
			gap-4
			grid grid-cols-2
			mt-4
			text-sm
		"
	>
		<div
			class="
				border border-secondary
				p-3
				rounded-xl
			"
		>
			<div class="opacity-80 text-xs">
				Základní cena za m<sup>2</sup>
			</div>

			<p
				class="font-semibold"
				data-js-text="formatCurrency(getLocationData().pricePerM2)"
			></p>
		</div>
			
		<div
			class="
				border border-secondary
				p-3
				rounded-xl
			"
		>
			<div class="opacity-80 text-xs">
				Faktor lokality
			</div>

			<p
				class="font-semibold"
				data-js-text="`x ${getLocationData().localityFactor.toFixed(2)}`"
			></p>
		</div>

		<div
			class="
				border border-secondary
				p-3
				rounded-xl
			"
		>
			<div class="opacity-80 text-xs">
				Faktor stavu
			</div>

			<p
				class="font-semibold"
				data-js-text="`x ${getConditionData().toFixed(2)}`"
			></p>
		</div>

		<div
			class="
				border border-secondary
				p-3
				rounded-xl
			"	
		>
			<div class="opacity-80 text-xs">
				Faktor standardu
			</div>

			<p
				class="font-semibold"
				data-js-text="`x ${getStandardData().toFixed(2)}`"
			></p>
		</div>
	</div>

	<div
		class="
			bg-secondary
			mt-6
			p-5
			rounded-2xl
		"
	>
		<p
			class="
				text-xs
				uppercase
				tracking-wide
				opacity-90
			"
		>
			Orientační tržní hodnota
		</p>

		<div
			class="
				text-3xl
				font-bold
				mt-1
				text-primary
			"
			data-js-text="formatCurrency(getTotalPrice())"
		></div>
	</div>

	<div
		class="
			my-4
			text-xs
			opacity-90
		"
	>
		Upozornění: Jde o orientační výsledek. Pro přesný odhad připravíme
		znalecký posudek / BOV a analýzu prodejných cen v okolí
	</div>

	<?=
		button(
			href: "#contacts",
			template: "primary",
			text: "Chci přesný odhad a plán zhodnocení"
		);
	?>
</div>
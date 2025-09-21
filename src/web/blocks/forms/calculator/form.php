<?php
	require_once "helpers/getString.php";
	require_once "theme/select.php";
	require_once "theme/input.php";

	$calculatorTitle = getString("calculatorTitle");
	$calculatorText = getString("calculatorText");

	$locationsOptions = array_map(function($location) {
		return $location->name;
	}, $locations);
?>

<div>
	<h2 class="box-title">
		<?= $calculatorTitle; ?>
	</h2>

	<p
		class="
			mt-3
			max-w-2xl
			opacity-90
		"
	>
		<?= $calculatorText; ?>
	</p>

	<form
		class="
			gap-4
			grid grid-cols-1
			mt-6
			sm:grid-cols-2
		"
	>
		<div class="col-span-1 sm:col-span-2">
			<p
				class="
					cursor-pointer
					font-semibold
					inline-block
					text-xs
				"
			>
				Typ
			</p>

			<div
				class="
					flex
					gap-2
					mt-1
				"
			>
				<button
					class="
						bg-primary
						border border-primary
						cursor-pointer
						inline-flex
						items-center
						h-9.5
						leading-none
						px-3
						rounded-xl
						text-[14px] text-white
					"
					data-js-class="{
						'bg-primary border-primary text-white': type === 'flat',
						'border-secondary hover:bg-secondary': type !== 'flat'
					}"
					data-js-click="handleTypeClick"
					type="button"
					value="flat"
				>
					Byt
				</button>

				<button
					class="
						border border-secondary
						cursor-pointer
						inline-flex
						items-center
						h-9.5
						leading-none
						px-3
						rounded-xl
						text-sm
					"
					data-js-class="{
						'bg-primary border-primary text-white': type === 'house',
						'border-secondary hover:bg-secondary': type !== 'house'
					}"
					data-js-click="handleTypeClick"
					type="button"
					value="house"
				>
					Dům
				</button>
			</div>
		</div>

		<?=
			input(
				id: "area-input",
				label: "Plocha (m&sup2;)",
				min: "0",
				model: "area",
				name: "area",
				placeholder: "Plocha (m&sup2;)",
				type: "number"
			);
		?>

		<?=
			select(
				id: "location-select",
				label: "Lokalita",
				model: "location",
				options: $locationsOptions,
				name: "location",
			);
		?>

		<?=
			select(
				id: "condition-select",
				label: "Stav",
				model: "condition",
				options: array(
					"Novostavba",
					"Po rekonstrukci",
					"Standard",
					"K rekonstrukci"
				),
				name: "condition",
			);
		?>

		<?=
			select(
				id: "standard-select",
				label: "Standard vybavení",
				model: "standard",
				options: array(
					"Standard",
					"Nadstandard",
					"Premium"
				),
				name: "standard",
			);
		?>
	</form>
</div>
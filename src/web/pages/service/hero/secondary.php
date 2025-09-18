<?php
	$badges = array(
		"Smlouva o dílo • předávací protokol",
		"Pojištění odpovědnosti",
		"Záruka až 60 měsíců"
	);
	
	$options = array(
		array(
			"label" => "Rozsah",
			"value" => "hrubá stavba / na klíč",
			"text" => "včetně interiéru na přání"
		),
		array(
			"label" => "Energetika",
			"value" => "nízkoenergetické A–B",
			"text" => "možnost A0 (NZÚ), rekuperace, FVE"
		),
		array(
			"label" => "Harmonogram",
			"value" => "milníky & kontrolní dny",
			"text" => "pravidelné reporty, fotodokumentace"
		)
	);
?>

<div class="box mb-6">
	<div class="flex gap-x-4">
		<div class="text-4xl">
			<?= $service->icon; ?>
		</div>
		
		<div class="grow">
			<h1 class="box-title mb-3">
				<?= $service->title; ?>
			</h1>

			<p class="font-medium mb-4">
				<?= $service->text; ?>
			</p>

			<div
				class="
					flex flex-wrap
					gap-2
					mb-6
				"
			>
				<?php foreach ($badges as $badge): ?>
					<span
						class="
							bg-amber-100
							inline-flex
							items-center
							leading-4
							px-3
							py-1
							ring-1 ring-amber-200
							rounded-full
							text-black
							text-xs
						"
					>
						<?= $badge; ?>
					</span>
				<?php endforeach; ?>
			</div>
		</div>
	</div>

	<div
		class="
			gap-4
			grid
			sm:grid-cols-3
		"
	>
		<?php foreach ($options as $option): ?>
			<div
				class="
					bg-amber-50/50
					ring-1 ring-stone-200
					p-4
					rounded-2xl
				"
			>
				<p class="text-sm text-black">
					<?= $option["label"]; ?>
				</p>

				<p class="font-bold text-xl">
					<?= $option["value"]; ?>
				</p>

				<p class="text-xs text-black mt-1">
					<?= $option["text"]; ?>
				</p>
			</div>
		<?php endforeach; ?>
	</div>
</div>
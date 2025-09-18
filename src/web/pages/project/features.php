<?php
	require_once "theme/icon.php";

	$features = array(
		array(
			"icon" => "building",
			"label" => "Typ objektu:",
			"value" => "Byt"
		),
		array(
			"icon" => "floor",
			"label" => "Podlaží:",
			"value" => "5. Podlaží"
		),
		array(
			"icon" => "bed",
			"label" => "Řešení",
			"value" => "3+kk"
		),
		array(
			"icon" => "size",
			"label" => "Velikost:",
			"value" => "71 m<sup>2</sup>",
		),
		array(
			"icon" => "location",
			"label" => "Localita:",
			"value" => "Praha 3"
		),
		array(
			"icon" => "money",
			"label" => "Cena:",
			"value" => "8 999 900 Kč"
		)
	);
?>

<div
	class="
		box
		flex flex-wrap
		gap-y-5
		justify-between
	"
>
	<?php foreach($features as $feature): ?>
		<div
			class="
				text-center
				w-1/3
				sm:w-auto
			"
		>
			<span
				class="
					h-10
					inline-flex
					items-center
					max-h-10
					mb-2
					text-primary
				"
			>
				<?php icon($feature["icon"]); ?>
			</span>

			<p><?= $feature["label"]; ?></p>

			<p class="font-bold">
				<?= $feature["value"]; ?>
			</p>
		</div>
	<?php endforeach; ?>
</div>
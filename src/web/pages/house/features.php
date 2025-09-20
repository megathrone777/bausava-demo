<?php
	require_once "theme/icon.php";

	$houseFeatures = json_decode($house->features);
?>

<div
	class="
		box
		flex flex-wrap
		gap-y-5
		justify-between
	"
>
	<?php foreach($houseFeatures as $houseFeature): ?>
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
				<?php icon($houseFeature->icon); ?>
			</span>

			<p><?= $houseFeature->label; ?>:</p>

			<p class="font-bold">
				<?= $houseFeature->value; ?>
			</p>
		</div>
	<?php endforeach; ?>
</div>
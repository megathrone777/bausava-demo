<?php
	require_once "theme/icon.php";

	$offerFeatures = json_decode($offer->features);
?>

<div
	class="
		box
		flex flex-wrap
		gap-y-5
		justify-between
	"
>
	<?php foreach($offerFeatures as $offerFeature): ?>
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
				<?php icon($offerFeature->icon); ?>
			</span>

			<p><?= $offerFeature->label; ?>:</p>

			<p class="font-bold">
				<?= $offerFeature->value; ?>
			</p>
		</div>
	<?php endforeach; ?>
</div>
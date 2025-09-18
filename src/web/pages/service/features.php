<?php
	require_once "theme/icon.php";

	$features = json_decode($service->features, FALSE, 512, JSON_OBJECT_AS_ARRAY);
?>

<div
	class="
		gap-4
		grid grid-cols-1
		sm:grid-cols-2
		lg:grid-cols-3
	"
>
	<?php foreach($features as $feature): ?>
		<div
			class="
				box
				flex flex-col
				items-start
			"
		>
			<div>
				<i
					class="
						h-10
						inline-flex
						items-center
						mb-3
						text-primary
					"
				>
					<?php icon("check"); ?>
				</i>
			</div>

			<p
				class="
					font-semibold
					mb-2
				"
			>
				<?= $feature->title; ?>
			</p>

			<p><?= $feature->text; ?>
		</div>
	<?php endforeach; ?>
</div>
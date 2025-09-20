<?php
	require_once "theme/icon.php";

	$projectFeatures = json_decode($project->features);
?>

<div
	class="
		box
		flex flex-wrap
		gap-y-5
		justify-between
	"
>
	<?php foreach($projectFeatures as $projectFeature): ?>
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
				<?php icon($projectFeature->icon); ?>
			</span>

			<p><?= $projectFeature->label; ?>:</p>

			<p class="font-bold">
				<?= $projectFeature->value; ?>
			</p>
		</div>
	<?php endforeach; ?>
</div>
<?php require_once "theme/icon.php"; ?>

<div
	class="
		box
		flex
		justify-around
	"
>
	<?php	foreach(json_decode($offer->badges) as $badge): ?>
		<div class="basis-1/3 text-center">
			<i
				class="
					h-10
					inline-flex
					items-center
					mb-2
					text-primary
				"
			>
				<?php icon("check"); ?>
			</i>

			<p class="text-sm sm:text-base">
				<?= $badge; ?>
			</p>
		</div>
	<?php endforeach; ?>
</div>
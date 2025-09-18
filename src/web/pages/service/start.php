<?php
	require_once "theme/button.php";

	$startData = json_decode($service->start, false);
?>

<div
	class="
		bg-white
		p-6
		ring-1 ring-stone-200
		rounded-2xl
		shadow-sm
	"
>
	<h3
		class="
			font-bold
			mb-2
			text-lg text-stone-900
		"
	>
		<?= $startData->title; ?>
	</h3>
	
	<p class="mb-4 text-stone-700">
		<?= $startData->text; ?>
	</p>
	
	<div
		class="
			flex flex-wrap
			gap-3
		"
	>
		<?=
			button(
				href: $startData->btn1Url,
				template: "primary",
				text: $startData->btn1Text
			);
		?>

		<?=
			button(
				href: $startData->btn2Url,
				template: "secondary",
				text: $startData->btn2Text
			);
		?>
	</div>
</div>
<?php require_once "helpers/getString.php"; ?>

<div class="box">
	<h3
		class="
			font-bold
			mb-2
			text-lg text-stone-900
		"
	>
		<?= getString("requestTitle"); ?>
	</h3>

	<p class="mb-4 text-stone-700">
		<?= getString("requestText"); ?>
	</p>

	<?php include_once "blocks/forms/request.php"; ?>
</div>
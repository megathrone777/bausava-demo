<?php require_once "helpers/getString.php"; ?>

<div class="box">
	<h2 class="box-title mb-2">
		<?= getString("descriptionLabel"); ?>:
	</h2>

	<div class="space-y-3">
		<?= htmlspecialchars_decode(trim($offer->description)); ?>
	</div>
</div>
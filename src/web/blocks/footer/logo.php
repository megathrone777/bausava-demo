<?php
	require_once "helpers/getString.php";

	$logo = R::findOne("settings", "id = 1");
?>

<div class="grow">
	<p
		class="
			font-medium
			mb-3
			text-sm
		"
	>
		<?= getString("ico"); ?>
	</p>
</div>

<p class="h-9 md:h-10">
	<a
		class="h-full inline-block"
		href="/"
	>
		<img
			alt="Logo."
			class="h-full"
			src="<?= $logo->image; ?>"
		>
	</a>
</p>


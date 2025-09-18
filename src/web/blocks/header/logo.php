<?php $logo = R::findOne("settings", "id = 1"); ?>

<div class="h-9 md:h-10">
	<a
		class="block h-full"
		href="/"
	>
		<img
			alt="Logo."
			class="h-full"
			src="<?= $logo->image; ?>"
		>
	</a>
</div>
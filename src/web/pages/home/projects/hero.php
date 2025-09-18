<?php
	require_once "theme/button.php";
	require_once "helpers/getString.php";
?>

<div
	class="
		flex
		items-end
		justify-between
		gap-6
	"
>
	<div>
		<h2 class="box-title">
			<?= getString("projectsTitle"); ?>
		</h2>
		
		<p
			class="
				mt-3
				max-w-3xl
				opacity-80
			"
		>
			<?= getString("projectsText"); ?>
		</p>
	</div>

	<?=
		button(
			href: "#contacts",
			template: "secondary",
			text: getString("interestedButton")
		)
	?>
</div>
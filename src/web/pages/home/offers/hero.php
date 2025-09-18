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
		mb-8
	"
>
	<div class="grow">
		<h2	class="box-title">
			<?= getString("offersTitle"); ?>
		</h2>

		<p
			class="
				mt-3
				max-w-3xl
				opacity-90
			"
		>
			<?= getString("offersText"); ?>
		</p>
	</div>

	<div class="hidden md:block">
		<?=
			button(
				href: "#contacts",
				template: "secondary",
				text: getString("offersButton"),
			);
		?>
	</div>
</div>
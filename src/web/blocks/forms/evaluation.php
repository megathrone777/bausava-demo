<?php
	require_once "theme/button.php";
	require "theme/input.php";
	require_once "helpers/getString.php";

	$calculateFields = R::findAll("calculate_fields");
?>

<form
	class="
		flex flex-col
		gap-y-3
		items-stretch
		mt-5
	"
>
	<?php foreach ($calculateFields as $calculateField): ?>
		<?php if ($calculateField->name === "submit"): ?>
			<?=
				button(
					template: "primary",
					text: "Odeslat poptávku",
					type: "submit"
				);
			?>
		<?php else: ?>
			<?=
				input(
					name: $calculateField->name,
					placeholder: $calculateField->placeholder,
					required: true,
					type: "text"
				);
			?>
		<?php endif; ?>
	<?php endforeach; ?>

	<p class="opacity-80 text-xs">
		<?= getString("calculateText"); ?>
	</p>
</form>
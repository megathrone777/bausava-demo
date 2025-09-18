<?php
	require_once "theme/button.php";
	require_once "theme/input.php";
?>

<form
	action="#"
	class="gap-4 grid"
	method="POST"
>
	<?=
		input(
			name: "name",
			placeholder: "Jméno a příjmení",
			required: true,
			type: "text"
		);
	?>

	<?=
		input(
			name: "email",
			placeholder: "E-mail / Telefon",
			required: true,
			type: "text"
		);
	?>

	<textarea
		class="
			border-none
			font-display font-medium
			h-28
			placeholder:font-medium placeholder:text-gray
			px-3
			py-2
			resize-none
			ring ring-secondary
			rounded-xl
			text-black text-base
			transition-shadow
			focus:ring-2 focus:ring-primary
		"
		name="message"
		placeholder="Krátký popis nemovitosti / projektu"
	></textarea>

	<?=
		button(
			template: "primary",
			text: "Odeslat",
			type: "submit"
		);
	?>
	
	<p
		class="
			opacity-80
			text-xs
		"
	>
		Odesláním souhlasíte se zpracováním osobních údajů.
	</p>
</form>
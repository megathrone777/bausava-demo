<?php	require_once "theme/button.php"; ?>

<div
	class="
		bg-secondary
		py-15
		text-center
		lg:py-20
	"
>
	<div
		class="
			container
			flex flex-col
			gap-y-6
			items-center
			justify-center
			lg:gap-y-10
		"
	>
		<h1
			class="
				font-bold
				text-3xl
				lg:text-5xl
			"
		>
			Page not found
		</h1>

		<?=
			button(
				href: "/",
				template: "secondary",
				text: "Hlavní",
			);
		?>
	</div>
</div>
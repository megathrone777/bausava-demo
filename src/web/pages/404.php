<?php
	require_once "theme/button.php";
	require_once "helpers/getString.php";

	$mainTitle = R::findOne("menu", "id = 1")->title;
?>

<div
	class="
		bg-secondary
		gradient
		pt-10
	"
>
	<div
		class="
			container
			flex flex-col
			gap-y-6
			items-center
			justify-center
			min-h-96
			pb-12
			md:pb-16
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
			<?= getString("pageNotFound"); ?>
		</h1>

		<?=
			button(
				href: "/",
				template: "secondary",
				text: $mainTitle,
			);
		?>
	</div>

	<div class="bg-white">
		<?php include_once "blocks/contacts.php"; ?>
	</div>
</div>
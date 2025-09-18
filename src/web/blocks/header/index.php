<?php
	require_once "theme/button.php";
	require_once "helpers/getString.php";
?>

<div
	class="
		backdrop-blur
		bg-white/85
		border-b border-b-secondary
		h-16
		sticky
		top-0
		z-40
	"
	data-js-data="{
		isOpened: false,

		closeMenu() {
			this.isOpened = false	
		},

		toggleMenu() {
			this.isOpened = !this.isOpened
		}
	}"
>
	<div
		class="
			container
			flex
			items-center
			justify-between
		"
	>
		<?php include_once "logo.php"; ?>
		<?php include_once "menu.php"; ?>
		
		<div
			class="
				flex
				gap-x-4
				items-center
			"
		>
			<?=
				button(
					href: "#contacts",
					template: "primary",
					text: getString("consultButton"),
				);
			?>

			<div
				class="
					text-primary
					relative
					z-50
					lg:hidden
				"
			>
				<button
					class="hamburger"
					data-js-class="isOpened ? 'active' : ''"
					data-js-click="toggleMenu"
					type="button"
				>
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
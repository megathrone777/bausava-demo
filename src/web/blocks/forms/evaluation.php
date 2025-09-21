<?php
	require_once "helpers/getString.php";
	require_once "theme/button.php";
	require_once "theme/input.php";
	
	$calculateHint = getString("calculateHint");
	$calculateTitle = getString("calculateTitle");
	$calculateFields = R::findAll("calculate_fields");
?>

<form
	action="/src/web/helpers/sendEmail.php"
	class="
		flex flex-col
		gap-y-3
		items-stretch
		mt-5
	"
	data-js-data="{
		isLoading: false,
		isSuccess: false,

		async handleSubmit({ target }) {
			const body = new FormData(target)

			body.append('title', '<?= $calculateTitle; ?>')
			body.append('template', 'evaluation')

			try {
				this.isLoading = true

				const response = await fetch(target.action, {
					body,
					method: target.method
				})

				if (response.ok) {
					const data = await response.json()

					if (data && data.success) {
						this.isSuccess = true
						target.reset()
					}
				}
			} catch(error) {
				console.error('Cannot send contact data', error)
			} finally {
				this.isLoading = false
			}
		},

		handleSuccessReset() {
			if (this.isSuccess) {
				this.isSuccess = false
			}
		}
	}"
	data-js-submit.prevent="handleSubmit"
	method="POST"
>
	<div
		class="contents"
		data-js-click="handleSuccessReset"
	>
		<?php foreach ($calculateFields as $calculateField): ?>
			<?php if ($calculateField->name != "submit"): ?>
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
	</div>

	<div
		class="
			flex flex-col
			items-stretch
			min-h-9
			relative
			w-full
			md:min-h-10
		"
	>
		<template data-js-if="isLoading">
			<?=
				button(
					template: "loading",
					text: "",
					type: "button"
				);
			?>
		</template>

		<template data-js-if="isSuccess && !isLoading">
			<?=
				button(
					template: "success",
					text: getString("success"),
					type: "button"
				);
			?>
		</template>

		<template data-js-if="!isSuccess && !isLoading">
			<?php foreach ($calculateFields as $calculateField): ?>
				<?php if ($calculateField->name === "submit"): ?>
					<?=
						button(
							template: "primary",
							text: $calculateField->placeholder,
							type: "submit"
						);
					?>
				<?php endif; ?>
			<?php endforeach; ?>
		</template>
	</div>

	<p class="opacity-80 text-xs">
		<?= getString("calculateHint"); ?>
	</p>
</form>
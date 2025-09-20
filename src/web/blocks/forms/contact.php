<?php
	require_once "helpers/getString.php";
	require_once "theme/button.php";
	require_once "theme/input.php";

	$contactsTitle = getString("contactsTitle");
	$contactsFields = R::findAll("contacts_fields");
?>

<form
	action="/src/web/helpers/sendEmail.php"
	class="grid gap-4"
	data-js-data="{
		isLoading: false,
		isSuccess: false,

		async handleSubmit({ target }) {
			const body = new FormData(target)

			body.append('title', '<?= $contactsTitle; ?>')
			body.append('template', 'contacts')

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
		<?php foreach($contactsFields as $contactField): ?>
			<?php if($contactField->name != "message"): ?>
				<?=
					input(
						name: $contactField->name,
						placeholder: $contactField->placeholder,
						required: true,
						type: "text"
					);
				?>
			<?php else: ?>
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
					name="<?= $contactField->name; ?>"
					placeholder="<?= $contactField->placeholder; ?>"
				></textarea>
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
					text: "Hotovo",
					type: "button"
				);
			?>
		</template>

		<template data-js-if="!isSuccess && !isLoading">
			<?=
				button(
					template: "primary",
					text: "Odeslat",
					type: "submit"
				);
			?>
		</template>
	</div>
	
	<p class="opacity-80 text-xs">
		<?= getString("contactsHint"); ?>
	</p>
</form>
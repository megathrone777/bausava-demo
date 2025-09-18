<?php
	require_once "helpers/getString.php";

	$termsContent = R::findOne("terms", "id = 1");
	$termsTitle = getString("termsTitle");
?>

<div class="row">
	<div
		class="
			align-items-start
			col-8
			d-inline-flex
			flex-column
		"
	>
		<form
			action="/src/admin/helpers/string/update.php"
			class="
				align-items-center
				d-inline-flex
				gap-3
				mb-3
			"
			method="POST"
		>
			<input
				name="back"
				type="hidden"
				value="/admin/terms"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $termsTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($termsTitle->value); ?>"
				type="text"
				value="<?= $termsTitle->value; ?>"
			>

			<button
				class="btn btn-success"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>
	</div>
</div>

<hr>

<div class="row">
	<div class="col-12">
		<form
			action="/src/admin/helpers/terms/update.php"
			method="POST"
		>
			<div
				x-data="{
					content: '<?= trim($termsContent->text); ?>'
				}"
				class="
					bg-gray-300
					border border-gray-900
					col
					mb-3
					p-3
					rounded
				"
			>
				<input
					name="text"
					type="hidden"
					:value="content.trim()"
				>

				<alpine-editor name="text" x-model="content">
					<div class="d-flex gap-2" data-type="menu">
						<button
							class="btn btn-sm btn-light"
							data-active-class="btn-dark"
							data-command="strong"
							type="button"
						>
							Bold
						</button>

						<button
							class="btn btn-sm btn-light"
							data-active-class="btn-dark"
							data-command="em"
							type="button"
						>
							Italic
						</button>
					</div>

					<div class="p-3" data-type="editor"></div>	
				</alpine-editor>
			</div>

			<button
				class="btn btn-success"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>
	</div>
</div>
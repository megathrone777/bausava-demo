<?php
	require_once "helpers/includeWith.php";
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
			<?php
				includeWith(
					"theme/editor.php",
					array(
						"editorName" => "text",
						"editorValue" => $termsContent->text
					)
				);
			?>

			<button
				class="btn btn-success"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>
	</div>
</div>
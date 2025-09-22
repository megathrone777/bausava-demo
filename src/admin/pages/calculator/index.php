<?php
  require_once "helpers/getString.php";

  $calculatorTitle = getString("calculatorTitle");
	$calculatorText = getString("calculatorText");
?>

<div class="row">
  <div class="align-items-start col-8 d-inline-flex flex-column">
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
				value="/admin/calculator"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $calculatorTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($calculatorTitle->value); ?>"
				type="text"
				value="<?= $calculatorTitle->value; ?>"
			>

			<button
				class="btn btn-success"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>

		<form
			action="/src/admin/helpers/string/update.php"
			class="
				align-items-center
				d-inline-flex
				gap-3
			"
			method="POST"
		>
			<input
				name="back"
				type="hidden"
				value="/admin/calculator"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $calculatorText->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($calculatorText->value); ?>"
				type="text"
				value="<?= $calculatorText->value; ?>"
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
	<?php include_once "locations.php"; ?>
	<?php include_once "conditions.php"; ?>
	<?php include_once "standards.php"; ?>
</div>
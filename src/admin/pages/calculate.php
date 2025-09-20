<?php
	require_once "helpers/getString.php";

	$calculateFields = R::findAll("calculate_fields");
	$calculateTitle = getString("calculateTitle");
	$calculateText = getString("calculateText");
	$calculateHint = getString("calculateHint");
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
				value="/admin/calculate"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $calculateTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($calculateTitle->value); ?>"
				type="text"
				value="<?= $calculateTitle->value; ?>"
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
				value="/admin/calculate"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $calculateText->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($calculateText->value); ?>"
				type="text"
				value="<?= $calculateText->value; ?>"
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
  <div class="col-lg-10">
		<table class="table table-bordered table-condensed">
      <thead>
        <tr>
          <th>Name</th>
          <th>Text</th>
					<th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($calculateFields as $calculateField): ?>
          <form
            action="/src/admin/helpers/calculate/update.php"
            method="POST"
            style="display: contents;"
          >
            <tr>
              <td><?= $calculateField->name; ?></td>

              <td>
                <input
                  name="id"
                  type="hidden"
                  value="<?= $calculateField->id; ?>"
                >

                <input
                  class="form-control"
                  name="placeholder"
                  value="<?= $calculateField->placeholder; ?>"
                  type="text"
                >
              </td>

              <td>             
								<button
									class="btn btn-success"
									type="submit"
								>
									<i class="fa-regular fa-floppy-disk"></i>
								</button>
              </td>
            </tr>
          </form>
        <?php endforeach; ?>
      </tbody>
    </table>

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
				value="/admin/calculate"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $calculateHint->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($calculateHint->value); ?>"
				type="text"
				value="<?= $calculateHint->value; ?>"
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
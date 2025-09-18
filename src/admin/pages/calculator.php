<?php
  require_once "helpers/getString.php";

	$conditions = R::findAll("conditions");
	$locations = R::findAll("locations");
	$standards = R::findAll("standards");

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
  <div class="col-xl-4">
		<h4>Lokalita</h4>

    <table class="table table-fixed table-bordered table-condensed">
      <thead>
        <tr>
          <th>Name</th>
					<th>Factor</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($locations as $location): ?>
          <tr>
						<td><?= $location->name; ?></td>
            <td>
              <form
                action="/src/admin/helpers/locations/update.php"
                method="POST"
              >
                <input
									name="id"
									type="hidden"
									value="<?= $location->id; ?>"
								>

                <div class="d-flex gap-2">
									<input
										class="form-control"
										name="factor"
										required
										step="0.01"
										type="number"
										value="<?= $location->factor; ?>"
									>
                  
                  <button
                    class="btn btn-success"
                    type="submit"
                  >
                    <i class="fa-regular fa-floppy-disk"></i>
                  </button>
                </div>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>

	<div class="col-xl-4">
		<h4>Stav</h4>

    <table class="table table-fixed table-bordered table-condensed">
      <thead>
        <tr>
          <th>Name</th>
					<th>Factor</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($conditions as $condition): ?>
          <tr>
						<td><?= $condition->name; ?></td>
            <td>
              <form
                action="/src/admin/helpers/conditions/update.php"
                method="POST"
              >
                <input
									name="id"
									type="hidden"
									value="<?= $condition->id; ?>"
								>

                <div class="d-flex gap-2">
									<input
										class="form-control"
										name="factor"
										required
										step="0.01"
										type="number"
										value="<?= $condition->factor; ?>"
									>
                  
                  <button
                    class="btn btn-success"
                    type="submit"
                  >
                    <i class="fa-regular fa-floppy-disk"></i>
                  </button>
                </div>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>

	<div class="col-xl-4">
		<h4>Standard vybavení</h4>

    <table class="table table-fixed table-bordered table-condensed">
      <thead>
        <tr>
          <th>Name</th>
					<th>Factor</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($standards as $standard): ?>
          <tr>
						<td><?= $standard->name; ?></td>
            <td>
              <form
                action="/src/admin/helpers/standards/update.php"
                method="POST"
              >
                <input
									name="id"
									type="hidden"
									value="<?= $standard->id; ?>"
								>

                <div class="d-flex gap-2">
									<input
										class="form-control"
										name="factor"
										required
										step="0.01"
										type="number"
										value="<?= $standard->factor; ?>"
									>
                  
                  <button
                    class="btn btn-success"
                    type="submit"
                  >
                    <i class="fa-regular fa-floppy-disk"></i>
                  </button>
                </div>
              </form>
            </td>
          </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>
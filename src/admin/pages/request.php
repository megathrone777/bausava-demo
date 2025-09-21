<?php
  require_once "helpers/getString.php";

	$requestFields = R::findAll("request_fields");
  $requestTitle = getString("requestTitle");
	$requestText = getString("requestText");
	$requestHint = getString("requestHint");
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
				value="/admin/request"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $requestTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($requestTitle->value); ?>"
				type="text"
				value="<?= $requestTitle->value; ?>"
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
				value="/admin/request"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $requestText->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($requestText->value); ?>"
				type="text"
				value="<?= $requestText->value; ?>"
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
		<table class="table table-bordered table-condensed">
      <thead>
        <tr>
					<th>Name</th>
					<th>Label</th>
          <th>Placeholder</th>
					<th>Options</th>
					<th>Min</th>
					<th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($requestFields as $requestField): ?>
          <form
            action="/src/admin/helpers/request/update.php"
            method="POST"
            style="display: contents;"
          >
            <tr>
              <td>
								<input
                  name="id"
                  type="hidden"
                  value="<?= $requestField->id; ?>"
                >

								<input
                  class="form-control"
                  name="name"
									readonly
                  value="<?= $requestField->name; ?>"
									size="<?= strlen($requestField->name); ?>"
									style="opacity: 0.5;"
                  type="text"
                >
							</td>

							<td>
								<input
                  class="form-control"
                  name="label"
                  type="text"
                  value="<?= $requestField->label; ?>"
                >
							</td>

							<td>
								<input
                  class="form-control"
                  name="placeholder"
                  type="text"
                  value="<?= $requestField->placeholder; ?>"
                >
							</td>

							<td>
								<?php if ($requestField->options): ?>
									<span
										class="
											d-inline-flex
											flex-column
											gap-2
										"
										x-data="{
											values: <?= str_replace('"', "'", $requestField->options); ?>
										}"
									>
										<input
											name="options"
											
											type="hidden"
											x-model="values"
										>

										<?php foreach(json_decode($requestField->options) as $index => $option): ?>
											<input
												class="form-control"
												value="<?= $option; ?>"
												type="text"
												x-model.fill="values[<?= $index; ?>]"
											>
										<?php endforeach; ?>
									</span>
								<?php endif; ?>
							</td>

							<td>
								<?php if (!is_null($requestField->min)): ?>
									<input
										name="min"
										type="number"
										value="<?= $requestField->min; ?>"
										style="width: 40px;"
									>
								<?php else: ?>
									<input
										name="min"
										type="hidden"
										value=""
									>
								<?php endif; ?>
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
  </div>
</div>

<div class="row">
	<div class="col-12">
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
				value="/admin/request"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $requestHint->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($requestHint->value); ?>"
				type="text"
				value="<?= $requestHint->value; ?>"
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
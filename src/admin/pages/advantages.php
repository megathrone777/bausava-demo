<?php
	require_once "helpers/getString.php";

	$advantages = R::findAll("advantages");
	$advantagesTitle = getString("advantagesTitle");
?>

<div class="row">
	<div class="align-items-start col-8 d-inline-flex flex-column">
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
				value="/admin/advantages"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $advantagesTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($advantagesTitle->value); ?>"
				type="text"
				value="<?= $advantagesTitle->value; ?>"
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
  <div class="col">
    <table class="table table-bordered table-condensed w-auto">
      <thead>
        <tr>
          <th>Title</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($advantages as $advantage): ?>
          <form
            action="/src/admin/helpers/advantages/update.php"
            method="POST"
            style="display: contents;"
          >
            <tr>
              <td>
								<input
									name="id"
									type="hidden"
									value="<?= $advantage->id; ?>"
								>

								<input
									class="form-control"
									name="title"
									value="<?= $advantage->title; ?>"
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
  </div>
</div>
<?php
	require_once "helpers/getString.php";

	$contactItems = R::findAll("contacts");
	$contactsTitle = getString("contactsTitle");
	$contactsHint = getString("contactsHint");
	$contactsText = getString("contactsText");
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
				value="/admin/contacts"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $contactsTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($contactsTitle->value); ?>"
				type="text"
				value="<?= $contactsTitle->value; ?>"
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
				value="/admin/contacts"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $contactsText->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($contactsText->value); ?>"
				type="text"
				value="<?= $contactsText->value; ?>"
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
          <th>Title</th>
          <th>Url</th>
					<th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($contactItems as $contactItem): ?>
          <form
            action="/src/admin/helpers/contacts/update.php"
            method="POST"
            style="display: contents;"
          >
            <tr>
              <td>
								<input
                  name="id"
                  type="hidden"
                  value="<?= $contactItem->id; ?>"
                >

								<input
                  class="form-control"
                  name="title"
                  value="<?= $contactItem->title; ?>"
                  type="text"
                >
							</td>

							<td>
								<input
                  class="form-control"
                  name="href"
                  value="<?= $contactItem->href; ?>"
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
				value="/admin/contacts"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $contactsHint->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($contactsHint->value); ?>"
				type="text"
				value="<?= $contactsHint->value; ?>"
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
<?php
	require_once "helpers/includeWith.php";

	$logo = R::findOne("settings", "id = 1");
	$email = R::findOne("settings", "id = 2");
?>

<div class="row">
	<div class="col-6">
		<h1 class="page-header">Nastaveni</h1>
	</div>
</div>

<hr>

<div class="row">
	<div class="col-3">
		<form
			action="/src/admin/helpers/settings/update.php"
			enctype="multipart/form-data"
			method="POST"
		>
			<div class="mb-3">
				<label class="form-label">Logo</label>

				<?php
					includeWith(
						"blocks/uploader/single.php",
						array(
							"existingUrl" => $logo->image,
							"itemId" => 1,
							"tableName" => "settings"
						)
					);
				?>
			</div>

			<div class="mb-3">
				<label for="password">Password</label>

				<input
					class="form-control"
					id="password"
					minlength="6"
					name="password"
					type="text"
				>
			</div>

			<div class="mb-3">
				<label for="email">Email (contact form)</label>

				<input
					class="form-control"
					id="email"
					minlength="6" 
					name="email"
					type="email"
					value="<?= $email->email; ?>"
				>
			</div>

			<button
				class="btn btn-success pull-left"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>
	</div>
</div>
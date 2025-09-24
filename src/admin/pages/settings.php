<?php
	require_once "helpers/includeWith.php";

	$logo = R::findOne("settings", "id = 1");
?>

<div class="row">
	<div class="col-6">
		<h1 class="page-header">Nastaveni</h1>
	</div>
</div>

<hr>

<div class="row">
	<div class="col">
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

			<button
				class="btn btn-success pull-left"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>
	</div>
</div>
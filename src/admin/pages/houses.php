<?php
	require_once "helpers/includeWith.php";
	require_once "helpers/getString.php";

	$houses = R::findAll("houses", "ORDER BY id DESC");
	$housesTitle = getString("housesTitle");
?>

<div class="row">
	<div
		class="
			align-items-start
			col-12
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
				value="/admin/houses"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $housesTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($housesTitle->value); ?>"
				type="text"
				value="<?= $housesTitle->value; ?>"
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

<div class="row mb-2">
  <div class="col-6">
    <h3>Katalog</h3>
  </div>

	<div class="col-6 text-end">
		<button
			class="btn btn-success"
			data-bs-toggle="modal"
			data-bs-target="#create-house"
			type="button"
		>
			Pridat
		</button>
	</div>
</div>

<div class="row">
	<div class="col-12">
		<table class="table table-striped table-bordered table-condensed">
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
					<th>Type</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>
				<?php foreach ($houses as $house): ?>
					<tr>
						<td><?= $house->title; ?></td>
						<td><?= $house->price; ?></td>
						<td><?= $house->type; ?></td>

						<td>
							<button
								class="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#update-house-<?= $house->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>
						</td>
					</tr>

					<div
						class="modal modal-xl fade"
						id="update-house-<?= $house->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/houses/update.php"
								enctype="multipart/form-data"
								method="POST"
							>
								<input
									name="id"
									type="hidden"
									value="<?= $house->id; ?>"
								>

								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Edit</h4>
									</div>

									<div class="modal-body">
										<div class="mb-3">
                      <label class="form-label">Title</label>

                      <input
												class="form-control"
												name="title"
												value="<?= $house->title; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
											<label class="form-label">Images</label>
											
											<?php
												includeWith(
													"blocks/uploader/multiple.php",
													array(
														"existingUrls" => $house->images,
														"itemId" => $house->id,
														"maxFiles" => 50,
														"tableName" => "houses"
													)
												);
											?>
										</div>

										<div class="mb-3">
                      <label class="form-label">Type</label>

                      <input
												class="form-control"
												name="type"
												value="<?= $house->type; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
                      <label class="form-label">Price</label>

                      <input
												class="form-control"
												name="house"
												value="<?= $house->price; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
                      <label class="form-label">Badges</label>

											<?php foreach(json_decode($house->badges) as $badge): ?>
												<div class="mb-1">
													<input
														class="form-control"
														name="badges[]"
														type="text"
														value="<?= $badge; ?>"
													>
												</div>
											<?php endforeach; ?>
                    </div>
									</div>

									<div class="modal-footer">
										<button
											class="btn btn-success pull-left"
											type="submit"
										>
											<i class="fa-regular fa-floppy-disk"></i>
										</button>

										<button
											class="btn btn-danger"
											data-bs-dismiss="modal"
											type="button"
										>
											<i class="fa-solid fa-ban"></i>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				<?php endforeach; ?>
			</tbody>
		</table>
	</div>
</div>

<div class="modal modal-xl fade" id="create-house" role="dialog">
	<div class="modal-dialog">
		<form
			action="/src/admin/helpers/houses/create.php"
			enctype="multipart/form-data"
			method="POST"
		>
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Pridat</h4>
				</div>

				<div class="modal-body">
					<div class="mb-3">
						<label class="form-label">Title</label>

						<input
							class="form-control"
							name="title"
							required
							type="text"
						>
					</div>

					<div class="mb-3">
						<label class="form-label">Images</label>
						
						<?php
							includeWith(
								"theme/dropzone.php",
								array(
									"maxFiles" => 5,
								)
							);
						?>
					</div>

					<div class="mb-3">
						<label class="form-label">Type</label>

						<input
							class="form-control"
							name="type"
							type="text"
						>
					</div>

					<div class="mb-3">
						<label class="form-label">Price</label>

						<input
							class="form-control"
							name="price"
							type="text"
						>
					</div>

					<div class="mb-3">
						<label class="form-label">Badges</label>

						<div class="mb-1">
							<input
								class="form-control"
								name="badges[]"
								type="text"
							>
						</div>

						<div class="mb-1">
							<input
								class="form-control"
								name="badges[]"
								type="text"
							>
						</div>

						<div class="mb-1">
							<input
								class="form-control"
								name="badges[]"
								type="text"
							>
						</div>
					</div>
				</div>

				<div class="modal-footer">
					<button
						class="btn btn-success pull-left"
						type="submit"
					>
						<i class="fa-regular fa-floppy-disk"></i>
					</button>

					<button
						class="btn btn-danger"
						data-bs-dismiss="modal"
						type="button"
					>
						<i class="fa-solid fa-ban"></i>
					</button>
				</div>
			</div>
		</form>
	</div>
</div>
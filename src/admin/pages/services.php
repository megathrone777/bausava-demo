<?php
	require_once "helpers/includeWith.php";
	require_once "helpers/getString.php";

	$services = R::findAll("services", "ORDER BY id DESC");
	$servicesTitle = getString("servicesTitle");
	$servicesText = getString("servicesText");
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
				value="/admin/services"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $servicesTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($servicesTitle->value); ?>"
				type="text"
				value="<?= $servicesTitle->value; ?>"
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
				value="/admin/services"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $servicesText->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($servicesText->value); ?>"
				type="text"
				value="<?= $servicesText->value; ?>"
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
		<table class="align-middle table table-striped table-bordered table-condensed">
			<thead>
				<tr>
					<th>Name</th>
					<th>Title</th>
					<th>Icon</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>
				<?php foreach ($services as $service): ?>
					<tr>
						<td><?= $service->name; ?></td>
						<td><?= $service->title; ?></td>
						<td><?= $service->icon; ?></td>

						<td>
							<button
								class="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#update-service-<?= $service->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>
						</td>
					</tr>

					<div
						class="modal modal-xl fade"
						id="update-service-<?= $service->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/services/update.php"
								enctype="multipart/form-data"
								method="POST"
							>
								<input
									name="id"
									type="hidden"
									value="<?= $service->id; ?>"
								>

								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Edit</h4>
									</div>

									<div class="modal-body">
										<div class="mb-3">
                      <label class="form-label">Name</label>

                      <input
												class="form-control"
												name="name"
												value="<?= $service->name; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
                      <label class="form-label">Title</label>

                      <input
												class="form-control"
												name="title"
												value="<?= $service->title; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
                      <label class="form-label">Text</label>

                      <textarea
												class="form-control"
												name="text"
											><?= $service->text; ?></textarea>
                    </div>

										<div
											class="
												d-flex
												flex-column
												gap-1
												mb-3
											"
										>
											<label>Feature title:</label>

											<?php
												$features = json_decode($service->features, FALSE, 512, JSON_OBJECT_AS_ARRAY);

												foreach($features as $index => $feature):
											?>
												<input
													class="form-control"
													name="features[<?= $index; ?>][title]"
													value="<?= $feature->title; ?>"
													type="text"
												>
											<?php endforeach; ?>
										</div>

										<div
											class="
												d-flex
												flex-column
												gap-1
												mb-3
											"
										>
											<label>Feature text:</label>

											<?php
												$features = json_decode($service->features, FALSE, 512, JSON_OBJECT_AS_ARRAY);

												foreach($features as $index => $feature):
											?>
												<input
													class="form-control"
													name="features[<?= $index; ?>][text]"
													value="<?= $feature->text; ?>"
													type="text"
												>
											<?php endforeach; ?>
										</div>

										<div class="mb-3">
                      <label class="form-label">Button text</label>

                      <input
												class="form-control"
												name="button"
												value="<?= $service->button; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
                      <label class="form-label">Icon</label>

                      <input
												class="form-control"
												name="icon"
												value="<?= $service->icon; ?>"
												type="text"
											>
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
<?php $standards = R::findAll("standards"); ?>

<div class="col-xl-4">
	<h4>Standard vybavení</h4>

	<table class="align-middle table table-fixed table-bordered table-condensed">
		<thead>
			<tr>
				<th class="align-middle">Name</th>
				<th class="align-middle">Factor</th>

				<th>
					<button
						class="btn btn-success"
						data-bs-toggle="modal"
						data-bs-target="#create-standard"
						type="button"
					>
						<i class="fa-regular fa-add"></i>
					</button>
				</th>
			</tr>
		</thead>

		<tbody>
			<?php foreach ($standards as $standard): ?>
				<form
					action="/src/admin/helpers/standards/update.php"
					method="POST"
					style="display: contents;"
				>
					<tr>
						<td><?= $standard->name; ?></td>

						<td>
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
							</div>
						</td>

						<td>
							<button
								class="btn btn-success"
								type="submit"
							>
								<i class="fa-regular fa-floppy-disk"></i>
							</button>

							<?php if (count($standards) > 1): ?>
								<button
									class="btn btn-danger"
									data-bs-toggle="modal"
									data-bs-target="#delete-standard-<?= $standard->id; ?>"
									type="button"
								>
									<i class="fa-regular fa-trash-can"></i>
								</button>
							<?php endif; ?>
						</td>
					</tr>
				</form>

				<div
					class="modal fade"
					id="delete-standard-<?= $standard->id; ?>"
					role="dialog"
				>
					<div class="modal-dialog">
						<form
							action="/src/admin/helpers/standards/delete.php"
							class="form-delete"
							method="POST"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h4 class="modal-title">Подтвердить</h4>
								</div>

								<div class="modal-body">
									<input type="hidden" name="id" value="<?= $standard->id; ?>">
									<p>Вы уверены, что хотите удалить #<?= $standard->id; ?>?</p>
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

	<div class="modal modal-xl fade" id="create-standard" role="dialog">
		<div class="modal-dialog">
			<form
				action="/src/admin/helpers/standards/create.php"
				enctype="multipart/form-data"
				method="POST"
			>
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Pridat standard</h4>
					</div>

					<div class="modal-body">
						<div class="mb-3">
							<label class="form-label">Name</label>

							<input
								class="form-control"
								name="name"
								required
								type="text"
							>
						</div>

						<div class="mb-3">
							<label class="form-label">Factor</label>

							<input
								class="form-control"
								name="factor"
								required
								step="0.01"
								type="number"
								value="1"
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
</div>
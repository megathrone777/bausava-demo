<?php
	require_once "helpers/includeWith.php";
	require_once "helpers/getString.php";

	$offers = R::findAll("offers", "ORDER BY id DESC");
	$offersTitle = getString("offersTitle");
	$offersText = getString("offersText");
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
				value="/admin/offers"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $offersTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($offersTitle->value); ?>"
				type="text"
				value="<?= $offersTitle->value; ?>"
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
				value="/admin/offers"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $offersText->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($offersText->value); ?>"
				type="text"
				value="<?= $offersText->value; ?>"
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
    <h3>Nabídky</h3>
  </div>

	<div class="col-6 text-end">
		<button
			class="btn btn-success"
			data-bs-toggle="modal"
			data-bs-target="#create-offer"
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
				<?php foreach ($offers as $offer): ?>
					<tr>
						<td><?= $offer->title; ?></td>
						<td><?= $offer->price; ?></td>
						<td><?= $offer->type; ?></td>

						<td>
							<button
								class="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#update-offer-<?= $offer->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>
						</td>
					</tr>

					<div
						class="modal modal-xl fade"
						id="update-offer-<?= $offer->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/offers/update.php"
								enctype="multipart/form-data"
								method="POST"
							>
								<input
									name="id"
									type="hidden"
									value="<?= $offer->id; ?>"
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
												value="<?= $offer->title; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
											<label class="form-label">Images</label>
											
											<?php
												includeWith(
													"blocks/uploader/multiple.php",
													array(
														"existingUrls" => $offer->images,
														"itemId" => $offer->id,
														"maxFiles" => 50,
														"tableName" => "offers"
													)
												);
											?>
										</div>

										<div class="mb-3">
                      <label class="form-label">Type</label>

                      <input
												class="form-control"
												name="type"
												value="<?= $offer->type; ?>"
												type="text"
											>
                    </div>

										<div class="mb-5">
                      <label class="form-label">Price</label>

                      <input
												class="form-control"
												name="price"
												value="<?= $offer->price; ?>"
												type="text"
											>
                    </div>

										<hr>

										<div class="mb-5">
											<h5>Features</h5>

											<div
												class="
													align-items-stretch
													d-flex
													flex-column
													gap-3
													ps-2
												"
											>
												<?php
													$offerFeatures = json_decode($offer->features);

													foreach($offerFeatures as $featureIndex => $offerFeature):
												?>
													<div
														class="
															align-items-center
															d-flex
															gap-2
														"
													>
														<div
															class="h-100"
															style="color: #8b6b4a; min-width: 45px;"
														>
															<?php
																include $_SERVER["DOCUMENT_ROOT"] . "/src/web/icons/" . $offerFeature->icon . ".php";
															?>
														</div>

														<div
															class="
																d-flex
																flex-column
																gap-2
															"
														>
															<input
																name="features[<?= $featureIndex; ?>][icon]"
																type="hidden"
																value="<?= $offerFeature->icon; ?>"
															>

															<input
																class="form-control"
																name="features[<?= $featureIndex; ?>][label]"
																type="text"
																value="<?= $offerFeature->label; ?>"
															>

															<input
																class="form-control"
																name="features[<?= $featureIndex; ?>][value]"
																type="text"
																value="<?= $offerFeature->value; ?>"
															>
														</div>
													</div>
												<?php endforeach; ?>
											</div>
										</div>

										<hr>

										<div class="mb-5">
											<h5>Popis bytu</h5>

											<div class="mb-1">
												<?php
													includeWith(
														"theme/editor.php",
														array(
															"editorName" => "description",
															"editorValue" => trim($offer->description)
														)
													);
												?>
											</div>
										</div>

										<hr>

										<div class="mb-3">
                      <h5>Badges</h5>

											<?php foreach(json_decode($offer->badges) as $badge): ?>
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

<div class="modal modal-xl fade" id="create-offer" role="dialog">
	<div class="modal-dialog">
		<form
			action="/src/admin/helpers/offers/create.php"
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

					<div class="mb-5">
						<label class="form-label">Price</label>

						<input
							class="form-control"
							name="price"
							type="text"
						>
					</div>

					<hr>

					<div class="mb-5">
						<h5>Features</h5>

						<div
							class="
								align-items-stretch
								d-flex
								flex-column
								gap-3
								ps-2
							"
						>
							<?php
								foreach(
									[
										(object)array("icon" => "building", "placeholder" => "Typ objektu"),
										(object)array("icon" => "floor", "placeholder" => "Podlaží"),
										(object)array("icon" => "bed", "placeholder" => "Řešení"),
										(object)array("icon" => "size", "placeholder" => "Velikost"),
										(object)array("icon" => "location", "placeholder" => "Localita"),
										(object)array("icon" => "money", "placeholder" => "Cena")
									] as $featureIndex => $newFeature
								):
							?>
								<div
									class="
										align-items-center
										d-flex
										gap-2
									"
								>
									<div
										class="h-100"
										style="color: #8b6b4a; min-width: 45px;"
									>
										<?php
											include $_SERVER["DOCUMENT_ROOT"] . "/src/web/icons/" . $newFeature->icon . ".php";
										?>
									</div>

									<div
										class="
											d-flex
											flex-column
											gap-2
										"
									>
										<input
											name="features[<?= $featureIndex; ?>][icon]"
											type="hidden"
											value="<?= $newFeature->icon; ?>"
										>

										<input
											class="form-control"
											name="features[<?= $featureIndex; ?>][label]"
											placeholder="<?= $newFeature->placeholder; ?>"
											type="text"
											value="<?= $newFeature->placeholder; ?>"
										>

										<input
											class="form-control"
											name="features[<?= $featureIndex; ?>][value]"
											placeholder
											type="text"
										>
									</div>
								</div>
							<?php endforeach; ?>
						</div>
					</div>

					<hr>

					<div class="mb-5">
						<h5>Popis bytu</h5>

						<div class="mb-1">
							<?php
								includeWith(
									"theme/editor.php",
									array(
										"editorName" => "description",
										"editorValue" => ""
									)
								);
							?>
						</div>
					</div>

					<hr>

					<div class="mb-3">
						<h5>Badges</h5>

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
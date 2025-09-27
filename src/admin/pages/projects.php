<?php
	require_once "helpers/includeWith.php";
	require_once "helpers/getString.php";

	$categories = R::findAll("projects_categories");
	$projects = R::findAll("projects", "ORDER BY id DESC");
	$projectsTitle = getString("projectsTitle");
	$projectsText = getString("projectsText");
?>

<div class="row">
  <div
		class="
			align-items-start
			col-8
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
				value="/admin/projects"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $projectsTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($projectsTitle->value); ?>"
				type="text"
				value="<?= $projectsTitle->value; ?>"
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
				value="/admin/projects"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $projectsText->name; ?>"
			>

			<input
				class="form-control"
				name="value"
				size="<?= strlen($projectsText->value); ?>"
				type="text"
				value="<?= $projectsText->value; ?>"
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
  <div class="col-6">
    <h3>Categories</h3>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <table class="align-middle table table-bordered table-condensed w-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($categories as $category): ?>
          <tr>
            <td><?= $category->title; ?></td>

            <td style="height: 100px">
							<img
								alt="<?= $category->title; ?>"
								class="d-block h-100"
								src="<?= $category->image; ?>"
							>
						</td>

            <td>
              <button
								class="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#update-category-<?= $category->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>
            </td>
          </tr>

          <div
						class="modal modal-xl fade"
						id="update-category-<?= $category->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/projectsCategories/update.php"
								enctype="multipart/form-data"
								method="POST"
							>
								<input
									name="id"
									type="hidden"
									value="<?= $category->id; ?>"
								>

								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Edit category</h4>
									</div>

									<div class="modal-body">
										<div class="mb-3">
                      <label class="form-label">Category title</label>

                      <input
												class="form-control"
												name="title"
												value="<?= $category->title; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
                      <label class="form-label">Category image</label>
											
											<?php
												includeWith(
													"blocks/uploader/single.php",
													array(
														"existingUrl" => $category->image,
														"itemId" => $category->id,
														"tableName" => "projects_categories"
													)
												);
											?>
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

<hr>

<div class="row mb-2">
  <div class="col-6">
    <h3>Projekty</h3>
  </div>

	<div
		class="
			col-6
			text-end
		"
	>
		<button
			class="btn btn-success"
			data-bs-toggle="modal"
			data-bs-target="#create-project"
			type="button"
		>
			Pridat projekt
		</button>
	</div>
</div>

<div class="row">
  <div class="col-12">
    <table class="table table-striped table-bordered table-condensed">
			<thead>
				<tr>
					<th>Title</th>
					<th>Category</th>
					<th>Price</th>
					<th>Type</th>
					<th>Actions</th>
				</tr>
			</thead>

			<tbody>
				<?php foreach ($projects as $project): ?>
					<?php
						$projectCategory = R::findOne("projects_categories", "id = " . $project->category);
					?>

					<tr>
						<td><?= $project->title; ?></td>
						<td><?= $projectCategory->title; ?></td>
						<td><?= $project->price; ?></td>
						<td><?= $project->type; ?></td>

						<td>
							<button
								class="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#update-project-<?= $project->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>

							<button
								class="btn btn-danger"
								data-bs-toggle="modal"
								data-bs-target="#delete-project-<?= $project->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-trash-can"></i>
							</button>
						</td>
					</tr>

					<div
						class="modal modal-xl fade"
						id="update-project-<?= $project->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/projects/update.php"
								enctype="multipart/form-data"
								method="POST"
							>
								<input
									name="id"
									type="hidden"
									value="<?= $project->id; ?>"
								>

								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Edit project</h4>
									</div>

									<div class="modal-body">
										<div class="mb-3">
                      <label class="form-label">Title</label>

                      <input
												class="form-control"
												name="title"
												value="<?= $project->title; ?>"
												type="text"
											>
                    </div>

										<div class="mb-3">
											<label class="form-label">Category</label>

											<select
												class="form-control"
												name="category"
												required
											>
												<?php foreach ($categories as $category): ?>
													<option
														<?php	if ($project->category == $category->id): ?>
														selected
														<?php endif; ?>
														value="<?= $category->id; ?>"
													>
														<?= $category->title; ?>
													</option>
												<?php endforeach; ?>
											</select>
										</div>

										<div class="mb-3">
											<label class="form-label">Images</label>
											
											<?php
												includeWith(
													"blocks/uploader/multiple.php",
													array(
														"existingUrls" => $project->images,
														"itemId" => $project->id,
														"maxFiles" => 50,
														"tableName" => "projects"
													)
												);
											?>
										</div>

										<div class="mb-3">
                      <label class="form-label">Type</label>

                      <input
												class="form-control"
												name="type"
												value="<?= $project->type; ?>"
												type="text"
											>
                    </div>

										<div class="mb-5">
                      <label class="form-label">Price</label>

                      <input
												class="form-control"
												name="price"
												value="<?= $project->price; ?>"
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
													$projectFeatures = json_decode($project->features);

													foreach($projectFeatures as $featureIndex => $projectFeature):
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
																include $_SERVER["DOCUMENT_ROOT"] . "/src/web/icons/" . $projectFeature->icon . ".php";
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
																value="<?= $projectFeature->icon; ?>"
															>

															<input
																class="form-control"
																name="features[<?= $featureIndex; ?>][label]"
																type="text"
																value="<?= $projectFeature->label; ?>"
															>

															<input
																class="form-control"
																name="features[<?= $featureIndex; ?>][value]"
																type="text"
																value="<?= $projectFeature->value; ?>"
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
															"editorValue" => trim($project->description)
														)
													);
												?>
											</div>
										</div>

										<hr>

										<div class="mb-3">
                      <label class="form-label">Badges</label>

											<?php foreach(json_decode($project->badges) as $badge): ?>
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

					<div
						class="modal fade"
						id="delete-project-<?= $project->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/projects/delete.php"
								class="form-delete"
								method="POST"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Подтвердить</h4>
									</div>

									<div class="modal-body">
										<input type="hidden" name="id" value="<?= $project->id; ?>">
										<p>Вы уверены, что хотите удалить проект <?= $project->title; ?>?</p>
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

<div class="modal modal-xl fade" id="create-project" role="dialog">
	<div class="modal-dialog">
		<form
			action="/src/admin/helpers/projects/create.php"
			enctype="multipart/form-data"
			method="POST"
		>
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Pridat projekt</h4>
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
						<label class="form-label">Category</label>

						<select
							class="form-control"
							name="category"
							required
						>
							<?php foreach ($categories as $category): ?>
								<option value="<?= $category->id; ?>">
									<?= $category->title; ?>
								</option>
							<?php endforeach; ?>
						</select>
					</div>

					<div class="mb-3">
						<label class="form-label">Images</label>

						<?php
							includeWith(
								"theme/dropzone.php",
								array(
									"maxFiles" => 50,
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
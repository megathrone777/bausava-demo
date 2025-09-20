<?php
	require_once "helpers/includeWith.php";
	require_once "helpers/getString.php";

	$categories = R::findAll("projects_categories");
	$projects = R::findAll("projects");
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
														"tableName" => "project"
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

										<div class="mb-3">
                      <label class="form-label">Price</label>

                      <input
												class="form-control"
												name="price"
												value="<?= $project->price; ?>"
												type="text"
											>
                    </div>

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
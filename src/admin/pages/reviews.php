<?php
	require_once "helpers/includeWith.php";
	require_once "helpers/getString.php";

	$reviews = R::findAll("reviews");
	$reviewsTitle = getString("reviewsTitle");
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
				value="/admin/reviews"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $reviewsTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($reviewsTitle->value); ?>"
				type="text"
				value="<?= $reviewsTitle->value; ?>"
			>

			<button
				class="btn btn-success"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>
	</div>

	<?php if (count($reviews) < 3): ?>
		<div
			class="
				align-items-center
				col-4
				d-flex
				justify-content-end
				text-end
			"
		>
			<button
				class="btn btn-success"
				data-bs-toggle="modal"
				data-bs-target="#create-review"
				type="button"
			>
				Pridat
			</button>
		</div>
	<?php endif; ?>
</div>

<hr>

<div class="row">
  <div class="col-7">
    <table class="align-middle table table-bordered table-condensed">
      <thead>
        <tr>
          <th>Title</th>
					<th>Text</th>
          <th>Image</th>
					<th>URL</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($reviews as $review): ?>
          <tr>
            <td><?= $review->title; ?></td>
						<td><?= $review->text; ?></td>

            <td style="height: 100px;">
							<img
								alt="<?= $review->title; ?>"
								class="d-block h-100"
								src="<?= $review->image; ?>"
							>
						</td>

						<td><?= $review->url; ?></td>

            <td>
              <button
								class="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#update-review-<?= $review->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>

							<button
								class="btn btn-danger"
								data-bs-toggle="modal"
								data-bs-target="#delete-review-<?= $review->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-trash-can"></i>
							</button>
            </td>
          </tr>

          <div
						class="modal modal-xl fade"
						id="update-review-<?= $review->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/reviews/update.php"
								enctype="multipart/form-data"
								method="POST"
							>
								<input
									name="id"
									type="hidden"
									value="<?= $review->id; ?>"
								>

								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Редактировать</h4>
									</div>

									<div class="modal-body">
										<div class="mb-3">
                      <label class="form-label">Заголовок</label>

                      <input
												class="form-control"
												name="title"
												type="text"
												value="<?= $review->title; ?>"
											>
                    </div>

										<div class="mb-3">
                      <label class="form-label">Картинка</label>
											
											<?php
												includeWith(
													"blocks/uploader/single.php",
													array(
														"existingUrl" => $review->image,
														"itemId" => $review->id,
														"tableName" => "reviews"
													)
												);
											?>
										</div>

										<div class="mb-3">
											<label class="form-label">Текст</label>

											<textarea
												class="form-control"
												name="text"
											><?= $review->text; ?></textarea>
										</div>

										<div class="mb-3">
											<label class="form-label">Ссылка</label>
						
											<input
												class="form-control"
												name="url"
												type="text"
												value="<?= $review->url; ?>"
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

					<div
						class="modal fade"
						id="delete-review-<?= $review->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/reviews/delete.php"
								class="form-delete"
								method="POST"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h4 class="modal-title">Подтвердить</h4>
									</div>

									<div class="modal-body">
										<input type="hidden" name="id" value="<?= $review->id; ?>">
										<p>Вы уверены, что хотите удалить отзыв #<?= $review->id; ?>?</p>
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

<div
	class="modal modal-xl fade"
	id="create-review"
	role="dialog"
>
	<div class="modal-dialog">
		<form
			action="/src/admin/helpers/reviews/create.php"
			enctype="multipart/form-data"
			method="POST"
		>
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">Добавить</h4>
				</div>

				<div class="modal-body">
					<div class="mb-3">
						<label class="form-label">Имя</label>

						<input
							class="form-control"
							name="title"
							required
							type="text"
						>
					</div>

					<div class="mb-3">
						<label class="form-label">Картинка</label>
						
						<?php
							includeWith(
								"theme/dropzone.php",
								array(
									"maxFiles" => 1,
								)
							);
						?>
					</div>

					<div class="mb-3">
						<label class="form-label">Текст</label>

						<textarea
							class="form-control"
							name="text"
						></textarea>
					</div>

					<div class="mb-3">
						<label class="form-label">Ссылка</label>
						
						<input
							class="form-control"
							name="url"
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
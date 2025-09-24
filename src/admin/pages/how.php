<?php
	require_once "helpers/includeWith.php";
	require_once "helpers/getString.php";

	$howItems = R::findAll("how_it_works");
	$howTitle = getString("howTitle");
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
				value="/admin/how-it-works"
			>

			<input
				name="name"
				type="hidden"
				value="<?= $howTitle->name; ?>"
			>

			<input
				class="form-control fs-1 fw-bold"
				name="value"
				size="<?= strlen($howTitle->value); ?>"
				type="text"
				value="<?= $howTitle->value; ?>"
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
  <div class="col">
    <table class="align-middle table table-bordered table-condensed w-auto">
      <thead>
        <tr>
          <th>Заголовок</th>
					<th>Текст</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($howItems as $howItem): ?>
          <tr>
            <td><?= $howItem->title; ?></td>
						<td><?= $howItem->text; ?></td>

            <td>
              <button
								class="btn btn-primary"
								data-bs-toggle="modal"
								data-bs-target="#update-how-<?= $howItem->id; ?>"
								type="button"
							>
								<i class="fa-regular fa-pen-to-square"></i>
							</button>
            </td>
          </tr>

          <div
						class="modal modal-xl fade"
						id="update-how-<?= $howItem->id; ?>"
						role="dialog"
					>
						<div class="modal-dialog">
							<form
								action="/src/admin/helpers/how/update.php"
								method="POST"
							>
								<input
									name="id"
									type="hidden"
									value="<?= $howItem->id; ?>"
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
												value="<?= $howItem->title; ?>"
											>
                    </div>

										<div class="mb-3">
											<label class="form-label">Текст</label>
											
											<input
												class="form-control"
												name="text"
												type="text"
												value="<?= $howItem->text; ?>"
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
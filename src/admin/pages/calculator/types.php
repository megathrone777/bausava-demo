<?php $types = R::findAll("calculator_types"); ?>

<div class="col">
	<h4>Typ</h4>

	<table class="align-middle table table-fixed table-bordered table-condensed w-auto">
		<thead>
			<tr>
				<th class="align-middle">Name</th>
				<th class="align-middle">Title</th>
				<th class="align-middle">Základní cena za m2</th>
				<th></th>
			</tr>
		</thead>

		<tbody>
			<?php foreach ($types as $type): ?>
				<form
					action="/src/admin/helpers/calculatorTypes/update.php"
					method="POST"
					style="display: contents;"
				>
					<tr>
						<td style="opacity: 0.5;">
							<?= $type->name; ?>
						</td>

						<td>
							<input
								class="form-control"
								name="title"
								required
								type="text"
								value="<?= $type->title; ?>"
							>
						</td>

						<td>
							<input
								name="id"
								type="hidden"
								value="<?= $type->id; ?>"
							>

							<input
								class="form-control"
								name="price"
								required
								type="number"
								value="<?= $type->price; ?>"
							>
						</td>

						<td>
							<button
								class="btn btn-success"
								type="submit"
							>
								<i class="fa-regular fa-floppy-disk"></i>
							</button>
						</td>
					</tr>
				</form>
			<?php endforeach; ?>
		</tbody>
	</table>
</div>
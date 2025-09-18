<?php
	require_once "helpers/includeWith.php";

	$hero = R::findOne("hero", "id = 1");
?>

<div class="row">
	<div class="col-6">
		<h1 class="page-header">Intro</h1>
	</div>
</div>

<hr>

<div class="row">
	<div class="col-12">
		<form
			action="/src/admin/helpers/hero/update.php"
			enctype="multipart/form-data"
			method="POST"
		>
			<input type="hidden" name="id" value="<?= $hero->id; ?>">

			<div class="mb-3">
				<label class="form-label" for="title">
					Main title
				</label>

				<input
					class="form-control"
					id="title"
					name="title"
					required
					type="text"
					value="<?= $hero->title; ?>"
				>
			</div>

			<div class="mb-3">
				<label class="form-label" for="text">Text</label>

				<textarea
					class="form-control"
					id="text"
					name="text"
					required
				><?= trim($hero->text); ?></textarea>
			</div>

			<div class="mb-3">
				<label class="form-label" for="image">
					Image
				</label>

				<?php
					includeWith(
						"blocks/uploader/single.php",
						array(
							"existingUrl" => $hero->image,
							"itemId" => "1",
							"tableName" => "hero"
						)
					);
				?>
			</div>

			<div class="mb-3">
				<label class="form-label" for="media_title">Media title</label>

				<input
					class="form-control"
					id="media_title"
					name="media_title"
					required
					type="text"
					value="<?= $hero->media_title; ?>"
				>
			</div>

			<div class="mb-3">
				<label class="form-label" for="media_value">Media value</label>

				<input
					class="form-control"
					id="media_value"
					name="media_value"
					required
					type="text"
					value="<?= $hero->media_value; ?>"
				>
			</div>

			<div class="mb-3">
				<label class="form-label" for="media_text">Media text</label>

				<input
					class="form-control"
					id="media_text"
					name="media_text"
					required
					type="text"
					value="<?= $hero->media_text; ?>"
				>
			</div>

			<div class="mb-3">
				<label class="form-label">Features</label>

				<?php foreach(json_decode($hero->badges) as $badge): ?>
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

			<button
				class="btn btn-success pull-left"
				type="submit"
			>
				<i class="fa-regular fa-floppy-disk"></i>
			</button>
		</form>
	</div>
</div>
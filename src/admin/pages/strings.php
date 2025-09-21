<?php $stringsItems = R::findAll("strings"); ?>

<div class="row">
  <div class="col-6">
    <h1 class="page-header">Ostatni tlacitka</h1>
  </div>
</div>

<hr>

<div class="row">
  <div class="col-lg-10">
    <table class="table table-bordered table-condensed w-auto">
      <thead>
        <tr>
          <th>Name</th>
          <th>Text</th>
					<th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($stringsItems as $stringItem): ?>
          <form
            action="/src/admin/helpers/string/update.php"
            method="POST"
            style="display: contents;"
          >
            <tr>
							<td>
								<input
									name="back"
									type="hidden"
									value="/admin/strings"
								>

								<input
									class="form-control"
									name="name"
									readonly
									value="<?= $stringItem->name; ?>"
									type="text"
									style="opacity: 0.5;"
								>
							</td>
							
              <td>
								<input
									class="form-control"
									name="value"
									value="<?= $stringItem->value; ?>"
									type="text"
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
</div>
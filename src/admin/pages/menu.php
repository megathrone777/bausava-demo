<?php $menuItems = R::findAll("menu"); ?>

<div class="row">
  <div class="col-6">
    <h1 class="page-header">Menu</h1>
  </div>
</div>

<hr>

<div class="row">
  <div class="col">
    <table class="table table-bordered table-condensed w-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Title (meta)</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach ($menuItems as $menuItem): ?>
          <form
            action="/src/admin/helpers/menu/update.php"
            method="POST"
            style="display: contents;"
          >
            <tr>
              <td><?= $menuItem->id; ?></td>

              <td>
                <input
                  name="id"
                  type="hidden"
                  value="<?= $menuItem->id; ?>"
                >

                <input
                  class="form-control"
                  name="title"
                  value="<?= $menuItem->title; ?>"
                  type="text"
                >
              </td>

              <td>
                <div class="d-flex gap-2">
                  <input
                    class="form-control"
                    name="titleMeta"
                    size="<?= strlen($menuItem->titleMeta); ?>"
                    value="<?= $menuItem->titleMeta; ?>"
                    type="text"
                  >
                  
                  <button
                    class="btn btn-success"
                    type="submit"
                  >
                    <i class="fa-regular fa-floppy-disk"></i>
                  </button>
                </div>
              </td>
            </tr>
          </form>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</div>
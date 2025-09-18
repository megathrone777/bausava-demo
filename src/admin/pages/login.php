<?php
  require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

  if (isset($_SESSION["user_logged_in"]) && $_SESSION["user_logged_in"] === TRUE) {
    header("Location: /admin");
  }
?>

<div class="container">
  <div class="row justify-content-center">
    <div class="col col-md-5 col-lg-4 pt-5 text-center">
      <h1 class="mb-3">Login</h1>

      <form action="/src/admin/helpers/authenticate.php" class="mb-3" method="POST">
        <div class="mb-3">
          <input placeholder="Username" type="text" name="username" class="form-control" required>
        </div>

        <div class="mb-3">
          <input placeholder="Password" type="password" name="password" class="form-control" required>
        </div>
        
        <button type="submit" class="btn btn-primary">Login</button>
      </form>

      <?php if (isset($_SESSION['login_failure'])): ?>
        <div class="alert alert-danger alert-dismissable fade show" role="alert">
          <?php
            echo $_SESSION['login_failure'];
            unset($_SESSION['login_failure']);
          ?>
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      <?php endif; ?>
    </div>
  </div>
</div>
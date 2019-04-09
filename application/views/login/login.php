<main class="-login-wrapper">
  <div class="-form-container">
	<form class="-login-form" action="<?php echo base_url('Login/userValidation') ?>" method="post">
	  <figure class="-fig-login" style="width: auto !important; height: auto !important;">
		<img src="<?php echo base_url('assets/images/login/paydro1.png') ?>" style="width: 80%" alt="">
	  </figure>

	  <div class="-field-container">
		<h1 class="-w -header-text">Welcome to Paydro Analytics</h1>
		<?php
		  echo $this->session->flashdata("error");
		?>
		<div class="form-group">
		  <input type="text" class="form-control -input-default" style="background: #ffffff !important; color: #000000 !important;" name="username" value="" placeholder="Username" required>
		</div>
		<div class="form-group">
		  <input type="password" class="form-control -input-default" style="background: #ffffff !important; color: #000000 !important;" name="password" value="" placeholder="Password" required>
		</div>
		<input type="submit" name="insert" value="Login" class="-btn -btn-default -btn-login"/>
	  </div>
	</form>
  </div>
  <img class="-login-vector" src="<?= base_url('assets/images/img-login.png') ?>" alt="">
</main>


  </main>
</body>
</html>

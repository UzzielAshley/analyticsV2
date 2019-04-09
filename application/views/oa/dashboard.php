<main class="-content-wrapper">
	<?php
  #NAVIGATION
  $this->load->view('navigation/navigation');
?>
	<div class="-main-container">
	    <div class="-row-container -count">
	      <div class="-header-count">
	        <h1 class="-realtime-count -w animated slower bounceInDown">689,897</h1>
	        <p class="-text -w">Total Users</p>
	      </div>
	      <div id="dailyUsers" style="height: 280px; width: 100vh;" class="-web">
	      </div>
	      <canvas id="dailyUsers"></canvas>
	      <div id="dailyUsersMB" style="height: 130px; width: 50vh;margin-top: -10px;" class="-mb"></div>
	    </div>		

	    <div class="-row-container -realtime">
	      <div class="-stats-container -clr1">
	        <div class="-text">
	          <p class="-user-type -w">New User</p>
	          <h1 class="-user-count -w">1,045</h1>
	        </div>
	        <a href="#" class="-lnk-more -link -clr1-b">
	          more info
	        </a>
	      </div>

	      <div class="-stats-container -clr2">
	        <div class="-text">
	          <p class="-user-type -w">Daily Active Users</p>
	          <h1 class="-user-count -w">1,045</h1>
	        </div>
	        <a href="#" class="-lnk-more -clr2-b -link">
	          more info
	        </a>
	      </div>

	      <div class="-stats-container -clr3">
	        <div class="-text">
	          <p class="-user-type -w">Weekly Active Users</p>
	          <h1 class="-user-count -w">1,045</h1>
	        </div>
	        <a href="#" class="-lnk-more -link -clr3-b">
	          more info
	        </a>
	      </div>

	      <div class="-stats-container -clr4">
	        <div class="-text">
	          <p class="-user-type -w">Monthly Active User</p>
	          <h1 class="-user-count -w">1,045</h1>
	        </div>
	        <a href="#" class="-lnk-more -link -clr4-b">
	          more info
	        </a>
	      </div>
	    </div>	
	</div>
</main>>
<?php
  #NAVIGATION
  $this->load->view('footers/footer');
?>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
<script type="text/javascript" src="<?= base_url('assets/js/dashboard/dashboard.js') ?>"></script>

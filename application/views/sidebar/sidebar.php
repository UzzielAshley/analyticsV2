<nav class="navbar -sidebar">
  <div class="container-fluid -container">
    <div class="navbar-header -nav-header">
      <h1 class="-header-logo -w">Paydro Analytics</h1>
      <figure class="-logo-fig hide">
        <img class="-logo-img" src="https://vignette.wikia.nocookie.net/logopedia/images/9/9d/Google_logo_white_2015.svg/revision/latest?cb=20150901202125" alt="">
      </figure>
      <figure class="-fig-user">
        <img class="-img-user" src="https://media.licdn.com/dms/image/C5103AQHnGMllUShjUw/profile-displayphoto-shrink_100_100/0?e=1556150400&v=beta&t=7e-jfGxw5_RWMaeRmem9eg0imKzllipjoSg-h0xL990" alt="">
      </figure>
      <span class="-spn-name -w">
        <?php
          echo  $this->session->userdata('username');
        ?>
      </span>
    </div>
    <ul class="nav navbar-nav -navbar">
      <li <?php if($this->uri->segment(1) == "overview"){echo 'class="active"';}?>>
        <a href="<?php echo base_url(); ?>dashboard">Overview</a>
      </li>
    </ul>
    <div class="-time-date-display">
      <span class="-display-date -w">
        <?php
         $monthNum = date("m");
         $monthName = date("M", mktime(0, 0, 0, $monthNum, 10));
         echo $monthName;
         echo date(" d, Y");
        ?>
      </span>
      <span class="-display-time -w">
        <?php
          echo date("h:i");
        ?>
        <small class="-f12 -w -time">
          <?php
            echo date("a");
          ?>
        </small>
      </span>
    </div>
  </div>
</nav>
<div class="-backdrop" id="backdropMB"></div>

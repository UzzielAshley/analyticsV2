<nav class="navbar -navigation">
  <div class="-container">
    <div class="navbar-header">
      <a class="-navbar-text" href="#"><?php echo $title; ?></a>
    </div>
    <div class="dropdown -user-option">
      <button class="-btn -btn-default -btn-profile dropdown-toggle" type="button" data-toggle="dropdown">
        <figure class="-fig-user">
          <!-- <img class="-img-user" src="https://media.licdn.com/dms/image/C5103AQHnGMllUShjUw/profile-displayphoto-shrink_100_100/0?e=1556150400&v=beta&t=7e-jfGxw5_RWMaeRmem9eg0imKzllipjoSg-h0xL990" alt=""> -->
        </figure>
        <span class="-spn-name">
          <?php
            echo  $this->session->userdata('username');
          ?>
        </span>
      </button>
      <ul class="dropdown-menu -drop-menu">
        <li><a href="#">Mute Notification</a></li>
        <li><a href="<?php base_url();?> login/logout">Log out</a></li>
      </ul>
    </div>
    <button type="button" name="button" class="-btn -btn-default -btn-toggle" id="menuToggle">
      <i class="glyphicon glyphicon-menu-hamburger"></i>
    </button>
  </div>
</nav>

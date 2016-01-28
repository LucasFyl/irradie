
<div id="menu">
  <a href="#" class="top right close">Close</a>
  <div class="half">
    <a href="<?php echo $pages->find('work')->url() ?>">Work</a>
    <img src="./assets/images/background-menu-work.gif" alt="#" draggable="false" />
  </div>
  <div class="half">
    <a href="<?php echo $pages->find('about')->url() ?>">About</a>
    <img src="./assets/images/background-menu-about.gif" alt="#" draggable="false" />
  </div>
</div>

<header class="<?php echo $page->id() ?>">
    <div class="menu">
      <a href="#" class="menu-trigger">Menu</a>
    </div>
    <div class="logo-wrap">
      <a href="<?php echo $site->url() ?>"><h1 class="logo">Irradié</h1></a>
    </div>
    <div class="shop">
      <a href="#" target="_blank">Shop</a>
    </div>
</header>

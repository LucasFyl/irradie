<header class="<?php echo $page->id() ?>">
    <div class="menu">
      <a href="#">Menu</a>
    </div>
    <div>
      <h1 class="logo">Irradié</h1>
    </div>
    <div class="shop">
      <a href="#" target="_blank">Shop</a>
    </div>
</header>

<div id="menu">
  <div class="half">
    <a href="<?php echo $pages->find('work')->url() ?>">Work</a>
  </div>
  <div class="half">
    <a href="<?php echo $pages->find('about')->url() ?>">About</a>
  </div>
</div>

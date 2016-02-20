
<div id="menu">
  <a href="#" class="top right close">Close</a>
  <div class="half">
    <a href="<?php echo $pages->find('work')->url() ?>">Work</a>
    <div class="cover">
      <img src="<?php echo $pages->find('home')->file('nav-work.gif')->url() ?>" alt="#" draggable="false" />
    </div>
  </div>
  <div class="half">
    <a href="<?php echo $pages->find('about')->url() ?>">About</a>
    <div class="cover">
      <img src="<?php echo $pages->find('home')->file('nav-about.gif')->url() ?>" alt="#" draggable="false" />
    </div>
  </div>

  <div class="menu-mobile hide-desktop">
    <ul>
      <li><a href="<?php echo $pages->find('work')->url() ?>">Work</a></li>
      <li><a href="<?php echo $pages->find('about')->url() ?>">About</a></li>
      <li><a href="http://irradie.tictail.com/" target="_blank">Shop</a></li>
    </ul>
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
      <a href="http://irradie.tictail.com/" target="_blank">Shop</a>
    </div>
</header>

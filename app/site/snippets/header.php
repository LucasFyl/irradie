<header class="<?php echo $page->id() ?>">
  <div class="container">
    <?php if($page->id() !== 'home'): ?>
    <h2><a href="<?php echo $site->url() ?>">Quentin Vasseur</a></h2>
    <?php endif; ?>
    <h1><?php echo $page->title() ?></h1> <!-- Quentin Vasseur, Collections, Illus etc.. -->
    <?php echo $page->text()->kirbytext() ?>

    <?php if($page->id() !== 'about'): ?>
    <div class="about-wrap">
      <a href="<?php echo $pages->find('about')->url() ?>">About</a>
    </div>
    <?php else: ?>
    <div class="about-wrap">
      <a href="<?php echo $pages->find('home')->url() ?>">Home</a>
    </div>
    <?php endif; ?>


  </div>
</header>

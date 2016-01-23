<?php snippet('head') ?>
<?php snippet('header') ?>

  <main class="main" role="main">

      <!-- TO DO: grille work  -->

      <?php foreach($page->children()->visible() as $subpage): ?>

      <!-- <section class="toSubpage">
        <div class="container">
          <div class="vertical-center">
            <h2><?php echo $subpage->title() ?></h2>
            <a href="<?php echo $subpage->url() ?>">Launch gallery</a>
          </div>
        </div>
      </section> -->

      <?php endforeach; ?>

  </main>

<?php snippet('footer') ?>

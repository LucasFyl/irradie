<?php snippet('head') ?>
  <div id="main" class="main project <?php echo $page->id() ?>">

    <?php snippet('header') ?>

    <div class="wrap">
      <div class="infos">
        <h1><?php echo $page->title() ?>
          <p class="date"><?php echo $page->year() ?></p>
        </h1>
        <div class="client">
          <p>
            <span>Client</span>
            <?php echo $page->client() ?>
          </p>
        </div>
        <div class="share">
          <ul>
            <li>Share</li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Pinterest</a></li>
          </ul>
        </div>
      </div>

      <!-- Get images without cover, limit 2 -->

      <?php $images = $page->images()->sortBy('title', 'asc')->slice(1, 2) ?>
      <?php foreach ($images as $image): ?>
        <?php  if(substr($image, -8) === 'half.jpg'): ?>
        <figure class="half">
          <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title() ?>"/>
        </figure>
        <?php else : ?>
          <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title() ?>" />
        <?php endif; ?>
      <?php endforeach; ?>

      <section>
        <div>
          <p><?php echo $page->projectType1() ?> - <?php echo $page->projectType2() ?> </p>
        </div>
        <div>
          <?php echo $page->text()->kirbytext() ?>
        </div>
      </section>

      <?php $images = $page->images()->sortBy('title', 'asc')->slice(3) ?>
      <?php foreach ($images as $image): ?>
        <?php  if(substr($image, -8) === 'half.jpg'): ?>
        <figure class="half">
          <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title() ?>"/>
        </figure>
        <?php else : ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->title() ?>" />
        <?php endif; ?>
      <?php endforeach; ?>
    </div>

    <div class="hide-desktop mobile-prevnext">
      <div>
        <?php if( $prev = $page->prevVisible() ):  ?>
          <a href="<?php echo $prev->url() ?>" class="ajaxy prev-project">Prev</a>
        <?php endif ?>
      </div>
      <div>
        <a href="<?php echo $site->page('/work')->url() ?>">All projects</a>
      </div>
      <div>
        <?php if( $next = $page->nextVisible() ): ?>
          <a href="<?php echo $next->url() ?>" class="ajaxy next-project">Next</a>
        <?php endif ?>
      </div>
    </div>
  </div>
  
  <?php snippet('prev-next') ?>

  <?php snippet('footer') ?>

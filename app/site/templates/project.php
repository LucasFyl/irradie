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
            <li><a href="#">F</a></li>
            <li><a href="#">T</a></li>
            <li><a href="#">P</a></li>
          </ul>
        </div>
      </div>

      <?php foreach($page->images()->sortBy('asc')->slice(1, 2) as $image): ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $image->title() ?>" />
      <?php endforeach; ?>

      <section>
        <div>
          <p><?php echo $page->projectType1() ?> - <?php echo $page->projectType2() ?> </p>
        </div>
        <div>
          <?php echo $page->text()->kirbytext() ?>
        </div>
      </section>

      <?php foreach($page->images()->sortBy('asc')->slice(3,4) as $image): ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $image->title() ?>" />
      <?php endforeach; ?>


      <section>
        <div><p class="text-hide">_</p></div>
        <div><?php echo $page->text2()->kirbytext() ?></div>
      </section>

      <?php foreach($page->images()->sortBy('asc')->slice(7) as $image): ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $image->title() ?>" />
      <?php endforeach; ?>
    </div>
  </div>
<?php snippet('footer') ?>

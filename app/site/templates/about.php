<?php snippet('head') ?>

  <div role="main" class="main <?php echo $page->id() ?>">

    <?php snippet('header') ?>

    <h2><?php echo $page->introText() ?></h2>

    <div>
      <div class="image"></div>
      <div class="text">
        <?php echo $page->firstText()->kirbytext() ?>
      </div>
    </div>

    <section>
        <div>
          <h2>Services</h2>
          <?php echo $page->services()->kirbytext() ?>
        </div>
        <div>
          <h2>Clients</h2>
          <?php echo $page->clients()->kirbytext() ?>
        </div>
        <div>
          <h2>Selected Online Press</h2>
          <?php echo $page->press()->kirbytext() ?>
        </div>
        <div>
          <h2>Award</h2>
          <?php echo $page->award()->kirbytext() ?>
        </div>
    </section>

    <div class="gallery gallery-1">
      <!-- TODO: Gallery -->
    </div>

    <div class="">
      <div class="image"></div>
      <div class="text">
        <?php echo $page->secondText()->kirbytext() ?>
      </div>
    </div>

    <div class="gallery gallery-2">
      <!-- TODO: Gallery -->
    </div>

    <section>
      <div class="">
        <h3>Contact us</h3>
        <?php echo $page->contactInfos()->kirbytext() ?>
        <?php echo $page->contactExtras()->kirbytext() ?>
      </div>
      <div class="">
        <h3>Follow us on:</h3>
        <?php echo $page->socialMedia()->kirbytext() ?>
        <?php echo $page->newsletter()->kirbytext() ?>
      </div>
      <div class="">
        <h3>Credit</h3>
        <h4>Design & Art Direction: Irradié</h4>
        <h4>Developpment: <a href="#">Lucas Fayolle</a></h4>
      </div>
    </section>

  </div>

<?php snippet('footer') ?>

<?php snippet('head') ?>

  <div id="main" class="main <?php echo $page->id() ?>">

    <?php snippet('header') ?>

    <section>
      <div class="big-text-block">
        <h2><?php echo $page->introText()->kirbytext() ?></h2>
      </div>
      <div class="content-wrap">
        <div class="row">
          <h3>Services</h3>
          <?php echo $page->services()->kirbytext() ?>
        </div>
        <div class="row">
          <h3>Clients</h3>
          <?php echo $page->clients()->kirbytext() ?>
        </div>
        <div class="row">
          <h3>Selected Online Press</h3>
          <?php echo $page->press()->kirbytext() ?>
        </div>
        <div class="row">
          <h3>Award</h3>
          <?php echo $page->award()->kirbytext() ?>
        </div>
      </div>
    </section>

    <section>
      <div class="content-wrap">
        <div class="image">
          <img src="<?php echo $page->image('illu-1.png')->url(); ?>" alt="" draggable="false" />
        </div>
        <section>
          <div class="title">
            <h3>Publications</h3>
          </div>
          <div class="row">
            <?php echo $page->rowPublications1()->kirbytext() ?>
          </div>
          <div class="row">
            <?php echo $page->rowPublications2()->kirbytext() ?>
          </div>
          <div class="row">
            <?php echo $page->rowPublications3()->kirbytext() ?>
          </div>
        </section>
      </div>
      <div class="big-text-block">
        <?php echo $page->firstText()->kirbytext() ?>
      </div>
    </section>
    
    <section>
      <div class="big-text-block">
        <?php echo $page->secondText()->kirbytext() ?>
      </div>
      <div class="content-wrap">
        <div class="image">
          <img src="<?php echo $page->image('illu-2.png')->url(); ?>" alt="" draggable="false" />
        </div>
        <section>
          <div class="title-wrap">
            <h3><span>Exhibitions</span></h3>
          </div>
          <div class="row">
            <?php echo $page->rowExhibitions1()->kirbytext() ?>
          </div>
          <div class="row">
            <?php echo $page->rowExhibitions2()->kirbytext() ?>
          </div>
          <div class="row">
            <?php echo $page->rowExhibitions3()->kirbytext() ?>
          </div>
        </section>
      </div>
    </section>

    <section class="footer">
      <div class="contact">
        <h3>Contact us</h3>
        <?php echo $page->contactInfos()->kirbytext() ?>
        <?php echo $page->contactExtras()->kirbytext() ?>
        <a href="mailto:stage@irradie.fr">stage@irradie.fr</a>
      </div>
      <div class="follow">
        <h3>Follow us on:</h3>
        <?php echo $page->socialMedia()->kirbytext() ?>
        <a class="ajaxy" href="<?php echo $pages->find('work/incendiaire')->url(); ?>"><?php echo $page->newsletter()->kirbytext() ?></a>
      </div>
      <div class="credit">
        <h3>Credit</h3>
        <h3>Design & Art Direction: Irradié</h3>
        <h3>Developpment: <a href="#">Lucas Fayolle</a></h3>
      </div>
    </section>

  </div>

<?php snippet('footer') ?>

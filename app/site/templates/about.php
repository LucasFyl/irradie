<?php snippet('head') ?>

  <div id="main" class="main <?php echo $page->id() ?>">

    <?php snippet('header') ?>

    <div class="intro">
      <h2><?php echo $page->introText() ?></h2>

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
      <div class="wrap">
        <?php foreach ($pages->find('about/gallery-1')->images() as $image): ?>
  				<figure>
            <img src="<?php echo $image->url() ?>" alt="<?php echo $image->title() ?>" />
  				  <figcaption>
  				    <p>Still TODO <span>dynamic Image Caption</span></p>
  				  </figcaption>
  				</figure>
  			<?php endforeach; ?>
          <figure class="infos">
            <div class="title-wrap">
              <h3><span>Publications</span></h3>
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
          </figure>
      </div>
    </div>

    <div class="separation">
      <div class="image"></div>
      <div class="text">
        <?php echo $page->secondText()->kirbytext() ?>
      </div>
    </div>

    <div class="gallery gallery-2">
      <div class="wrap">
        <?php foreach ($pages->find('about/gallery-2')->images() as $image): ?>
  				<figure>
            <img src="<?php echo $image->url() ?>" alt="<?php echo $image->title() ?>" />
  				  <figcaption>
  				    <p>Still TODO <span>Image Caption</span></p>
  				  </figcaption>
  				</figure>
  			<?php endforeach; ?>
          <figure class="infos">
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
          </figure>
      </div>
    </div>

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

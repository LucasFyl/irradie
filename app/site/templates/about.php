<?php snippet('head') ?>

  <div id="main" class="main <?php echo $page->id() ?>">

    <?php snippet('header') ?>

    <section class="first">
      <div class="big-text-block">
        <h2><?php echo $page->firstBigText()->kirbytext() ?></h2>
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

    <section class="second fixable">
      <div class="content-wrap">
        <div class="image">
          <img src="<?php echo $page->image('illu-1.gif')->url(); ?>" alt="" draggable="false" />
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
        <?php echo $page->secondBigText()->kirbytext() ?>
      </div>
    </section>
    
    <section class="third fixable">
      <div class="big-text-block">
        <?php echo $page->thirdBigText()->kirbytext() ?>
      </div>
      <div class="content-wrap">
        <div class="image">
          <img src="<?php echo $page->image('illu-2.gif')->url(); ?>" alt="" draggable="false" />
        </div>
        <section>
          <div class="title">
            <h3>Exhibitions</h3>
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
      <div class="content-wrap">
        <div class="contact row">
          <h3>Contact us</h3>
          <?php echo $page->contactInfos()->kirbytext() ?>
          <?php echo $page->contactExtras()->kirbytext() ?>
          <a href="mailto:stage@irradie.fr">stage@irradie.fr</a>
        </div>
        <div class="follow row">
          <h3>Follow us on:</h3>
          <?php echo $page->socialMedia()->kirbytext() ?>
          <?php echo $page->newsletter()->kirbytext() ?>
          <div class="newsletter">
            <label for="mce-EMAIL">
              <a href="#">Newsletter</a>
            </label>
            <form action="//irradie.us12.list-manage.com/subscribe/post?u=69842c5a95fe71b6a720b730c&amp;id=cdeb0be94e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"/>
              <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" >OK</button>

              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_69842c5a95fe71b6a720b730c_cdeb0be94e" tabindex="-1" value=""></div>
            </form>
          </div>
        </div>
        <div class="credit row">
          <h3>Credit</h3>
          <h3>Design & Art Direction: Irradié</h3>
          <h3>Developpment: <a href="#">Lucas Fayolle</a></h3>
        </div>
      </div>
    </section>

  </div>

<?php snippet('footer') ?>

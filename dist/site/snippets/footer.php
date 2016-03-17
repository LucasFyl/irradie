
      <footer>
        <div>
          <a href="mailto:info@irradie.com">info(at)irradie.com</a>
        </div>
        <ul>
          <li>
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
          </li>
          <li><a href="https://www.facebook.com/atelier.irradie/" target="_blank">Facebook</a></li>
          <li><a href="http://img-irradie.tumblr.com/" target="_blank">Tumblr</a></li>
          <li><a href="https://www.instagram.com/atelier.irradie/" target="_blank">Instagram</a></li>
            <?php foreach($site->languages() as $language): ?>
            <li<?php e($site->language() == $language, ' class="activelanguage"') ?>>
              <a href="<?php echo $page->url($language->code()) ?>">
                <?php echo html($language->name()) ?>
              </a>
            </li>
            <?php endforeach ?>
        </ul>
      </footer>
    <div class="isMobile"></div>
    
    <!-- mailchimp subscribe to newsletter script: -->
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>

    <!-- Vendor Scripts -->
    <?= js('assets/scripts/vendors.min.js') ?>
    <!-- User's Scripts -->
    <?= js('assets/scripts/scripts.min.js') ?>
      

    <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <script>
       (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
        function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
        e=o.createElement(i);r=o.getElementsByTagName(i)[0];
        e.src='https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
        ga('create','UA-67341901-1','auto');ga('send','pageview');
    </script>
  </body>
</html>


<div class="projects" style="height:<?php echo $site->find('work')->elHeight() ?>rem;">
  <?php foreach(page('work')->children()->visible() as $project): ?>

    <figure 
      data-parallax="<?php echo $project->dataParallax() ?>"
      style="top:<?php echo $project->topPosition() ?>;left:<?php echo $project->leftPosition() ?>;right:<?php echo $project->rightPosition() ?>;width:<?php echo $project->elWidth() ?>rem;height:<?php echo $project->elHeight() ?>rem;">
      <?php if ($project->hasImages()): ?>
        <a href="<?php echo $project->url() ?>" class="ajaxy">
          <?php  $w = $project->elWidth(); $h = $project->elHeight(); ?>
          <img class="lazy" data-original="<?php echo $project->image('01-cover.jpg')->url() ?>" alt="<?php echo $project->title(); ?>" 
          width="<?php echo $w ?>0" height="<?php echo $h ?>0" />
        </a>
      <?php endif; ?>
      <figcaption>
        <a href="<?php echo $project->url() ?>" class="ajaxy">
          <p>
            <?php echo $project->title() ?>
            <span><?php echo $project->projectType1() ?></span>
          </p>
        </a>
      </figcaption>
    </figure>
  <?php endforeach; ?>
</div>

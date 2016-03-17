<div class="projects">
  <?php foreach(page('work')->children()->visible() as $project): ?>

    <figure 
      data-parallax="<?php echo $project->dataParallax() ?>"
      style="top:<?php echo $project->topPosition() ?>;left:<?php echo $project->leftPosition() ?>;right:<?php echo $project->rightPosition() ?>;width:<?php echo $project->elWidth() ?>rem;height:<?php echo $project->elHeight() ?>rem;">
      <?php if ($project->hasImages()): ?>
        <a href="<?php echo $project->url() ?>" class="ajaxy">
          <img src="<?php echo $project->image('01-cover.jpg')->url() ?>" alt="<?php echo $project->title(); ?>" />
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

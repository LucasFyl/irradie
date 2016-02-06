<div class="projects">
  <?php foreach(page('work')->children()->visible() as $project): ?>

    <figure data-parallax="{'y': -150, 'smoothness': 10}" >
      <?php if ($project->hasImages()): ?>
        <a href="<?php echo $project->url() ?>" class="ajaxy">
          <img src="<?php echo $project->image('01-cover.jpg')->url() ?>" alt="<?php echo $project->title(); ?>" />
        </a>
      <?php endif; ?>
      <figcaption>
        <a href="<?php echo $project->url() ?>" class="ajaxy">
          <p>
            <?php echo $project->title() ?>
            <span><?php echo $project->projectType() ?></span>
          </p>
        </a>
      </figcaption>
    </figure>
  <?php endforeach; ?>
</div>

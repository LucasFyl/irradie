<div class="projects">
  <?php foreach(page('work')->children()->visible() as $project): ?>

    <figure>
      <?php if ($project->hasImages()): ?>
        <a href="<?php echo $project->url() ?>">
          <img src="<?php echo $project->image('01-cover.jpg')->url() ?>" alt="<?php echo $project->title(); ?>" />
        </a>
      <?php endif; ?>
      <figcaption>
        <a href="<?php echo $project->url() ?>">
          <p>
            <?php echo $project->title() ?>
            <span><?php echo $project->projectType() ?></span>
          </p>
        </a>
      </figcaption>
    </figure>


  <?php endforeach; ?>
</div>

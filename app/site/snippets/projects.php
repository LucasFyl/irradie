<?php foreach(page('work')->children()->visible() as $project): ?>

  <figure>
    <?php if ($project->hasImages()): ?>
      <img src="<?php echo $project->images()->first()->url() ?>" alt="<?php echo $project->title(); ?>" />
    <?php endif; ?>
    <figcaption>
      <p>
        <?php echo $project->title() ?>
        <span><?php echo $project->projectType() ?></span>
      </p>
    </figcaption>
  </figure>


<?php endforeach; ?>

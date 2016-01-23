<?php foreach(page('work')->children()->visible() as $project): ?>
  <h2><?php echo $project->title() ?></h2>
<?php endforeach; ?>

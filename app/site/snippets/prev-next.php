<?php if( $prev = $page->prevVisible() ):  ?>
<div class="block-prevnext prev">
	<div class="title-block">
        <a href="<?php echo $page->prev()->url() ?>">
          <p>
            <?php echo $page->prev()->title() ?>
            <span><?php echo $page->prev()->projectType2() ?></span>
          </p>
        </a>
	</div>

	<div class="img-wrap">
		<?php foreach ($page->prev()->images()->slice(1, 3) as $image): ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->prev()->title() ?>" / draggable="false">
		<?php endforeach; ?>
	</div>
</div>
<?php endif ?>

<?php if( $next = $page->nextVisible() ): ?>
<div class="block-prevnext next">
	<div class="title-block">
        <a href="<?php echo $page->next()->url() ?>">
          <p>
            <?php echo $page->next()->title() ?>
            <span><?php echo $page->next()->projectType1() ?></span>
          </p>
        </a>
	</div>
	<div class="img-wrap">
		<?php foreach ($page->next()->images()->slice(1, 3) as $image): ?>
        <img src="<?php echo $image->url() ?>" alt="<?php echo $page->next()->title() ?>" / draggable="false">
		<?php endforeach; ?>
	</div>
</div>
<?php endif ?>

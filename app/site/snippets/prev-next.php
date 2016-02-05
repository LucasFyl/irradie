<?php if( $prev = $page->prevVisible() ):  ?>
<div class="block-prevnext prev">
	<a href="<?php echo $prev->url() ?>">
		<div class="title-block">
	        <a href="<?php echo $prev->url() ?>">
	          <p>
	            <?php echo $prev->title() ?>
	            <span><?php echo $prev->projectType2() ?></span>
	          </p>
	        </a>
		</div>

		<div class="img-wrap">
			<?php foreach ($prev->images()->slice(1, 3) as $image): ?>
	        <img src="<?php echo $image->url() ?>" alt="<?php echo $prev->title() ?>" / draggable="false">
			<?php endforeach; ?>
		</div>
	</a>
</div>
<?php endif ?>

<?php if( $next = $page->nextVisible() ): ?>
<div class="block-prevnext next">
	<a href="<?php echo $next->url() ?>">
		<div class="title-block">
	        <a href="<?php echo $next->url() ?>">
	          <p>
	            <?php echo $next->title() ?>
	            <span><?php echo $next->projectType1() ?></span>
	          </p>
	        </a>
		</div>
		<div class="img-wrap">
			<?php foreach ($next->images()->slice(1, 3) as $image): ?>
	        <img src="<?php echo $image->url() ?>" alt="<?php echo $next->title() ?>" / draggable="false">
			<?php endforeach; ?>
		</div>
	</a>
</div>
<?php endif ?>

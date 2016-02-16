<?php if( $prev = $page->prevVisible() ):  ?>
<div class="block-prevnext prev hide-mobile">
	<a href="<?php echo $prev->url() ?>" class="ajaxy prev-project">
		<div class="title-block">
			<span>
				<p>
	           		<?php echo $prev->title() ?>
	            	<span><?php echo $prev->projectType2() ?></span>
	        	</p>
			</span>
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
<div class="block-prevnext next hide-mobile">
	<a href="<?php echo $next->url() ?>" class="ajaxy next-project">
		<div class="title-block">
			<span>
				<p>
	            	<?php echo $next->title() ?>
	            	<span><?php echo $next->projectType1() ?></span>
	        	</p>
			</span>
		</div>
		<div class="img-wrap">
			<?php foreach ($next->images()->slice(1, 3) as $image): ?>
	        <img src="<?php echo $image->url() ?>" alt="<?php echo $next->title() ?>" / draggable="false">
			<?php endforeach; ?>
		</div>
	</a>
</div>
<?php endif ?>

<div class="hide-desktop mobile-prevnext">
	<div>
		<?php if( $prev = $page->prevVisible() ):  ?>
			<a href="<?php echo $prev->url() ?>" class="ajaxy prev-project">Prev</a>
		<?php endif ?>
	</div>
	<div>
		<a href="<?php echo $page->('work')->url() ?>">All projects</a>
	</div>
	<div>
		<?php if( $next = $page->nextVisible() ): ?>
			<a href="<?php echo $next->url() ?>" class="ajaxy next-project">Next</a>
		<?php endif ?>
	</div>
</div>
<?php get_header(); ?>
<main class="mwSession">
	<section class="contents_head">
		<div class="contents_head-ttl">
			<h1 class="mwtrpg-font_imp">SESSION</h1>
			<span>セッション</span>
		</div>
	</section>
	<section class="mwSession__top">
		<div class="mwSession__top__wrapper">
			<div class="mwSession__top__wrapper--img fade_up_trigger">
				<img src="<?php $session_image = SCF::get('session_img');
							echo wp_get_attachment_url($session_image); ?>">
			</div>
			<div class="mwSession__top__wrapper--text fade_up_trigger">
				<h1><?php the_title(); ?></h1>
				<ul>
					<li>KP:<?php echo SCF::get('session_kp'); ?></li>
					<li>PL:<?php echo SCF::get('session_pl'); ?></li>
				</ul>
				<span><?php echo SCF::get('session_day'); ?></span>
			</div>
		</div>
	</section>
	<section class="mwSession__list">
		<div class="mwSession__list__wrapper">
			<h2 class="section-ttl mwtrpg-font_imp fade_up_trigger">CHARACTER</h2>
			<ul class="mwSession__list__wrapper__container fade_up_trigger">
				<?php
				$session_list = SCF::get('session_list');
				foreach ($session_list as $fields) {
					$images = wp_get_attachment_image_src($fields['session_pc-image'], 'full');
				?>
					<li class="mwSession__list__wrapper__container__item">
						<div class="item-deco">
							<img class="mwSession__list__wrapper__container__item--thum" src="<?php echo $images[0]; ?>">
							<div class="mwSession__list__wrapper__container__item--name">
								<h4 class="mwtrpg-font_yumin"><?php echo $fields['session_pc-name']; ?></h4>
								<span class="yomi"><?php echo $fields['session_pc-yomi']; ?></span>
								<span class="player">PL：<?php echo $fields['session_pl-name']; ?></span>
							</div>
							<div class="mwSession__list__wrapper__container__item--text">
								<p><?php echo $fields['session_pc-note']; ?></p>
							</div>
						</div>
					</li>
				<?php } ?>
			</ul>
		</div>
	</section>
	<section class="mwSession__comment">
		<div class="mwSession__comment__wrapper">
			<h2 class="section-ttl mwtrpg-font_imp fade_up_trigger">COMMENT</h2>
			<div class="mwSession__comment__inner fade_up_trigger">
				<?php the_content(); ?>
			</div>
		</div>
	</section>
</main>
<?php get_footer(); ?>
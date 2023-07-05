<!doctype html>
<html>

<head>
	<meta charset="utf-8">
	<title>GOMAMESI TRPG STUDIO</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" itemprop="keywords" content="" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/trpg_style.min.css" type="text/css" media="all" />
	<script src="https://kit.fontawesome.com/1b9b3abfee.js" crossorigin="anonymous"></script>
</head>

<body>
	<header>
		<nav class="mwtrpg_header mwtrpg-font_imp">
			<ul>
				<li><a href="#top">TOP</a></li>
				<li><a href="#chara">CHARACTER</a></li>
				<li><a href="#movie">MOVIE</a></li>
				<li><a href="#log">SESSION LOG</a></li>
				<li><a href="#profile">PROFILE</a></li>
			</ul>
		</nav>
	</header>
	<main class="mwtrpg">
		<section id="top" class="mwtrpg__top">
			<div class="mwtrpg__top__mv">
				<picture>
					<source media="(max-width: 768px)" srcset="<?php echo get_template_directory_uri(); ?>/assets/images/main_kv_pc.webp">
					<source media="(min-width: 769px)" srcset="<?php echo get_template_directory_uri(); ?>/assets/images/main_kv_pc.webp">
					<img src="<?php echo get_template_directory_uri(); ?>/assets/images/main_kv_pc.webp" width="100%" alt="">
				</picture>
				<div class="mwtrpg__top__mv__ttl">
					<h1 class="mwtrpg-font_imp">
						<span class="reveal-text">GOMAMESI</span><br>
						<span class="reveal-text">TRPG</span><br>
						<span class="reveal-text">STUDIO</span>
					</h1>
				</div>
			</div>
		</section>
		<section id="chara" class="mwtrpg__chara">
			<div class="mwtrpg__chara__container">
				<h2 class="section-ttl mwtrpg-font_imp LpGlitchText">CHARACTER</h2>
				<div class="mwtrpg__chara__container__wrapper">
					<ul class="mwtrpg__chara__container__wrapper__filters">
						<li>
							<button class="js-item-term" data-term="woman">woman</button>
						</li>
						<li>
							<button class="js-item-term" data-term="man">man</button>
						</li>
						<li>
							<button class="js-item-term" data-term="villain">villain</button>
						</li>
						<li>
							<button class="js-item-term" data-term="justice">justice</button>
						</li>
						<li>
							<button class="js-item-term" data-term="normal">normal</button>
						</li>
					</ul>
					<!-- 1.タブで管理
					2.タブを押したら下部リスト内のデータとタブのデータを比較し、適していたら表示
					3.順番を入れ替え(表示を上部へ非表示を下部へ)
					4.8つから下は非表示
					5.8つ以上のデータ群はmoreボタンを追加し別ページへ飛ばす -->
					<ul class="mwtrpg__chara__container__wrapper__list targets">
						<?php $args = array(
							'numberposts' => 12,      //表示（取得）する記事の数
							'post_type' => 'character'    //投稿タイプの指定
						);
						$posts = get_posts($args);

						if ($posts) : foreach ($posts as $post) : setup_postdata($post); ?>
								<?php $pc_profile = get_field('pc_profile'); ?>
								<li class="js-modal-open chara-box js-item" data-tag="
								<?php if ($terms = get_the_terms($post->ID, 'character-cat')) {
									foreach ($terms as $term) {
										$chra_cat = $term->slug . ",";
										echo "{$chra_cat}";
									}
								} ?>" data-modal="<?php if ($terms = get_the_terms($post->ID, 'character-tag')) {
														foreach ($terms as $term) {
															$chra_tag = $term->slug;
															echo "{$chra_tag}";
														}
													} ?>">
									<img src="<?php the_post_thumbnail_url("medium"); ?>">
								</li>
							<?php endforeach; ?>
						<?php else : //記事が無い場合 
						?>
							<p>記事はまだありません。</p>
						<?php endif;
						wp_reset_postdata(); //クエリのリセット 
						?>
					</ul>
					<?php $args = array(
						'numberposts' => 12,      //表示（取得）する記事の数
						'post_type' => 'character'    //投稿タイプの指定
					);
					$posts = get_posts($args);

					if ($posts) : foreach ($posts as $post) : setup_postdata($post); ?>
							<?php $pc_profile = get_field('pc_profile'); ?>
							<div id="<?php if ($terms = get_the_terms($post->ID, 'character-tag')) {
											foreach ($terms as $term) {
												$chra_tag = $term->slug;
												echo "{$chra_tag}";
											}
										} ?>" class="mwtrpg__chara__container__modal js-modal">
								<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
								<div class="mwtrpg__chara__container__modal--content">
									<div class="mwtrpg__chara__container__modal--content--text">
										<h3>「<?php echo $pc_profile['pc_voice_01']; ?><?php if (get_field('pc_profile')['pc_voice_02']) : ?><br><?php echo $pc_profile['pc_voice_02']; ?><?php endif; ?>」</h3>
										<ul>
											<li><span>NAME:</span>
												<p><?php echo $pc_profile['pc_name']; ?></p>
											</li>
											<li><span>AGE:</span>
												<p><?php echo $pc_profile['pc_age']; ?></p>
											</li>
											<li><span>JOB</span>
												<p><?php echo $pc_profile['pc_job']; ?></p>
											</li>
											<li><span>ILLUSTRATOR</span>
												<a href="<?php echo $pc_profile['pc_illustrator-link']; ?>" target="_blank"><?php echo $pc_profile['pc_illustrator']; ?></a>
											</li>
										</ul>
										<p><?php echo $pc_profile['pc_note']; ?></p>
										<div>
											<a href="<?php the_permalink(); ?>" target="top">more</a>
										</div>
									</div>
									<div class="mwtrpg__chara__container__modal--content--img chara_slide">
										<div class="swiper-wrapper">
											<img class="swiper-slide" src="<?php the_field('pc_image_01'); ?>">
											<?php if (get_field('pc_image_02')) : ?>
												<img class="swiper-slide" src="<?php the_field('pc_image_02'); ?>">
											<?php endif; ?>
										</div>
										<div class="swiper-button-prev"></div>
										<div class="swiper-button-next"></div>
									</div>
									<!-- <span class="js-modal-close" href="">閉じる</span> -->
								</div>
								<!--modal__inner-->
							</div>
						<?php endforeach; ?>
					<?php else : //記事が無い場合 
					?>
						<p>記事はまだありません。</p>
					<?php endif;
					wp_reset_postdata(); //クエリのリセット 
					?>
				</div>
			</div>
		</section>

		<section id="movie" class="mwtrpg__movie">
			<div class="mwtrpg__movie__container">
				<h2 class="section-ttl mwtrpg-font_imp">MOVIE</h2>
				<div class="mwtrpg__movie__container__warpper movie_a">
					<div class="swiper-wrapper">
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=Bic8Db7WiSQ">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/aegis_TeamsD.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=vqNtbHTul_E">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/kengou.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=UZw-5p24mvY">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Hallows.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=zs-wXELT7CQ">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/zosuku.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=Ds2G9LERNyI">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=SzrOCUnZL_E">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/nobady.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
					</div>
				</div>
				<div class="mwtrpg__movie__container__warpper movie_b">
					<div class="swiper-wrapper">
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=SzrOCUnZL_E">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/nobady.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=Ds2G9LERNyI">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=zs-wXELT7CQ">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/zosuku.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=UZw-5p24mvY">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Hallows.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=vqNtbHTul_E">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/kengou.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
						<div class="js-modal-video-open swiper-slide" data-url="https://www.youtube.com/watch?v=Bic8Db7WiSQ">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/aegis_TeamsD.webp" />
							<span><img src="<?php echo get_template_directory_uri(); ?>/assets/images/yt_icon_rgb.webp"></span>
						</div>
					</div>
				</div>
				<div id="modal-video" class="close js-modal-video-close">
					<div id="player"></div>
				</div>

			</div>
		</section>

		<section id="log" class="mwtrpg__log">
			<div class="mwtrpg__log__container">
				<h2 class="section-ttl mwtrpg-font_imp">SESSION LOG</h2>
				<div class="log_slider">
					<ul class="mwtrpg__log__container__warpper swiper-wrapper">

						<?php $args = array(
							'numberposts' => 12,      //表示（取得）する記事の数
							'post_type' => 'session'    //投稿タイプの指定
						);
						$posts = get_posts($args);

						if ($posts) : foreach ($posts as $post) : setup_postdata($post); ?>

								<li class="mwtrpg__log__container__warpper__box swiper-slide">
									<div class="mwtrpg__log__container__warpper__box__img">
										<img src="<?php $session_image = SCF::get('session_img');
													echo wp_get_attachment_url($session_image); ?>">
									</div>
									<div class="mwtrpg__log__container__warpper__box__text">
										<h3><?php the_title(); ?></h3>
										<ul>
											<li>KP:<?php echo SCF::get('session_kp'); ?></li>
											<li>PL:<?php echo SCF::get('session_pl'); ?></li>
										</ul>
									</div>
									<div class="mwtrpg__log__container__warpper__box__info">
										<p><?php echo SCF::get('session_day'); ?></p><a href="<?php the_permalink(); ?>" target="_top">more →</a>
									</div>
								</li>

							<?php endforeach; ?>
						<?php else : //記事が無い場合 
						?>
							<p>記事はまだありません。</p>
						<?php endif;
						wp_reset_postdata(); //クエリのリセット 
						?>
					</ul>
					<div class="swiper-scrollbar"></div>
				</div>
			</div>
		</section>
		<section id="profile" class="mwtrpg__profile">
			<div class="mwtrpg__profile__container">
				<h2 class="section-ttl mwtrpg-font_imp">PROFILE</h2>
				<div class="mwtrpg__profile__container__warpper">
					<div class="mwtrpg__profile__container__warpper--img">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/images/profile.png">
					</div>
					<div class="mwtrpg__profile__container__warpper--text">
						<h3>ごま飯</h3>
						<span>所持ルルブ：CoC6th Dx3rd ネクロニカ シノビガミ</span>
						<p>主にCoCとDx3rdをメインに活動しています。自陣やKP卓の動画をたまに作ったりしています。最近卓用の個別webページ制作にはまっています。</p>
						<div class="sns_wrapper">
							<a class="sns_wrapper--btn twitter" href=""><span class="fab fa-twitter fa-fw"></span><span>Twitter</span></a>
							<a class="sns_wrapper--btn youtube" href=""><span class="fab fa-youtube fa-fw"></span><span>Youtube</span></a>
							<a class="sns_wrapper--btn calendar" href=""><span class="fa-regular fa-calendar-check fa-fw"></span><span>フリカレ</span></a>
						</div>
						<div class="job-address">
							<p>WEBサイト・動画制作のご依頼はこちらからご連絡ください。</p>
							<a href="mailto:monoworks1127@gmail.com">monoworks1127@gmail.com</a>
						</div>

					</div>
				</div>
			</div>
		</section>

		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
			<defs>
				<filter id="filterDistortFirst">
					<feTurbulence baseFrequency="0.8" numOctaves="7"></feTurbulence>
					<feDisplacementMap in="SourceGraphic" scale="-10"></feDisplacementMap>
				</filter>

				<filter id="filterDistortSecond">
					<feTurbulence baseFrequency="0.2" numOctaves="15"></feTurbulence>
					<feDisplacementMap in="SourceGraphic" scale="12"></feDisplacementMap>
				</filter>

				<filter id="distort">
					<feTurbulence baseFrequency="0.5" numOctaves="10"></feTurbulence>
					<feDisplacementMap in="SourceGraphic" scale="8"></feDisplacementMap>
				</filter>
			</defs>
		</svg>
	</main>

	<footer>
	</footer>

	<script src="<?php echo get_template_directory_uri(); ?>/assets/script/youtube.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/script/lib/swiper-bundle.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/script/script.js"></script>

	<script>
	</script>

</body>

</html>
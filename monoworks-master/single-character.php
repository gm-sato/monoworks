<?php get_header(); ?>
<?php
$pc_profile = get_field('pc_profile');
$pc_status = get_field('pc_status');
?>
  <main class="mwCharacter">
		<section class="contents_head">
			<div class="contents_head-ttl">
				<h1 class="mwtrpg-font_imp">CHARACTER</h1>
				<span>キャラクター</span>
			</div>
		</section>
		<section class="mwCharacter__top">
			<div class="mwCharacter__top__wrapper">
				<div class="mwCharacter__top__wrapper__text">
					<div class="mwCharacter__top__wrapper__text--ttl fade_up_trigger fade_up">
						<h2 class="mwtrpg-font_yumin"><?php echo $pc_profile['pc_name']; ?></h2>
						<span><?php echo $pc_profile['pc_yomi']; ?></span>
						<h3>illustrator:<a href="" target="_blank"><?php echo $pc_profile['pc_illustrator']; ?></a></h3>
					</div>
					<div class="mwCharacter__top__wrapper__text--deco fade_up_trigger fade_up">
						<p><?php echo $pc_profile['pc_note']; ?></p>
					</div>
                    <?php if( get_field('pc_image_02') ):?>
					<div class="mwCharacter__top__wrapper__text--slideBtn fade_up_trigger fade_up">
						<h4>IMAGE</h4>
						<div id="pagination" class="swiper-pagination"></div>
					</div>
                    <?php endif; ?>
					<div class="mwCharacter__top__wrapper__text--status fade_up_trigger fade_up">
						<h4>STATUS</h4>
						<div class="chart-size">
							<canvas id="myRadarChart"></canvas>
						</div>
					</div>
				</div>


				<div class="mwCharacter__top__wrapper__img chara_slide fade_up_trigger fade_up">
					<!-- ここに立ち絵 -->
					<div class="swiper-wrapper">
                        <img class="swiper-slide" src="<?php the_field('pc_image_01'); ?>">
                        <?php if( get_field('pc_image_02') ):?>
                            <img class="swiper-slide" src="<?php the_field('pc_image_02'); ?>">
                        <?php endif; ?>
					</div>
					<div class="chara_lines">
						<p class="mwtrpg-font_yumin text-bold">「問題ありません。対象を鎮圧します」</p>
						<!-- <p>「ここに台詞が入ります」</p> -->
					</div>
				</div>
			</div>
		</section>
		<section class="mwCharacter__session">
			<h2 class="section-ttl mwtrpg-font_imp fade_up_trigger fade_up">LOG</h2>
			<div class="contents_slide--slider log_slider">
				<?php if (( get_post_type() == 'session')) : ?>
				<ul class="swiper-wrapper">
					<?php
  // ページ数
  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
query_posts( array(
    'post_type' => 'session',
    'taxonomy' => 'session-tag',
    'term' => 'tatumiya-saeko',
    'posts_per_page' => 4,
    'paged' => $paged,
    'order' => 'DESC'
    )
  );
  if (have_posts()) :while (have_posts()) :
    the_post();
  ?>
  <li class="swiper-slide fade_up_trigger fade_up">
						<div class="contents_slide--img">
							<img src="<?php $session_image = SCF::get('session_img'); echo wp_get_attachment_url($session_image); ?>">
						</div>
						<div class="contents_slide--text">
							<h3><?php the_title(); ?></h3>
							<ul>
								<li>KP:<?php echo SCF::get('session_kp'); ?></li>
								<li>PL:<?php echo SCF::get('session_pl'); ?></li>
							</ul>
						</div>
						<div class="contents_slide--more">
							<p><?php echo SCF::get('session_day'); ?></p><a href="<?php echo esc_url(get_post_type_archive_link(get_post_type())); ?>" target="_top">more →</a>
						</div>
					</li>
  <?php
  endwhile;
  endif;
  wp_reset_query();
  ?>

				

					<!-- <li class="swiper-slide fade_up_trigger fade_up">
						<div class="contents_slide--img">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp">
						</div>
						<div class="contents_slide--text">
							<h3>ひこばゆる太陽と革命の番審</h3>
							<ul>
								<li>KP:ひかみ</li>
								<li>PL:niboshi/ちあり/うみこ/ごま飯</li>
							</ul>
						</div>
						<div class="contents_slide--more">
							<p>2022/12/02</p><a href="" target="_top">more →</a>
						</div>
					</li>

					<li class="swiper-slide fade_up_trigger fade_up">
						<div class="contents_slide--img">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp">
						</div>
						<div class="contents_slide--text">
							<h3>ひこばゆる太陽と革命の番審</h3>
							<ul>
								<li>KP:ひかみ</li>
								<li>PL:niboshi/ちあり/うみこ/ごま飯</li>
							</ul>
						</div>
						<div class="contents_slide--more">
							<p>2022/12/02</p><a href="" target="_top">more →</a>
						</div>
					</li>

					<li class="swiper-slide fade_up_trigger fade_up">
						<div class="contents_slide--img">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp">
						</div>
						<div class="contents_slide--text">
							<h3>ひこばゆる太陽と革命の番審</h3>
							<ul>
								<li>KP:ひかみ</li>
								<li>PL:niboshi/ちあり/うみこ/ごま飯</li>
							</ul>
						</div>
						<div class="contents_slide--more">
							<p>2022/12/02</p><a href="" target="_top">more →</a>
						</div>
					</li>
					<li class="swiper-slide fade_up_trigger fade_up">
						<div class="contents_slide--img">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp">
						</div>
						<div class="contents_slide--text">
							<h3>ひこばゆる太陽と革命の番審</h3>
							<ul>
								<li>KP:ひかみ</li>
								<li>PL:niboshi/ちあり/うみこ/ごま飯</li>
							</ul>
						</div>
						<div class="contents_slide--more">
							<p>2022/12/02</p><a href="" target="_top">more →</a>
						</div>
					</li>
					<li class="swiper-slide fade_up_trigger fade_up">
						<div class="contents_slide--img">
							<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp">
						</div>
						<div class="contents_slide--text">
							<h3>ひこばゆる太陽と革命の番審</h3>
							<ul>
								<li>KP:ひかみ</li>
								<li>PL:niboshi/ちあり/うみこ/ごま飯</li>
							</ul>
						</div>
						<div class="contents_slide--more">
							<p>2022/12/02</p><a href="" target="_top">more →</a>
						</div>
					</li> -->
				</ul>
				<?php endif; ?>
				<div class="swiper-scrollbar"></div>
			</div>
		</section>
	</main>
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js"></script>
    <script>
		// var chartItem = function () {
		var ctx = document.getElementById("myRadarChart");
		var myRadarChart = new Chart(ctx, {
			//グラフの種類
			type: 'radar',
			//データの設定
			data: {
				labels: ['STR', 'CON', 'POW', 'DEX', 'SIZ', 'APP', 'INT', 'EDU'],
				datasets: [{
					label: '',
					//グラフのデータ
					data: [<?php echo $pc_status['str']; ?>, <?php echo $pc_status['con']; ?>, <?php echo $pc_status['pow']; ?>, <?php echo $pc_status['dex']; ?>, <?php echo $pc_status['siz']; ?>, <?php echo $pc_status['app']; ?>, <?php echo $pc_status['int']; ?>, <?php echo $pc_status['edu']; ?>],
					// データライン
					borderColor: '#fff',
				}],
			},
			options: {
				elements: {
					line: {
						borderWidth: 3
					}
				},
				scales: {
					r: {
						//グラフの最小値・最大値
						min: 0,
						max: 18,
						//背景色
						backgroundColor: '#000',
						angleLines: {
							color: 'green'
						},
						grid: {
							color: 'pink'
						},
						pointLabels: {
							color: '#fff'
						},
						ticks: {
							display: false
						}
					}
				},
				plugins: {
					legend: {
						display: false
					}
				}
			},
		});
	</script>
<?php get_footer(); ?>
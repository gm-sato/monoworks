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
						<li class="js-modal-open chara-box js-item" data-tag="woman,villain" data-modal="modal01"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_01.webp"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman,villain" data-modal="modal02"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_02.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman,justice" data-modal="modal03"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_03.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal04"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_04.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal05"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_05.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal06"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_06.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal07"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_07.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman,normal" data-modal="modal08"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_08.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman,villain" data-modal="modal01"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_01.webp"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman,villain" data-modal="modal02"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_02.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman,justice" data-modal="modal03"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_03.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal04"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_04.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal05"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_05.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal06"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_06.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman" data-modal="modal07"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_07.png"></li>
						<li class="js-modal-open chara-box js-item" data-tag="woman,normal" data-modal="modal08"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/chara_08.png"></li>
					</ul>
					<div id="modal01" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>Good Luck</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>ハッカー</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>もぎゃこづ</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/GoodLuck_02.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/GoodLuck_01.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal01-->
					<div id="modal02" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>鬼</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>ここにJOBが入ります</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>もぎゃこづ</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/ogre_01.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/ogre_02.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal02-->
					<div id="modal03" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>龍宮 冴子</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>ハッカー</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>もぎゃこづ</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/saeko_01.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/saeko_02.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal03-->
					<div id="modal04" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>ムスビメ ホドキ</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>ハッカー</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>心肺停止</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/hodoki_01.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/hodoki_02.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal04-->
					<div id="modal05" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>天災</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>ハッカー</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>心肺停止</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/tensai_01.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/tensai_02.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal05-->

					<div id="modal06" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>鈴 紅花</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>スパイ</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>玖森</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/rin_01.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/rin_02.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal06-->

					<div id="modal07" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>屍</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>ハッカー</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>心肺停止</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/kabane_01.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/kabane_02.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal07-->
					<div id="modal08" class="mwtrpg__chara__container__modal js-modal">
						<div class="mwtrpg__chara__container__modal--bg js-modal-close"></div>
						<div class="mwtrpg__chara__container__modal--content">
							<div class="mwtrpg__chara__container__modal--content--text">
								<h3>「ここにセリフが入ります。ここにセリフが入ります。」</h3>
								<ul>
									<li><span>NAME:</span>
										<p>風弥 志乃</p>
									</li>
									<li><span>AGE:</span>
										<p>27</p>
									</li>
									<li><span>JOB</span>
										<p>私立探偵</p>
									</li>
									<li><span>ILLUSTRATOR</span>
										<p>もぎゃこづ</p>
									</li>
								</ul>
								<p>ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。ここに説明が入ります。</p>
							</div>
							<div class="mwtrpg__chara__container__modal--content--img chara_slide">
								<div class="swiper-wrapper">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/kazami_01.png">
									<img class="swiper-slide" src="<?php echo get_template_directory_uri(); ?>/assets/images/chara/kazami_02.png">
								</div>
								<div class="swiper-button-prev"></div>
								<div class="swiper-button-next"></div>
							</div>
							<!-- <span class="js-modal-close" href="">閉じる</span> -->
						</div>
						<!--modal__inner-->
					</div>
					<!--modal07-->
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
						<li class="mwtrpg__log__container__warpper__box swiper-slide">
							<div class="mwtrpg__log__container__warpper__box__img">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/bash.webp">
							</div>
							<div class="mwtrpg__log__container__warpper__box__text">
								<h3>B'ASH</h3>
								<ul>
									<li>KP:ごま飯</li>
									<li>PL:山田/みり/ちあり/けにあ</li>
								</ul>
							</div>
							<div class="mwtrpg__log__container__warpper__box__info">
								<p>2022/00/00</p><a href="" target="_top">more →</a>
							</div>
						</li>
						<li class="mwtrpg__log__container__warpper__box swiper-slide">
							<div class="mwtrpg__log__container__warpper__box__img">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Hallows.webp">
							</div>
							<div class="mwtrpg__log__container__warpper__box__text">
								<h3>かいぶつたちとマホラカルト</h3>
								<ul>
									<li>KP:きりぅ</li>
									<li>PL:けにあ/ばきょむ/ごま飯/みずしー</li>
								</ul>
							</div>
							<div class="mwtrpg__log__container__warpper__box__info">
								<p>2022/00/00</p><a href="" target="_top">more →</a>
							</div>
						</li>
						<li class="mwtrpg__log__container__warpper__box swiper-slide">
							<div class="mwtrpg__log__container__warpper__box__img">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Hallows.webp">
							</div>
							<div class="mwtrpg__log__container__warpper__box__text">
								<h3>かいぶつたちとマホラカルト</h3>
								<ul>
									<li>KP:きりぅ</li>
									<li>PL:けにあ/ばきょむ/ごま飯/みずしー</li>
								</ul>
							</div>
							<div class="mwtrpg__log__container__warpper__box__info">
								<p>2022/00/00</p><a href="" target="_top">more →</a>
							</div>
						</li>
						<li class="mwtrpg__log__container__warpper__box swiper-slide">
							<div class="mwtrpg__log__container__warpper__box__img">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Hallows.webp">
							</div>
							<div class="mwtrpg__log__container__warpper__box__text">
								<h3>かいぶつたちとマホラカルト</h3>
								<ul>
									<li>KP:きりぅ</li>
									<li>PL:けにあ/ばきょむ/ごま飯/みずしー</li>
								</ul>
							</div>
							<div class="mwtrpg__log__container__warpper__box__info">
								<p>2022/00/00</p><a href="" target="_top">more →</a>
							</div>
						</li>
						<li class="mwtrpg__log__container__warpper__box swiper-slide">
							<div class="mwtrpg__log__container__warpper__box__img">
								<img src="<?php echo get_template_directory_uri(); ?>/assets/images/Hallows.webp">
							</div>
							<div class="mwtrpg__log__container__warpper__box__text">
								<h3>かいぶつたちとマホラカルト</h3>
								<ul>
									<li>KP:きりぅ</li>
									<li>PL:けにあ/ばきょむ/ごま飯/みずしー</li>
								</ul>
							</div>
							<div class="mwtrpg__log__container__warpper__box__info">
								<p>2022/00/00</p><a href="" target="_top">more →</a>
							</div>
						</li>
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
						<span>所持ルルブ：</span>
						<p>動画やらなんやらを作ってます。</p>
						<div class="sns_wrapper">
							<a class="sns_wrapper--btn twitter" href=""><span class="fab fa-twitter fa-fw"></span><span>Twitter</span></a>
							<a class="sns_wrapper--btn youtube" href=""><span class="fab fa-youtube fa-fw"></span><span>Youtube</span></a>
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
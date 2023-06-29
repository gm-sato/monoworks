<?php
/*
パーツ：header
*/
?>
<!DOCTYPE html>

<head>
	<meta charset="utf-8">
	<title>GOMAMESI TRPG STUDIO</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="keywords" itemprop="keywords" content="" />
	<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/css/trpg_style.min.css" type="text/css" media="all" />
	<script src="https://kit.fontawesome.com/1b9b3abfee.js" crossorigin="anonymous"></script>
</head>

<body>
<?php if ( is_home() || is_front_page() ) { ?>
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
    <?php } else { ?>
    <header>
        <nav class="mwtrpg_header mwtrpg-font_imp">
			<ul>
				<li><a href="/#top">TOP</a></li>
				<li><a href="/character/">CHARACTER</a></li>
				<li><a href="#movie">MOVIE</a></li>
				<li><a href="#log">SESSION LOG</a></li>
				<li><a href="#profile">PROFILE</a></li>
			</ul>
		</nav>
	</header>
    <?php } ?>
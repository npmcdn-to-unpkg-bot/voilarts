<?php get_header(); ?>

    <div class="white-wrap">
        <div id="app">

            <router-view></router-view>

        </div>
    </div>


<template id="post-list-template">
    <div class="container">
        <div class="post-list">
            <article v-for="post in posts" class="post">
                <div class="post-content">
                    <h2>titulo: {{ post.title.rendered }}</h2>
                    <h2>{{ post.id }}</h2>
                </div>
            </article>
        </div>
    </div>

</template>

<template id="slider-vl">
    {{mensaje}}
ppp
</template>
	<main role="main">
		<!-- section -->
		<section>

			<h1><?php _e( 'Latest Posts', 'html5blank' ); ?></h1>

			<?php get_template_part('loop'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>

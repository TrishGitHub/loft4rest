<template lang="pug">
	.wrapper.blog-page
		header.main-header
			section.about
				.about-img
					img(src="../assets/images/content/Ira-Noschenko.jpg", class="about-img-src", alt="Ира Нощенко")
				h1.about-ttl Ира Нощенко
				h2.about-subttl Личный сайт веб разработчика
</template>

<script>
    export default {
        name: 'BlogPage',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style>

</style>

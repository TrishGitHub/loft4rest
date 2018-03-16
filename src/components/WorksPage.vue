<template lang="pug">
	.wrapper.work-page
		header.main-header
			section.about
				.about-img
					img(src="../assets/images/content/Ira-Noschenko.jpg", class="about-img-src", alt="Ира Нощенко")
				h1.about-ttl Ира Нощенко
				h2.about-subttl Личный сайт веб разработчика
		.main-content

</template>

<script>
    export default {
        name: 'WorksPage',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style>
	.main-content {
		background: #fff;
	}

</style>

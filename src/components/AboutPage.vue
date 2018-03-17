<template lang="pug">
	.wrapper.page__inner.page__about
		header.main-header
		main.main-content.wrap__2cols
			section.sec__about
				.sec-head
					h2.sec-ttl Обо мне
				.sec-body
					.sec-img
						img(src="../assets/images/content/Ira-Noschenko.jpg", class="", alt="Ира Нощенко")
					h3.sec-subttl Кто я
					.sec-txt
						p Я веб разработчик из Новосибирска. Мне 27 лет. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.
						p Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите,как тут всё классно и красиво!
			section.sec__skills
				h3.sec-subttl Чем я могу быть вам полезна
				.sec-txt
					p Больше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.
				ul.skill-list
					li.skill-head Frontend
					li.skill-item
						span.skill-ttl HTML5
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl CSS3
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-35(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl JavaScript
							br
							| & jQuery
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
				ul.skill-list
					li.skill-head Backend
					li.skill-item
						span.skill-ttl PHP
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl mySQL
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Node.js
							br
							| & npm
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Mongo.db
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
				ul.skill-list
					li.skill-head WorkFlow
					li.skill-item
						span.skill-ttl Git
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Gulp
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Bower
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
		section.sec__map
		section.sec__contacts
			h3.sec-subttl Контакты
			ul.social-list
				li.social-item
					a(href="#", class="social-link", target="_blank")
						svg(width="22" height="22" class="social-svg")
							use(xlink:href="../assets/images/icons/icon-sprite.svg#ico-skype")
						| i.noschenko
				li.social-item
					a(href="#", class="social-link", target="_blank") i.noschenko@gmail.com
				li.social-item
					a(href="#", class="social-link", target="_blank") +38(050)150-0-160
				li.social-item
					a(href="#", class="social-link", target="_blank") Одесса, Украина
		footer.footer__main
			section.sec__bottom
				.note
					| Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool.
				nav.nav__footer
					ul.nav-list
						li.nav-item
							router-link(to='/works', class="nav-link") Мои работы
						li.nav-item
							router-link(to='/about', class="nav-link") Обо мне
						li.nav-item
							router-link(to='/blog', class="nav-link") Блог
						li.nav-item
							router-link(to='/', class="nav-link") Авторизация
				.cite
					| Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.
					p
						| —
						span
							| Martin Golding
			.sec__copy
				| © Владимир Астахов | Создано с любовью в LoftSchool | 2016


</template>

<script>
   
    export default {
        components: {
	},
        name: 'AboutPage',
        data () {
            return {
                msg: ''
            }
        }
    }
</script >

<style lang="scss">
	
	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';
	
	.page__about {
		.footer__main {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
</style>

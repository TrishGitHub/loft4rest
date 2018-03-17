<template lang="pug">
	.wrapper.page__inner
		header.main-header
		main.main-content.content_2cols
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

	.page__inner { background: none;
		.main-header { height: 600px; background: url("../assets/images/bg/water.jpg") 50% 50% no-repeat; }
	};
	.content_2cols { display: flex; }
	
	.sec {
		&-ttl {position: relative; font-family: $font-sansus; font-size: 44px; text-transform: uppercase; color: rgba(55, 62, 66, 255);
			&::after {
				content: "";
				position: absolute;
				bottom: -10px;
				left: 0;
				right: 0;
				margin: auto;
				width: 90px;
				height: 3px;
				display: block;
				background: rgba(55, 62, 66, 255);
			}
		}
		&-subttl {position: relative; font-family: $font-sansus; font-size: 25px; text-transform: uppercase; color: rgba(86, 99, 88, 255);
			&::after {
				content: "";
				position: absolute;
				bottom: -10px;
				left: 0;
				right: 0;
				margin: auto;
				width: 90px;
				height: 3px;
				display: block;
				background: rgba(86, 99, 88, 255);
			}
		}
		&-txt {text-align: left; color: rgba(86, 99, 88, 255);}
		&-img img { width: 100%; }
		&__about { position: relative; display: flex; width: 50%; padding: 20px; background: #ebefe2;
			&::before {
				content: "";
				position: absolute;
				top: -150px;
				left: 0;
				display: block;
				width: 0;
				height: 0;
				border: 0 solid transparent;
				border-bottom-width: 0;
				border-top-width: 150px;
				border-left: 50vw solid #ebefe2;
			}
			.sec-head, .sec-body { width: 50%; }
		}
		&__skills { position: relative; width: 50%; padding: 20px; background: #f4f5f0;
			&::after {
				content: "";
				position: absolute;
				top: -150px;
				left: 0;
				display: block;
				width: 0;
				height: 0;
				border: 0 solid transparent;
				border-bottom-width: 0;
				border-top-width: 150px;
				border-right: 50vw solid #f4f5f0;
			}
		}
		&__map { height: 1124px; background: url("../assets/images/bg/map.jpg") 50% 50% no-repeat; }
		&__contacts { position: absolute; left: 0; right: 0; bottom: 500px; width: 300px; margin: auto; padding: 40px; background: rgba(255, 255, 255, .6); }
		&__bottom { display: flex; flex-wrap: wrap; padding: 30px; color: #fff;  background: rgba(0, 0, 0, .6);
			div:last-child::after { display: none; }
		}
		&__copy {padding: 10px; color: rgba(255, 255, 255, .6); background: rgba(100, 146, 87, .9); }
	}
	
	.social {
		&-list { padding-left: 0; font-family: $font-roboto; font-weight: 500; text-transform: none; text-align: left;
		
		}
		&-item {padding: 15px 0;}
		&-link {text-decoration: none; color: rgba(86, 99, 88, 255);}
	}

	.skill{
		&-list {font-size: 22px; padding-left: 0; font-weight: 600; text-align: left; color: rgba(86, 99, 88, 255);}
		&-item {
			position: relative;
			display: inline-block;
			padding: 10px 10px 10px 0;

		}
		&-ttl {
			position: absolute;
			top: 40%;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			text-align: center;
			padding-right: 10px;
			font-size: 11px;
			color: rgba(78, 136, 57, 255);
			pointer-events: none;
		}
	}
	
	.circles {
		width: 110px;
		height: 110px;
		fill: none;
		stroke-width: 15;
	}
	.circle__first {
		stroke: #dfdcd5;
	}
	.circle__second {
		stroke: $green-light;
		stroke-dasharray: .0010 282.6;
		transition: all 1s;
	}

	
	.circles .circle-0 { stroke-dasharray: .001 282.6; }
	.circles .circle-10 { stroke-dasharray: 28.26 282.6; }
	.circles .circle-15 { stroke-dasharray: 42.39 282.6; }
	.circles .circle-20 { stroke-dasharray: 56.52 282.6; }
	.circles:hover .circle-25 { stroke-dasharray: 70.65 282.6; }
	.circles .circle-30 { stroke-dasharray: 84.78 282.6; }
	.circles .circle-35 { stroke-dasharray: 98.91 282.6; }
	.circles .circle-40 { stroke-dasharray: 113.04 282.6; }
	.circles .circle-45 { stroke-dasharray: 127.17 282.6; }
	.circles .circle-50 { stroke-dasharray: 141.3 282.6; }
	.circles .circle-55 { stroke-dasharray: 155.43 282.6; }
	.circles .circle-60 { stroke-dasharray: 169.56 282.6; }
	.circles .circle-65 { stroke-dasharray: 183.69 282.6; }
	.circles .circle-70 { stroke-dasharray: 197.82 282.6; }
	.circles .circle-75 { stroke-dasharray: 211.95 282.6; }
	.circles .circle-80 { stroke-dasharray: 226.08 282.6; }
	.circles .circle-85 { stroke-dasharray: 240.21 282.6; }
	.circles .circle-90 { stroke-dasharray: 254.34 282.6; }
	.circles .circle-95 { stroke-dasharray: 268.47 282.6; }
	.circles .circle-100 { stroke-dasharray: 282.6 282.6; }
	
	.footer__main {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	.note, .nav__footer, .cite { position: relative; width: 33.3%; text-align: left;
		&::after {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			height: 90%;
			width: 1px;
			display: block;
			background: rgba(255, 255, 255, .4) ;
		}
	}
	.note { padding-right: 11%; box-sizing: border-box; font-weight: 300; opacity: .6; }
	.cite {padding: 0 30px; box-sizing: border-box; opacity: .6;
		p { margin: 0; }
	}
	
	
	
	.nav {
		&-list {
			display: flex;
			align-items: center;
			margin: 0;
			padding-left: 0;
		}
		&-item { padding: 0 20px;}
		&-link { color: #fff; text-decoration: none; }
	}

</style>

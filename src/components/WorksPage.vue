<template lang="pug">
	.wrapper.page__inner.page__works(v-bind:class="{ 'burger-open': menuOpen }")
		nav.nav__burger
			ul.nav-wrap
				li.nav-item
					router-link(to='/works', class="nav-link") Мои работы
				li.nav-item
					router-link(to='/blog', class="nav-link") Блог
				li.nav-item
					router-link(to='/about', class="nav-link") Обо мне
				li.nav-item
					router-link(to='/', class="nav-link") Авторизация
		header.main-header
			.header__top
				ul.social-list
					li.social-item
						a(href="https://www.facebook.com/Ira.Noshchenko", class="social-link", target="_blank") Facebook
							svg(class="social-svg fb-ico")
								use(xlink:href='#fb-svg' width="12px" height="25px")
					li.social-item
						a(href="https://github.com/TrishGitHub", class="social-link", target="_blank") Github
							svg(class="social-svg gh-ico")
								use(xlink:href='#git-svg' width="26px" height="22px")
					li.social-item
						a(href="https://www.linkedin.com/in/ira-noschenko-12032a10b/", class="social-link", target="_blank") Linkedin
							svg(class="social-svg in-ico")
								use(xlink:href='#in-svg' width="24px" height="23px")
								
				div(class="burger-wrap" @click="toOpenMenu")
					i.burger-line
			section.sec__user
						a(href="/", class="user-link")
							.user-img
								img(src="../assets/images/content/Ira-Noschenko.jpg", class="user-img-src", alt="Ира Нощенко")
							h1.user-ttl Ира Нощенко
							h2.user-subttl Личный сайт веб разработчика
			.arrow-bounce
				svg(class="arrow-down-svg")
					use(xlink:href='#arrow-down-svg' width="26px" height="26px")
		main.content__main.content__wide
			h2.sec-ttl Мои работы
			.wrap__3cols
				section.sec__site
					.site-item
						h3.sec-subttl Сайт школы онлайн образования
						ul.site-tags
							li.site-tag HTML,
							li.site-tag CSS,
							li.site-tag Javascript
						a(href="https://loftschool.com/", class="btn btn__green", target="_blank") Посмотреть сайт
						
				section.sec__works
					.works-item
						#carousel(class="carousel-wrap")
							a(href='#')
								img#item-1(src='../assets/images/content/works/1.jpg', class="carousel-img", style='display: inline; left: 193px; top: 87px; visibility: visible; position: absolute; z-index: 4; opacity: 0.8; width: 224px; height: 252px;')
							a(href='#')
								img#item-2(src='../assets/images/content/works/2.jpg', class="carousel-img carousel-center" style='display: inline; left: 320px; top: 60px; visibility: visible; position: absolute; z-index: 5; opacity: 1; width: 320px; height: 360px;')
							a(href='#')
								img#item-3(src='../assets/images/content/works/3.jpg', class="carousel-img" style='display: inline; left: 543px; top: 87px; visibility: visible; position: absolute; z-index: 4; opacity: 0.8; width: 224px; height: 252px;')
							a(href='#')
								img#item-4(src='../assets/images/content/works/4.jpg', class="carousel-img" style='display: inline; left: 681.6px; top: 105.9px; visibility: visible; position: absolute; z-index: 3; opacity: 0.64; width: 156.8px; height: 176px;')
							a(href='#')
								img#item-5(src='../assets/images/content/works/5.jpg', class="carousel-img" style='display: inline; left: 768.12px; top: 119.13px; visibility: visible; position: absolute; z-index: 2; opacity: 0.512; width: 109.76px; height: 124px;')
							a(href='#')
								img#item-6(src='../assets/images/content/works/6.jpg', class="carousel-img" style='display: inline; left: 441.584px; top: 128.391px; visibility: visible; position: absolute; z-index: 1; opacity: 0; width: 76.832px; height: 88px;')
							a(href='#')
								img#item-7(src='../assets/images/content/works/7.jpg', class="carousel-img" style='display: inline; left: 441.584px; top: 128.391px; visibility: visible; position: absolute; z-index: 1; opacity: 0; width: 76.832px; height: 88px;')
							a(href='#')
								img#item-8(src='../assets/images/content/works/8.jpg', class="carousel-img" style='display: inline; left: 82.12px; top: 119.13px; visibility: visible; position: absolute; z-index: 2; opacity: 0.512; width: 109.76px; height: 124px;')
							a(href='#')
								img#item-9(src='../assets/images/content/works/9.jpg', class="carousel-img" style='display: inline; left: 121.6px; top: 105.9px; visibility: visible; position: absolute; z-index: 3; opacity: 0.64; width: 156.8px; height: 176px;')
			
				.control-wrap
							.control-item
							.control-item
						
			
			section.sec__review
				.sec-ttl Что обо мне говорят
				.review-wrap
					article.review-item
						.review-img
							img(src="../assets/images/content/reviews/Dmitriy-Kovalchuk.jpg", class="review-img-src", title="Ковальчук Дмитрий, основатель школы LoftSchool ")
						.review-txt
							| Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
						.review-author
							| Ковальчук Дмитрий
							span - основатель школы LoftSchool
					article.review-item
						.review-img
							img(src="../assets/images/content/reviews/Vladimir-Sabantshev.jpg", class="review-img-src", title="")
						.review-txt
							| Ира проходила обучение веб-разработке не где-то, а в LoftSchool! 2 месяца только самых тяжелых испытаний и бессонных ночей!
						.review-author
							| Сабанцев Владимир
							span - преподаватель школы LoftSchool
							
				section.sec__contacts
					h3.sec-subttl Связаться со мной
					form(class="form" name="contact-form")
						.form-group
							input(type="text", name="login", class="input-field", placeholder="Имя")
							input(type="password", name="password", class="input-field" , placeholder="Email")
							textarea(rows="5", class="input-field", placeholder="Ваше сообщение")
						.form-group(class="btn_group")
							button(type='submit', value='Submit', class="btn btn__green") Отправить
							button(type='reset', value='Reset', class="btn btn__green") Очистить

		article.reviev-item
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
					ul.social-list
						li.social-item
							a(href="https://www.facebook.com/Ira.Noshchenko", class="social-link", target="_blank") Facebook
								svg(class="social-svg fb-ico")
									use(xlink:href='#fb-svg' width="12px" height="25px")
						li.social-item
							a(href="https://github.com/TrishGitHub", class="social-link", target="_blank") Github
								svg(class="social-svg gh-ico")
									use(xlink:href='#git-svg' width="26px" height="22px")
						li.social-item
							a(href="https://www.linkedin.com/in/ira-noschenko-12032a10b/", class="social-link", target="_blank") Linkedin
								svg(class="social-svg in-ico")
									use(xlink:href='#in-svg' width="24px" height="23px")
				.cite
					| Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.
					p
						| —
						span
							| Martin Golding
			.sec__copy
				| © Владимир Астахов | Создано с любовью в LoftSchool | 2016
				
		svg(xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', style='display: none;')
			symbol#fb-svg(viewbox='0 0 12 25')
				path(d='M2.61867327,4.83178654 C2.61867327,5.46049884 2.61867327,8.26670534 2.61867327,8.26670534 L0.0413465347,8.26670534 L0.0413465347,12.4669374 L2.61867327,12.4669374 L2.61867327,24.9485499 L7.9130495,24.9485499 L7.9130495,12.4672854 L11.4658218,12.4672854 C11.4658218,12.4672854 11.7985545,10.4533063 11.9598416,8.2512181 C11.4974257,8.2512181 7.93306931,8.2512181 7.93306931,8.2512181 C7.93306931,8.2512181 7.93306931,5.80765661 7.93306931,5.37935035 C7.93306931,4.95011601 8.51031683,4.37273782 9.08085149,4.37273782 C9.65031683,4.37273782 10.8522178,4.37273782 11.9654257,4.37273782 C11.9654257,3.80087007 11.9654257,1.824942 11.9654257,5.80046404e-05 C10.4793267,5.80046404e-05 8.78863366,5.80046404e-05 8.04338614,5.80046404e-05 C2.48780198,-0.000232018561 2.61867327,4.20417633 2.61867327,4.83178654 Z')
			
			symbol#in-svg(viewbox='0 0 24 22.938')
				path(d='M2.875,5.344H2.844C1.109,5.344,0,4.156,0,2.672C0,1.156,1.156,0,2.906,0c1.766,0,2.859,1.156,2.875,2.672   C5.797,4.156,4.672,5.344,2.875,5.344z M5.453,22.938H0.297V7.453h5.156V22.938z M24,22.938h-5.141v-8.281   c0-2.078-0.75-3.5-2.609-3.5c-1.422,0-2.266,0.953-2.641,1.875c-0.125,0.344-0.172,0.797-0.172,1.266v8.641H8.297   c0.063-14.031,0-15.484,0-15.484h5.141v2.25h-0.031c0.672-1.063,1.891-2.609,4.672-2.609c3.391,0,5.922,2.219,5.922,6.969V22.938z')
			
			symbol#git-svg(viewbox='0 0 26 22')
				path(d='M25.047,17.422C22.984,21.594,17.313,22,13.25,22c-4.125,0-10.141-0.359-12.281-4.578   C0.172,15.844,0,13.984,0,12.25c0-2.281,0.625-4.438,2.125-6.188C1.844,5.203,1.703,4.297,1.703,3.406   C1.703,2.234,1.969,1.063,2.5,0c2.469,0,4.047,1.078,5.922,2.547C10,2.172,11.625,2,13.25,2c1.469,0,2.953,0.156,4.375,0.5   C19.484,1.047,21.063,0,23.5,0c0.531,1.063,0.797,2.234,0.797,3.406c0,0.891-0.141,1.781-0.422,2.625   C25.375,7.797,26,9.969,26,12.25C26,13.984,25.828,15.828,25.047,17.422z M18.5,10.5c-1.031,0-2.016,0.188-3.047,0.328   C14.641,10.953,13.828,11,13,11s-1.641-0.047-2.453-0.172C9.531,10.688,8.531,10.5,7.5,10.5c-2.547,0-4,2.109-4,4.5   c0,4.781,4.375,5.516,8.188,5.516h2.625c3.813,0,8.188-0.734,8.188-5.516C22.5,12.609,21.047,10.5,18.5,10.5z M8,18   c-1.406,0-2-1.859-2-3s0.594-3,2-3s2,1.859,2,3S9.406,18,8,18z M18,18c-1.406,0-2-1.859-2-3s0.594-3,2-3s2,1.859,2,3   S19.406,18,18,18z')
			symbol#preloader-svg(viewbox='0 0 80 95.113')
				g.wave-svg
					path(fill='none', stroke='#231F20', stroke-width='3.9003', stroke-miterlimit='10', d='M0,38.005c6.663,0,6.663,7.801,13.327,7.801   c6.665,0,6.665-7.801,13.33-7.801c6.667,0,6.667,7.801,13.334,7.801c6.666,0,6.666-7.801,13.331-7.801   c6.67,0,6.67,7.801,13.339,7.801S73.33,38.005,80,38.005')
				g.wave-svg
					path(fill='none', stroke='#231F20', stroke-width='3.9003', stroke-miterlimit='10', d='M0,61.684c6.663,0,6.663,7.801,13.327,7.801   c6.665,0,6.665-7.801,13.33-7.801c6.667,0,6.667,7.801,13.334,7.801c6.666,0,6.666-7.801,13.331-7.801   c6.67,0,6.67,7.801,13.339,7.801S73.33,61.684,80,61.684')
				g.wave-svg
					path(fill='none', stroke='#231F20', stroke-width='3.9003', stroke-miterlimit='10', d='M0,85.362c6.663,0,6.663,7.801,13.327,7.801   c6.665,0,6.665-7.801,13.33-7.801c6.667,0,6.667,7.801,13.334,7.801c6.666,0,6.666-7.801,13.331-7.801   c6.67,0,6.67,7.801,13.339,7.801S73.33,85.362,80,85.362')
				text(transform='matrix(1 0 0 1 19.9785 20.5957)', font-family="'ArialMT'", font-size='24') 100
				
			symbol#arrow-down-svg(viewBox="0 0 25.18 16.164")
				path(d='M13.293,15.871c-0.391,0.391-1.016,0.391-1.406,0L0.293,4.293c-0.391-0.391-0.391-1.031,0-1.422   l2.594-2.578c0.391-0.391,1.016-0.391,1.406,0L12.59,8.59l8.297-8.297c0.391-0.391,1.016-0.391,1.406,0l2.594,2.578   c0.391,0.391,0.391,1.031,0,1.422L13.293,15.871z')
</template>

<script>
   
    export default {
        name: 'WorksPage',
        components: {
        
        },
        data() {
            return {
                menuOpen: false,
            }
        },
        methods: {
            toOpenMenu(){
                this.menuOpen = !this.menuOpen;
            },
        },
    }
</script>

<style lang="scss">
	
	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';
	
	.page__works {
		.main-header { position: relative; }
		.footer__main { position: absolute; left: 0; right: 0; bottom: 0; }
		.sec-ttl { margin: 0 0 50px; padding-top: 20px; }
		.wrap__3cols { height: 750px; }
		.sec__contacts { position: relative; bottom: 0; margin: 50px auto; padding: 20px 20px 60px;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: url("../assets/images/bg/forest.png") no-repeat;
				background-size: cover;
				display: block;
				filter: blur(5px);
			}
			
			.input-field { padding: 10px 20px; }
		}
		.arrow-bounce { display: block; }
	}
	
	.sec {
		&__site, &__works { width: 50%; }
		&__site { display: flex; align-items: center; height: 100%; background: #ebefe2;}
		&__works { height: 70%; background: #e1e4d7;}
		&__review {min-height: 1200px; background: url("../assets/images/bg/forest.png") no-repeat; }
	}
	.site {
		&-item {padding: 10% 30%;}
		&-tags {
			display: flex;
			justify-content: center;
			padding-left: 0;
			color: $green-dark;
		}
	}
	
	.works {
		&-item { min-height: 525px; }
	}
	
	#carousel { display: none;
		&-wrap { position: relative; height: 100%; }
		&-img {box-shadow: 0px 15px 10px -15px #111;}
	}
	
	.control {
		&-wrap { display: flex; height: 30%;  }
		&-item { width: 50%; background: rgba(164, 168, 160, .6);}
	}
	
	.review {
		&-wrap {display: flex; justify-content: center; width: 50%; margin: auto; }
		&-item { padding: 30px; }
		&-img {
			position: sticky;
			display: block;
			width: 80px;
			height: 80px;
			margin: auto;
			border-radius: 50%;
			overflow: hidden;
			background: #ccc;
			
			&-src {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				width: 100%;
				margin: auto;
				display: block;
			}
		}
		&-txt { font-family: $font-roboto-i; padding: 20px 0; text-align: left; }
		&-author { font-family: $font-roboto-i; color: $green-dark;
			span { display: block; color: initial; }
		}
	}
	
	@media screen and (max-width: 1366px) {
		.btn__green { margin: auto; }
		.review-wrap {width: 70%; }
	
	}
	
	@media screen and (max-width: 1024px) {
		.page__works .wrap__3cols { flex-direction: row; height: auto; }
		.sec__site, .sec__works, .control-wrap { width: 100%; height: auto; }
		.sec__works { order: 1; }
		.sec__site { order: 2; }
		.control-wrap { height: 233px; order: 3;}
		.review-wrap { width: 100%; }
	
	}
	
	@media screen and (max-width: 600px) {
		.page__works {
			.sec__contacts { width: 80%; margin: auto;}
		}
		.review-wrap { flex-direction: column; }
		.site-item { padding: 10% 0; }
		.sec__review { min-height: 1680px; background-position: 0 100%; }
	}
	
</style>


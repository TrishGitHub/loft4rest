<template lang="pug">
	.wrapper.page__inner.page__works
		header.main-header
			section.sec__user
				a(href="/", class="user-link")
					.user-img
						img(src="../assets/images/content/Ira-Noschenko.jpg", class="user-img-src", alt="Ира Нощенко")
					h1.user-ttl Ира Нощенко
					h2.user-subttl Личный сайт веб разработчика
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
						form-group
							input(type="text", name="login", class="input-field", placeholder="Имя")
							input(type="password", name="password", class="input-field" , placeholder="Email")
							textarea(rows="5", class="input-field", placeholder="Ваше сообщение")
						form-group(class="btn_group")
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
        name: 'WorksPage',
        data () {
            return {
                msg: ''
            }
        }
    }
</script>

<style lang="scss">
	
	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';
	
	.page__works {
		.footer__main { position: absolute; left: 0; right: 0; bottom: 0; }
		.sec-ttl { margin: 0 0 50px; padding-top: 20px; }
		.wrap__3cols { height: 750px; }
		.sec__contacts { position: initial; margin: 50px auto; padding: 20px 20px 60px; }
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
	
	.carousel {
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
			position: relative;
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
		&-txt { padding: 20px 0; text-align: left; }
		&-author { color: $green-dark;
			span { display: block; color: initial; }
		}
	}
	
</style>


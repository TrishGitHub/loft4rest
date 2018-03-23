<template lang="pug">
	.wrapper.page__inner.page__blog(v-bind:class="{ 'burger-open': menuOpen }")
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
						a.social-link.vk-ico вКонтакте
					li.social-item
						a.social-link.gt-ico Github
					li.social-item
						a.social-link.ln-ico Linkedin
				div(class="burger-wrap" v-bind:class="{ 'burger-open': menuOpen }" @click="toOpenMenu")
					i.burger-line
	
			section.sec__user
						a(href="/", class="user-link")
							.user-img
								img(src="../assets/images/content/Ira-Noschenko.jpg", class="user-img-src", alt="Ира Нощенко")
							h1.user-ttl Ира Нощенко
							h2.user-subttl Личный сайт веб разработчика
		main.content__main
			aside.aside
				ul.post-list
					li.post-link.post-link__active
						a(href="", class="post-src") Самое важное в SASS
					li.post-link
						a(href="", class="post-src") Приёмы в вёрстке, без которых не обходится ни один сайт
					li.post-link
						a(href="", class="post-src") Самый необходимый набор Gulp плагинов
					li.post-link
						a(href="", class="post-src") Почему я выбрала Jade
			section.sec__blog
				article.post-item
					h3.post-ttl
						| Самое важное в SASS
					.post-date 22 ноября 2016
					.post-body
						p
							| Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.
						p
							| Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
				article.post-item
					h3.post-ttl
						| Приёмы в вёрстке, без которых не обходится ни один сайт
					.post-date 22 ноября 2016
					.post-body
						p
							| Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.
						p
							| Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
				article.blog-item
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
        name: 'BlogPage',
        data() {
            return {
                menuOpen: false,
            }
        },
        methods: {
            toOpenMenu(){
                this.menuOpen = !this.menuOpen;
            }
        }
    }
</script>


<style lang="scss">
	
	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';
	
	.page__blog {
		.content__main { display: flex; flex-wrap: wrap; padding: 60px 60px 0;}
	}
	.aside { width: 25%; padding: 0 30px; box-sizing: border-box; }
	.sec__blog {width: 75%; padding: 0 30px; box-sizing: border-box; text-align: left; }
	.post {
		&-item {width: 70%; padding-bottom: 40px; }
		&-list { text-align: right; }
		&-link {position: relative; padding: 20px;
			&::after {
				content: "";
				position: absolute;
				top: 0;
				bottom: 0;
				right: 0;
				width: 3px;
				height: 42px;
				display: block;
				margin: auto;
				background: transparent;
			}
			&__active { color: $green-dark;
				&::after {background: $green-light;}
			}
		}
		&-src { text-decoration: none; color: inherit; }
		&-ttl { font-family: $font-sansus; font-size: 25px; color: rgba(69, 90, 100, 255);     font-weight: normal; }
		&-date { color: $green-light; }
	}


</style>

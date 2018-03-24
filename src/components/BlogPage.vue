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
					li.post-link.post-link__active(data-post="0")
						a(href="", class="post-src") Самое важное в SASS
					li.post-link(data-post="1")
						a(href="", class="post-src") Приёмы в вёрстке, без которых не обходится ни один сайт
					li.post-link(data-post="2")
						a(href="", class="post-src") Самый необходимый набор Gulp плагинов
					li.post-link(data-post="3")
						a(href="", class="post-src") Почему я выбрала Jade
			section.sec__blog
				article.post-item(data-post="0")
					h3.post-ttl
						| Самое важное в SASS
					.post-date 22 ноября 2016
					.post-body
						p
							| Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.
						p
							| Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
				article.post-item(data-post="1")
					h3.post-ttl
						| Приёмы в вёрстке, без которых не обходится ни один сайт
					.post-date 22 ноября 2016
					.post-body
						p
							| Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.
						p
							| Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
				article.post-item(data-post="2")
					h3.post-ttl
						| Самый необходимый набор Gulp плагинов
					.post-date 22 ноября 2016
					.post-body
						p
							| Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.
						p
							| Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
				article.post-item(data-post="3")
					h3.post-ttl
						| Почему я выбрала Jade
					.post-date 22 ноября 2016
					.post-body
						p
							| Таким образом начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке направлений прогрессивного развития. Разнообразный и богатый опыт новая модель организационной деятельности играет важную роль в формировании новых предложений. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия.
						p
							| Не следует, однако забывать, что укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. Товарищи! постоянный количественный рост и сфера нашей активности способствует подготовки и реализации модели развития. С другой стороны рамки и место обучения кадров влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям.
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
            },
            handleScroll: function (event) {
                const scrollTop = document.documentElement.scrollTop,
					  blogTop = document.getElementsByClassName('sec__blog')[0].offsetTop,
			  		  content = document.getElementsByClassName('content__main')[0],
					  posts = document.getElementsByClassName('post-item'),
					  postLinks = document.getElementsByClassName('post-link');

                scrollTop >= blogTop ? content.classList.add("content__sticked"): content.classList.remove("content__sticked");
                
                for(var i=0; i < posts.length; i++) {
                    let postPos = posts[i].offsetTop + posts[i].scrollHeight;
                    
                    if( scrollTop >= postPos ) {
                        for(var k=0; k < postLinks.length; k++) {
                            postLinks[k].classList.remove("post-link__active");
						}
                        document.querySelectorAll('[data-post]')[i].classList.add("post-link__active");
                       
					}
				}
				
            },
        },
        created: function () {
            window.addEventListener('scroll', this.handleScroll);
        },
    }
</script>


<style lang="scss">
	
	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';
	
	.page__blog {
		.content__main { display: flex; flex-wrap: wrap; padding: 60px 60px 0;}
	}
	
	.content__sticked {
		.aside { position: fixed; top: 0; padding: 0 60px 0 30px;}
		.sec__blog { transform: translateX(33%); }
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

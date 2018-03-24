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
						a(href="https://www.facebook.com/Ira.Noshchenko", class="social-link") Facebook
							svg(class="social-svg fb-ico")
								use(xlink:href='#fb-svg' width="12px" height="25px")
					li.social-item
						a(href="https://github.com/TrishGitHub", class="social-link") Github
							svg(class="social-svg gh-ico")
								use(xlink:href='#git-svg' width="26px" height="22px")
					li.social-item
						a(href="https://www.linkedin.com/in/ira-noschenko-12032a10b/", class="social-link") Linkedin
							svg(class="social-svg in-ico")
								use(xlink:href='#in-svg' width="24px" height="23px")
								
				div(class="burger-wrap" v-bind:class="{ 'burger-open': menuOpen }" @click="toOpenMenu")
					i.burger-line
	
			section.sec__user
						a(href="/", class="user-link")
							.user-img
								img(src="../assets/images/content/Ira-Noschenko.jpg", class="user-img-src", alt="Ира Нощенко")
							h1.sec-ttl Блог
							h2.sec-txt Статьи, которые я написала
		main.content__main.content__wide
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
					ul.social-list
						li.social-item
							a(href="https://www.facebook.com/Ira.Noshchenko", class="social-link") Facebook
								svg(class="social-svg fb-ico")
									use(xlink:href='#fb-svg' width="12px" height="25px")
						li.social-item
							a(href="https://github.com/TrishGitHub", class="social-link") Github
								svg(class="social-svg gh-ico")
									use(xlink:href='#git-svg' width="26px" height="22px")
						li.social-item
							a(href="https://www.linkedin.com/in/ira-noschenko-12032a10b/", class="social-link") Linkedin
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
					  blogTop = document.getElementsByClassName('sec__blog')[0].offsetTop + window.innerHeight / 2,
			  		  content = document.getElementsByClassName('content__main')[0],
					  posts = document.getElementsByClassName('post-item'),
					  postLinks = document.getElementsByClassName('post-link');

                scrollTop >= blogTop ? content.classList.add("content__sticked"): content.classList.remove("content__sticked");
                
                for(var i=0; i < posts.length; i++) {
                    const postPos = posts[i].offsetTop + posts[i].scrollHeight /2;
                    
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
		.content__main { display: flex; flex-wrap: wrap; padding: 30px 60px 0;}
		.sec {
			&-ttl, &-txt { color: #fff; }
			&-ttl::after { bottom: -20px; background: #fff; }
			&-txt { transform: translateY(36px); font-size: 16px; font-weight: 400; }
		}
	}
	
	.content__sticked {
		.aside { position: fixed; top: 0; padding: 0 8% 0 30px;}
		.sec__blog { transform: translateX(33%); }
	}
	
	.aside { width: 25%; padding: 0 5% 0 30px; box-sizing: border-box; }
	.sec__blog {width: 75%; padding: 0 30px; box-sizing: border-box; text-align: left; }
	.post {
		&-item {width: 76%; padding-bottom: 40px; }
		&-list { margin: 30px 0; padding: 0; text-align: right; }
		&-link {position: relative; padding: 22px 22px 5px;
			&::after {
				content: "";
				position: absolute;
				top: 16px;
				bottom: 0;
				right: 0;
				width: 3px;
				height: 42px;
				display: block;
				margin: auto;
				background: transparent;
				transform: translateX(-3px) scale(.6);
				transition: transform .5s ease, background .5s;
			}
			&__active { font-weight: 700; color: $green-dark;
				&::after {transform: translateX(0) scale(1); background: $green-light;}
			}
		}
		&-src { text-decoration: none; color: inherit; }
		&-ttl { margin: 25px 0 10px; font-family: $font-sansus; font-size: 35px; color: rgba(69, 90, 100, 255);     font-weight: normal; }
		&-date { color: $green-light; }
	}
	
@media screen and (max-width: 1200px) {
	.page__blog {
		.content {
			&__main { padding: 30px;}
		}
		
		.aside { padding: 0; }
		.sec{
			&__blog {padding: 0 30px 0 9%;}
		}
		.post {
			&-item { width: 100%; }
		}
		
	}
}


</style>

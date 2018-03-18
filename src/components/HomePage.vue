<template lang="pug">
	.wrapper.main-page
		button(class="btn" @click="toFlip") Авторизироваться
		header(class="main-header")
			.card-wrap
				.flip-card(v-bind:class="{ 'is-flipped': isFlipped }")
					.card-front
						section.sec__user
							.user-img
								img(src="../assets/images/content/Ira-Noschenko.jpg", class="user-img-src", alt="Ира Нощенко")
							h1.user-ttl Ира Нощенко
							h2.user-subttl Личный сайт веб разработчика
							ul.social-wrap
								li.social-item
									a.social-link.vk-ico вКонтакте
								li.social-item
									a.social-link.gt-ico Github
								li.social-item
									a.social-link.ln-ico Linkedin
						nav.main-nav
							ul.nav-wrap
								li.nav-item
									router-link(to='/works', class="nav-link") Мои работы
								li.nav-item
									router-link(to='/about', class="nav-link") Обо мне
								li.nav-item
									router-link(to='/blog', class="nav-link") Блог
					.card-back
						section.login
							.login-ttl Авторизируйтесь
							form(class="form form__login" name="login-form")
								form-group
									input(type="text", name="login", class="input-field", placeholder="Логин")
									input(type="password", name="password", class="input-field", placeholder="Пароль")
								form-group
									input(type="checkbox", class="checkbox", name="not-bot", id="not-bot")
									label(class="label label__checkbox", for="not-bot") Я человек
									span Вы точно не робот?
									.radio-wrap
										form-group.group__radio
											input(type="radio", class="radio", name="sure", id="sure")
											label(class="label label__radio", for="sure") Да
										form-group.group__radio
											input(type="radio", class="radio", name="sure", id="notSure")
											label(class="label label__radio", for="notSure") Не уверен
							nav.main-nav
								ul.nav-wrap
									li(class="nav-item" @click="toFlip")
										router-link(to='/', class="nav-link" ) На главную
									li.nav-item
										router-link(to='/admin', class="nav-link") Войти
</template>

<script>
    export default {
        name: 'HomePage',
        data() {
            return {
                isFlipped: false
            }
        },
		methods: {
            toFlip(){
                console.log(this.isFlipped);
                this.isFlipped = !this.isFlipped;
               
			}
		}
    }
</script>

<style lang="scss">
	
	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';
	
	$green-light: #649257;
	$green-dark: #487f39;
	
	.card {
		&-wrap {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 380px;
			height: 395px;
			margin: auto;
			color: #fff;
			border-radius: 5px;
			perspective: 600px;
			transition: all .3s ease;
		}
		&-front, &-back {
			position: absolute;
			width: 100%;
			height: 100%;
			transform: rotateY(0);
			background: rgba(43, 65, 44, .6);
			backface-visibility: hidden;
			transition: transform .5s ease;
		}
		&-back { transform: rotateY(180deg); }
	}
	
	.flip-card { width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.6s;
		&.is-flipped {
			.card-front { transform: rotateY(-180deg);}
			.card-back { transform: rotateY(0);}
		}
	}
	
	.main-page .main-header { background: rgba(43, 65, 44, .6); }
	
	.social {
		&-wrap { display: flex; width: 100%; height: 22px; }
		&-item { width: calc(100% / 3); color: transparent; }
		&-link { width: 100%; height: 100%; display: block; }
	}
	
	.main-nav { width: 100%; }
	
	.nav {
		&-wrap { display: flex; justify-content: space-around; width: 100%; height: 45px; align-items: center; margin: 0; padding-left: 0;}
		&-item { height: 100%; flex-grow: 1; background: $green-light; border-right: 2px solid rgba(255, 255, 255, .6); cursor: pointer; transition: background .8s;
			&:first-child { border-bottom-left-radius: 5px;}
			&:last-child {  border-bottom-right-radius: 5px; border-right: none; }
			&:hover {background: $green-dark;}
		}
		&-link { display: flex; justify-content: center; align-items: center;  width: 100%; height: 100%; color: #fff; text-decoration: none;}
	}
	
	.login {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		
		&-ttl {position: relative; padding: 20px; font-family: $font-sansus; font-size: 35px; text-transform: uppercase;
			&::after {
				content: "";
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				width: 90px;
				height: 3px;
				margin: auto;
				display: block;
				background: #fff;
			}
		}
		
	}
	.form__login { width: 90%; margin: auto; }
	
	form-group {
		display: flex;
		flex-direction: column;
		align-items: center;
	}


</style>

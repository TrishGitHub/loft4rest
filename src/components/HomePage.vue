<template lang="pug">
	.wrapper.main-page
		button(class="btn" @click="toFlip") Авторизироваться
		header(class="main-header")
			.card-wrap
				.flip-card(v-bind:class="{ 'is-flipped': isFlipped }")
					.card-front
						section.about
							.about-img
								img(src="../assets/images/content/Ira-Noschenko.jpg", class="about-img-src", alt="Ира Нощенко")
							h1.about-ttl Ира Нощенко
							h2.about-subttl Личный сайт веб разработчика
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
							form(class="form" name="login-form")
								form-group
									input(type="text", name="login", class="input-field")
									input(type="password", name="password", class="input-field")
								form-group
									input(type="checkbox", name="not-bot", id="not-bot")
									label(class="label", for="not-bot") Я человек
									span Вы точно не робот?
									input(type="radio", name="sure")
									input(type="radio", name="not-sure")
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
	
	.about { width: 100%; padding: 40px; box-sizing: border-box;
		&-img { position: relative; display: block; width: 141px; height: 141px; margin: auto; border-radius: 50%; overflow: hidden; background: #ccc;
			&-src {position: absolute; top: 0; left: 0; right: 0; width: 100%; margin: auto; display: block; }
		}
		
		&-ttl { font-size: 28px; font-weight: 500; }
		&-subttl {font-size: 16px; }
	}
	
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
	
	.btn {
		position: absolute;
		top: 25px;
		right: 5%;
		padding: 10px 25px;
		background: none repeat scroll 0 0 transparent;
		border: 1px solid #fff;
		border-spacing: 0;
		border-radius: 20px;
		color: #fff;
		font-size: 16px;
		font-weight: normal;
		line-height: 1.42rem;
		list-style: none outside none;
		margin: 0;
		text-align: left;
		text-decoration: none;
		text-indent: 0;
		outline: none;
		cursor: pointer;
		transition: background .3s;
		
		&:hover {
			background-color: rgba(255, 255, 255, .2);
		}
	}
	
	.login {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	
	form-group {
		display: flex;
		flex-direction: column;
		align-items: center;
	}


</style>

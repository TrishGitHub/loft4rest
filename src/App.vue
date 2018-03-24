<template lang="pug">
  #app
    router-view/
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
            }
        },
        methods: {

        }
    }
</script>

<style lang="scss">
	
	@import './assets/scss/normalize';
	@import './assets/scss/fonts';
	@import './assets/scss/variables';
	
	body, html {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-size: 16px;
		font-weight: normal;
		line-height: 1.42;
	}

  .preloader-wrap {
	  &.preloader-show { position: fixed; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; background: url("./assets/images/bg/preloader-bg.jpg"); background-size: cover; z-index: 100;
		  .preloader-svg { display: block; width: 80px; height: 96px; fill: #fff; }
	  }
  }
	
	.preloader-svg { display: none; }
	
	#preloader-svg .wave-svg path {
		stroke: #fff;
		stroke-dasharray: 50;
		stroke-dashoffset: 100;
		animation: dasher 1s infinite;
	}
	
	@keyframes dasher {
		100% { stroke-dasharray: 100; }
	};
	
	.wrapper {
		min-height: 100%;
		position: relative;
		background: url("./assets/images/bg/water.jpg") 50% 50% no-repeat;
	}
  
  .page__inner { background: none;
	  .main-header { display: flex; align-items: center; height: 440px; background: url("./assets/images/bg/water.jpg") 0 60% no-repeat; background-attachment: fixed; }
	  .social {
		  &-item { width: 36px; height: 36px; padding: 0; }
		  &-link { color: rgba(86, 99, 88, 255);}
	  }
	  .social-svg { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: block; margin: auto; fill: #fff; transition: fill .5s;
		  &:hover { fill: $green-dark; }
		
		  &.fb-ico { width: 12px; height: 25px; }
		  &.gh-ico { top: 4px; width: 26px; height: 22px; }
		  &.in-ico { width: 24px; height: 23px; }
	  }
	  .sec__user { width: auto; display: inline-block; margin: auto;}
	  .user-ttl, .user-subttl { margin: 0; }
	  .user-ttl { font-size: 35px; }
  }
	
	.header__top {
		display: flex;
		justify-content: space-between;
		position: absolute;
		width: 100%;
		top: 0;
		padding: 20px;
		box-sizing: border-box;
		
		.social {
			&-list { display: flex; justify-content: space-between; align-items: center; width: 150px; margin: 0; }
			&-link { position: relative; width: 100%; height: 100%; display: block; color: transparent; }
		}
	}
	
	.nav__burger { position: absolute; width: 100%; height: 100vh; display: flex; justify-content: center; z-index: 99; pointer-events: none;
		&::before, &::after {
			content: "";
			position: fixed;
			top: 0;
			background: $green-light;
			width: calc(50% + 1px);
			height: 100%;
			overflow: hidden;
			opacity: .95;
			transition: transform .8s .5s ease;
		}
		
		&::before { left: 0; transform: translateX(-101%);}
		
		&:after { right: 0; transform: translateX(101%);}
		
		.nav {
			&-wrap { position: relative; height: auto; display: block; padding-left: 0; padding-top: 10vh; opacity: 0; transition: opacity .5s 0s; z-index: 10;}
			&-item {position: relative; height: auto; display: block; padding: 20px; background: none; border-right: none;
				&::after {
					content: "";
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					display: block;
					background: #fff;
					width: 100px;
					height: 2px;
					transform: scale(0);
					transition: transform .5s ease;
				}
				
				&:hover { background: none;
					&::after { transform: scale(1); }
				}
				
			}
			&-link { height: auto; font-family: $font-sansus; text-transform: uppercase; font-size: 3.125rem;}
		}
	}
	
	.burger {
		&-wrap { position: relative; width: 40px; height: 35px; cursor: pointer; z-index: 100;}
		&-line { display: block; width: 100%; height: 5px; position: absolute; top: 0; bottom: 0; margin: auto; background: #fff;  border-radius: 10px;
			&::before, &::after { content: ""; position: absolute; width: 100%; height: 5px; display: block; background: #fff; transform-origin: center; border-radius: 10px;}
			&::before { transform: translateY(-15px); }
			&::after { transform: translateY(15px);}
		}
		
		&-open {
			.nav__burger{ pointer-events: auto;
				&::before, &::after { transform: translateX(0); transition: transform .8s 0s ease;}
				.nav-wrap { opacity: 1; transition: opacity .5s .8s;}
			}
			.burger {
				&-line { background: transparent; border-radius: 10px;
					&::before {transform: translateY(0) rotate(45deg); border-radius: 10px;}
					&::after {transform: translateY(0) rotate(-45deg); border-radius: 10px;}
				}
			}
		}
	}
  
  #app {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  
  ul {
    list-style-type: none;
  }
  
  .form { position: relative; }
	
	textarea {
		resize: vertical;
		outline: none;
	}
	
	.form-group {
		display: block;
		&.btn_group { flex-direction: row; }
	}
	
	.input-field {
		width: 100%;
		box-sizing: border-box;
		margin: 5px 0;
		padding: 10px 20px;
		border: none;
		outline: none;
		border-radius: 20px;
	}
	
	.input-field::placeholder {
		color: rgba(93, 90, 85, .5);
	}
	
	.label__checkbox {
		position: relative;
		padding-left: 30px;
		
		&::before {
			content: "\2714";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			width: 21px;
			height: 20px;
			display: block;
			background: #fff;
		}
	}
	.checkbox { display: none; }
	.checkbox:checked+label::before {
		background: $green-dark;
	}
	
	.group__radio {display: inline-block;  }
	.radio-wrap { display: flex; }
  
  .content__wide {
	  position: relative;
	  
	  &::before, &::after {
		  content: "";
		  position: absolute;
		  top: -149px;
		  display: block;
		  width: 0;
		  height: 0;
		  border: 0 solid transparent;
		  border-bottom-width: 0;
		  border-top-width: 150px;
		  pointer-events: none;
	  }
	  
	  &::before {left: 0;  border-left: 50vw solid #fff;}
	  &::after { right: 0;  border-right: 50vw solid #fff; }
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
	
	.btn__green {
		position: initial;
		display: inline-block;
		margin: 30px;
		background: $green-light;
		border-color: $green-light;
		
		&:hover { background: $green-dark; border-color: $green-dark; }
	}
	
	.btn_group {
		display: flex;
		flex-direction: row;
		position: absolute;
		left: 0;
		right: 0;
		width: calc(100% + 40px);
		margin-left: -20px;
		padding-top: 20px;
		
		.btn__green {
			width: 50%;
			margin: 0;
			border-radius: initial;
			text-align: center;
			
			&:last-child { background: $green-dark; }
		}
	}

	.wrap__2cols { display: flex; }
	.wrap__3cols {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
	}
	
	.sec {
		&-ttl {position: relative; margin: 0; font-family: $font-sansus; font-size: 3.875rem; font-weight: normal; text-transform: uppercase; color: rgba(55, 62, 66, 255);
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
		&-subttl {position: relative; font-family: $font-sansus; font-size: 25px; font-weight: normal; text-transform: uppercase; color: rgba(86, 99, 88, 255);
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
				top: -149px;
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
				top: -149px;
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
		&__map { position: relative; height: 1124px; }
		&__contacts { position: absolute; left: 0; right: 0; bottom: 500px; width: 300px; margin: auto; padding: 40px; background: rgba(255, 255, 255, .8);
			.social {
				&-item { width: 100%; }
				&-list { display: block; height: auto; }
			}
		}
		&__bottom { display: flex; flex-wrap: wrap; padding: 30px; color: #fff;  background: rgba(0, 0, 0, .6);
			div:last-child::after { display: none; }
		}
		&__copy {padding: 10px; color: rgba(255, 255, 255, .6); background: rgba(100, 146, 87, .9); }
		&__user { width: 100%; padding: 40px; box-sizing: border-box; color: #fff; }
	}
	
	.user {
		&-img { position: relative; display: block; width: 141px; height: 141px; margin: auto; border-radius: 50%; overflow: hidden; background: #ccc;
			&-src {position: absolute; top: 0; left: 0; right: 0; width: 100%; margin: auto; display: block; }
		}
		
		&-ttl { font-size: 28px; font-weight: 500; transition: color .25s; }
		&-subttl {font-size: 16px; font-weight: normal; transition: color .25s;  }
		&-link { display: block; color: #fff; text-decoration: none;
			&:hover {
				.user-ttl, .user-subttl { color: rgba(255, 255, 255, .9); }
			}
		}
	}
	
	.social {
		&-list { padding-left: 0; font-family: $font-roboto; font-weight: 500; text-transform: none; text-align: left; }
		&-item {padding: 15px 0;}
		&-link {text-decoration: none; color: transparent;}
	}
	
	.skill{
		&-list {font-size: 22px; padding-left: 0; font-weight: 600; text-align: left; color: rgba(86, 99, 88, 255);}
		&-item {
			position: relative;
			display: inline-block;
			padding: 10px 10px 10px 0;
			height: 110px;
			width: 110px;
			
		}
		&-ttl {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-size: 11px;
			padding-right: 10px;
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

	
	.note, .nav__footer, .cite { position: relative; width: 33.3%; padding: 0 1%; box-sizing: border-box;  text-align: left;
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
	.cite { font-family: $font-roboto-i; padding: 0 30px; box-sizing: border-box; opacity: .6;
		p { margin: 0; }
		span { font-weight: 700; }
	}
	
	
	
	.nav {
		&__footer {
			.nav-item, .nav-item:hover { background: none; border: none; }
			.nav-item { flex-grow: initial; padding: 0 10px; font-size: 15px;}
			.social {
				&-item {position: relative;}
				&-list { display: flex; width: 150px; justify-content: space-between; }
				&-link { display: block; height: 100%; color: transparent; }
				&-svg { opacity: .4; transition: opacity .3s;
					&:hover { opacity: 1; fill: #fff;  }
				}
			}
		}
		&-list {
			display: flex;
			align-items: center;
			margin: 0;
			padding-left: 0;
		}
		&-item { padding: 0 20px;}
		&-link { display: block; color: #fff; text-decoration: none; }
	}
	
@media screen and (max-width: 1366px) {
	.content__wide {
		&::before, &::after {
			top: -107px; border-top-width: 108px;
		}
	}
	.note { padding-right: 5% }
}

@media screen and (max-width: 1024px) {
	html, body {font-size: 14px;}
	.page__inner {
		.main-header { height: 500px; }
	}
	.cite { width: 100%; padding: 0; font-size: 13px; }
	.note, .nav__footer { width: 50%;  }
	.nav__footer::after { display: none; }
	.content__wide {
		&::before, &::after {
			top: -62px; border-top-width: 63px;
		}
	}
	.burger-wrap { transform: scale(.8); }

}

@media screen and (max-width: 600px) {
	.note, .nav__footer { width: 100%; }
	.nav__footer { padding: 10px 0;
		.nav {
			&-list {justify-content: space-between;}
			&-item { padding: 0; font-size: 1rem; }
		}
		.social{
			&-list { width: 100%; justify-content: center; }
			&-item { padding: 0 10px; }
		}
	}
	.cite { padding-top: 10px; text-align: center; line-height: 1.6;}
	.note { padding-bottom: 10px; text-align: center; }
	
	.note::after, .nav__footer::after {
		content: "";
		position: absolute;
		top: auto;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1px;
		width: 100%;
		display: block;
		background: rgba(255, 255, 255, 0.4);
	}
}


</style>

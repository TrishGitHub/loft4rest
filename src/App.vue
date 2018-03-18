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
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.42;
  }
  
  .wrapper {
    min-height: 100%;
    position: relative;
    background: url("./assets/images/bg/water.jpg") 50% 50% no-repeat;
  }
  
  .page__inner { background: none;
	  .main-header { display: flex; align-items: center; height: 600px; background: url("./assets/images/bg/water.jpg") 50% 50% no-repeat; }
	  .social {
		  &-item { width: 100%; }
		  &-link { color: rgba(86, 99, 88, 255);}
	  }
	  .sec__user { width: auto; display: inline-block; margin: auto;}
	  .user-ttl, .user-subttl { margin: 0; }
	  .user-ttl { font-size: 35px; }
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
		  top: -150px;
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
		&-ttl {position: relative; margin: 0; font-family: $font-sansus; font-size: 44px; font-weight: normal; text-transform: uppercase; color: rgba(55, 62, 66, 255);
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
		&__map { height: 1124px; background: url("./assets/images/bg/map.jpg") 50% 50% no-repeat; }
		&__contacts { position: absolute; left: 0; right: 0; bottom: 500px; width: 300px; margin: auto; padding: 40px; background: rgba(255, 255, 255, .6); }
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
		&-list { padding-left: 0; font-family: $font-roboto; font-weight: 500; text-transform: none; text-align: left;
		
		}
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
		&__footer {
			.nav-item, .nav-item:hover { background: none; border: none; }
			.nav-item { flex-grow: initial;  }
		}
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

<template lang="pug">
	.wrapper.about-page
		header.main-header
		main.main-content
			section
				h2.sec-ttl Обо мне
				h3.sec-subttl Кто я
				.sec-txt
					p Я веб разработчик из Новосибирска. Мне 27 лет. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.
					p Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите,как тут всё классно и красиво!
			section
				h3.sec-subttl Чем я могу быть вам полезен
				.sec-txt
					p Больше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.
				ul.skill-list Frontend
					li.skill-item
						span.skill-ttl HTML5
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl CSS3
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl JavaScript
							br
							| & jQuery
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
				ul.skill-list Backend
					li.skill-item
						span.skill-ttl PHP
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl mySQL
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Node.js
							br
							| & npm
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Mongo.db
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
				ul.skill-list WorkFlow
					li.skill-item
						span.skill-ttl Git
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Gulp
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Bower
						svg.circles(viewbox='0 0 110 110')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
			section
			section
				h3.sec-subttl Контакты
					ul.social-list
				li.social-item
					a.social-link Skype
				li.social-item
					a.social-link
				li.social-item
					a.social-link
				li.social-item
					a.social-link
		footer.main-footer
			section
			.copy © Владимир Астахов | Создано с любовью в LoftSchool | 2016


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
	
	$green-light: #649257;
	$green-dark: #487f39;
	$font-sansus: 'Sansus Webissimo';
	
	.about-page { background: none; }
	
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
		&-txt {color: rgba(86, 99, 88, 255);}
	}

	.skill{
		&-list {font-size: 22px; font-weight: 600; color: rgba(86, 99, 88, 255);}
		&-item {
			position: relative;
			display: inline-block;

		}
		&-ttl {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
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
		stroke: #1bb696;
		stroke-dasharray: .0010 282.6;
		transition: all 1s;
	}

	
	.circles:hover .circle-0 {
		stroke-dasharray: .001 282.6;
	}
	.circles:hover .circle-10 {
		stroke-dasharray: 28.26 282.6;
	}
	.circles:hover .circle-15 {
		stroke-dasharray: 42.39 282.6;
	}
	.circles:hover .circle-20 {
		stroke-dasharray: 56.52 282.6;
	}
	.circles:hover .circle-25 {
		stroke-dasharray: 70.65 282.6;
	}
	.circles:hover .circle-30 {
		stroke-dasharray: 84.78 282.6;
	}
	.circles:hover .circle-35 {
		stroke-dasharray: 98.91 282.6;
	}
	.circles:hover .circle-40 {
		stroke-dasharray: 113.04 282.6;
	}
	.circles:hover .circle-45 {
		stroke-dasharray: 127.17 282.6;
	}
	.circles:hover .circle-50 {
		stroke-dasharray: 141.3 282.6;
	}
	.circles:hover .circle-55 {
		stroke-dasharray: 155.43 282.6;
	}
	.circles:hover .circle-60 {
		stroke-dasharray: 169.56 282.6;
	}
	.circles:hover .circle-65 {
		stroke-dasharray: 183.69 282.6;
	}
	.circles:hover .circle-70 {
		stroke-dasharray: 197.82 282.6;
	}
	.circles:hover .circle-75 {
		stroke-dasharray: 211.95 282.6;
	}
	.circles:hover .circle-80 {
		stroke-dasharray: 226.08 282.6;
	}
	.circles:hover .circle-85 {
		stroke-dasharray: 240.21 282.6;
	}
	.circles:hover .circle-90 {
		stroke-dasharray: 254.34 282.6;
	}
	.circles:hover .circle-95 {
		stroke-dasharray: 268.47 282.6;
	}
	.circles:hover .circle-100 {
		stroke-dasharray: 282.6 282.6;
	}

</style>

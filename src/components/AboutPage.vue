<template lang="pug">
	.wrapper.page__inner.page__about(v-bind:class="{ 'burger-open': menuOpen }")
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
								
				div(class="burger-wrap" v-bind:class="{ 'burger-open': menuOpen }" @click="toOpenMenu")
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
		main.main-content.wrap__2cols
			section.sec__about
				.sec-head
					h2.sec-ttl Обо мне
				.sec-body
					.sec-img
						img(src="../assets/images/content/Ira-Noschenko.jpg", class="", alt="Ира Нощенко")
					h3.sec-subttl Кто я
					.sec-txt
						p Я веб разработчик из Новосибирска. Мне 27 лет. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.
						p Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите,как тут всё классно и красиво!
			section.sec__skills
				h3.sec-subttl Чем я могу быть вам полезна
				.sec-txt
					p Больше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.
				ul.skill-list
					li.skill-head Frontend
					li.skill-item
						span.skill-ttl HTML5
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl CSS3
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-35(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl JavaScript
							br
							| & jQuery
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
				ul.skill-list
					li.skill-head Backend
					li.skill-item
						span.skill-ttl PHP
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl mySQL
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Node.js
							br
							| & npm
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Mongo.db
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
				ul.skill-list
					li.skill-head WorkFlow
					li.skill-item
						span.skill-ttl Git
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Gulp
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
						circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
					li.skill-item
						span.skill-ttl Bower
						svg.circles(viewbox='0 0 120 120')
							circle.circle__first(r='45', cx='50%', cy='50%', fill='none')
							circle.circle__second.circle-15(r='45', cx='50%', cy='50%', transform='rotate(-90 55 55)')
		section.sec__map
			.google-map(:id='mapName')
		section.sec__contacts
			h3.sec-subttl Контакты
			ul.social-list
				li.social-item
					a(href="skype:i.noschenko?call", class="social-link", target="_blank")
						svg(class="social-svg skype-ico")
							use(xlink:href='#skype-svg' width="24px" height="24px")
						| i.noschenko
				li.social-item
					a(href="mailto: i.noschenko@gmail.com", class="social-link", target="_blank")
						svg(class="social-svg mail-ico")
							use(xlink:href='#mail-svg' width="22px" height="18px")
						| i.noschenko@gmail.com
				li.social-item
					a(href="tel:+3801501500160", class="social-link", target="_blank")
						svg(class="social-svg phone-ico")
							use(xlink:href='#phone-svg' width="19px" height="19px")
						| +38(050)150-0-160
				li.social-item
					a(href="https://www.google.com.ua/maps/place/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0,+%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+65000/@46.4598865,30.5717043,11z/data=!3m1!4b1!4m5!3m4!1s0x40c6318a0b864c43:0x129f8fe28cf2176c!8m2!3d46.482526!4d30.7233095", class="social-link", target="_blank")
						svg(class="social-svg marker-ico")
							use(xlink:href='#marker-svg' width="16px" height="22px")
						| Одесса, Украина
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
				
			symbol#skype-svg(viewBox="0 0 24 24")
				path(d='M18,24c-1.375,0-2.641-0.469-3.656-1.25C13.594,22.906,12.797,23,12,23C5.922,23,1,18.078,1,12   c0-0.797,0.094-1.594,0.25-2.344C0.469,8.641,0,7.375,0,6c0-3.313,2.688-6,6-6c1.375,0,2.641,0.469,3.656,1.25   C10.406,1.094,11.203,1,12,1c6.078,0,11,4.922,11,11c0,0.797-0.094,1.594-0.25,2.344C23.531,15.359,24,16.625,24,18   C24,21.313,21.313,24,18,24z M13.469,10.453l-1.625-0.375c-1.188-0.281-2.078-0.484-2.078-1.391c0-0.828,0.875-1.203,2.25-1.203   c2.453,0,2.5,1.797,4.016,1.797c1.016,0,1.625-0.797,1.625-1.703c0-1.797-2.984-2.969-5.938-2.969   c-2.703,0-5.844,1.172-5.844,4.344c0,2.625,1.75,3.563,4.031,4.109l2.281,0.563c1.391,0.344,2.25,0.5,2.25,1.5   c0,0.797-0.891,1.406-2.266,1.406c-2.891,0-3.047-2.406-4.719-2.406c-1.094,0-1.578,0.781-1.578,1.641   c0,1.922,2.938,3.484,6.453,3.484c2.938,0,6-1.469,6-4.641C18.328,11.891,15.688,10.953,13.469,10.453z')
	
			symbol#mail-svg(viewBox="0 0 22.012 17.295")
				path(d='M19.911,5.331c-1.916,1.327-3.845,2.653-5.748,3.992c-0.799,0.553-2.15,1.683-3.145,1.683h-0.013h-0.012   c-0.995,0-2.346-1.13-3.145-1.683C5.945,7.984,4.017,6.658,2.113,5.331C1.241,4.741,0,3.354,0,2.235C0,1.032,0.651,0,1.965,0   h18.082c1.068,0,1.965,0.884,1.965,1.965C22.012,3.341,20.992,4.582,19.911,5.331z M22.012,15.33c0,1.08-0.885,1.965-1.965,1.965   H1.965C0.884,17.295,0,16.41,0,15.33V5.577c0.369,0.405,0.786,0.762,1.241,1.069c2.039,1.388,4.103,2.776,6.104,4.237   c1.032,0.762,2.31,1.695,3.648,1.695h0.012h0.013c1.339,0,2.616-0.934,3.647-1.695c2.003-1.449,4.066-2.85,6.117-4.237   c0.442-0.307,0.86-0.664,1.229-1.069V15.33z')
				
			symbol#phone-svg(viewBox="0 0 18.864 18.863")
				path(d='M18.448,16.76c-0.281,0.656-1.031,1.086-1.634,1.42c-0.791,0.43-1.595,0.684-2.492,0.684   c-1.246,0-2.371-0.51-3.51-0.924c-0.817-0.295-1.608-0.657-2.345-1.112c-2.278-1.407-5.024-4.153-6.431-6.431   C1.581,9.659,1.219,8.869,0.924,8.052C0.509,6.913,0,5.788,0,4.542C0,3.644,0.254,2.84,0.683,2.05   c0.335-0.603,0.764-1.353,1.42-1.634C2.545,0.214,3.483,0,3.965,0C4.06,0,4.153,0,4.247,0.04c0.281,0.094,0.576,0.75,0.71,1.019   c0.429,0.764,0.844,1.541,1.286,2.291c0.214,0.349,0.616,0.777,0.616,1.192c0,0.817-2.425,2.01-2.425,2.733   c0,0.361,0.335,0.831,0.522,1.152c1.353,2.438,3.041,4.126,5.479,5.479c0.322,0.188,0.791,0.522,1.152,0.522   c0.724,0,1.916-2.425,2.733-2.425c0.415,0,0.844,0.402,1.192,0.616c0.75,0.442,1.527,0.857,2.291,1.286   c0.268,0.134,0.924,0.429,1.018,0.71c0.041,0.094,0.041,0.188,0.041,0.281C18.864,15.38,18.649,16.318,18.448,16.76z')
	
			symbol#marker-svg(viewBox="0 0 15.151 21.654")
				path(d='M11.004,7.835c0-1.883-1.538-3.414-3.43-3.414c-1.889,0-3.431,1.531-3.431,3.414   c0,1.884,1.542,3.419,3.431,3.419C9.466,11.254,11.004,9.719,11.004,7.835z')
				path(d='M7.574,21.654l1.388-1.817c1.455-1.925,6.189-8.469,6.189-12.049C15.151,3.132,12.106,0,7.574,0   C3.045,0,0,3.132,0,7.788c0,3.854,5.56,11.223,6.192,12.049L7.574,21.654z M2.792,7.835c0-2.628,2.146-4.77,4.782-4.77   c2.64,0,4.785,2.142,4.785,4.77c0,2.63-2.146,4.771-4.785,4.771C4.938,12.605,2.792,10.465,2.792,7.835z')


</template>

<script>
    
    export default {
        components: {

		},
        name: 'AboutPage',
        data() {
            return {
                menuOpen: false,
                mapName: 'gMap',
                markerCoordinates: [{
                    latitude: 46.482526,
                    longitude: 30.7233095,
                }],
                map: null,
                bounds: null,
                markers: [],
            }
        },
        methods: {
            toOpenMenu(){
                this.menuOpen = !this.menuOpen;
            },
        },
        mounted: function () {
            this.bounds = new google.maps.LatLngBounds();
            const element = document.getElementById(this.mapName)
            const mapCentre = this.markerCoordinates[0]
            const options = {
                zoom: 14,
                zoomControl: false,
                streetViewControl: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#86a77a"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ],
                center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
            }
            this.map = new google.maps.Map(element, options);
            this.markerCoordinates.forEach((coord) => {
                const position = new google.maps.LatLng(coord.latitude, coord.longitude);
                const marker = new google.maps.Marker({
                    position,
                    map
                });
            });
        }
    }
</script >

<style lang="scss">
	
	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';
	
	.page__about { overflow-x: hidden;
		.main-header { position: relative; height: 600px; }
		.arrow-bounce { display: block; }
		.footer__main {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
	
	.google-map {
		width: 100vw;
		height: 100%;
		margin: 0 auto;
		background: gray;
	}
	
	
	@media screen and (max-width: 1366px) {
		.sec__about { flex-direction: column;
			.sec-head, .sec-body { width: 80%; margin: auto; }
			.sec-head { margin: -10px auto 40px; }
		}
		
		.sec__skills .sec-subttl { width: 59%; }
		.skill {
			&-item {padding: 10px 4% 10px 0;}
			&-ttl { padding-right: 15%; }
		}
		
		.page__inner {
			.sec__user { transform: translateY(-50px); }
			.page__inner .user-ttl { padding-top: 30px; }
		}
	
	}
	@media screen and (max-width: 1024px) {
		.page__about .main-header { height: 500px; }
		.page__inner .sec__user { transform: translateY(0); }
		.sec__about { box-sizing: border-box;
			.sec-body { width: 60%; box-sizing: border-box;}
		}
		
		.skill-list { box-sizing: border-box; text-align: center; }
		
	}
	
	@media screen and (max-width: 600px) {
		.sec__about {
			.sec-img { width: 130%; margin-left: -15%; }
			.sec-body { width: 100%; }
		}
		.sec__skills {
			.sec-subttl { width: 84%; }
			.sec-txt { width: 100%; }
		}
	}
</style>



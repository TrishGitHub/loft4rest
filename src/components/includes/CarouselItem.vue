<template lang="pug">
	.carousel
		.carousel-item(v-for="slide in slides" v-bind:style="style"  v-on:click="centerSelf") {{slide}}
			div 1
</template>

<script>
    export default {
        name: 'CarouselItem',
        data() {
            return {
                slides: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                zIndex: 0,
                xtrans: 0,
                ytrans: 0,
                scale: 1,
                opacity: 1,
            }
        },
        computed: {
            style() {
                return {
                    transition: 'transform 0.5s, opacity 0.5s',
                    transform: this.transform,
                    'z-index': this.zIndex,
                    opacity: this.opacity,
                }
            },

            transform() {
                return [
                    `translate(${this.xtrans - 50}%, ${this.ytrans - 50}%)`,
                    `scale(${this.scale})`,
                ].join(' ');
            }
        },
        methods: {
            centerSelf() {
                alert("here");
                this.$parent.arrange(this.$parent.$children.indexOf(this));
			},
        }
    }
</script>

<style lang="scss">
	.carousel {
		position: relative;
	}
	.carousel > div {
		background-color: #000;
		color: #fff;
		width: 10vw;
		height: 10vw;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
		line-height: 10vw;
		font-family: sans-serif;
		font-size: 6vw;
	}
	.carousel .dots {
		position: absolute;
		bottom: 0;
		padding: 5%;
		width: 100%;
	}
	.carousel .dots .dot {
		background-color: #000;
	}


</style>
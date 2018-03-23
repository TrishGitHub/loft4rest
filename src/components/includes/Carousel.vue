<template lang="pug">
	CarouselItem
</template>

<script>
	import CarouselItem from './CarouselItem';
    export default {
        name: 'Carousel',
        components: {
            'CarouselItem': CarouselItem,
		},
        data() {
            return {
            }
        },
        mounted() { this.arrange(0); },
        
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
            _mod: (n, m) => ((n % m) + m) % m,
            arrange(centerIndex) {
                const center = this.$children[centerIndex];
                const half = (this.$children.length - 1) / 2;
                const before = [];
                for (let i = centerIndex - 1; before.length < half; i--) {
                    before.push(this.$children[this._mod(i, this.$children.length)]);
                }
                const after = [];
                for (let i = centerIndex + 1; after.length < (this.$children.length - before.length - 1); i++) {
                    after.push(this.$children[this._mod(i, this.$children.length)]);
                }
                center.xtrans = 0;
                center.scale = 1;
                center.opacity = 1;
                center.zIndex = Math.max(before.length, after.length) + 1;
                [before, after].forEach((list, listIndex) => {
                    let parentTrans = 0;
                    list.forEach((item, i) => {
                        item.scale = 0.8 ** (i + 1);
                        const absolute = (105 * item.scale * 1.125) + parentTrans;
                        parentTrans = absolute;
                        item.xtrans = (listIndex == 0 ? -1 : 1) * absolute;
                        item.opacity = Math.max(1 - (0.25 * (i / 2 + 1) ** 2), 0);
                        item.zIndex = Math.max(before.length, after.length) - i;
                    });
                });
            },
        },
    }
</script>

<style lang="scss">
	.carousel {
		position: relative;
		background-color: #e1e4d7;
		height: 100vh;
	}
	.carousel > div {
		background-color: #fff;
		color: deeppink;
		width: 20vw;
		height: 20vw;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
		line-height: 20vw;
		font-size: 10vw;
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
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
        // Begin by centering the first element in the carousel
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
            // http://stackoverflow.com/q/4467539
            _mod: (n, m) => ((n % m) + m) % m,

            // Distribute elements so that they align with the selected elemenent in the center
            arrange(centerIndex) {
                const center = this.$children[centerIndex];
                const half = (this.$children.length - 1) / 2;

                // Items that will be displayed to the left of the item at centerIndex
                const before = [];
                // Keep adding items before until half the non-centerIndex items have been added
                for (let i = centerIndex - 1; before.length < half; i--) {
                    // this._mod is used to emulate a toroidal array by mapping elements below index 0 or beyond
                    // the max index to elements in the valid array range
                    before.push(this.$children[this._mod(i, this.$children.length)]);
                }

                // Items that will be displayed to the right of the item at centerIndex
                const after = [];
                for (let i = centerIndex + 1; after.length < (this.$children.length - before.length - 1); i++) {
                    after.push(this.$children[this._mod(i, this.$children.length)]);
                }


                // Position all elements


                // Position center
                center.xtrans = 0;
                center.scale = 1;
                center.opacity = 1;
                center.zIndex = Math.max(before.length, after.length) + 1;

                // Position elements to left and right
                [before, after].forEach((list, listIndex) => {
                    // Tracks the amount by which the parent was translated
                    let parentTrans = 0;

                    // Apply styles for each element in selected list
                    list.forEach((item, i) => {
                        // Set size
                        item.scale = 0.8 ** (i + 1);
                        // Set x offset. Negative for before, positive for after
                        const absolute = (105 * item.scale * 1.125) + parentTrans;
                        parentTrans = absolute; // Update how much parent was translated by
                        item.xtrans = (listIndex == 0 ? -1 : 1) * absolute;
                        // Set opacity
                        item.opacity = Math.max(1 - (0.25 * (i / 2 + 1) ** 2), 0);
                        // Set z-index
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
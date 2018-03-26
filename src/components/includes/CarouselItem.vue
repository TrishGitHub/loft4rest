<template lang="pug">
	.carousel
		.carousel-item(v-for="i in array" v-bind:style="style"  v-on:click="centerSelf") {{i+1}}
</template>

<script>
    export default {
        name: 'CarouselItem',
        data: () => ({
			array: [0,1,2,3,4,5,6,7,8,9],
            zIndex: 0,
            xtrans: 0,
            ytrans: 0,
            scale: 1,
            opacity: 1,
        }),
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
                this.$parent.arrange(this.$parent.$children.indexOf(this));
			},
        }
    }
</script>

<style lang="scss">

</style>
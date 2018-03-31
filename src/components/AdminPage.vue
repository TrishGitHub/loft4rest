<template lang="pug">
    .wrapper.page__admin
        header
            h1.sec-ttl Панель администрирования
            a(href="/").btn Вернуться на сайт
        .content
            tabs
            .content-inner

</template>

<script>

    import tabs from './includes/tabs'

    export default {
        components: {
            tabs: tabs
        }
    }
    
</script>

<style lang="scss">

	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';

.page__admin { position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        background: rgba(255, 255, 255, .7);
        
    }

    header { position: relative; padding: 30px; background: $green-light; z-index: 1;}
    .sec-ttl { font-size: 1.75rem; font-familty: $font-roboto; font-weigth: 500; color: #fff; text-align: left; text-transform: none; 
         &::after { display: none; }
    }

    .content {
        &-inner { padding: 30px; }
        position: relative;         
        z-index: 1;
    }
}
    
</style>
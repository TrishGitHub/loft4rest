<template lang="pug">
    .wrapper.page__admin
        header
            h1.sec-ttl Панель администрирования
            a(href="/").btn Вернуться на сайт
        .content
            tabs
            .content-inner
                tab-about

</template>

<script>

    import tabs from './includes/tabs'
    import tabAbout from './includes/tab-about'

    export default {
        components: {
            tabs: tabs,
            tabAbout: tabAbout,
        }
    }
    
</script>

<style lang="scss">

	@import '../assets/scss/normalize';
	@import '../assets/scss/variables';

.page__admin { position: relative; background: url("../assets/images/bg/water.jpg") center no-repeat; background-size: cover;
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

    .sec-subttl { display: inline-block; }

    .content {
        &-inner { padding: 30px; }
        position: relative;         
        z-index: 1;
    }

    .skill { display: flex; width: 50%; max-width: 700px; align-items: center;
        &-head { width: 100%; margin: 1rem; font-size: 1.5rem; }

        .input-field {
            max-width: 200px;
            margin: 0 30px;
            padding: 20px;  
            font-size: 1rem;          
        }

        .btn { position: initial; background: $green-light; border: 1px solid $green-light; transition: background-color .6s; 
            &:hover {background-color: $green-dark; }
        }
    }
}
    
</style>
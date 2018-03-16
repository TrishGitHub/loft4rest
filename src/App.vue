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
  @font-face {
    font-family: 'Sansus Webissimo';
    src: url('./assets/fonts/SansusWebissimo/SansusWebissimo.eot');
    src: url('./assets/fonts/SansusWebissimo/SansusWebissimo.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/SansusWebissimo/SansusWebissimo.woff2') format('woff2'),
    url('./assets/fonts/SansusWebissimo/SansusWebissimo.woff') format('woff'),
    url('./assets/fonts//SansusWebissimo/SansusWebissimo.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  
  $green-light: #649257;
  $green-dark: #487f39;
  $font-sansus: 'Sansus Webissimo';
  
  
  
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
    overflow: hidden;
    min-height: 100%;
    position: relative;
    background: url("./assets/images/bg/water.jpg") 50% 50% no-repeat;
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


</style>

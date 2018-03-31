<template lang="pug">
    .tabs
        ul.tab-list
            li.tab-item(v-for="(tab, index) in tabs"
                        :class="{'tab-active': index == 0 }"
                        )
                a(href="#").tab-link {{tab}}  


</template>

<script>
    export default {
        data() {
            return {
                tabs: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4' ]
            }
        }
    }
    
</script>

<style lang="scss">

    @import '../../assets/scss/variables';

    .tab {
        &-list { display: flex; margin: 0; padding-left: 0; background-color: #f0efe9;}
        &-item { position: relative; padding: 0 5%; border-right: 2px solid #fff; }
        &-link { width: 100%; display: block; padding: 20px 5%; font-weight: 500; color: inherit; text-decoration: none; text-transform: uppercase; }
    }

    .tab-active { background: #fff; 
        .tab-link { color: $green-dark; }
    }

    
</style>
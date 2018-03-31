<template lang="pug">
    .skill-list
        .skill-title {{skillType}}
        table

</template>

<script>
    export default {
        props: {
            skillType: String
        }
        
    }
</script>

<style lang="scss">
    @import '../../assets/scss/variables';

</style>
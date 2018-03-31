<template lang="pug">
    .section__about
        h1 Страница "Обо мне"
        skill-list(
            v-for="skillType in skillTypes"
            :key="skillType"
            :skillType="skillType"
        )
</template>

<script>
    import skillList from './skillList'

    export default {
        components: {
            skillList: skillList
        },
        data() {
            return {
            skills: [],
            skillTypes: ["Frontend", "Workflow", "Backend"]
            };
        },
        mounted() {
            fetch("/src/data.json")
                .then(data => {
                    return data.json();
                })
                .then(response => {
                    console.log(response);                
                });
        }
    }
</script>

<style lang="scss">
    @import '../../assets/scss/variables';
</style>
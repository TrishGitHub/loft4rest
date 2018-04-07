<template lang="pug">
    .section__about
        //- h1.section-ttl Страница «Обо мне»
        skill-list(
            v-for="skillType in skillTypes"
            :key="skillType"
            :skillType="skillType"
        )
</template>

<script>
    import skillList from './skillList'

    import axios from 'axios';

    export default {
        components: {
            skillList: skillList
        },
        data() {
            return {
                skills: [],
                errors: [],
                skillTypes: ["Frontend", "Backend", "Workflow"]
            };
        },
        mounted() {
            axios.get(`http://localhost:5000/api/skill`)
                .then(response => {
                    this.skills = response.data.skills;
                })
                .catch(e => {
                this.errors.push(e)
            })

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/variables';

    .section {
        &-ttl {
            font-size: 1.3125rem; 
            text-align: left;
            color: rgba(86, 99, 88, 255);
        }

    }

</style>
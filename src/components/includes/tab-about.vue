<template lang="pug">
    .section__about
        h1.section-ttl Страница «Обо мне»
        skill-list(
            v-for="skillType in skillTypes"
            :key="skillType"
            :skillType="skillType"
            :skills="skills"
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
            skills: [
                {
                    "id": 1,
                    "name": "Html",
                    "percents": 10,
                    "type": 1
                },
                {
                    "id": 2,
                    "name": "CSS",
                    "percents": 20,
                    "type": 1
                },
                {
                    "id": 3,
                    "name": "javaScript",
                    "percents": 30,
                    "type": 1
                },
                {
                    "id": 4,
                    "name": "Git",
                    "percents": 40,
                    "type": 2
                },
                {
                    "id": 5,
                    "name": "Gulp",
                    "percents": 50,
                    "type": 2
                },
                {
                    "id": 6,
                    "name": "Bower",
                    "percents": 60,
                    "type": 2
                },
                {
                    "id": 7,
                    "name": "Php",
                    "percents": 70,
                    "type": 3
                },
                {
                    "id": 8,
                    "name": "Node.js",
                    "percents": 80,
                    "type": 3
                },
                {
                    "id": 9,
                    "name": "Mongo.db",
                    "percents": 90,
                    "type": 3
                }
            ],
            skillTypes: ["Frontend", "Workflow", "Backend"]
            };
        },
        mounted() {
            // fetch('/src/data.json')
            //     .then(data => {
            //         return data.json();
            //     })
            //     .then(response => {
            //         console.log(response);            
            //     })

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
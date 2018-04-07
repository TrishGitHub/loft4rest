<template lang="pug">
    .skill-list
        h3.sec-subttl {{skillType}}
        div(class="skill" v-for="skill in skills" v-if="checkSkillType(skillType) === skill.type")
            h3.skill-head {{skill.name}}
            input(class="input-field" type="text" :value="skill.percents") 
            button(type="button", class="btn") Удалить
            //- skill-list-item
</template>

<script>
    import skillListItem from './skillListItem'
    import axios from 'axios';

    export default {
        components: {
            skillListItem: skillListItem,
        },

        props: {
            skillType: String,
            // skills: Object,
        },

        data() {
            return {
                skills: [],
                errors: [],
            };
        },

        mounted(){  
            axios.get(`http://localhost:5000/api/skill`)
                .then(response => {
                    this.skills = response.data.skills;
                })
                .catch(e => {
                this.errors.push(e)
            })   
        }, 
        methods: {
            checkSkillType(skillTypeName) {
                switch (skillTypeName) {
                    case 'Frontend' :
                        return 1;
                    case 'Backend' :
                        return 2;
                    case 'Workflow' :
                        return 3;
                }
            }
        }
        
    }
</script>

<style lang="scss">
    @import '../../assets/scss/variables';

</style>
<template lang="pug">
    .skill-list
        h3.sec-subttl {{skillType}}
        div(class="skill" v-for="skill in skills" v-if="checkSkillType(skillType) === skill.type")
            h3.skill-head {{skill.name}}
            input(class="input-field" type="text" :value="skill.percents") 
            button(type="button", @click="deleteSkill" class="btn") Удалить
            //- skill-list-item
        .add-wrap
            input(class="input-field" type="text" name="newSkill" placeholder="Новый навык") 
            input(class="input-field" type="text" name="newScore" placeholder="Cтепень владения") 
            button(type="button", name="addNewSkill" @click="addNewSkill" class="btn") Добавить
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
            deleteSkill(){
                alert('delete');
            },
            addNewSkill(){
                alert('add');
            },
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

    .add-wrap { padding: 30px 0;
        .input-field {
            max-width: 200px;
            margin: 0 30px;
            margin-left: 0;
            padding: 20px;  
            font-size: 1rem;          
        }

        .btn { position: initial; background: rgba(255, 255, 255, .4); color: $green-light; border: 1px solid $green-light; transition: color .6s; 
            &:hover {color: $green-dark; }
        }
    }

    input[name="newSkill"] {
        min-width: 320px;
    }

</style>
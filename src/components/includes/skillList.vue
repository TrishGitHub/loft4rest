<template lang="pug">
    .skill-list
        h3.sec-subttl {{skillType}}
        div(class="skill" v-for="skill in skills" v-if="checkSkillType(skillType) === skill.type")
            h3.skill-head {{skill.name}}
            input(class="input-field" type="text" :value="skill.percents") 
            button(type="button", @click="deleteSkill" class="btn") Удалить
            //- skill-list-item
        form.form#addSkill(class="add-wrap" @submit.prevent="sendSkill(skillType)")
            input(class="input-field" type="text" name="newSkill" placeholder="Новый навык", v-model="skill.name") 
            input(class="input-field" type="text" name="newScore" placeholder="Cтепень владения", v-model="skill.percents") 
            input(name="" type="submit" value="Добавить").btn

        //- .add-wrap
        //-     input(class="input-field" type="text" name="newSkill" placeholder="Новый навык", v-model="skill.name") 
        //-     input(class="input-field" type="text" name="newScore" placeholder="Cтепень владения", v-model="skill.percents") 
        //-     button(type="button", name="addNewSkill" @click="addNewSkill(skillType)" class="btn") Добавить
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
                skill: {
                    name: null,
                    percents: null,
                },
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
            sendSkill(skillType) {              
                axios({
                    method: 'post',
                    url: 'http://localhost:3000/api/skill',
                    data: {
                    name: this.skill.name,
                    percents: this.skill.percents,
                    type: this.checkSkillType(skillType)
                    }
                }) 
                .then(rs => {
                    // this.$emit('updateList');
                });
            },
            deleteSkill(){
                alert('delete');
            },
            // addNewSkill(skillType){
            //     let newSkill = {
            //         name: this.skill.name,
            //         percents: this.skill.percents,
            //         type:  this.checkSkillType(skillType),
            //     }
            //     console.log(newSkill);

            //     axios.get(`http://localhost:5000/api/skill`)
            //     .then(response => {
            //          console.log(response);
            //           this.skills = response.data.skills;
            //     })
            //     .catch(e => {
            //     this.errors.push(e)
            // })  
            // },
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
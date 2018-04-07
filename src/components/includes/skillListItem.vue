<template lang="pug">
    tr
        td
            input(v-for="skill in skills" type="text" :value="skill.persents") 
        td
            button(type="button", class="btn") Удалить
</template>

<script>
    import axios from 'axios';

    export default {        
        props: {
            skill: Object
        },
        data() {
            return {
                skills: [],
                errors: [],
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
<script>

<style></style>
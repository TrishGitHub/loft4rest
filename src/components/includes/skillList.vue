<template lang="pug">
    .skill-list
        .skill-title {{skillType}}
        table
            skill-list-item(
                v-for="skill in skills"
                :key="skill.id"
                :skill="skill"
            )


</template>

<script>
    import skillListItem from './skillListItem'

    export default {
        components: {
            skillListItem: skillListItem,
        },

        props: {
            skillType: String,
            skills: Object,
        },

        mounted(){

            console.log(typeof this.skills)
      
        }
        
    }
</script>

<style lang="scss">
    @import '../../assets/scss/variables';

</style>
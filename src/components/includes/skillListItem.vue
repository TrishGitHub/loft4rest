<template lang="pug">
    tr
        td {{skill.name}}
        td
            input(type="text" :value="skill.persents") 
        td
            button(type="button", class="btn") Удалить
</template>

<script>
    export default {
        props: {
            skill: Object
        }
    }
<script>
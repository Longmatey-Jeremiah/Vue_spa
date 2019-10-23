<template>
    <div>
        this is welcome to vue-anchor with {{this.name}}
        <router-link to="/" exact-active-class="active">welcome</router-link>
        <router-link to="/about">about</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: process.env.VUE_APP_NAME
            }
        },
    }
</script>

<style scoped>
.active {
    color: red
}
</style>
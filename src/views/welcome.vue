<template>
    <div>
        this is welcome to vue-anchor with Boss Jerry
        <router-link to="/" exact-active-class="active">welcome</router-link>
        <router-link to="/about">about</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.active {
    color: red
}
</style>
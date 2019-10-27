<template>
    <div>
        <basenavbar></basenavbar>
        this is welcome to vue-anchor with {{this.name}}
    </div>
</template>

<script>
import basenavbar from '../components/BaseNavBar'
    export default {
        data() {
            return {
                name: process.env.VUE_APP_NAME
            }
        },
        components:{
            basenavbar,
        }
    }
</script>

<style scoped>
.active {
    color: red
}
</style>
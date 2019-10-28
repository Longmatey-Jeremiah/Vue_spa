<template>
    <div>
        <base-navbar></base-navbar>
        <router-view></router-view>

        <div class="container-fluid">
            <div class="g-text">
             Welcome to vue-anchor
            </div>
        </div>
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
            "base-navbar":basenavbar,
        }
    }
</script>

<style scoped>
.active {
    color: red;
}
.g-text {
    margin:150px 0 0 400px;
    /*color:white;*/
    font-size: 45px;
}
.g-text:hover{
    font-size: 46px;
    color:rgba(244, 64, 250, 0.644);
}
</style>
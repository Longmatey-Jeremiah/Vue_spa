<template>
    <div>
        <base-navbar></base-navbar>
        <!--<hello-world></hello-world>-->
        <router-view></router-view>

        <div class="container-fluid">
            
            <div class="g-text">
                <div>
                   <p>Welcome to Anchor</p>
                   <p>Click the buttons below or nav-links to navigate this App</p>
                </div>
                <router-link to="/about" class="btn btn-outline-danger">About</router-link>
                <router-link to="/contact" class="btn btn-outline-warning">Contact</router-link>
                <router-link to="/blog" class="btn btn-outline-success">Blog</router-link>             
            </div>
        </div>
    </div>
</template>

<script>
import basenavbar from '../components/BaseNavBar'
//import helloworld from '../components/HelloWorld'
    export default {
        data() {
            return {
                name: process.env.VUE_APP_NAME
            }
        },
        components:{
            "base-navbar":basenavbar,
            //"hello-world":helloworld
        }
    }
</script>

<style scoped>
.active {
    color: red;
}
.g-text {
    margin:65vh 0 0 40%;
    /*color:white;*/
    position: relative;
    font-size: 15px;

}
.btn{
    margin:20px;
    border-radius: 1rem;
}
.btn:hover {
transform:scale(1.5);
}
</style>
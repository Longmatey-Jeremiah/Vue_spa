<template>
    <div>
        <base-navbar></base-navbar>
       <keep-alive>     
        <div class=" about container">
            <h1 style="text-align:center;color:white" class="m-5">Welcome to the contacts page of Vue-anchor</h1> 
            <form onSubmit.prevent="onSubmit($event)">
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" class="form-control shadow-sm" type="text" placeholder="">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" class="form-control shadow-sm" type="email" placeholder="">
            </div>
            <div class="form-group">
                <label for="comment">Address</label>
                <textarea name="comment" id="comment" type="text" class="form-control shadow-sm" cols="30" rows="10" placeholder=""></textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Send Message</button>
            </div>
        </form>
        </div>
       </keep-alive>
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

/*.contact {
    color:white
}*/
.form-group {
    margin-left:20%;
    width:60%;
   /* color:white;*/
}
.form-control{
    outline:none;
}
</style>
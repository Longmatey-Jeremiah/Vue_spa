<template>
    <div>
        <base-navbar></base-navbar>
        <div class="about container">
            <p class="mt-3 ml-5">This vue-anchor Blog</p>

        <h1 style="text-align:center">Recent Posts</h1>

        <section v-if="error">
            !Oops something went wrong,please try again :)
        </section>

        <section v-else>

            <div v-if="loading">Loading</div>

            <div v-else class="">
                  <router-link class="btn btn-outline-secondary" to="/posts/create" style="float:right;margin:10px 10%;">Add new Post</router-link>      
                <div v-for="post in posts" v-bind:key="post.id">
                
                    <div class="card">
                
                        <div>
                
                            <h5 card-title>{{post.title}}</h5>
                            <p class="card-body"> {{post.body}}</p>
                
                        </div>
                
                    </div>
                
                </div>
           
            </div>
         
         </section>
        
        </div>
   
    </div>
</template>

<script>
import basenavbar from '../components/BaseNavBar'
import axios from 'axios'
    export default {
        data() {
            return {
                name: process.env.VUE_APP_NAME,
                posts:null,
                error:false,
                info:null,
                errortype:null,
                loading:true,
            }
        },
        components:{
            "base-navbar":basenavbar,
        },
        
        mounted(){
            axios
                .get('http://jsonplaceholder.typicode.com/posts')
                .then(response=>{
                    this.posts=response.data;
                    this.info=response.data;
                })
                .catch(error=> {
                    //console.log(error);
                    this.error= true;
                    this.errortype=error;
                })
                .finally(()=>this.loading=false)
        }
    }
</script>

<style scoped>
/*.about {
    color:white
}*/
.card{
    width: 80%;
    margin:5% 0 0 10%;
    background-color: rgba(100,100, 100, 0.3);
}
.card h5{
    text-align:center;
}
.card-body{
       overflow:wrap;
}
</style>

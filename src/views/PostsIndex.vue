<template>
    <div>
        <base-navbar></base-navbar>
        <div class="about container">
            <p class="mt-3 " style="text-align:center">This vue-anchor Blog</p>

        <h1 style="text-align:center">Recent Posts</h1>

        <section v-if="error" style="text-align:center">
            !Oops something went wrong,please try again :)
        </section>

        <section v-else>

            <div v-if="loading" style="text-align:center">Loading</div>

            <div v-else class="">
                  <router-link class="btn btn-outline-secondary" to="/posts/create" style="float:right;margin:10px 10%;">Add new Post</router-link>      
                <div v-for="post in posts" v-bind:key="post.id">
                
                    <div class="card">
                
                        <div>
                            <router-link to="/posts/:id"><h5 class="card-title">{{post.title}}</h5></router-link>
                                <p class="card-body"> {{post.body}} </p>
                            <router-link to="/posts/:id/edit" class="btn btn-outline-secondary" style="float:right;margin:10px 10%;">Edit</router-link>
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
.about {
    color:white
}
.card{
    width: 80%;
    margin:5% 0 0 10%;
    background-color: rgba(100,100, 100, 0.3);
}
.card h5{
    text-decoration: none;
    text-align:center;
    color: rgb(120,120, 220)
}
.card-body{
    overflow:wrap;
}
</style>

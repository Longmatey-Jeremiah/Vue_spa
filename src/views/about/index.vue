<template>
    <div>
        <base-navbar></base-navbar>
        <div class="about container">

        <h1 style="text-align:center;color: rgba(100,100, 100, 0.9);" class="mt-5">About Vue-Anchor</h1>

        <section v-if="error" class="text-center">
            !Oops something went wrong,please try again :)
        </section>

        <section v-else>

            <div v-if="loading" class="text-center animate">Loading</div>

            <div v-else class="card">
                <div v-for="post in posts" class="mt-5" v-bind:key="post.id">
                
                        <div>
                
                            <h5 card-title>{{post.title}}</h5>
                            <p class="card-body"> {{post.body}}</p>
                
                        </div>
                
                </div>
        
            </div>   
         
        </section>
        
        </div>
   
    </div>
</template>

<script>
import basenavbar from '../../components/BaseNavBar'
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
                })
                .catch(error=> {
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
    color:white;
    margin:5% 0 0 10%;
    background-color: rgba(100,100, 100, 0.7);
}
.card h5{
    text-align:center;
    color:rgba(225,225, 225, 0.8);
}
.card-body{
    overflow:wrap;
}
.animate{
    animation-name: animate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    outline:none; 
}

@keyframes animate{
0%   {color:white;font-weight:normal; }
25%  {color:powderblue;font-weight:bold;}
50%  {color:yellow;font-weight:bolder;}
75%  {color:springgreen;font-weight:bold;}
100% {color:white;font-weight:normal;}
}
</style>

<template>
    <div>
        <base-navbar></base-navbar>
         
        <div class=" contact container">
            <h1 style="text-align:center;" class="m-5">Contact page of Vue-anchor</h1> 
            
            <form @submit.prevent="sendMessage()">
            <div v-if="sent" style="text-align:center;">
                <h2>{{message}} :)</h2>
                 <span class="spinner-grow"></span> 
                </div>
            <div v-else>
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" class="form-control shadow-sm" type="text" placeholder="Your name" required v-model="this.contact.name">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" class="form-control shadow-sm" type="email" placeholder="Your email address" required v-model="this.contact.email">
            </div>
            <div class="form-group">
                <label for="comment">Message</label>
                <textarea name="comment" id="comment" type="text" class="form-control shadow-sm" cols="30" rows="10" required placeholder="Your message" v-model="this.contact.body"></textarea>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary" @click="sendMessage()">Send Message</button>
            </div>
            </div>
        </form>
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
                contact:{
                    name:'',
                    email:'',
                    body:'',
                    id:null,
                    postId:null,
                },
                errors:[],
                sent:false,
            }
        },
        components:{
            "base-navbar":basenavbar,
        },
        methods:{
            sendMessage(){
                axios.post(`http://jsonplaceholder.typicode.com/posts/1/comments`,{
                    name:this.contact.name,
                    email:this.contact.email,
                    body:this.contact.body, 
                })
                .then(()=>{
                this.sent = true;
                this.message = 'Message Sent Successfully';
                setTimeout(() => this.$router.push({ name: 'welcome' }), 2000);
                })
                .catch(e=>{
                    this.errors.push(e);
                })
                .finally(()=>{
                    this.sent=false;
                })
        },
    }
};
</script>

<style scoped>

.contact {
    color: rgba(100,100, 100, 0.8);
}
.form-group {
    margin-left:20%;
    width:60%;
    font-weight: bold;
   /* color:white;*/
}
.form-control{
    outline:none;
}
.spinner-grow{
    font-size:80px;
    animation-name: welcome;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    outline:none; 
}

@keyframes welcome{
  0%   {color:white;}
  25%  {color:yellowgreen;}
  50%  {color:hotpink;}
  75%  {color:springgreen;}
  100% {color:white;}
  }
</style>
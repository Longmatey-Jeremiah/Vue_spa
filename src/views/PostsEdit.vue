/*jshint esversion:6*/
<template>
  <div>
    <base-navbar></base-navbar>
    <div class="about container mt-5">
      <div v-if="message" class="alert alert-success text-center">{{ message }}</div>
      <div v-if="! loaded" class="text-center">Loading...</div>
      <form @submit.prevent="updatePost()" v-else>
        <div class="form-group">
            <label for="post_title">Title</label>
            <input id="post_title" class="form-control" :placeholder="post.title" v-model="post.title" />
        </div>
        {{info}}
        <div class="form-group">
            <label for="post_body">Body</label>
            <textarea  name="post_body" id="post_body" type="text" class="form-control" rows="10" cols="30" :placeholder="post.body" v-model="post.body" />
        </div>
        <div class="form-group">
            <button type="submit" :disabled="saving" class="btn btn-primary" @click="updatePost()">Update</button>
            
            <button :disabled="saving" class="btn-danger btn" @click="deletePost()">Delete</button>
        </div>
    </form>
    </div>
  </div>
</template>
<script>
import basenavbar from '../components/BaseNavBar'
import axios from 'axios';
  
export default {
  data() {
    return {
      message: null,
      loaded: true,
      saving: false,
      post: {
        id: "",
        title: "",
        body: ""
      },
      error:{
        title:[],
        body:[],
      },
    };
  },
    components:{
      "base-navbar":basenavbar,
      //"base-form":baseform,
    },
    mounted(){
      axios
          .get('http://jsonplaceholder.typicode.com/posts/:id')
          .then(response=>{
              this.post=response.data;
          })
          .catch(error=> {
              //console.log(error);
              this.error= true;
              this.errortype=error;
          })
          .finally(()=>this.loading=false)
        /*  axios.get(`http://jsonplaceholder.typicode.com/posts/:id`,{

    })
    .then(()=>{
      this.loaded=true;
    })
    .catch(e=>{
      this.errors.push(e);
    })*/
      },
  methods: {
     updatePost() {
            axios.patch(`http://jsonplaceholder.typicode.com/posts/:id`, {
                body: this.post.body,
                title: this.post.title,
            })
            .then(() => {
                this.saving = true;
                this.loaded = true;
                this.message = 'Post Updated Successfully';
                setTimeout(() => this.$router.push({ name: 'posts.index' }), 2000);
            })
            .catch(e => {
                this.errors.push(e)
            })
            .finally(()=>{
                this.saving= false;
            })
     },
    deletePost() {
        this.saving = true;
        axios.delete(`http://jsonplaceholder.typicode.com/posts/:id`)
            .then(() => {
                this.saving = true;
                this.message = 'Post Deleted Successfully';
                setTimeout(() => this.$router.push({ name: 'posts.index' }), 2000);
            })
            .catch(e => {
                this.errors.push(e)
            })
            .finally(()=>{
                this.saving= false;
            })
     },
    }
};
</script>
<style scoped>
.form-group {
    font-weight: bold;
    font-size:25px;
    margin-left:20%;
    width:60%;
    color: rgba(100,100, 100, 0.7)
}
.alert{
    margin-left:20%;
    width:60%;
    color:white;
}
</style>
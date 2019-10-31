<template>
    <div>
        <base-navbar></base-navbar>
        <div class="about container">
        <h1 style="text-align:center" class="m-5">Create a Post</h1>
        <div v-if="message" class="alert alert-success text-center">{{ message }}</div>
        <form @submit.prevent="createPost()">
          <div class="form-group" :class="{'has-error':errors.title.length}">
              <label for="post_title">Title</label>
              <input id="post_title" class="form-control" v-model="post.title" />
              <p class="help-block" v-for="{error,id} in errors.title" :key="id"> {{error}}</p>
          </div>
          <div class="form-group" :class="{'has-error':errors.body.length}">
              <label for="post_body">Body</label>
              <textarea name="post_body" class="form-control" id="post_body" cols="30" rows="10" v-model="post.body"></textarea>
              <p class="help-block" v-for="{error,id} in errors.body" :key="id"> {{error}}</p>
          </div>
          <div class="form-group">
              <button type="submit" :disabled="saving" @click="createPost()" class="btn btn-outline-secondary">
                  {{ saving ? 'Creating...' : 'Create' }}
              </button>
          </div>
        </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import basenavbar from '../components/BaseNavBar'
export default {
  data() {
    return {
        saving: false,
        message:false,
        post:{
            id:null,
            title: '',
            body: '',
            userId:11,
        },
        errors:{
            title: [],
            body: [],
        }
      }
    },
    components:{
    "base-navbar":basenavbar,
    },
    methods:{
        createPost() {
            axios.post(`http://jsonplaceholder.typicode.com/posts`, {
                body: this.post.body,
                title: this.post.title,
                userId:this.post.userId,
            })
            .then(() => {
                this.saving = true;
                this.message = 'Post Created Successfully';
                setTimeout(() => this.$router.push({ name: 'posts.index' }), 2000);
            })
            .catch(e => {
                this.errors.push(e)
            })
            .finally(()=>{
                this.saving= false;
            })
    } 
    }
}     
</script>
<style scoped>

/*.about {
    color:white
}*/
.card{
    width: 90%;
    margin:2% 5%;
    background-color: rgba(100,100, 100, 0.3);
}
.card h5{
    text-align:center;
}
.card-body{   
    overflow:wrap;
}
.form-group {
    margin-left:20%;
    width:60%;
}
.alert{
    margin-left:20%;
    width:60%;
}
/*.form-control{
    background-color: rgba(100,100, 100, 0.3);
    color:white;
    outline:none;
    border:none;
}*/
</style>
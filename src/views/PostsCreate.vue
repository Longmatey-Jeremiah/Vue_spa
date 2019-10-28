<template>
    <div>
        <base-navbar></base-navbar>
        <div class="about container">
        <h1 style="text-align:center" class="m-5">Create a Post</h1>
        <div v-if="message" class="alert">{{ message }}</div>
        <form @submit="createPost()">
          <div class="form-group">
              <label for="post_title">Title</label>
              <input id="post_title" class="form-control" v-model="post.title" />
          </div>
          <div class="form-group">
              <label for="post_body">Body</label>
              <textarea name="post_body" class="form-control" id="post_body" cols="30" rows="10" @change="createPost()" v-model="post.body"></textarea>
          </div>
          <div class="form-group">
              <button type="submit" :disabled="saving" class="btn btn-outline-secondary">
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
        message: false,
        post:{
            id:null,
            title: '',
            body: '',
            user_id:10,
            },
            errors: []
            }
    },
    components:{
    "base-navbar":basenavbar,
    },

    createPost() {
        axios.post(`http://jsonplaceholder.typicode.com/posts`, {
            body: this.post.body,
            title: this.post.title,
            
        })
        .then(() => {
            this.saving = true;
            this.message = false;
            this.message = 'Post Created Successfully'
            setTimeout(() => this.$router.push({ name: 'posts.index' }), 2000);
        })
        .catch(e => {
            this.errors.push(e)
    })

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
/*.form-control{
    background-color: rgba(100,100, 100, 0.3);
    color:white;
    outline:none;
    border:none;
}*/
</style>
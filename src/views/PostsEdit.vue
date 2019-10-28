/*jshint esversion:6*/
<template>
  <div>
    <base-navbar></base-navbar>
    <div class="about container">
      <div v-if="message" class="alert">{{ message }}</div>
      <div v-if="! loaded">Loading...</div>
      <form @submit.prevent="onSubmit($event)" v-else>
        <div class="form-group">
            <label for="post_title">Title</label>
            <input id="post_title" class="form-control" v-model="post.title" />
        </div>
        <div class="form-group">
            <label for="post_body">Body</label>
            <texdtarea  name="post_body" id="post_body" type="text" v-model="post.body" />
        </div>
        <div class="form-group">
            <button type="submit" :disabled="saving">Update</button>
            <button :disabled="saving" @click.prevent="onDelete($event)">Delete</button>
        </div>
    </form>
    </div>
  </div>
</template>
<script>
import basenavbar from '../components/BaseNavBar'
import api from '../axios/posts';

export default {
  data() {
    return {
      message: null,
      loaded: false,
      saving: false,
      error:null,
      post: {
        id: null,
        title: "",
        body: ""
      }
    };
  },
    components:{
      "base-navbar":basenavbar,
      //"base-form":baseform,
    },
  methods: {
    onSubmit() {
        this.saving = true;
        api.update(this.post.id, {
            title: this.post.title,
            body: this.post.body,
        }).then((response) => {
            this.message = 'Post updated';
            setTimeout(() => this.message = null, 10000);
            this.post = response.data.data;
        }).catch(error => {
            this.error=error;
        }).then(()=> this.saving = false);
    },
onDelete() {
  this.saving = true;
  api.delete(this.post.id)
     .then((response) => {
        this.message = 'Post Deleted';
        this.post = response.data;
        setTimeout(() => this.$router.push({ title: 'posts.index' }), 2000);
     });
}
  },
    created() {
      api.find(this.$route.params.id)
        .then((response) => {
            this.loaded = true;
            this.post = response.data.data;
        })
        .catch((err) => {
          this.error=err;
          this.$router.push({ title: '404' });
        });
    }
};
</script>
<style scoped>
</style>
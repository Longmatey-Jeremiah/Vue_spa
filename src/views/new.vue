postsindex.vue
<template>
    <div>
        <base-navbar></base-navbar>
        <div class="about container">
            <p class="mt-3 ml-5">Learn about vue-anchor with{{this.name}}</p>

        <h1 style="text-align:center">Recent Posts</h1>

        <section v-if="error">
            !Oops something went wrong,please try again :)
        </section>

        <section v-else>

            <div v-if="loading">Loading</div>

            <div v-else class="">
                  <router-link class="btn btn-outline-secondary" to="/posts/create" style="float:right;margin:10px 5%;">Add new Post</router-link>      
                <div v-for="post in posts" v-bind:key="post.id">
                
                    <div class="card">
                
                        <div>
                
                            <h5 card-title> {{post.title}} </h5>
                            <p class="card-body"> {{post.body}} </p>
                        <router-link to="/posts/:id/edit" class="btn btn-secondary">Edit</router-link>
                        </div>
                
                    </div>
                
                </div>
            
            </div> 
                <div class="pagination">
                    <button :disabled="! prevPage" @click.prevent="goToPrev" class="btn btn-primary">Previous</button>
                    {{ paginatonCount }}
                    <button :disabled="! nextPage" @click.prevent="goToNext" class="btn btn-danger">Next</button>
                </div>
         </section>
        
        </div>
    
    </div>
</template>

<script>
import basenavbar from '../components/BaseNavBar'
import axios from 'axios'

    const getPosts = (page, callback) => {
    const params = { page };

    axios
        .get('http://jsonplaceholder.typicode.com/posts', { params })
        .then(response => {
            callback(null, response.data);
            this.loading=false;
        }).catch(error => {
            callback(error, error.response.data);
        });
    };

export default {
        data() {
            return {
                name: process.env.VUE_APP_NAME,
                posts:[],
                meta:null,
                error:false,
                info:null,
                loading:null,
                links: {
                    first: null,
                    last: null,
                    next: null,
                    prev: null,
            },
            }
        },
        components:{
            "base-navbar":basenavbar,
            //"base-form":baseform,
        },
    computed: {
        nextPage() {
            if (! this.meta || this.meta.current_page === this.meta.last_page) {
                return;
            }

            return this.meta.current_page + 1;
        },
        prevPage() {
            if (! this.meta || this.meta.current_page === 1) {
                return;
            }

            return this.meta.current_page - 1;
        },
        paginatonCount() {
            if (! this.meta) {
                return;
            }

            const { current_page, last_page } = this.meta;

            return `${current_page} of ${last_page}`;
        },
    },
    beforeRouteEnter (to, from, next) {
        getPosts(to.query.page, (err, data) => {
            next(vm => vm.setData(err, data));
        });
    },

    beforeRouteUpdate (to, from, next) {
        this.posts = this.links = this.meta = null
        getPosts(to.query.page, (err, data) => {
            this.setData(err, data);
            next();
        });
    },
    methods: {
        goToNext() {
            this.$router.push({
                query: {
                    page: this.nextPage,
                },
            });
        },
        goToPrev() {
            this.$router.push({
                name: 'posts.index',
                query: {
                    page: this.prevPage,
                }
            });
        },
        setData(err, { data: posts, links, meta }) {
            if (err) {
                this.error = err.toString();
            } else {
                this.posts = posts;
                this.links = links;
                this.meta = meta;
            }
        },
      }
};
</script>

<style scoped>
.about {
    color:white
}
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
</style>




//postscreate.vue
<template>
    <div>
        <base-navbar></base-navbar>
        <div class="about container">
        <h1>Create a Post</h1>
        <div v-if="message" class="alert">{{ message }}</div>
        <form @submit.prevent="createPost()">
          <div class="form-group">
              <label for="post_title">Title</label>
              <input id="post_title" class="form-control" v-model="post.title" />
          </div>
          <div class="form-group">
              <label for="post_body">Body</label>
              <textarea name="post_body" class="form-control" id="post_body" cols="30" rows="10" v-model="post.body"></textarea>
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
import basenavbar from '../components/BaseNavBar'
    import api from '../axios/posts';

    export default {
        data() {
            return {
                saving: false,
                message: false,
                post: {
                    id:null,
                    title: '',
                    body: '',
                    user_id:10,
                }
            }
        },
        components:{
            "base-navbar":basenavbar,
            //"base-form":baseform,
        },
        methods: {
            createPost() {
                this.saving = true
                this.message = false
                api.create(this.post)
                    .then(() => {
                          this.message = 'Post Created Successfully'
                          setTimeout(() => this.$router.push({ name: 'posts.index' }), 2000);
                    })
                    .catch((err) => {
                        this.message = err.response.data.message || 'There was an issue creating the post.';
                    })
                    .then(() => this.saving = false)
            }
        }
    }
</script>
<style scoped>

.about {
    color:white
}
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
.form-control{
    background-color: rgba(100,100, 100, 0.3);
    color:white;
    outline:none;
    border:none;
}
</style>
<template>
  <div class="container">
    <h1 class="text-center">Ipsos Frontend with Vue</h1>
    <p v-if="isLoading">Loading...</p>
    <p v-else-if="!isLoading && (!posts || posts.length === 0)">
      No posts found.
    </p>
    <PostsList v-else-if="!isLoading && posts && posts.length > 0" :posts="posts"/>
  </div>
</template>

<script>
import PostsList from './components/PostsList.vue'

export default {
  name: 'App',
  components: {
    PostsList
  },
  data() {
    return {
        posts: [],
        isLoading: false
    };
  },
  mounted(){
    this.loadPosts();
    console.log(this.posts);
  },
  methods: {
      async loadPosts(){
          this.isLoading = true;
          await fetch('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
              if(response.ok){
                  return response.json();
              }
          })
          .then((data) => {
              this.isLoading = false;
              const posts = [];
              for(const index in data) {
                  posts.push(
                      {
                          userId: data[index].userId, 
                          id: data[index].id,
                          title: data[index].title,
                          body: data[index].body
                      }
                  );
              }
              this.posts = posts;
          });
      }
  }
}
</script>

<style>
*, body {
    margin: 0;
    padding: 0;
}
</style>

<template>
    <ul>
        <post-item v-for="post in posts" :key="post.id" :post="post"></post-item>
    </ul>
</template>

<script>
import PostItem from './PostItem.vue'

export default {
    components: {
        PostItem
    },
    props: {
        posts: Array
    },
}
</script>
<style scoped>
ul {
    column-count: 2;
}
@media only screen and (max-width: 719px) {
    ul {
        column-count: 1;
    }
}
</style>
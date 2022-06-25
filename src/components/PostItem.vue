<template>
    <li>
        {{post.title}}
    </li>
</template>
<script>
export default {
    props: {
        post: Object
    }
}
</script>
<style scoped>
li {
    list-style: none;
}

li:nth-child(odd) {
    background-color: gray;
    color: white;
}

li:hover {
    background-color: lightgray;
    color:blue;
}
</style>
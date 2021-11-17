<template>
    <div class="api-test">
        <p>Apit test</p>
        <button @click="getPosts">Get data</button>
        <ul v-if="posts.length">
            <li v-for="(item, index) in posts" :key="index">
                {{ item.title }}
            </li>
        </ul>
        <hr />
        <p>Create a post</p>
        <button @click="createPost">Create post</button>
        <hr />
        <button @click="getUsers">Get data</button>
        <ul v-if="users.length">
            <li v-for="(user, index) in users" :key="index">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPost } from '~/types/posts'
import { IUser } from '~/types/users'

export default Vue.extend({
    name: 'ApiTest',
    data() {
        return {
            posts: [] as Array<IPost>,
            users: [] as Array<IUser>
        }
    },

    methods: {
        async getPosts() {
            this.posts = await this.$repository.posts.getPosts()
        },
        async getUsers() {
            this.users = await this.$repository.users.getUsers()
        },
        async createPost() {
            const payload: IPost = {
                title: 'Test post',
                body: 'Test post body',
                userId: 1
            }
            await this.$repository.posts.createPost(payload)
        }
    }
})
</script>

<template>
    <div class="counter-test">
        <h1>Counter Test: {{ count }}</h1>
        <button @click="increment">+1</button>
        <button @click="decrement">-1 (w/ delay)</button>
        <button @click="incrementWithValue(5)">+5</button>
        <button @click="decrementWithValue(5)">-5</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
const users = namespace('users')

@Component
export default class CounterTest extends Vue {
    // Vuex
    @users.State
    public info!: object

    @users.State
    public count!: number

    @users.Action
    public increment!: () => void

    @users.Action
    public decrement!: () => void

    @users.Action
    public incrementWithValue!: (value: number) => void

    @users.Action
    public decrementWithValue!: (value: number) => void
}
</script>

<style scoped>
.counter-test {
    padding: 50px;
}
button {
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
}
</style>

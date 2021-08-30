<template>
  <div class="kentest">
    <h1>KenTest</h1>
    <p>{{ something }} {{ another }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>{{ fullName }} {{ count }}</p>
    <button @click="incrementWithValue(5)">+5</button>
    <button @click="decrementWithValue(5)">-5</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
const users = namespace('users')
@Component
export default class KenTest extends Vue {
  // Data
  something = 'else'
  another = 'thing'

  // Vuex
  @users.State
  public info!: object

  @users.State
  public count!: number

  @users.Getter
  public fullName!: string

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
.kentest {
  padding: 50px;
}
button {
  padding: 10px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  margin: 10px;
}
</style>

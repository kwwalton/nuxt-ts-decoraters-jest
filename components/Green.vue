<template>
    <div class="green">
        <p>Green Component</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Green extends Vue {}
</script>

<style scoped>
.green {
    background-color: green;
    color: white;
}
</style>

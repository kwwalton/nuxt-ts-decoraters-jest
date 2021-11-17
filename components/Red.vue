<template>
    <div class="red">
        <p>Red Component</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Red extends Vue {}
</script>

<style scoped>
.red {
    background-color: red;
    color: white;
}
</style>

<template>
    <div class="blue">
        <p>Blue Component</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Blue extends Vue {}
</script>

<style scoped>
.blue {
    background-color: blue;
    color: white;
}
</style>

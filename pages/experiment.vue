<template>
    <div>
        <DynamicOrdering />
        <p>{{ testing }}</p>
        <ApiTest />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Experiment extends Vue {
    testing = 'hello'
}
</script>

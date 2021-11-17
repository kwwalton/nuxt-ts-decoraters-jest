<template>
    <div>
        <Nuxt />
        <p>{{ windowWidth }}</p>
        <ReactivityTest />
    </div>
</template>

<script lang="ts">
// NOTE: after only being able to make data reactive in here by using at least 1
// piece of data in the template, you should not bother with code in the layout files
// You could add a component to the template if you want it in every layout
import { Component, namespace, Vue } from 'nuxt-property-decorator'
const general = namespace('general')

@Component
export default class Default extends Vue {
    // Vuex
    @general.State
    public windowWidth!: number

    @general.Mutation
    public setWidth!: (payload: number) => void

    // Methods
    handleResize() {
        this.setWidth(window.innerWidth)
    }

    // Lifecycle
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    }
}
</script>

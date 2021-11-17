<template>
    <div>
        <p>I am not a class based component and its ok.</p>
    </div>
</template>

<script lang="ts">
// It doesn't have to be a class based component
// Even without using a reactive property in the template,
// because this is inside the Nuxt instance, data is reactive
import Vue from 'vue'
import { mapMutations, mapState } from 'Vuex'
export default Vue.extend({
    data() {
        return {
            localWindowWidth: 0
        }
    },
    computed: {
        ...mapState('general', ['ww']),
        isMobile(): boolean {
            // You have to specify the return type here for typescript
            return this.localWindowWidth < 600 // or whatever magic number you want to use
        }
    },
    mounted() {
        window.addEventListener('resize', this.handleResize)
        this.localWindowWidth = window.innerWidth
        this.setWidth(123)
        console.log('mounted reactivity test')
    },
    methods: {
        ...mapMutations('general', ['setWidth']),
        handleResize() {
            this.localWindowWidth = window.innerWidth
        }
    }
})
</script>

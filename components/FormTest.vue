<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input v-model="inputValue" type="text" />
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class FormTest extends Vue {
    // Data
    inputValue = ''

    // Lifecycle
    beforeDestroy() {
        console.log('before destroy', this.inputValue)
        // You could send this value to Vuex and then when the mobile or desktop instance is created we can repopulate with that it
        // Or you could emit to the parent and pass in as props
    }
}
</script>

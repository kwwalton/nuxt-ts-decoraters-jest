<template>
    <div class="dynamic-ordering">
        <div id="one"></div>
        <div id="two"></div>
        <div id="three"></div>
    </div>
</template>

<script lang="ts">
// You can import and add components and arrange their order on the page
import { Component, Vue } from 'nuxt-property-decorator'
import Red from '~/components/Red.vue'
import Blue from '~/components/Blue.vue'
import Green from '~/components/Green.vue'

const componentOrder = {
    one: Red,
    two: Blue,
    three: Green
}

const ComponentOneClass = Vue.extend(componentOrder.one)
const ComponentTwoClass = Vue.extend(componentOrder.two)
const ComponentThreeClass = Vue.extend(componentOrder.three)

// const ComponentClass = Vue.extend(Red)

@Component({ name: 'DynamicOrdering' })
export default class DynamicOrdering extends Vue {
    created() {
        // Component One
        const instanceOne = new ComponentOneClass({ parent: this })
        instanceOne.$mount('#one')

        // Component One
        const instanceTwo = new ComponentTwoClass({ parent: this })
        instanceTwo.$mount('#two')

        // Component One
        const instanceThree = new ComponentThreeClass({ parent: this })
        instanceThree.$mount('#three')
    }

    // created() {
    //     const instance = new ComponentClass({ parent: this })
    //     instance.$mount('#lunch')
    // }
}
</script>

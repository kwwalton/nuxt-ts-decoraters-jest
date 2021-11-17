<template>
    <div class="mobile-desktop-different">
        <!-- Desktop -->
        <FormTest v-if="isDesktop" />
        <!-- Mobile -->
        <expand-collapse v-else>
            <template #default>This is the mobile version.</template>
            <template #body>
                <FormTest />
            </template>
        </expand-collapse>
    </div>
</template>

<script lang="ts">
import { Component, namespace, Vue } from 'nuxt-property-decorator'
const general = namespace('general')

@Component
export default class MobileDesktopDifferent extends Vue {
    // Vuex
    @general.State
    public ww!: number

    // @general.Getter
    // public www!: number

    @general.Getter
    public isDesktop!: boolean
}
</script>

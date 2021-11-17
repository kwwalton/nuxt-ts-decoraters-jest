<template>
    <div>
        <CounterTest />
        <FormTest />
        <ExpandCollapse />

        <expand-collapse>
            <template #default>We can change the heading.</template>
            <template #body>
                <FormTest />
            </template>
        </expand-collapse>
        <!-- <ReactivityTest /> -->
        <MobileDesktopDifferent />
        <DynamicOrdering />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

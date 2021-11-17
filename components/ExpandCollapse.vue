<template>
  <div class="expand-collapse">
    <button
      class="expand-collapse__head"
      :class="{ active: isExpanded }"
      @click="expandOrCollapse"
    >
      <slot>Expand Collapse Title</slot>
    </button>
    <div v-show="isExpanded" class="expand-collapse__body">
      <slot name="body">
        <p>This is default body slot content.</p>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ExpandCollapse extends Vue {
  // Data
  isExpanded = false

  // Methods
  expandOrCollapse() {
    this.isExpanded = !this.isExpanded
  }
}
</script>

<style scoped>
.expand-collapse__head {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}
.active,
.expand-collapse__head:hover {
  background-color: #ccc;
}
.expand-collapse__body {
  padding: 0 18px;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>

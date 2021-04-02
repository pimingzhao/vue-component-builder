<!--
 * @Author: pimzh
 * @Date: 2021-03-30 16:23:19
 * @LastEditTime: 2021-04-02 14:46:02
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div
    :draggable="true"
    class="inline-block no-select cursor-pointer draggable"
    :class="{ 'border border-dashed rounded': border }"
    @dragstart="handleDragStart"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    @dragend="handleDragEnd"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "Dragable",
  props: {
    border: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  methods: {
    handleDragStart(...args) {
      this.$emit("on-drag-start", ...args);
    },
    handleDragEnter(...args) {
      this.$emit("on-drag-enter", ...args);
    },
    handleDragLeave(...args) {
      this.$emit("on-drag-leave", ...args);
    },
    handleDragEnd(...args) {
      this.draggable = false;
      this.$emit("on-drag-end", ...args);
    }
  }
};
</script>

<style scoped>
.draggable {
  padding: 5px;
}
</style>

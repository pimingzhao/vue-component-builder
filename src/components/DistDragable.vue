<!--
 * @Author: pimzh
 * @Date: 2021-03-30 16:23:19
 * @LastEditTime: 2021-03-30 17:42:11
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div
    :draggable="true"
    class="inline-block border no-select"
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

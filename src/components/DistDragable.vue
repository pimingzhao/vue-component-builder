<!--
 * @Author: pimzh
 * @Date: 2021-03-30 16:23:19
 * @LastEditTime: 2021-04-01 08:54:15
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div
    :draggable="true"
    class="inline-block no-select"
    :class="{ border: border }"
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

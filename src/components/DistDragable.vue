<!--
 * @Author: pimzh
 * @Date: 2021-03-30 16:23:19
 * @LastEditTime: 2022-02-09 12:27:44
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div
    :draggable="draggable"
    class="inline-block no-select cursor-pointer"
    :class="{ 'border border-dashed rounded': border }"
    :style="style"
    @dragover="e => !draggable && e.preventDefault()"
    @dragstart="handleDragStart"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    @dragend="handleDragEnd"
    @drop="handleDrop"
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
    },
    padding: {
      type: [Number, String],
      default: "4px"
    },
    draggable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    style() {
      const style = {};
      if (this.padding) {
        style.padding = this.padding;
      }
      return style;
    }
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
      this.$emit("on-drag-end", ...args);
    },
    handleDrop(e) {
      e.preventDefault();
      this.$emit("on-drop", e);
    }
  }
};
</script>

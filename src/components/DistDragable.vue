<!--
 * @Author: pimzh
 * @Date: 2021-03-30 16:23:19
 * @LastEditTime: 2021-04-09 14:25:09
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div
    :draggable="true"
    class="inline-block no-select cursor-pointer"
    :class="{ 'border border-dashed rounded': border }"
    :style="style"
    @dragover="e => e.preventDefault()"
    @dragstart="handleDragStart"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    @dragend="handleDragEnd"
    @ondrop="handleDrop"
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
      this.draggable = false;
      this.$emit("on-drag-end", ...args);
    },
    handleDrop(...args) {
      this.$emit("on-drop", ...args);
    }
  }
};
</script>

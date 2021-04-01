<!--
 * @Author: pimzh
 * @Date: 2021-03-30 09:34:27
 * @LastEditTime: 2021-04-01 08:48:03
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div class="split-wrapper overflow-hidden">
    <Split
      class="w-full h-full"
      :min="0.3"
      v-model="split"
      @on-moving="handleMoving"
    >
      <Demo slot="left" class="h-full" />
      <Builder ref="builder" slot="right" class="h-full code-run" />
    </Split>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      split: 0.5
    };
  },
  methods: {
    handleMoving() {
      this.$refs.builder.handleResize();
    }
  }
};
</script>

<style scoped>
.split-wrapper {
  padding: 5px;
  background-color: #ffffff;
}
.code-run {
  padding-left: 13px;
  box-sizing: border-box;
}
</style>

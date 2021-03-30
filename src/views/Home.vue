<!--
 * @Author: pimzh
 * @Date: 2021-03-30 09:34:27
 * @LastEditTime: 2021-03-30 16:01:16
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div class="split-wrapper overflow-hidden">
    <Split class="w-full h-full" :min="0.3" v-model="split">
      <Demo slot="left" class="h-full" />
      <Builder slot="right" class="h-full code-run" />
    </Split>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      split: 0.5
    }
  }
}
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

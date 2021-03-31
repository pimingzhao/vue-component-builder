<!--
 * @Author: pimzh
 * @Date: 2021-03-30 09:34:27
 * @LastEditTime: 2021-03-30 11:07:59
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div id="app">
    <layout />
  </div>
</template>

<script>
import Layout from "@/views/Layout";

export default {
  name: "app",
  components: {
    Layout
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>

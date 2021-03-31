<!--
 * @Author: pimzh
 * @Date: 2021-03-12 16:47:15
 * @LastEditTime: 2021-03-30 11:08:36
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div class="flex items-center">
    <div class="layout-lg flex items-center text-primary">
      <Icon class="vertical-mid" size="30" type="logo-codepen" />
      <span class="text-big font-bold logo-title">vue component builder</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLeft",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.layout-lg {
  padding: 0 30px;
}
.logo-title {
  margin-left: 5px;
}
.btn {
  margin-left: 10px;
}
</style>

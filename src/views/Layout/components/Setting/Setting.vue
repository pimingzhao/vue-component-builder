<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:28:44
 * @LastEditTime: 2021-03-30 14:09:54
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <Poptip class="setting-wrapper" placement="left-start" width="400" @on-popper-show="show=true" @on-popper-hide="show=false">
    <Icon title="设置" class="cursor-pointer" :class="{ 'animation': show }" size="25" type="md-settings" />
    <div class="api" slot="content">
      <!-- 网格线 -->
      <Grid />
    </div>
  </Poptip>
</template>

<script>
import Grid from './Grid'

export default {
  name: 'Setting',
  components: {
    Grid
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
.setting-wrapper {
  display: flex;
  align-items: center;
}
.setting-wrapper /deep/ .ivu-poptip-rel {
  display: flex;
  align-items: center;
}
.animation {
  transition: all 1.2s;
  transform: scale(1.18) rotate(40deg);
}
</style>

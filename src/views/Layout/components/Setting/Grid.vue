<!--
 * @Author: pimzh
 * @Date: 2021-03-30 14:03:02
 * @LastEditTime: 2021-03-30 14:28:11
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <div class="grid">
    显示网格：<i-switch v-model="showGrid" />
    <RadioGroup class="radio" v-if="showGrid" v-model="gridSize">
      <Radio label="s">小</Radio>
      <Radio label="m">中</Radio>
      <Radio label="l">大</Radio>
    </RadioGroup>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  data () {
    return {
    }
  },
  computed: {
    showGrid: {
      get () {
        return this.$store.state.setting.showGrid
      },
      set (newVal) {
        this.$store.commit('setting/SET_SHOW_GRID', newVal)
      }
    },
    gridSize: {
      get () {
        return this.$store.state.setting.gridSize
      },
      set (newVal) {
        this.$store.commit('setting/SET_GRID_SIZE', newVal)
      }
    }
  }
}
</script>

<style scoped>
.grid .radio {
  margin-left: 20px;
}
</style>

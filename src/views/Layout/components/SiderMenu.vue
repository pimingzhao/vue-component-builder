<!--
 * @Author: pimzh
 * @Date: 2021-03-10 17:30:04
 * @LastEditTime: 2021-04-03 21:39:48
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <ul :class="prefixCls" class="">
    <li :class="`${prefixCls}-item`" v-for="(item, i) in menuList" :key="i">
      <span class="text-default" :class="`${prefixCls}-span`">{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
const prefixCls = "sider-menu";

export default {
  name: "SiderMenu",
  data() {
    return {
      openNames: [],
      prefixCls: prefixCls
    };
  },
  computed: {
    menuList() {
      return [
        {
          name: "basic",
          title: "基础组件"
        },
        {
          name: "layout",
          title: "布局组件"
        }
      ];
    },
    hasMenuList() {
      return this.menuList.length !== 0;
    },
    seletedMenu() {
      return this.$route.query.template || "";
    }
  },
  methods: {
    handleSelect(name) {
      // TODO: 页面刷新后state 会更新： fix it
      this.$store.commit("SET_SELECTED_MENU", name);
    }
  }
};
</script>

<style scoped>
.sider-menu {}
</style>
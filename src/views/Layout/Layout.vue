<!--
 * @Author: pimzh
 * @Date: 2021-03-30 09:47:06
 * @LastEditTime: 2021-03-30 13:21:34
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <Layout class="w-full h-full flex flex-col">
    <Header class="header bg-default">
      <div class="h-full flex justify-between">
        <HeaderLeft />
        <!-- 操作提示 -->
        <!-- <Tips /> -->
        <!-- 全局功能设置 -->
        <Setting />
      </div>
    </Header>
    <Layout class="flex-1 flex">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <SiderMenu :class="menuitemClasses" />
      </Sider>
      <router-view class="w-full flex-1" />
    </Layout>
  </Layout>
</template>

<script>
import HeaderLeft from "./components/HeaderLeft";
import Setting from "./components/Setting";
import SiderMenu from "./components/SiderMenu";

export default {
  name: "layout",
  components: {
    HeaderLeft,
    Setting,
    SiderMenu
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {}
};
</script>

<style scoped>
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
.header {
  padding: 0 20px 0 0;
}
.header::after {
  content: "";
  display: block;
  width: 100%;
  height: 1px;
  background: #dcdee2;
  position: absolute;
}
.llayout-box {
  padding-right: 30px;
}
.layout {
  border: none;
}
</style>

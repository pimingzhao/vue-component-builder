<!--
 * @Author: pimzh
 * @Date: 2021-03-10 17:30:04
 * @LastEditTime: 2021-04-04 10:13:54
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <ul :class="prefixCls" class="">
    <li
      :class="[
        `${prefixCls}-item`,
        { 'sider-menu-item-active': activeList.includes(item.name) }
      ]"
      @click="handleSelect(item.name, i)"
      v-for="(item, i) in menuList"
      :key="i"
    >
      <span class="text-default" :class="`${prefixCls}-span`">{{
        item.title
      }}</span>
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
      prefixCls: prefixCls,
      activeList: []
    };
  },
  computed: {
    menuList() {
      return [
        {
          name: "basic",
          title: "基础组件",
          compenonts: [
            {
              name: "按钮",
              components: [
                {
                  name: "Button",
                  props: {},
                  slot: "完成"
                }
              ]
            }
          ]
        },
        {
          name: "layout",
          title: "布局组件"
          // compenonts: ['top', 'nav', 'content']
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
    handleSelect(name, i) {
      console.log(this.activeList.includes(name));
      const listIndex = this.activeList.indexOf(name);
      if (this.activeList.includes(name)) {
        this.activeList.splice(listIndex, 1);
        this.menuList[i].compenonts.forEach(comp => {
          this.$store.commit("template/REMOVE_TEMPLATE", comp);
        });
      } else {
        this.activeList.push(name);
        this.menuList[i].compenonts.forEach(comp => {
          this.$store.dispatch("template/addTemplate", comp);
        });
      }

      console.log(name);
      // TODO: 页面刷新后state 会更新： fix it
    }
  }
};
</script>

<style scoped>
.sider-menu {
  background-color: #007bbb;
}
.sider-menu-item {
  background-color: #3eede7;
  padding: 14px 26px;
  white-space: 10px;
  color: #515a6e;
  background: #363e4f;
  transition: all 0.2s ease-in-out;
}
.sider-menu-item-active {
  color: #fff;
  background: #2d8cf0 !important;
  transition: all 0.2s ease-in-out;
}
</style>

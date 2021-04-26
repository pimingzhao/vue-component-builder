<!--
 * @Author: pimzh
 * @Date: 2021-03-10 17:30:04
 * @LastEditTime: 2021-04-26 14:00:08
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <ul :class="prefixCls">
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
  created() {
    // 添加初始数据
    if (this.hasMenuList) {
      this.activeList.push(this.menuList[0].name);
      this.menuList[0].compenonts.forEach(comp => {
        this.$store.dispatch("template/addTemplate", comp);
      });
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
.sider-menu-item {
  padding: 14px 26px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.sider-menu-span {
  color: hsla(0, 0%, 100%, 0.7);
}
.sider-menu-item:hover .sider-menu-span {
  color: #ffffff;
}
.sider-menu-item:not(:last-child) {
  margin-bottom: 1px;
}
.menu-item .sider-menu-item-active {
  background: #363e4f;
  transition: all 0.2s ease-in-out;
}
.sider-menu-item-active .sider-menu-span {
  color: #2d8cf0;
}
.sider-menu-item-active:hover .sider-menu-span {
  color: #2d8cf0;
}
</style>

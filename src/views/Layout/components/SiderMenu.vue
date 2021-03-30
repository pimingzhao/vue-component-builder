<!--
 * @Author: pimzh
 * @Date: 2021-03-10 17:30:04
 * @LastEditTime: 2021-03-30 11:14:10
 * @LastEditors: pimzh
 * @Description:
-->
<template>
  <Menu
    v-if="hasMenuList"
    theme="dark"
    width="auto"
    class="h-full"
    :active-name="seletedMenu"
    :open-names="openNames"
    @on-select="handleSelect"
  >
    <MenuItem v-for="(item, i) in menuList" :key="i" :name="item.name">
      <!-- <Icon :type="iconType"></Icon> -->
      <span>{{ item.title }}</span>
    </MenuItem>
  </Menu>
</template>

<script>
export default {
  name: 'SiderMenu',
  data () {
    return {
      openNames: []
    }
  },
  computed: {
    menuList () {
      return [
        {
          name: 'home',
          title: '表单'
        },
        {
          name: 'table',
          title: '表格'
        }
      ]
    },
    iconType () {
      return this.$store.state.iconType || ''
    },
    hasMenuList () {
      return this.menuList.length !== 0
    },
    seletedMenu () {
      return this.$route.query.template || ''
    }
  },
  methods: {
    handleSelect (name) {
      // TODO: 页面刷新后state 会更新： fix it
      this.$store.commit('SET_SELECTED_MENU', name)
    }
  }
}
</script>

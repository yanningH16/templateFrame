<style lang="less">
@import "../styles/menu.less";
</style>

<template>
  <Menu ref="sideMenu"
        :active-name="$route.name"
        :open-names="openNames"
        :theme="menuTheme"
        width="auto"
        @on-select="changeMenu">
    <template v-for="item in menuList">
      <MenuItem v-if="item.children.length<=1"
                :name="item.children[0].name"
                :key="'menuitem' + item.name">
      <Icon :type="item.icon"
            :size="iconSize"
            :key="'menuicon' + item.name"></Icon>
      <span class="layout-text"
            :key="'title' + item.name">{{ itemTitle(item.children[0]) }}</span>
      </MenuItem>

      <Submenu v-if="item.children.length > 1"
               :name="item.name"
               :key="item.name">
        <!-- 这个是一级菜单的图标 -->
        <template slot="title">
          <Icon :type="item.icon"></Icon>
          <span class="layout-text">{{ itemTitle(item) }}</span>
        </template>
        <!-- 菜单下面要 -->
        <template v-for="child in item.children">
          <!-- 菜单为2级的话才会走-->
          <MenuItem :name="child.name"
                    class="ry-menu"
                    :key="'menuitem' + child.name">
          <span :key="'title' + child.name">{{ itemTitle(child) }}</span>
          </MenuItem>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
export default {
  name: 'sidebarMenu',
  props: {
    menuList: Array,
    iconSize: Number,
    menuTheme: {
      type: String,
      default: 'dark'
    },
  },
  data () {
    return {
      openNames: []
    }
  },
  mounted () {
    console.log(this.menuList, '所有菜单')
    // 取父节点的数据
    this.openNames = ['newMange']
  },
  methods: {
    changeMenu (active) {
      this.$emit('on-change', active);
    },
    // 国际化的判断  目前并未用到
    itemTitle (item) {
      if (typeof item.title === 'object') {
        return (item.title.i18n);
      } else {
        return item.title;
      }
    }
  },
  updated () {
    this.$nextTick(() => {
      if (this.$refs.sideMenu) {
        this.$refs.sideMenu.updateOpened();  //手动更新展开的子目录，注意要在 $nextTick 里调用
        // this.$refs.sideMenu.updateActiveName();//手动更新当前选择项，注意要在 $nextTick 里调用
      }
    });


  }

};
</script>

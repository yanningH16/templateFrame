<style lang="less">
@import "./styles/menu.less";
</style>

<template>
  <div :style="{background: bgColor}"
       class="ivu-shrinkable-menu">
    <slot name="top"></slot>
    <sidebar-menu v-show="!shrink"
                  :menu-theme="theme"
                  :menu-list="menuList"
                  @on-change="handleChange"></sidebar-menu>
    <sidebar-menu-shrink v-show="shrink"
                         :menu-theme="theme"
                         :menu-list="menuList"
                         :icon-color="shrinkIconColor"
                         @on-change="handleChange"></sidebar-menu-shrink>
  </div>
</template>

<script>
import sidebarMenu from './components/sidebarMenu.vue';
import sidebarMenuShrink from './components/sidebarMenuShrink.vue';
import util from '@/libs/util';
export default {
  name: 'shrinkableMenu',
  components: {
    sidebarMenu,
    sidebarMenuShrink
  },
  props: {
    shrink: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      default: 'dark',
      validator (val) {
        return util.oneOf(val, ['dark', 'light']);
      }
    },
    beforePush: {
      type: Function
    },
  },
  computed: {
    bgColor () {
      return this.theme === 'dark' ? '#495060' : '#2db7f5';
    },
    shrinkIconColor () {
      return this.theme === 'dark' ? '#2db7f5' : '#495060';
    }
  },

  methods: {
    handleChange (name, item) {
    
      // if(item!==undefined){
      //     window.open(path)
      // }
      let willpush = true;
      if (this.beforePush !== undefined) {
        if (!this.beforePush(name)) {
          willpush = false;
        }
      }
      if (willpush) {
        this.$router.push({
          name: name
        });
      }
      this.$emit('on-change', name);
    }
  }
};
</script>

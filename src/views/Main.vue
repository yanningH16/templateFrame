
<template>
  <div class="main"
       :class="{'main-hide-text': shrink}"
       id="mainId">

    <!-- 左侧的菜单和各种图标啥的 -->
    <div class="sidebar-menu-con"
         style="overflow:hidden;display:flex;flex-direction:column">
      <div slot="top"
           class="logo-con"
           :style="'background:'+logoBg+';display:flex'">
        <img src="../images/mian/logo.png"
             key="min-logo"
             style="width:36px;height:34px" />
        <span v-show="!shrink"
              style="font-size:18px;width:148px;height:34px;line-height:32px;display:inline-block;color:#fb954b;font-family:Microsoft YaHei">
          智慧医疗云HIS
        </span>
      </div>
      <shrinkable-menu :shrink="shrink"
                       @on-change="handleSubmenuChange"
                       :theme="menuTheme"
                       :before-push="beforePush"
                       :menu-list="menuList"
                       :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      </shrinkable-menu>
    </div>
    <!-- 切换大小菜单的按钮 -->
    <div class="main-header-con"
         :style="{paddingLeft: shrink?'60px':'200px'}">
      <div class="main-header">
        <!-- 头部左边图标 切换大小的 -->
        <div class="navicon-con">
          <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}"
                  type="text"
                  @click="toggleClick">
            <Icon type="md-menu"
                  size="28" />
          </Button>
        </div>
        <!-- 头部右侧按钮 -->
        <div class="header-avator-con">
          <full-screen v-model="isFullScreen"
                       @on-change="fullscreenChange"></full-screen>
          <lock-screen ref="lockScreenCh"
                       v-show="false"></lock-screen>
          <message-tip v-model="mesCount"
                       v-show="false"></message-tip>
          <Button type="primary"
                  style="margin-top:10px"
                  @click="choosePrint">
            <i class="iconfont icon-dayin"></i>
            选择打印机</Button>
          <div class="user-dropdown-menu-con"
               style="font-size:14px">
            <Row style="margin-righ:10px">
              <Dropdown transfer
                        trigger="click"
                        @on-click="handleClickUserDropdown">
                <a href="javascript:void(0)">
                  <span class="main-user-name">{{ showName }}</span>
                  <Icon type="md-arrow-dropdown" />
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">个人中心</DropdownItem>
                  <DropdownItem name="deptSwitch"
                                v-if="deptSwitchShow">切换科室</DropdownItem>
                  <DropdownItem name="loginout">切换用户</DropdownItem>
                  <DropdownItem name="updataLog"
                                divided>更新日志</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Avatar :src="avatorPath"
                      style="background: #619fe7;margin-left: 10px;margin-top: 5px;"
                      size="large"></Avatar>
            </Row>
          </div>
        </div>
      </div>
      <div class="tags-con">
        <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
      </div>
    </div>
    <!-- 右侧的数据 -->
    <div class="single-page-con"
         :style="{left: shrink?'60px':'200px'}">
      <div class="single-page"
           style="height:100%;margin:0;position:relative;padding-top:10px">
        <!-- 路由渲染的右侧所有数据的地方在这 包含着缓存数据 -->
        <keep-alive :include="cachePage">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <!-- 切换科室的 -->
    <Modal v-model="modal6"
           width="320"
           title="切换科室"
           :loading="loading"
           :mask-closable="false">
      <div slot="footer">
        <Button type="text"
                size="small"
                @click="modal6 = false">取消</Button>
        <Button type="primary"
                size="small"
                @click="asyncOK">保存</Button>
      </div>
      <Form ref="addOrUpd"
            :label-width="70"
            style="">
        <FormItem label="用户名称"
                  prop="itemCode">
          <Input v-model.trim="userName"
                 disabled
                 style="width:200px" />
        </FormItem>
        <FormItem label="机构名称"
                  prop="itemCode">
          <Input v-model.trim="hospitalName"
                 disabled
                 style="width:200px" />
        </FormItem>
        <FormItem label="科室名称"
                  prop="itemCode">
          <Select v-model="defaultDeptId"
                  style="width:200px"
                  clearable
                  filterable>
            <Option v-for="item in deptlist"
                    :value="item.deptId"
                    :key="item.deptId">{{ item.deptName }}</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import shrinkableMenu from './main-components/shrinkable-menu/shrinkable-menu.vue';
import tagsPageOpened from './main-components/tags-page-opened.vue';
import fullScreen from './main-components/fullscreen.vue';
import lockScreen from './main-components/lockscreen/lockscreen.vue';
import messageTip from './main-components/message-tip.vue'; //未读的消息处理
import Cookies from 'js-cookie';
import util from '@/libs/util.js';
import qs from 'qs';
import axios from 'axios';

export default {
  components: {
    shrinkableMenu,
    tagsPageOpened,
    fullScreen,
    lockScreen,
    messageTip,
  },
  data () {
    return {
      uplode: 'http://192.168.6.201:9087/update_9.6.zip',//下载的链接的处理
      deptSwitchShow: true,
      lastTime: null, //最后一次点击的时间
      showName: this.$store.state.userInfoObj.userName,
      showId: this.$store.state.userInfoObj.userId,
      shrink: false,
      userName: '',
      workType: this.$store.state.userInfoObj.workType,
      userId: '',
      logoBg: 'rgb(73, 80, 96)',   
      isFullScreen: true,
      modal6: false,
      loading: true,
      deptlist: [],
      defaultDeptId: localStorage.DefaultDeptId + "",
      hospitalName: this.$store.state.userInfoObj.hospitalName,
      currMessageList: [],
      currMessageObj: {},
      chuliwjzObj: {
        doctorList: [],
        list: [],
        modal: false,
        title: '',
        id: '',
        data: {
        }
      },
    };
  },
  watch: {
    '$route' (to) {
      // 路由发生变化的时候往里面push横向菜单的数据
      this.checkTag(to.name);
      localStorage.currentPageName = to.name;
    },
  },
  computed: {
    menuList () {
      return this.$store.state.app.menuList;
    },
    // 打开菜单的方法
    pageTagsList () {
      return this.$store.state.app.pageOpenedList; // 当前数据横向菜单的数据
    },
    avatorPath () {
      return this.$store.state.publicApi.userImg;
    },
    cachePage () {
      return this.$store.state.app.cachePage;
    },
    // 这个用来处理左上角那个主题色的
    menuTheme () {
      if (this.$store.state.app.menuTheme == "dark") {
        this.logoBg = 'rgb(73, 80, 96)'
      } else {
        this.logoBg = 'rgb(73, 80, 96)'
        // this.logoBg = 'rgb(255, 255, 255)'
      }
      return this.$store.state.app.menuTheme;
    },
    mesCount () {
      return this.$store.state.app.messageCount;
    }
  },
  created () {
    console.log(this.$store.state, '快递放假哦啊我覅')
    // 加一个这样的判断主要为了处理当用户直接关掉了浏览器标签页的处理方法
    if (util.isEmpty(this.$store.state.userInfoObj)) {
      localStorage.removeItem("token")
      this.$store.commit('logout', this);
      sessionStorage.clear()
      this.$router.push({
        name: 'login'
      });
    }
    // 进入页面清空一次上面的导航
    this.$store.commit('clearAllTags');
    // 显示打开的页面的列表
    this.$store.commit('setOpenedList');
    this.lastTime = new Date().getTime();   //网页第一次打开时，记录当前时间
  },
  activated () {
    this.showName = this.$store.state.userInfoObj.userName
    this.showId = this.$store.state.userInfoObj.userId
    this.workType = this.$store.state.userInfoObj.workType
  },
  methods: {
    //选择打印机功能
    choosePrint () {
      axios.get('http://127.0.0.1:5678?OpenPrintSet').then(res => {
        return
      })
    },
    getDoctorList (val) { //获取科室医生列表
      let nowData = {
        'deptId': val,
        'workType': '1',
      }
      this.$store.dispatch('findUserByWorkTypes', nowData).then(res => {
        if (res.data.code === 200) {
          this.chuliwjzObj.doctorList = res.data.data.list
        }
      })

    },
    init () {
      this.$store.commit('updateMenulist');
      this.userName = this.$store.state.userInfoObj.userName
      let messageCount = 3;
      this.messageCount = messageCount.toString();
      // 刷新页面后的请求处理
      this.checkTag(this.$route.name);

    },
    // 科室切换的处理
    asyncOK () {
      localStorage.setItem('DefaultDeptId', this.defaultDeptId);
      Cookies.set(this.$store.state.userInfoObj.loginName + 'DefaultDeptId', this.defaultDeptId);
      this.modal6 = false
      util.showMsg(this, { succ: '切换成功' })
    },
    // 切换大小菜单的
    toggleClick () {
      this.shrink = !this.shrink;
    },
    // 右侧基础数据的处理
    handleClickUserDropdown (name) {
      if (name === 'ownSpace') {//个人中心
        // util.openNewPage(this, 'ownspace_index');
        this.$router.push({
          name: 'ownspace_index'
        });
      } else if (name === 'loginout') {// 退出登录
        localStorage.removeItem("token")
        this.$store.commit('logout', this);
        this.$store.commit('clearAllTags');
        this.$router.push({
          name: 'login'
        });
        sessionStorage.clear()

      } else if (name === 'deptSwitch') {//切换科室
        this.axiosDept();
      } else if (name == 'updataLog') {//更新日志
        // util.openNewPage(this, 'updata_log');
        this.$router.push({
          name: 'updata_log'
        });
      }
    },
    // 切换科室 获取所有科室的接口
    axiosDept () {
      this.modal6 = true
      let now = {
        hospitalId: this.$store.state.userInfoObj.hospitalId,
        deptType: 0,
        userId: this.$store.state.userInfoObj.userId
      }
      this.$store.dispatch("getDeptDictOnly", now).then(res => {
        if (res.data.code != 200) {
          util.showMsg(this, res.data)
        } else {
          this.deptlist = res.data.data.list
          this.defaultDeptId = parseInt(localStorage.DefaultDeptId)
        }
      })
    },
    checkTag (name) {
      let openpageHasTag = this.pageTagsList.some(item => {
        if (item.name === name) {
          return true;
        }
      });
      if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
        util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
      }
    },
    handleSubmenuChange (val) {
      if (val == '') {
        this.$Modal.error({
          content: '配置的菜单不存在！'
        });
      }
    },
    beforePush (name) {
      return true;
    },
    fullscreenChange (isFullScreen) {
      console.log(isFullScreen);
    },

  },
  mounted () {
    let self = this;
    self.init();
    this.$store.commit('setUserImg', localStorage.avatorImgPath)
    this.$store.state.userInfoObj.userName == "SUPERADMIN" || this.$store.state.userInfoObj.userName == "admin" ? this.deptSwitchShow = false : this.deptSwitchShow = true
  },
};
</script>
<style lang="less">
@import "./main.less";
@import "//at.alicdn.com/t/font_1271600_sk0251j03cl.css";
.iconText {
  color: black;
  margin: -5px 12px 0 5px;
}
.chuliwjz-modal {
  .ivu-modal-body {
    padding: 30px;
    padding-bottom: 0;
  }
  .ivu-modal-footer {
    border: 0;
    text-align: center;
  }
  .ivu-form-item {
    margin-bottom: 5px;
  }
}
.header-middle-con .ivu-dropdown:nth-child(1) {
  margin-left: 0 !important;
}
</style>


<template>
  <div id="main"
       class="app-main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import util from "./libs/util";
import Cookies from "js-cookie";
export default {
  provide () {
    return {
      app: this
    };
  },
  data () {
    return {
      theme: this.$store.state.app.themeColor,
      aboList: [],

      vShow: {
        modalParetList: [],
        addressData: []
      },
      //民族的数据
      nationList: [],
      //职业的数组
      occupationTypeList: [],
      theme: this.$store.state.app.themeColor,

      vShow: {
        modalParetList: [],
        addressData: [],
      },
    };
  },
  mounted () {
    if (Cookies.get("token")) {
      this.getDataModalParetList(); //诊断的
      this.getNationList();
      this.getOccupationList();
      this.getFind();
    }
  },
  methods: {
    //获取新的接口
    getFind () {
      this.vShow.addressData = [];
      this.$store.dispatch("findRegion").then(res => {
        if (res.data.code !== 200) {
          // util.showMsg(this, res.data);
        } else {
          res.data.data.list.forEach(element => {
            this.vShow.addressData.push({
              label: element.dataValueRemark,
              value: element.datavalueId,
              children:
                element.children.length == 0
                  ? ""
                  : element.children.map(list => {
                    return {
                      label: list.dataValueRemark,
                      value: list.datavalueId,
                      children:
                        list.children.length == 0
                          ? ""
                          : list.children.map(req => {
                            return {
                              label: req.dataValueRemark,
                              value: req.datavalueId
                            };
                          })
                    };
                  })
            });
          });
        }
      });
    },
    //职业
    getOccupationList () {
      this.$store.dispatch("getPDOrHDAttrs", {
          hospitalId: this.$store.state.userInfoObj.hospitalId,
          pdCode: "PD0000000069"
        })
        .then(res => {
          if (res.data.code !== 200) {
            // util.showMsg(this, res.data);
          } else {
            this.occupationTypeList = res.data.data.list;
          }
        });
    },
    //民族
    getNationList () {
      this.$store.dispatch("getPDOrHDAttrs", {
          hospitalId: this.$store.state.userInfoObj.hospitalId,
          pdCode: "PD0000000215"
        })
        .then(res => {
          if (res.data.code !== 200) {
            // util.showMsg(this, res.data);
          } else {
            this.nationList = res.data.data.list;
          }
        });
    },
    //诊断的数组
    getDataModalParetList () {
      this.$store.dispatch("getBasicDataValueSel", {
          hospitalId: this.$store.state.userInfoObj.hospitalId,
          status: 0
        })
        .then(res => {
          if (res.data.code != 200) {
            // util.showMsg(this, res.data)
          } else {
            this.vShow.modalParetList = res.data.data.list;
          }
        });
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  overflow: hidden;
}
.app-main {
  width: 100%;
  height: 100%;
}
.ivu-poptip-popper {
  min-width: 70px !important;
}
.ivu-tabs {
  height: 40px !important;
}
.ivu-select-input[disabled] {
  -webkit-text-fill-color: black !important ;
}
.ivu-page-simple .ivu-page-simple-pager input {
  width: 45px !important;
}
.ivu-table-cell {
  padding: 0 8px !important;
}
/* 新版需要改的地方有这个  表格的字体大小 */
.ivu-table {
  font-size: 14px;
}
.ivu-form .ivu-form-item-label {
  font-size: 14px;
}
.ivu-tree ul {
  font-size: 14px;
}
.sidebar-menu-con ::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}
.sidebar-menu-con ::-webkit-scrollbar-thumb {
  background-color: #2db7f5;
  border-radius: 3px;
}
/* 全局icon图标的颜色修改 rgb(191, 238, 153) */
.ivu-poptip-rel i {
  color: #2db7f5;
  font-size: 16px;
  margin-right: 10px;
}
</style>

<template>
  <div class="referralApply">
    <!-- 基础模板 -->
    <ul>
      <li>
        <label class="lableClass">病区</label>
        <Select v-model="wardDeptId"
                filterable
                @on-change='getApplyList'
                style='width: 150px'>
          <Option v-for="(item) in wardDeptArr"
                  :value="item.deptId"
                  :key="item.deptId">{{ item.deptName }}</Option>
        </Select>
      </li>
      <li>
        <label class="lableClass">时间</label>
        <DatePicker v-model='timeDat'
                    format='yyyy-MM-dd HH:mm:ss'
                    type='datetimerange'
                    placeholder='请选择时间'
                    style='width: 320px'></DatePicker>
      </li>
      <li>
        <label class="lableClass">住院号</label>
        <Input v-model="wardDeptId"
               @on-enter='getApplyList'
               placeholder='请输入住院号'
               style='width: 150px' />
        <Button type="primary"
                @click="getApplyList"
                style="margin-left:5px"
                icon="ios-search">查询</Button>
      </li>
    </ul>
    <div class="noBorder"
         style="margin-top:10px">
      <Table disabled-hover
             highlight-row
             :height="tableHeight"
             ref="table"
             stripe
             :loading="orderLoading.tableLoding"
             :columns="applyTable.tableColumns"
             :data="applyTable.tableData"></Table>
    </div>
    <div style="margin: 25px 0;float:right">
      <PageSizer @Page="changPage"
                 :tabpage="totalPage"
                 @pageNum="changPageNum"> </PageSizer>
    </div>
    <!-- 修改的弹框 -->
    <Modal v-model="modalModify.isModal"
           width="550"
           :closable="false"
           :mask-closable="false">
      <Row>
        <i-Col span="12">
          <label class="lableClass">
            <span>*</span>床号</label>
          <Input v-model.trim="modalModify.bedNo"
                 placeholder="请输入床号"
                 style="width:144px" />
        </i-Col>
        <i-Col span="12">
          <label class="lableClass">
            <span>*</span>病房号</label>
          <Input v-model.trim="modalModify.wardRoomNo"
                 placeholder="请输入病房号"
                 style="width:144px" />
        </i-Col>
      </Row>
      <div slot="footer">
        <Button type="text"
                @click="modalModify.isModal=false">取消</Button>
        <Button type="primary"
                :loading="orderLoading.loadingSave"
                @click="ModifySave">保存</Button>
      </div>
    </Modal>
    <!-- 删除的弹框 -->
    <comfirmDeletion :show="showModal.showDel"
                     :title="showModal.delTitle"
                     :msg="showModal.delMsg"
                     :loading="orderLoading.loadingDel"
                     @close="showModal.showDel=false"
                     @ok="sureDel" />
  </div>
</template>
<script>
import util from '@/libs/util'
import comfirmDeletion from '@/views/components/confirmDeletion.vue'
import PageSizer from '@/views/components/PageSizer.vue'
export default {
  name: 'referralApply',
  components: {
    comfirmDeletion,
    PageSizer
  },
  data () {
    return {
      tableHeight: 0,
      totalPage: 1,//分页的总页数
      wardDeptId: '',
      wardDeptArr: [],//下拉框
      timeDat: [new Date().format('yyyy-MM-dd 00:00:00'), new Date().format('yyyy-MM-dd 23:59:59')],
      orderLoading: {
        tableLoding: false,
        loadingDel: false,
        loadingSave: false
      },
      applyTable: {
        tableColumns: [
          {
            title: '床号',
            align: 'center',
            key: 'bedNo'
          },
          {
            title: '病房号',
            align: 'center',
            key: 'wardRoomNo'
          },
          {
            title: '床位等级',
            key: 'bedLevelName'
          },
          {
            title: '编制等级',
            key: 'bedAuthorizName'
          },
          {
            title: '使用情况',
            align: 'center',
            key: 'bedState'
          },
          {
            title: '床位护士',
            key: 'nurseName'
          },
          {
            title: '排序号',
            align: 'right',
            key: 'serialNumber'
          },
          {
            title: '启用状态',
            align: 'center',
            key: 'stopFlag_1'
          },
          {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h(
                  'Poptip',
                  {
                    props: {
                      trigger: 'hover',
                      placement: 'top'
                    }
                  },
                  [
                    h('i', {
                      class: util.icon.modifyNew,
                      on: {
                        click: () => {
                          this.modalModify.isModal = true
                        }
                      }
                    }),
                    h(
                      'div',
                      {
                        slot: 'content'
                      },
                      '修改'
                    )
                  ]
                ),

                h(
                  'Poptip',
                  {
                    props: {
                      trigger: 'hover',
                      placement: 'top'
                    }
                  },
                  [
                    h('i', {
                      class: util.icon.delete,
                      on: {
                        click: () => {
                          this.showModal.showDel = true
                          this.showModal.delTitle = '删除'
                          this.showModal.delMsg = '确认删除【' + params.row.bedNo + '】么？'
                        }
                      }
                    }),
                    h(
                      'div',
                      {
                        slot: 'content'
                      },
                      '删除'
                    )
                  ]
                )
              ]);
            }
          }
        ],
        tableData: [
          {
            bedNo: 5
          }
        ]
      },
      // 删除的弹框
      showModal: {
        showAddOrModify: false,
        showDel: false,
        delMsg: '',//可灵活配置文字
        delTitle: '',//删除的头部文字
      },
      // 修改的弹框
      modalModify: {
        isModal: false,
        bedNo: '',
        wardRoomNo: ''
      }
    }
  },
  mounted () {
    // 设置表格高度 
    this.tableHeight = window.innerHeight - this.$refs.table.$el.offsetTop - 160
  },
  methods: {
    // 获取查询的列表
    getApplyList () {
      let params = {
        deptType: 2,
        userId: this.$store.state.userInfoObj.userId,
        hospitalId: this.$store.state.userInfoObj.hospitalId
      }
      this.$store.dispatch('', params).then(res => {
        if (res.data.code == 200) {
          this.applyTable.tableData = res.data.data.list;
          this.totalPage = res.data.data.pages  //获取总页数
        } else {
          util.showMsg(this, { diy: res.data.message });
        }
      });
    },
    // 翻页的时候触发
    changPage (Page) {
      this.page = Page
      // 获取的list
      this.getApplyList()
    },
    //切换每页多少条
    changPageNum (val) {
      this.page = 1
      this.pageSize = val
      this.totalPage = ''
      this.showTables()
    },
    // 删除的确认
    sureDel () {

    },
    //修改的保存接口
    ModifySave () {

    }
  },
}
</script>
<style lang="less" scoped>
.referralApply {
  height: 100%;
  ul {
    display: flex;
    justify-content: flex-start;
    li {
      margin-right: 20px;
    }
  }
}
</style>
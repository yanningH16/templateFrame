<template>
  <div class="page1Test">
    <Page :current="1"
          :total="total"
          :page-size="pageSize"
          :page-size-opts='sizeOpts'
          @on-change="pageChange"
          @on-page-size-change='pageNumChange'
          show-elevator
          size="small"
          placement='top'
          show-sizer></Page>
  </div>

</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      total: 1,//数据总数	
      pageSize: 15,//每页条数
      sizeOpts: [10, 15, 20, 25, 30]
    }
  },
  props: ['tabpage'],
  watch: {
    'tabpage': function (val) {
      this.total = val * this.pageSize
    }
  },
  methods: {
    //每页多少条 用户进行手动选择的
    pageNumChange (val) {
      this.pageSize = val
      this.$emit("pageNum", val)  //子组件触发父组件的方法 传递每页多少条
    },
    //切换页数的的方法
    pageChange (val) {
      this.$emit("Page", val) //子组件触发父组件的方法   切换到哪一页了
    }
  }
}
</script>
<style>
.page1Test .ivu-page-options-sizer {
  width: 80px;
}
.page1Test .ivu-select-dropdown {
  margin-left: 43px;
}
</style>
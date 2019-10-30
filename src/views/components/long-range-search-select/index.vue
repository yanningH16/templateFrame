<template>
  <div class="long-range-search-select">
    <Input v-model="vModel"
           clearable
           :placeholder="placeholder"
           @on-focus='inputFocus'
           @on-change="onChange"
           @on-blur='inputBlur'
           :readonly="readonly" />
    <div v-if='showOptionsWrap'
         class="droup-down-search-wrap"
         :class="{'top-position':direction==='top'}">
      <div class="options-wrap">
        <ul v-if="matchField[3]==='HIS_CLINIC_ITEM_DICT'||matchField[3]==='HIS_CLINIC_ITEM_DICT_TYPE'"
            class="ivu-select-dropdown-list">
          <li class="ivu-select-item"
              v-for="item in options"
              :value="item.value"
              @mousedown='selectOption(item)'
              :class="{'ivu-select-item-selected':item.label+'（'+item.itemSpace+'）' === vModel}"
              :key="item.value">{{ item.label }}（{{item.itemSpace}}）</li>
        </ul>
        <ul v-else
            class="ivu-select-dropdown-list">
          <li class="ivu-select-item"
              v-for="item in options"
              :value="item.value"
              @mousedown='selectOption(item)'
              :class="{'ivu-select-item-selected':item.label === vModel}"
              :key="item.value">{{ item.label }}</li>
        </ul>
      </div>
      <Spin v-if="spinShow"
            style="margin-left:48%"></Spin>
    </div>
  </div>
</template>
<script>
import util from '../../../libs/util.js';
export default {
  name: 'long-range-search-select',
  data () {
    return {
      vModel: '', // input绑定的值
      showOptionsWrap: false,   // 控制下拉框是否显示
      options: [],  // 下拉框的选项
      sourceData: [], // 源数据
      loadPage: 1,
      spinShow: false, // 下拉加载动画效果
    }
  },
  props: {
    matchField: {  // matchField 必传字段数组（用于获取指定字典数据及相关判断）
      type: Array,
      required: true
    },
    echo: {  // echo 数据回显值  必传对象
      type: Object
    },
    direction: {  // top、bottom
      type: String,
      default: 'bottom'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    size: {
      type: Number,
      default: 10
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    echo (val) {
      if (val) {
        const needBoolean = this.matchField[3] === 'HIS_CLINIC_ITEM_DICT' || this.matchField[3] === 'HIS_CLINIC_ITEM_DICT_TYPE'
        const spec = val.spec ? '（' + val.spec + '）' : ''
        this.vModel = needBoolean ? val.name + spec : val.name
      }
    },
    vModel (val) {
      this.options = []  //值变化就会清空options
      this.loadPage = 1
      if (val === '') {
        this.$emit('update:echo', {
          id: '',
          name: '',
          spec: '',
          PyCode: ''
        })
        this.$emit('currObject', {}) // 抛出currObject事件 参数为当前选中的option
        this.getOptions()
        return false
      }
      if (this.showOptionsWrap && !this.spinShow) { // 保证只有在下拉框出现时候才会获取options 正在加载不会获取
        this.getOptions()
      }
    },
  },
  methods: {
    vModelClear () {
      this.vModel = ''
    },
    inputFocus () {
      this.showOptionsWrap = true
      this.options = []
      this.getOptions()
      const self = this
      setTimeout(function () {
        const dom = document.querySelectorAll('.droup-down-search-wrap')[0]; // 获取下拉框DOM对象
        dom.addEventListener('scroll', () => { //  将dom对象的滚动加入监听
          const scrollHeight = dom.scrollTop // 获取dom对象滚动条距顶部高度
          // 判断滚动至底部执行加载更多，110为无横向滚动条，127有横向滚动条
          // console.log(scrollHeight - (self.loadPage - 1) * 30 * self.size,111111)
          if (scrollHeight - (self.loadPage - 1) * 30 * self.size >= 35 + (self.size - 6) * 30 || scrollHeight - (self.loadPage - 1) * 30 * self.size > 7 + (self.size - 6) * 30) {
            self.loadPage++
            self.getOptions()
          }
          dom.scrollTop = scrollHeight // 固定滚动条至当前位置（避免加载更多滚动条回至顶部）
        });
      }, 100)
    },
    inputBlur () {
      if (this.echo === null) return
      this.showOptionsWrap = false
      this.options = []
      this.loadPage = 1
      const spec = this.echo.spec ? '（' + this.echo.spec + '）' : ''
      const needBoolean = this.matchField[3] === 'HIS_CLINIC_ITEM_DICT' || this.matchField[3] === 'HIS_CLINIC_ITEM_DICT_TYPE'
      this.vModel = needBoolean ? this.echo.name + spec : this.echo.name // 处理一种情况：修改input值之后未点击option
    },
    dataFormat () {  // 数据格式化
      const nowList = this.sourceData
      // 取父组件传参 配置option的 :value :key  label
      nowList.map(item => {
        item['value'] = item[this.matchField[0]]
        item['key'] = item[this.matchField[1]]
        item['label'] = item[this.matchField[2]]
      })
      this.options = this.options.concat(nowList)  //将分页的数据拼接
      this.options = ([...new Set(this.options)])  // 去重
      this.spinShow = false
    },
    onChange (e) {
      this.$emit('on-change', e)
    },
    getOptions () {
      //  根据父组件传参'matchField'（必传字段）最后一个下标 即对应的字典下标 分页获取数据
      //  目前size不可变（滚动条滚动至底部加载未做联动，故此需固定10条）
      let nowData = {
        'dictType': this.matchField[3],
        'hospitalId': this.$store.state.userInfoObj.hospitalId,
        'searchType': this.matchField[3] == 'HIS_USER_DICT' ? '1' : undefined,
        'page': this.loadPage,
        'size': this.size
      }
      const inputVal = this.vModel
      if (inputVal) {
        const index = inputVal.lastIndexOf('（')  //中文（
        const val = index > -1 ? inputVal.slice(0, index) : inputVal
        // switch (this.matchField[3]) {
        // case 'HIS_CLINIC_ITEM_DICT':
        //     nowData['serachParam'] = val.toLowerCase()
        //     break;
        // case 'HIS_CLINIC_ITEM_DICT_TYPE':
        //     nowData['serachParam'] = val.toLowerCase()
        //     break;
        // default:
        nowData['serachParam'] = val.toUpperCase()
        // }
      }
      // if (this.matchField[3] == 'HIS_SYS_USER_DEPT') {
      //     nowData.primaryKeyId = this.$store.state.userInfoObj.userId
      // }
      if (this.matchField[4]) {
        nowData['classType'] = this.matchField[4]
      }
      this.spinShow = true;
      this.sourceData = []
      this.$store.dispatch("getCommDict", nowData).then(res => {
        if (res.data.code === 200) {
          let resList = res.data.data.list
          this.sourceData = resList
          setTimeout(() => {
            this.dataFormat()
          }, 100)
        }
      })
    },
    selectOption (item) {
      this.showOptionsWrap = false
      this.$emit('update:echo', {
        id: item.value,
        name: item.label,
        spec: item.itemSpace || '',
        PyCode: ''
      })
      this.$emit('currObject', item)  // 抛出currObject事件 参数为当前选中的option
      $(".long-range-search-select input").blur()
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../styles/common.less";
.long-range-search-select {
  width: 100%;
  display: inline-block;
  position: relative;
  .droup-down-search-wrap {
    width: 100%;
    background: red;
    position: absolute;
    z-index: 1;
    max-height: 170px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    transform-origin: center top 0px;
  }
  .droup-down-search-wrap.top-position {
    bottom: 33px;
  }
}
</style>

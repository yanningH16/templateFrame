<template>
    <div class="long-range-search-select-else">
        <Input v-model="inputVal"
               clearable
               :disabled='disabled'
               :placeholder="placeholder"
               @on-focus='inputFocus'
               @on-blur='inputBlur'
               :readonly="readonly" />
        <div v-if='showOptionsWrap'
             class="droup-down-search-wrap"
             :class="{'top-position':direction==='top'}">
            <div class="options-wrap">
                <ul class="ivu-select-dropdown-list">
                    <li class="ivu-select-item"
                        style="height:30px!important"
                        v-for="item in option"
                        :value="item.value"
                        @mousedown='selectOption(item)'
                        :class="{'ivu-select-item-selected':item.label === inputVal}"
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
    name: 'long-range-search-select-else',
    data () {
        return {
            option: [],
            inputVal: '', // input绑定的值
            showOptionsWrap: false,   // 控制下拉框是否显示
            loadPage: 1,
            // spinShow: false, // 下拉加载动画效果
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        direction: {  // top、bottom
            type: String,
            default: 'bottom'
        },
        vModel: String,
        propOptions: {
            type: Array,
            default: () => {
                return []
            }
        },
        value: String,
        label: String,
        placeholder: {
            type: String,
            default: '请选择'
        },
        selectOptionsPage: Number,
        readonly: {
            type: Boolean,
            default: false
        },
        spinShow: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        vModel (val) {
            // if (val) {
            this.inputVal = val
            // }
        },
        showOptionsWrap (val) {
            if (!val) {
                this.$emit('update:propOptions', [])
                this.$emit('update:selectOptionsPage', 1)
            }
        },
        propOptions (val) {
            if (val.length) {
                val.map(item => {
                    item['label'] = item[this.label]
                    item['value'] = item[this.value]
                })
            }
            this.option = ([...new Set(val)])
        },
        inputVal (val, oldVal) {
            this.$emit('update:selectOptionsPage', 1)
            this.$emit('update:propOptions', [])
            if (val === '') {
                this.$emit('currObject', {}) // 抛出currObject事件 参数为当前选中的option
                this.$emit('getSelectOptions')
                return false
            }
            if (this.showOptionsWrap && !this.spinShow) { // 保证只有在下拉框出现时候才会获取options 正在加载不会获取
                const updateVal = {
                    label: val
                }
                this.$emit('currObject', updateVal)
                this.$emit('getSelectOptions')
            }
        },
    },
    methods: {
        inputFocus (event) {
            this.$emit('update:propOptions', [])
            this.$emit('getSelectOptions')
            this.showOptionsWrap = true
            const self = this
            setTimeout(function () {
                const dom = document.querySelectorAll('.droup-down-search-wrap')[0]; // 获取下拉框DOM对象
                dom.addEventListener('scroll', () => { //  将dom对象的滚动加入监听
                    const scrollHeight = dom.scrollTop // 获取dom对象滚动条距顶部高度
                    if (scrollHeight - (self.selectOptionsPage - 1) * 30 * 6 >= 35 || scrollHeight - (self.selectOptionsPage - 1) * 30 * 6 > 18) {
                        self.$emit('update:selectOptionsPage', self.selectOptionsPage + 1)
                        self.$emit('getSelectOptions')

                    }
                    dom.scrollTop = scrollHeight // 固定滚动条至当前位置（避免加载更多滚动条回至顶部）
                });
            }, 100)
        },
        inputBlur () {
            this.showOptionsWrap = false
        },
        selectOption (item) {
            this.inputVal = item.label
            this.showOptionsWrap = false
            this.$emit('currObject', item)  // 抛出currObject事件 参数为当前选中的option
            $(".long-range-search-select-else input").blur()
        }
    }
}
</script>

<style lang="less" scoped>
@import '../../../styles/common.less';
.long-range-search-select-else {
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

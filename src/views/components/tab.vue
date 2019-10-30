<template>
  <div class="tableHeight"
       ref="tableHeight"
       style="height:100%">
    <Table stripe
           highlight-row
           border
           :loading="loading1"
           :columns="columns7"
           :height="tableHeight"
           :data="data6"></Table>
  </div>
</template>

<script>
import util from '../../libs/util'
import qs from 'qs';
export default {
  data () {
    return {
      Data: [],
      fatherResult: '',
      tableHeight: 0,
      showModal: false,
      loading: false,
      loading1: true,
      pages: 1,
      valueTitle: '',
      pageParams: {
        page: 1
      },
      columns7: [
        {
          title: '主数据名',
          key: 'primaryDataName'
        },
        {
          title: '区间编码',
          key: 'rangeCode'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
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
                    class: [
                      util.icon.browse
                    ],
                    style: {
                      verticalAlign: 'middle',
                      fontSize: '18px'
                    },
                    on: {
                      click: () => {
                        this.showModal = true
                        this.loading = true
                        this.$emit("modal", this.showModal)
                        this.$emit("loading", this.loading)
                        this.$emit("getData", params.row)
                        this.show(params.index, params.row)

                      }
                    }
                  }),
                  h(
                    'div',
                    {
                      slot: 'content'
                    },
                    '查看'
                  )
                ]
              ),
            ]);
          }
        }
      ],
      data6: []
    }
  },
  props: ["result", "page", "pageSize"],
  mounted () {
    this.totleValue();
    this.tableHeight = this.$refs.tableHeight.offsetHeight;
  },
  watch: {
    result (val) {
      this.pageParams.page = 1
      this.fatherResult = val
      this.$emit("pages", 1)
      this.totleValue()
    },
    page () {
      this.pageParams.page = this.page
      this.totleValue()
    },
    pageSize (val) {
      this.totleValue()
    }
  },
  methods: {
    show (index, item) {
      this.valueTitle = item.name
      this.$emit("valuetitle", this.valueTitle)
      let nowData = {
        dataversionId: this.data6[index].primarydataId
      }
      this.$store.dispatch('getSysPrimaryDataValueList', nowData).then(res => {
        let value = []
        if (res.data.code === 200) {
          let list = res.data.data.list
          list.forEach((val, i) => {
            value.push({
              dataValue: list[i].dataValue,
              dataValueRemark: list[i].dataValueRemark,
              serialNumber: list[i].serialNumber
            })
          });
          this.$emit("value", value)
          this.loading = false
          this.$emit("loading", this.loading)
        } else {
          util.showMsg(this, { diy: res.data.message })
        }
      })

    },
    remove (index) {
      this.data6.splice(index, 1);
    },
    totleValue (val) {
      console.log(this.pageSize)
      this.$store.dispatch('getSysPrimaryDataQueryByCondition', { condition: this.result, page: this.pageParams.page, size: this.pageSize || 15 }).then(res => {
        if (res.data.code === 200) {
          this.data6 = res.data.data.list
          this.loading1 = false
          let pages = res.data.data.pages
          this.$emit("pages", pages)
        } else {
          util.showMsg(this, { diy: res.data.message })
        }
      })
    }
  }
}
</script>

<template>
  <Page :current="1"
        :total="pages"
        :page-size="pageSize"
        @on-change="pageChange"
        simple></Page>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      pages: 1,
      pageSize: 15
    }
  },
  props: ["tabpage"],
  watch: {
    tabpage () {
      this.pages = this.tabpage * 15
    }
  },
  methods: {
    pageChange (val) {
      this.$emit("Page", val)
    }
  }
}
</script>
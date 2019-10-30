<template>
  <Modal v-model="showModal"
         width="400"
         :mask-closable="false"
         @on-visible-change="close">
    <p slot="header"
       style="color:#f60;text-align:center">
      <Icon type="information-circled"></Icon>
      <span>{{title}}</span>
    </p>
    <div style="text-align:center">
      <p style="font-size:14px;">{{msg}}</p>
    </div>
    <div slot="footer">
      <Button type="primary"
              size="large"
              long
              @click="Ok"
              :loading="loading">{{btntext}}</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  data () {
    return {
      name: 'confirmDeletion',
      showModal: false
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    msg: {
      type: String,
      default: '确定删除么？'
    },
    title: {
      type: String,
      default: '删除确认'
    },
    btntext: {
      type: String,
      default: '删除'
    },
    loading: false
  },
  watch: {
    show (val) {
      this.showModal = val
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      this.showModal = this.show;
    },
    Ok () {
      this.$emit('ok');
    },
    close (val) {
      if (!val) {
        // this.$emit('input', val);
        this.$emit('close');
      }
    }
  }
}
</script>


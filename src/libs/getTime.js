import util from './util';

export default {
  data () {
    return {
      getServiceTime:''
    }
  },
  methods: {
    //获取服务器的时间
    AjaxGetServiceTime () {
      this.$store.dispatch("getDateBaseDate").then(res => {
         if ( res.data.code != 200) {
          util.showMsg(this, { diy: res.data.message });
        } else {
          this.getServiceTime = res.data.data
        }
      })
    }
   
  }
}


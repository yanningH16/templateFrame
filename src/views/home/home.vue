
<template>
  <div class="home-main bg-white"
       id="bgimg">
    <div style="position: relative;left: 30px;top: 20px;"
         v-show="1!=1">
      <Row>
        <i-Col span="3">
          <Card :bordered="false"
                v-show="1!=1">
            <p slot="title">关联C#应用</p>
            <a href="RuiyiHisReg://admin,abc,537">
              挂号
            </a><br>
            <!-- <a href="RuiyiHisReg://admin,abc,70">
                            挂号2
                        </a> -->
          </Card>
        </i-Col>
      </Row>
    </div>
  </div>
</template>

<script>
import util from '../../libs/util'

export default {
  name: 'home',
  data () {
    return {
    };
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
@import "./home.less";
@import "../../styles/common.less";
#iframes {
  position: absolute;
  // top: -38px;
  height: 85%;
  width: 95%;
  border: none;
}
#bgimg {
  width: 100%;
  height: 100%;
  background-image: url("../../images/500663747.jpg");
  background-size: 100% 100%;
}
</style>
<style lang="less">
.ivu-modal-wrap.guide-action {
  .ivu-modal {
    height: 100%;
    top: 0;
  }
  .ivu-modal-content {
    height: 100%;
    border-radius: 0 !important;
  }
  .ivu-modal-body {
    height: 100%;
    padding: 0;
  }
  .ivu-modal-footer {
    display: none;
  }
  .ivu-carousel,
  .ivu-carousel-item,
  .ivu-carousel-track,
  .ivu-carousel-list {
    height: 100% !important;
  }
  .carousel-img {
    height: 100%;
    width: 100%;
    background: #fff;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .close-btn {
    height: 60px;
    width: 60px;
    background: white;
    position: absolute;
    top: 10px;
    right: 50px;
    z-index: 1000;
    cursor: pointer;
  }
  .position-container {
    position: fixed;
    .no-need {
      cursor: pointer;
      margin-left: 10px;
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

<template>
  <div class="login"
       @keyup.enter="handleSubmit('loginForm')">
    <div class="login-con">
      <Card style="text-align:center;width:384px;height:400px">
        <p style="margin-top:15px;height:90px;display:flex;flex-direction:column;align-items: center;justify-content: space-around;">
          <Avatar :src="userImg"
                  v-if='userImg'></Avatar>
          <img src="../images/login-logo.png"
               style="height:60px;width:60px;"
               v-else>
          <span style="color:#666666">
            智慧医疗云HIS
          </span>
        </p>
        <div class="form-con"
             style="margin-top:5px">
          <Form ref="loginForm"
                :model="form"
                :rules="rule">
            <FormItem prop="userName"
                      class='userName'
                      style="display: flex;margin-top:30px">
              <i-Input v-model.trim="form.userName"
                       placeholder="请输入用户名"
                       @change.native="inputUser"
                       style="width:320px;margin-left:16px">
                <img slot="prepend"
                     src="../images/icon_userName.png"
                     alt=""
                     style="margin-left:10px;margin-right:10px;">
              </i-Input>
            </FormItem>
            <FormItem prop="password"
                      class='password'
                      style="display: flex;">
              <i-Input type="password"
                       v-model="form.password"
                       placeholder="请输入密码"
                       @change.native="inputPwd"
                       style="width:320px;margin-left:16px">
                <img slot="prepend"
                     src="../images/icon_passWord.png"
                     alt=""
                     style="margin-left:10px;margin-right:10px;">
              </i-Input>
            </FormItem>

            <FormItem style="text-align: left;margin-left: 20px;height:32px;margin-bottom:5px">
              <Checkbox v-model="loginReFlag">记住账号</Checkbox>
            </FormItem>
            <FormItem v-if='isFromOfficial'>
              <Button @click="handleSubmit('loginForm')"
                      type="warning"
                      long
                      style="width:150px;margin-left:2px">
                登录
              </Button>
              <a href="http://www.ruiyisoft.com.cn/signin.html">
                <Button type="warning"
                        long
                        style="width:150px;margin-left:2px">
                  注册
                </Button>
              </a>
            </FormItem>
            <FormItem v-else>
              <Button @click="handleSubmit('loginForm')"
                      type="warning"
                      long
                      style="width:320px;margin-left:2px">
                登录
              </Button>
            </FormItem>
          </Form>
          <p class="login-tip"></p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
import Cookies from 'js-cookie';
import util from '../libs/util';

export default {
  data () {
    return {
      loginReFlag: true,//记住账号标记
      userError: '',
      pwdError: '',
      token: '',
      params: {
        loginName: '',
        userPwd: '',
        hospitalId: ''
      },
      form: {
        userName: '',
        password: '',
        posts: [],
        isLoading: false,
        fetchError: null,
        hospitalId: -1,
        hospitalName: '',
        hospitalIdList: []
      },
      rule: {
        userName: [
          { required: true, message: '请输入正确的用户名', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入正确的密码', trigger: 'change' }
        ],
        hospitalId: [
          { required: true, message: '请选择医疗机构', trigger: 'change', type: 'number' }
        ],
      }
    };
  },
  computed: {
    userImg: {
      get () {
        return this.$store.state.publicApi.userImg
      },
      set (val) {
        this.$store.commit('setUserImg', val)
      }
    },
    isFromOfficial () {
      return this.$route.query.fromOfficial ? true : false
    },
    isFromPlatform () {
      return this.$route.query.fromPlatform ? true : false
    },
  },
  mounted () {
    this.getCookie()
  },
  methods: {
    inputUser (e) {
      this.userError = '';
      if (e.target.value == '') {
        this.userError = '请输入正确的用户名（用户名、密码不可为空）';
      }
      this.params.loginName = e.target.value;
      this.form.userName = e.target.value;
      this.getUserImg()
    },
    inputPwd (e) {
      this.pwdError = '';
      if (e.target.value == '') {
        this.pwdError = '密码不能为空';
      }
      this.params.userPwd = e.target.value;
      this.form.password = e.target.value;
    },
    handleSubmit (name) {
      if (this.form.hospitalId === -1) {
        this.form.hospitalId = 'aaa'
      }
      console.log(this.params)
      this.$refs[name].validate((valid) => {
        if (valid) {
          util.ajax({
            method: 'post',
            url: util.BaseURL + '/login?' + qs.stringify(this.params),
            headers: {
              APPID: 'APP002'
            }
          }).then(res => {
            if (res.data.code === 200) {
              localStorage.setItem('guidePageList', res.data.data.guidePageList ? res.data.data.guidePageList : '{}');
              this.$store.commit('getUserLogin', res.data.data)
              localStorage.setItem('userId', res.data.data.userId);
              util.showMsg(this, { succ: '登录成功' });
              if (this.loginReFlag) this.setCookie('userName', res.data.data.loginName, 7)
              if (this.loginReFlag) this.setCookie('avatar', res.data.data.imageUrl, 7)//登陆成功之后更新cookie头像信息
              if (!this.loginReFlag) this.clearCookie()
              this.setCookie('rememberMe', this.form.userName, 7)
              this.setCookie('hospitalId', res.data.data.hospitalId, 7)

              localStorage.setItem('DefaultDeptId', Cookies.get(this.form.userName + 'DefaultDeptId') == undefined ? res.data.data.deptId : Cookies.get(this.form.userName + 'DefaultDeptId'));
              this.$store.commit('setLocalStorageAvator', res.data.data.imageUrl || 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');//登陆成功之后更新localstorage头像信息
              Cookies.set('token', res.headers.authorization);
              Cookies.set('user', res.data.data.userName, 7);
              Cookies.set('password', this.form.password, 7);
              this.pwdError = '';

              if (this.isFromPlatform) {
                util.ajax({
                  method: 'post',
                  url: 'http://218.28.38.91:8088/service-common/api/v1/usersVs/userContrast?modCode=HIS&' + 'modUser=' + this.params.loginName + '&token=' + this.$route.query.jwt + '&userNo=' + this.$route.query.userNo,
                  headers: {
                    Authorization: this.$route.query.jwt
                  }
                }).then(res => {
                  if (res.data.code === 200) {
                    util.showMsg(this, { succ: '用户绑定成功' })
                    location.href = Cookies.get('topath')
                  } else {
                    util.showMsg(this, { error: '用户绑定失败' })
                    this.$router.push({
                      name: 'home_index'
                    });
                    location.reload()
                  }
                })
              } else {
                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$router.push({
                  path: redirect
                });
                this.$router.push({
                  name: 'home_index'
                });
                location.reload()
              }
            } else {
              util.showMsg(this, { diy: res.data.message });
            }
          })

        }
      })
    },
    // 获取用户头像的接口
    getUserImg () {
      const params = {
        // hospitalId: this.form.hospitalId,
        loginName: this.form.userName
      }
      
      this.$store.dispatch('getUserImg', params).then(res => {
          if (res.data.code == 200) {
            this.$store.commit('setUserImg', res.data.data)
          } else {
            this.$store.commit('setUserImg', '')
          }
      })
    },
    //设置cookie
    setCookie (key, val, exdays) {
      var exdate = new Date();//获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);//保存的天数
      window.document.cookie = key + "=" + val + ";path=/;expires=" + exdate.toGMTString();//字符串拼接cookie
    },
    //读取cookie
    getCookie () {
      if (document.cookie.length > 0) {
        // cookie字符串转换成对象cookieObj
        var arr = document.cookie.split('; ');
        const cookieObj = {}
        for (var i = 0; i < arr.length; i++) {
          const nerArr = arr[i].split('=')
          cookieObj[nerArr[0]] = nerArr[1]
        }
        if (cookieObj.userName) {
          this.form.userName = cookieObj.rememberMe;//保存到保存数据的地方
          this.params.loginName = cookieObj.rememberMe
        }
        if (cookieObj.hospitalId) {
          this.form.hospitalId = Number(cookieObj.hospitalId);//保存到保存数据的地方
          this.params.hospitalId = Number(cookieObj.hospitalId)
        }
        if (cookieObj.userName && cookieObj.hospitalId) {
          this.loginReFlag = true//记住账号
        }
        if (cookieObj.avatar) {
          this.userImg = cookieObj.avatar;//保存到保存数据的地方
        } else {
          this.getUserImg()
        }
      }
    },
    //清除cookie
    clearCookie () {
      this.setCookie('userName', "", -1);//修改2值都为空，天数为负1天就好了
      this.setCookie('avatar', "", -1)
      // this.setCookie('hospitalId',"",-1)
    }
  }
};
</script>

<style>
.ivu-dropdown + .ivu-form-item-error-tip {
  margin-top: -12px;
}
</style>
<style lang="less">
@import "./login.less";
.login {
  .ivu-form-item-error-tip {
    margin-left: 72px;
  }
  .ivu-avatar {
    width: 60px;
    height: 60px;
    line-height: 60px;
    border-radius: 30px;
  }
  .userName,
  .password {
    .ivu-input-group-prepend {
      border-right: none;
    }
  }
}
</style>

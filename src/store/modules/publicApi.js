import util from '../../libs/util';
import qs from 'qs';
const sysUser = {
  state: {
    getUserImg: 'getHeadPortraitURL',//获取头像接口
    detailUser:'api/sysUser/detail', //查 用户
    servicePersonalListByParam: '/api/ehrServicePersonal/detail',
    customReportHpDictListbyQueryParam: 'api/sys/customReportHpDict/getCustomReportHpDictList',
    customReportDictListbyQueryParam: 'api/sys/customReportDict/findReportDictByName',
    getUserGroupResources: 'api/sysUserResource/getUserGroupResource',
    updateUserPsw: '/api/sysUser/updateUserPsw',
    customReportHpDictUpdate: 'api/sys/customReportHpDict/update',
    getFD: 'api/sysFlagData/getFlagDataPairList',
    findRegion: 'api/sysPrimaryDataValue/findRegion',//获取地址的接口 省市区
    pdOrHdAttrSel: "api/sys/hsp/basicDataValue/curHDDictQuery",//获取HD数据 
    sysDiagDictDetailByQueryParam: 'api/sysDiagDict/detailByQueryParam',//右侧查询接口
    uploadPicture:'api/sysUser/uploadPicture',//图片上传
    userImg: '',
    userInfoObj: JSON.parse(sessionStorage.getItem('userInfoObj'))
  },
  mutations: {
      setUserImg(state, params) {
          state.userImg = params
      },
      
  },
  actions: {
    uploadPicture({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.uploadPicture + '?hospitalId' + sysUser.state.userInfoObj.hospitalId
      });
  },
    getBasicDataValueSel({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.sysDiagDictDetailByQueryParam + '?' + qs.stringify(params)
      });
  },
    getPDOrHDAttrs({ dispatch, commit, state }, params) { //获取PD或者HD
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.pdOrHdAttrSel + '?' + qs.stringify(params),
      })
  },
    findRegion({ dispatch, commit, state }, params) { 
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.findRegion
      })
  },
    getFDAttr ({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.getFD,
          data: params
      })
  },
    updateCustomReportHpDict({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.customReportHpDictUpdate,
          data: params
      })
  },
    updSysUserpwd({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.updateUserPsw + '?' + qs.stringify(params),
      })
  },
    getUserGroupResourcess({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.getUserGroupResources + '?' + qs.stringify(params),
      })
  },
    getCustomReportDict({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.customReportDictListbyQueryParam,
          data: params
      })
  },
    getCustomReportHpDict({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.customReportHpDictListbyQueryParam + '?' + qs.stringify(params),
      })
  },
    getServicePersonal({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.servicePersonalListByParam + '?' + qs.stringify(params),
      })
  },
    detailUsers({ dispatch, commit, state }, params) { //获取用户数组
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.detailUser + '?' + qs.stringify(params)
      })
  },
    getUserImg({ dispatch, commit, state }, params) {
      return util.ajax({
          method: 'post',
          url: util.BaseURL + state.getUserImg + '?' + qs.stringify(params),
      })
  },
 
  }
}
export default sysUser
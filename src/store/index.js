import Vue from 'vue';
import Vuex from 'vuex';

import app from './modules/app';//主的
import logoutClear from './modules/logoutClear';//退出之后清除的
import publicApi from './modules/publicApi';//公共的接口


Vue.use(Vuex)


const state={//要设置的全局访问的state对象
  userInfoObj: '' || JSON.parse(sessionStorage.getItem('userInfoObj'))
};


const getters = {   //实时监听state值的变化(最新状态) 个人感觉作用不大
};
// 光有定义的state的初始值，不改变它不是我们想要的需求，接下来要说的就是mutations了
// ，mutattions也是一个对象，这个对象里面可以放改变state的初始值的方法，
// 具体的用法就是给里面的方法传入参数state或额外的参数,然后利用vue的双向数据驱动进行值的改变，
// 同样的定义好之后也把这个mutations扔进Vuex.Store里面，如下：
const mutations = {
 getUserLogin: (state, userInfoObj) => {
   state.userInfoObj = userInfoObj
   sessionStorage.setItem('userInfoObj', JSON.stringify(userInfoObj))
 }
};
/*
这个actions也是个对象变量，最大的作用就是里面的Action方法 可以包含任意异步操作，
这里面的方法是用来异步触发mutations里面的方法，
actions里面自定义的函数接收一个context参数和要变化的形参，
context与store实例具有相同的方法和属性，所以它可以执行context.commit(' '),
然后也不要忘了把它也扔进Vuex.Store里面：
*/
const actions = {
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        app,
        logoutClear,
        publicApi,
    }
});

export default store;
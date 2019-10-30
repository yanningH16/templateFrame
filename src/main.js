import Vue from 'vue';
import iView from 'view-design';
import {router} from './router/index';
import { appRouter} from './router/router';
import 'view-design/dist/styles/iview.css';
import store from './store';
import axios from './http'
import util from './libs/util';
import App from './app.vue';
import "babel-polyfill"
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import './my-theme/index.less';

Vue.prototype.$util = util
// Vue.use(VueI18n);
Vue.use(iView);
// 格式化时间的挂载
Date.prototype.format = function(format) {
    var date = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S+': this.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ?
                date[k] : ('00' + date[k]).substr(('' + date[k]).length));
        }
    }
    return format;
};
new Vue({
    el: '#app',
    router: router,
    store: store,
    axios,
    render: h => h(App),
    data: {
    },
    mounted() {
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
    },
    created() {
        // 横向的菜单展示
        let tagsList = [];
        appRouter.forEach(element => {
            if (element.children.length>0) {
                element.children.forEach(item => {
                    tagsList.push(item);
                });
            }
        });
        this.$store.commit('setTagsList', tagsList);
    }
});


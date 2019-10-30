import { otherRouter, appRouter } from '@/router/router';
import util from '@/libs/util';
import Cookies from 'js-cookie';

const app = {
    state: { 
        cachePage: [],
        lang: '',
        pageOpenedList: [{
            title: '首页',
            path: '',
            name: 'home_index'
        }],
        menuList: [],
        menuRouter: [],
        routers: [
            otherRouter,
            ...appRouter
        ],
        tagsList: [...otherRouter.children],
        messageCount: 0,
        dontCache: [] // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
    },
    mutations: {
        // 菜单横向的数据
        setTagsList(state, list) {
            state.tagsList.push(...list)
        },
        // 关键路由渲染的地方
        updateMenulist(state) {
            // 备用的  当不请求接口的时候 这样处理比较好
            // let testMenu=[
            //     {
            //         path:'/newMange',
            //         title: '测试页面',
            //         icon: 'md-contacts',
            //         name: 'newMange',
            //         children: [
            //             {
            //                 name: 'newMange',
            //                 title: '测试的页面(左侧路由)',
            //                 path: 'newMange/newMange.vue',
            //                 children: []
            //             }
            //         ]
            //     }
            // ]
            // state.menuList = testMenu;


            state.menuList=appRouter
        
            return
            if (Cookies.get('token')) {
                util.ajax({
                    method: 'post',
                    url: util.BaseURL + '/api/commApi/redisDataByKey?key=' + localStorage.userId + "MenuListAPP002",
                }).then(function(res) {
                    let menu = res.data.data
                    let menuList = [];
                    let obj = {}
                   util.sortByKey(menu,'menuSort').map(val=>{
                        if(val.sysType=== "APP001"){
                            return
                        }
                        let objTwo = {}
                        let objTid = {}
                        obj = {
                            title: val.menuName,
                            path: val.menuUrl,
                            name: val.routeName,
                            icon: val.menuIcon,
                            children: []
                        }
                        if(val.secondList!=undefined&&val.secondList.length>0){
                            // obj.children = val.secondList
                            util.sortByKey(val.secondList,'menuSort').map(item=>{
                                objTwo = {
                                    title: item.menuName,
                                    path: item.menuUrl,
                                    name: item.routeName,
                                    icon: item.menuIcon,
                                    children: []
                                }
                                if(item.secondList!=undefined&&item.secondList.length>0){
                                    util.sortByKey(item.secondList,'menuSort').map(value=>{
                                        objTid = {
                                            title: value.menuName,
                                            path: value.menuUrl,
                                            name: value.routeName,
                                            icon: value.menuIcon,
                                            children: []
                                        }
                                        objTwo.children.push(objTid)
                                    })
                                }
                                obj.children.push(objTwo)
                            })
                        }
                        menuList.push(obj)
                    })
                    state.menuList = menuList;
                }).catch(error => {
                    util.showMsg(this, error.toString())
                }) 
            }
      
        },
        // 跟缓存有关 关闭后进行缓存数组里面的删除处理
        closePage(state, name) {
            state.cachePage.forEach((item, index) => {
                if (item === name) {
                    state.cachePage.splice(index, 1);
                }
            });
        },
        // 跟缓存有关的  目前看还没有用
        initCachepage(state) {
            // if (localStorage.cachePage) {
            //     state.cachePage = JSON.parse(localStorage.cachePage);
            // }
        },
        // 删除的单个 单个横向菜单的地方
        removeTag(state, name) {
            state.pageOpenedList.map((item, index) => {
                if (item.name === name) {
                    state.pageOpenedList.splice(index, 1);
                }
            });
        },
        // 这个目前看来没有用 可有可无的
        pageOpenedList(state, get) {
            let openedPage = state.pageOpenedList[get.index];
            if (get.argu) {
                openedPage.argu = get.argu;
            }
            if (get.query) {
                openedPage.query = get.query;
            }
            state.pageOpenedList.splice(get.index, 1, openedPage);
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        clearAllTags(state) { //关闭所有
            state.pageOpenedList.splice(1);
            state.cachePage.length = 0;
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        clearOtherTags(state, vm) { //关闭其他
            let currentName = vm.$route.name;
            let currentIndex = 0;
            state.pageOpenedList.forEach((item, index) => {
                if (item.name === currentName) {
                    currentIndex = index;
                }
            });
            if (currentIndex === 0) {
                state.pageOpenedList.splice(1);
            } else {
                state.pageOpenedList.splice(currentIndex + 1);
                state.pageOpenedList.splice(1, currentIndex - 1);
            }
            let newCachepage = state.cachePage.filter(item => {
                return item === currentName;
            });
            state.cachePage = newCachepage;
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        },
        // 防止点击其它菜单导致 左侧菜单收起的方法
        setOpenedList(state) {
            state.pageOpenedList = localStorage.pageOpenedList ? JSON.parse(localStorage.pageOpenedList) : [otherRouter.children[0]];
        },
        // 读取用户图标的
        setLocalStorageAvator(state, path) {
            localStorage.avatorImgPath = path;
        },
        // 进行语言切换的
        switchLang(state, lang) {
            state.lang = lang;
            Vue.config.lang = lang;
        },
        // 已读或者数据的
        setMessageCount(state, count) {
            state.messageCount = count;
        },
        // 这个是每点击一个菜单 往tag
        increateTag(state, tagObj) {
            // 这个是缓存的关键地方
            if (!util.oneOf(tagObj.name, state.dontCache)) {
                state.cachePage.push(tagObj.name);
                localStorage.cachePage = JSON.stringify(state.cachePage);
            }
            state.pageOpenedList.push(tagObj);
            localStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
        }
    }
};

export default app;
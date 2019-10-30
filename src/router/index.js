import Vue from 'vue';
import iView from 'view-design';
import Util from '../libs/util';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
import qs from 'qs';
import {
    routers
} from './router';
import util from '../libs/util';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);
// 路由守卫的地方
router.beforeEach((to, from, next) => {
    // 判断是否来自平台
    if (to.query.fromPlatform) {
        Cookies.set('topath', to.query.topath)
        Cookies.remove('token')
    }
    if (to.query.source == 'flat') { //判断是从平台跳转过来的
        if (Cookies.get('token')) {//his有已经登录的账户
            if (Cookies.get('userName').toString() !== to.query.modUser.toString()) {//已登录his账户与平台跳转过来的用户不是一个用户
                iView.Modal.confirm({
                    title: 'HIS登录提示',
                    okText: '是',
                    cancelText: '否',
                    content: '<p>当前HIS系统登录用户为 ' + Cookies.get('userName') + ' ,新用户为 ' + to.query.modUser + ' ,是否切换到 ' + to.query.modUser + ' ?</p>',
                    onOk: () => {
                        const params = {
                            loginName: to.query.modUser,
                            platformUserName: to.query.userNo,
                            token: to.query.jwt,
                            flag:1
                        }
                        Util.ajax({
                            method: 'post',
                            url: Util.BaseURL + 'platformLogin?' + qs.stringify(params)
                        }).then(res => {
                            if (res.data.code === 200 ) {
                                let resMenuList = res.data.data.menuList
                                let menuList=[]
                                resMenuList.find((dataArr)=>{  //由于结构的改变导致了这样的问题  三层循环做处理
                                    if (dataArr.sysType=='APP002') {
                                        dataArr.secondList.forEach(element => {
                                            if (!util.isEmpty(element.secondList)) {
                                                element.secondList.forEach(item => {  //这种是三层的
                                                    menuList.push(item)
                                                });
                                            }else{ //这种是是两层的
                                                menuList.push(element)
                                            }
                                        });
                                    }
                                })
                                if (menuList.find(item => item.menuUrl === to.path)) {
                                    Cookies.set('token', res.headers.authorization);
                                    localStorage.setItem('guidePageList', res.data.data.guidePageList ? res.data.data.guidePageList : '{}');
                                   
                                    Cookies.set('userName', res.data.data.loginName)
                                    Cookies.set('avatar', res.data.data.imageUrl)//登陆成功之后更新cookie头像信息
                                    localStorage.setItem('avatorImgPath', res.data.data.imageUrl)
                                    Cookies.set('hospitalId', res.data.data.hospitalId)
                                    this.$store.commit('getUserLogin',res.data.data )
                                    localStorage.setItem('menuList', JSON.stringify(resMenuList));

                                    localStorage.setItem('userId', res.data.data.userId);

                                    Cookies.set('user', res.data.data.userName);
                                    Cookies.set('password', res.data.data.password);
                                    next({
                                        replace: true,
                                        name: to.name
                                    });
                                    location.reload()
                                    return
                                } else {
                                    iView.Notice.error({
                                        title: '睿颐温馨提示：',
                                        desc: '用户无此权限页面'
                                    });
                                    setTimeout(function () {
                                        open(location, '_self').close()
                                    }, 3000);
                                }

                            } else {
                                iView.Notice.error({
                                    title: '睿颐温馨提示：',
                                    desc: res.data.message
                                });
                                setTimeout(function () {
                                    open(location, '_self').close()
                                }, 3000);
                            }
                        })
                    },
                    onCancel: () => {
                        open(location, '_self').close()
                    }
                });
            } else {
                const params = {
                    loginName: to.query.modUser,
                    // loginName: 'admin',
                    platformUserName: to.query.userNo,
                    token: to.query.jwt,
                    flag:1
                }
                Util.ajax({
                    method: 'post',
                    // url: 'http://192.168.6.27:9898' + 'platformLogin?' + qs.stringify(params)
                    url: Util.BaseURL + 'platformLogin?' + qs.stringify(params),
                    headers: {
                        APPID: 'APP002'
                      }
                }).then(res => {
                    if (res.data.code === 200 ) {
                        let resMenuList = res.data.data.menuList
                        let menuList=[]
                        resMenuList.find((dataArr)=>{
                        if (dataArr.sysType=='APP002') {
                            dataArr.secondList.forEach(element => {
                                if (!util.isEmpty(element.secondList)) {
                                    element.secondList.forEach(item => {
                                        menuList.push(item)
                                    });
                                }else{
                                    menuList.push(element)
                                }
                            });
                        }
                        })
                        if (menuList.find(item => item.menuUrl === to.path)) {
                            Cookies.set('token', res.headers.authorization);
                            localStorage.setItem('guidePageList', res.data.data.guidePageList ? res.data.data.guidePageList : '{}');
                            Cookies.set('userName', res.data.data.loginName)
                            Cookies.set('avatar', res.data.data.imageUrl)//登陆成功之后更新cookie头像信息
                            localStorage.setItem('avatorImgPath', res.data.data.imageUrl)
                            Cookies.set('hospitalId', res.data.data.hospitalId)
                            localStorage.setItem('userId', res.data.data.userId);

                            this.$store.commit('getUserLogin',res.data.data )

                            Cookies.set('user', res.data.data.userName);
                            Cookies.set('password', res.data.data.password);
                            next({
                                replace: true,
                                name: to.name
                            });
                            return
                        } else {
                            iView.Notice.error({
                                title: '睿颐温馨提示：',
                                desc: '用户无此权限页面'
                            });
                            setTimeout(function () {
                                open(location, '_self').close()
                            }, 3000);
                        }
                    } else {
                        iView.Notice.error({
                            title: '睿颐温馨无权限提示：',
                            desc: res.data.message
                        });
                        setTimeout(function () {
                            open(location, '_self').close()
                        }, 3000);
                    }
                })
            }
        } else {
            console.log(to,'看看这个to')
            const params = {
                loginName: to.query.modUser,
                // loginName: 'admin',
                platformUserName: to.query.userNo,
                token: to.query.jwt,
                flag:1
            }
            Util.ajax({
                method: 'post',
                url: Util.BaseURL + 'platformLogin?' + qs.stringify(params),
                headers: {
                    APPID: 'APP002'
                  }
            }).then(res => {
                if (res.data.code === 200 ) {
                    let resMenuList = res.data.data.menuList
                    let menuList=[]
                        resMenuList.find((dataArr)=>{
                            if (dataArr.sysType=='APP002') {
                            dataArr.secondList.forEach(element => {
                                if (!util.isEmpty(element.secondList)) {
                                    element.secondList.forEach(item => {
                                        menuList.push(item)
                                    });
                                }else{
                                    menuList.push(element)
                                }
                            });
                        }
                        })
                    
                    if (menuList.find(item => item.menuUrl === to.path)) {
                        Cookies.set('token', res.headers.authorization);
                        localStorage.setItem('guidePageList', res.data.data.guidePageList ? res.data.data.guidePageList : '{}');
                        Cookies.set('userName', res.data.data.loginName)
                        Cookies.set('avatar', res.data.data.imageUrl)//登陆成功之后更新cookie头像信息
                        localStorage.setItem('avatorImgPath', res.data.data.imageUrl)
                        Cookies.set('hospitalId', res.data.data.hospitalId)

                        this.$store.commit('getUserLogin',res.data.data )

                        localStorage.setItem('userId', res.data.data.userId);

                        Cookies.set('user', res.data.data.userName);
                        Cookies.set('password', res.data.data.password);
                        next({
                            replace: true,
                            name: to.name
                        });
                        return
                    } else {
                        iView.Notice.error({
                            title: '睿颐温馨提示：',
                            desc: '用户无此权限页面'
                        });
                        setTimeout(function () {
                            open(location, '_self').close()
                        }, 3000);
                    }
                } else {
                    iView.Notice.error({
                        title: '睿颐温馨提示：',
                        desc: res.data.message
                    });
                    setTimeout(function () {
                        open(location, '_self').close()
                    }, 3000);
                }

            })
        }

    }

    //判断是否是66666跳转过来的
    if (to.query.source == 'bed') {
        const params = {
            loginName: '666666',
            token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbkV4cFRpbWUiOjMxNTM2MDAwMDAwLCJob3NwaXRhbGlkIjoiMiIsImV4cGlyeVRpbWUiOjE1ODc3Mjg3MzA5MjIsImV4cCI6MTU4NzcyODczMCwidXNlcmlkIjoiMSIsInVzZXJuYW1lIjoiYWRtaW4ifQ.99zkEDR6VXL-i3uYCdynS2FwD893CrnHGR0AAsgPrrBB-GJfL-VVotfN2cuZUs-w175q1oAa6mG9h6FZ1uAAjA',
            // token: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ0b2tlbkV4cFRpbWUiOjMxNTM2MDAwMDAwLCJob3NwaXRhbGlkIjoiMiIsImV4cGlyeVRpbWUiOjE1ODc4MDkyODc0NjYsImV4cCI6MTU4NzgwOTI4NywidXNlcmlkIjoiMjIwOSIsInVzZXJuYW1lIjoiNjY2NjYifQ.e2VLLS0c1kxa-ut60MzCR3pjIZuayFKSwdiXLXqKinCnbBbPEt2StGmvOPJjQ_vCPv1C2Get-3p9dj3lUbDAyQ'
        }
        Util.ajax({
            method: 'post',
            url: Util.BaseURL + 'cLogin?' + qs.stringify(params)
        }).then(res => {
            if (res.data.code === 200 ) {
                let resMenuList = res.data.data.menuList
                if (resMenuList.length != 0) {
                    console.log(resMenuList, '菜单列表的数据', to.path)
                    Cookies.set('token', res.headers.authorization);
                    localStorage.setItem('guidePageList', res.data.data.guidePageList ? res.data.data.guidePageList : '{}');
                    Cookies.set('userName', res.data.data.loginName)
                    Cookies.set('avatar', res.data.data.imageUrl)//登陆成功之后更新cookie头像信息
                    localStorage.setItem('avatorImgPath', res.data.data.imageUrl)
                    Cookies.set('hospitalId', res.data.data.hospitalId)
                    this.$store.commit('getUserLogin', res.data.data)
                    
                    localStorage.setItem('userId', res.data.data.userId);

                    Cookies.set('user', res.data.data.userName);
                    Cookies.set('password', res.data.data.password);
                    next({
                        replace: true,
                        name: 'nursing-station'
                    });
                    return
                } else {
                    iView.Notice.error({
                        title: '睿颐温馨提示：',
                        desc: '用户无此权限页面'
                    });
                    setTimeout(function () {
                        open(location, '_self').close()
                    }, 5000);
                }
            } else {
                iView.Notice.error({
                    title: '睿颐温馨提示：',
                    desc: res.data.message
                });
                setTimeout(function () {
                    open(location, '_self').close()
                }, 5000);
            }
        })

    }
    //判断是否是66666端跳转的结束
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    if (to.name !== 'login' && !Cookies.get('token')) {
        if (to.matched.some(r => r.meta.requireAuth)) {
            next({
                replace: true,
                name: 'login'
            });
            Cookies.remove('user');
        }
    }

    if (Cookies.get('locking') === '1' && to.name !== 'locking') { // 判断当前是否是锁定状态
        next({
            replace: true,
            name: 'locking'
        });
    } else if (Cookies.get('locking') === '0' && to.name === 'locking') {
        next(false);
    } else {
        if (!Cookies.get('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
            next({
                name: 'login'
            });
        } else if (Cookies.get('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
            Util.title();
            next({
                name: 'home_index'
            });
        } else {
            // 则正常走 就可以了
            next()
        }
    }
});

router.afterEach((to) => {
    // 上面进度条结束
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
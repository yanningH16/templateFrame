
import Util from './libs/util';
import Cookies from 'js-cookie';
import iView from 'view-design';
// axios 配置
Util.ajax.defaults.timeout = 50000;

// http request 拦截器
Util.ajax.interceptors.request.use(config => {
        if (Cookies.get('token')) {
            config.headers.Authorization = config.headers.Authorization || Cookies.get('token');
        }
        return config;
    },err => {
        return Promise.reject(err);
    });
    // http response 拦截器
Util.ajax.interceptors.response.use(response => {
    return response;
        }, error => {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        // 返回 401 清除token信息并跳转到登录页面
                        iView.Notice.warning({
                            title: '温馨提示：',
                            desc: '无效的token，请退出重新登陆！'
                        })
                }
            }
        });

export default Util.ajax;
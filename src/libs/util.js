import axios from 'axios';

let util = {};
util.title = function (title) {
    title = title || '智慧医疗云HIS';
    window.document.title = title;
};
util.BaseURL = 'http://192.168.6.201:9898/'; //新的服务器192的
// util.BaseURL = 'http://192.168.6.23:9898/'; //王广学
// util.BaseURL = 'http://192.168.6.48:9898/'; //张增磊
// util.BaseURL = 'http://192.168.6.38:9898/'; //崔二忠
// util.BaseURL = 'http://192.168.6.41:9898/'; //孙亚鹏
// util.BaseURL = 'http://192.168.6.17:9898/'; //浩哲
util.ajax = axios.create({
    url: util.BaseURL,
    timeout: 30000
});
util.globalVariable = {
    isNullStr: '-1073741824',
    isNullNum: -1073741824,
    isNullDate: '1900-01-01 00:00:59'
}
/**
 * 获取前几周周一的日期
 * @param week
 */
util.getMonByWeek = week => {
    var d = new Date()
    if (week == 0) {
        return new Date(d.getTime() + (1 - d.getDay()) * 24 * 60 * 60 * 1000)
    }
    return new Date(d.getTime() - (week * 7 + d.getDay() - 1) * 24 * 60 * 60 * 1000)
}

/**
 * 获取前几周周日的日期
 * @param week
 */
util.getSunByWeek = week => {
    var d = new Date()
    if (week == 0) {
        return new Date(d.getTime() + (7 - d.getDay()) * 24 * 60 * 60 * 1000)
    }
    return new Date(d.getTime() - ((week - 1) * 7 + d.getDay()) * 24 * 60 * 60 * 1000)
}
util.icon = {
    jieshou: ['iconfont', 'iconclosed'], //接收
    quxiaojieshou: ['iconfont', 'iconbaojiajieshou'], //取消接收
    chayue: ['iconfont', 'iconshenhe1'], //查阅
    tizheng: ['iconfont', 'iconicontest2'], //体征
    putongDrug: ['iconfont', 'iconpu'], //普通药
    maDrug: ['iconfont', 'iconma'], //麻药
    kangDrug: ['iconfont', 'iconkang'], //抗生素
    duDrug: ['iconfont', 'icondu'], //毒药
    jingshenDrug: ['iconfont', 'iconjing'], //精神药
    xiangpc: ['iconfont', 'iconxiangpica'], // 橡皮擦
    stop: ['iconfont', 'icontingyong'], // 停用 1
    select: ['iconfont', 'iconcaozuo'], // 操作/选择 2
    modify: ['iconfont', 'iconxiugai1'], // 修改 3
    modifyNew: ['iconfont', 'iconxiugai1'], // 新修改图标 4
    delete: ['iconfont', 'iconshanchu'], // 删除 5
    save: ['iconfont', 'iconbaocun1'], // 保存 6
    none: ['iconfont', 'iconcuohao'], // 错号 1
    add: ['iconfont', 'icontianjia'], // 新增 8iconfont icon-zhifu
    zhifu: ['iconfont', 'iconzhifu'], // 新增 8iconfont icon-zhifu
    start: ['iconfont', 'iconzhengzaijinhang'], // 启用 9
    extend: ['iconfont', 'iconkuozhanshuxing'], // 扩展 10
    resetPassword: ['iconfont', 'iconzhongzhimima'], // 重置密码 11
    authorized: ['iconfont', 'iconshouquan'], // 授权 12
    record: ['iconfont', 'icon06'], // 记录 13
    browse: ['iconfont', 'iconchaxun1'], // 查看 14
    handle: ['iconfont', 'iconchuli'], // 处理 15
    download: ['iconfont', 'iconxiazai'], // 下载 16
    chexiao: ['iconfont', 'iconchexiao'], // 撤销 23
    schedule: ['iconfont', 'iconricheng'], // 日程安排 17
    read: ['iconfont', 'iconyuedu'], // 阅读 18
    examine: ['iconfont', 'iconshenhe'], // 审核 19
    left: ['iconfont', 'iconicon-test'], // 左 20
    locking: ['iconfont', 'iconsuopingmima'], //锁定 21
    unlock: ['iconfont', 'icon027caozuo_jiesuo'], //解锁 22
    cha: ['iconfont', 'iconcuohao'], //错号
    copy: ['iconfont', 'iconwenjian'], //复制
    receive: ['iconfont', 'icon27'],
    ribao: ['iconfont', 'iconribaoqueren'], //日报确认
    refund: ['iconfont', 'iconrefund'], //退费
    zuoyerili: ['iconfont', 'iconzuoyerili'], //手术安排
    shenqing: ['iconfont', 'iconshenqing'], //手术申请
    zhangdanbulu: ['iconfont', 'iconzhangdanbulu'], //账单补录
    gengduo1: ['iconfont', 'icongengduo1'], //更多1
    shangchuan: ['iconfont', 'iconshangchuan'], //上传
    jisuan: ['iconfont', 'iconjisuan'], // 计算器
    ganyu: ['iconfont', 'iconnavicon-gytcgl'], // 干预
    dayin: ['iconfont', 'iconwebicon'], // 打印小
    dayinD: ['iconfont', 'icondayin1'], // 打印大
    menzhenshoufei: ['iconfont', 'iconmenzhenshoufei'], // 划价，收费
    zhengque: ['iconfont', 'iconzhengque'], // 确认
    yaoshi: ['iconfont', 'icon027caozuo_jiesuo'], // 解锁
    kegong: ['iconfont', 'iconusable'], // 可供
    bukegong: ['iconfont', 'iconduandianbukeyongtiaoguozhuangtai'], // 不可供
};
// 颜色的处理
util.color={
    blue:'#2d8cf0'
},
util.switch = res => {
    let data = {
        '0': '停用',
        '1': '启用'
    };
    return data[res];
};
util.switchReversal = res => {
    let data = {
        '0': '启用',
        '1': '停用'
    };
    return data[res];
};
util.extFlag = res => {
    let data = {
        '0': '是',
        '1': '否'
    };
    return data[res];
};
/**
 *
 * @param soc  树所对应的 json 数组
 * @param id   节点的id
 * @param name 节点的name
 * @param pid  父节点id
 * @param rootname  根结点名称
 * @param rootid  根结点id
 *
 */
util.getTree = function (soc, id, name, pid, rootname, rootid) {
    if (!rootid) rootid = 0;
    let resCopy = util.deepCopy(soc); //  soc 复制一份，用于添加子节点使用
    let hasChildren = true;
    let nodeid = [];
    let treeJson = {
        title: rootname,
        id: rootid,
        data: {},
        expand: true,
        children: []
    };
    let nodeChildren = [];
    soc.map((val, i) => { //  将所有的节点按照父节点id，生成一个 数组,元素为： {pid: 10, [{....},{....}]}
        if (util.isEmpty(val[pid])) val[pid] = 0;
        let pos = util.indexOfObject(val[pid], nodeChildren, 'pid');
        if (pos >= 0) {
            nodeChildren[pos].children.push(val);
        } else {
            nodeChildren.push({
                'pid': val[pid],
                'children': [val]
            });
        }
    });
    nodeid.push(rootid);
    while (hasChildren) {
        let newnodeid = [];
        hasChildren = false;
        nodeid.forEach((val, i) => {
            let pos = util.indexOfObject(val, nodeChildren, 'pid');
            if (pos >= 0) {
                let pnode = util.treeMap(treeJson, val);
                if (!util.isEmpty(pnode)) {
                    hasChildren = true;
                    nodeChildren[pos].children.forEach((node, j) => {
                        let newnode = {
                            title: node[name],
                            id: node[id],
                            pyCode: node.pyCode,
                            wbCode: node.wbCode,
                            data: node,
                            expand: true,
                            children: []
                        };
                        pnode.children.push(newnode);
                        newnodeid.push(node[id]);
                    });
                }
            }
        });
        nodeid = newnodeid;
    }
    let res = [treeJson];
    return res;
};

/**
 * 遍历一个标准的 IView 树，返回 指定id 所在的节点
 * @param treeJson
 */
util.treeMap = function (treeJson, id) {
    if (treeJson.id === id) return treeJson;
    for (let i = 0; i < treeJson.children.length; i++) {
        let findres = util.treeMap(treeJson.children[i], id);
        if (!util.isEmpty(findres)) {
            return findres;
        }
    }
};

util.deepCopy = function deepCopy (obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = deepCopy(obj[attr]);
    }
    return newobj;
};

//深拷贝  不改变原数据 生成一条新的数据出来
util.deepCopyU = function deepCopyU (obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    if (obj == null) return '';
    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = deepCopyU(obj[attr]);
    }
    return newobj;
};
//数字校验的方法
util.numberCheck = function (num) {
    if (!(/^\d+(\.\d+)?$/).test(num)) {
        return true
    }
};
//整数的校验
util.numberInt = function (num) {
    if (!(/^[0-9]+$/).test(num)) {
        return true
    }
};
/**
 * 判断是否为正整数
 */
util.isPositiveInteger = function (value) {
    let reg = /^[0-9]*[1-9][0-9]*$/
    return reg.test(value)
},
    // 手机号校验
    util.isPhone = function (val) {
        let reg = /^1[3456789]\d{9}$/;
        if (!(reg.test(val))) {
            return true
        }
    }
//邮箱校验
util.isEmail = function (val) {
    let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if (!(reg.test(val))) {
        return true
    }
}
// 判断日期
util.data = function(val){
    let reg = /^[0-9]$/;
    if(!(reg.test(val))){
        return true
    }
}
//身份证号格式校验 
util.isIdCar = function (val) {
    let reg = ((/\d{17}[\d|x]|\d{15}/).test(val) || (val.length !== 15 && val.length !== 18))
    if (!(reg.test(val))) {
        return true
    }
}
//标准的身份证格式验证
util.isIdCarBasic = function (val) {
    let abc = val.split('')
    console.log(abc, '卡看看')
    if (abc.length == 15) {
        let reg = /^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$/
        if (!(reg.test(val))) {
            return true
        }
    } else if (abc.length == 18) {
        let reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
        if (!(reg.test(val))) {
            return true
        }
    } else {
        return true
    }
}
// 数组对象进行排序使用的 array 是需要排序的数组  key则是根据某一个key进行排序
util.sortByKey=function(array,key){
    return array.sort(function(a,b){
        var x=a[key];
        var y=b[key];
        return ((x<y)?-1:((x>y)?1:0));
     });
},
util.showMsg = function (vm, res) {
    if (res.diy && res.diy != '') {
        vm.$Notice.error({
            title: '睿颐温馨提示：',
            desc: res.diy,
            duration: 3
        });
    }
    if (res.succ && res.succ != '') {
        vm.$Notice.success({
            title: '睿颐温馨提示：',
            desc: res.succ,
            duration: 3
        });
    }
    if (res.warning && res.warning != '') {
        vm.$Notice.warning({
            title: '睿颐温馨提示：',
            desc: res.warning,
            duration: 3
        });
    }
};
// 获取今天日期
/*
参数：0，代表今天；-1，代表昨天；1，代表明天
*/
util.today = function (AddDayCount) {
    var now = new Date();
    now.setDate(now.getDate() + AddDayCount);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    var mvar = '';
    (month < 10) ? mvar = '0' + month : mvar = month + '';
    var Nextday = now.getDate();
    var dvar = '';
    (Nextday < 10) ? dvar = '0' + Nextday : dvar = Nextday + '';
    var today = year + '-' + mvar + '-' + dvar;
    return today;

};
// 数组去重
util.arrayDeweighting = function (arr) {
    var set = new Set(arr);
    var newArr = Array.from(set);
    return newArr;
};
// 数组对象去重
util.arrayDepthDeweighting = function (arr) {
    var res = [];
    var json = {};
    for (var i = 0; i < arr.length; i++) {
        if (!json[arr[i].id]) {
            res.push(arr[i]);
            json[arr[i].id] = 1;
        }
    }
    return res;
};

/**
 * @param obj   查找的值
 * @param targetArr   Json数组
 * @param attr        值所在的字段
 * @param des         查找到后，返回的字段名
 * @returns {*}   未找到 则返回 null
 */
util.findOfObject = function (obj, targetArr, attr, des) {
    let pos = util.indexOfObject(obj, targetArr, attr);
    if (pos < 0) return null;
    return targetArr[pos][des];
};

/**
 * 在指定的数组中，模糊查找 某些字段，是否含有指定关健字 仅字符串
 * @param obj    关键字
 * @param targetArr  目标数组
 * @param attr   字段数组
 */
util.findKeys = function (obj, targetArr, attr) {
    let res = [];
    let findarr = targetArr;
    attr.forEach((val, i) => {
        res = res.concat(findarr.filter(o => o[val].indexOf(obj) >= 0));
        findarr = findarr.filter(o => !(o[val].indexOf(obj) >= 0));
    });
    return res
};
// return  util.arrayDepthDeweighting(res) ;

/**
 * 在指定的数组中，模糊查找 某些字段，是否含有指定关健字 仅字符串
 * @param obj    关键字
 * @param targetArr  目标数组
 * @param attr   字段数组
 */
util.findKeysU = function (obj, targetArr, attr) {
    let res = [];
    let findarr = targetArr;
    attr.every((val, i) => {
        res = res.concat(findarr.filter(o => {
            o[val] = o[val].toString()
            if (o[val] != '') {
                o[val].indexOf(obj) >= 0
            }
        }));
        findarr = findarr.filter(o => {
            o[val] = o[val].toString()
            if (o[val] != '') {
                !(o[val].indexOf(obj) >= 0)
            }
        });
        return true
    });
    return res;
};


/**
 * 在一个 Json数组中，查找 指定属性的值
 * @param obj   被查找的值
 * @param targetArr  Json数组
 * @param attr  查找的Key
 * @returns -1  未找到   >= 0  查找到的值
 */
util.indexOfObject = function (obj, targetArr, attr) {
    let res = targetArr.filter(o => o[attr] == obj);
    if (!util.isEmpty(res) && res.length > 0) {
        return targetArr.indexOf(res[0]);
    } else {
        return -1;
    }
};


util.oneOf = function (ele, targetArr) {
    if (targetArr.indexOf(ele) >= 0) {
        return true;
    } else {
        return false;
    }
};

/**
 * 取出json数组中的某一个属性，形成一个单独的数组
 * @param jsonArr
 * @param name
 */
util.getOne = function (jsonArr, name) {
    let res = [];
    if (!util.isEmpty(jsonArr)) {
        jsonArr.forEach((val, i) => {
            res.push(val[name]);
        });
    }
    return res;
};
/**
 *参数：第一个数组，通过查找的id，第一个数组添加的name，第二个数组，通过查找的id，查找的name
 * @param sou  原始数据
 * @param id   需扩展的关键字列
 * @param name  扩展(新增)后的字段
 * @param des  查找的目标数组
 * @param desid    目标数组的关键字列
 * @param desname   查找到的字段名
 * @returns {*}
 */
util.id2Name = function (sou, id, name, des, desid, desname) {
    sou.forEach((val, i) => {
        let dd = des.filter(o => o[desid] == val[id]);
        if (!util.isEmpty(dd) && dd.length > 0) {
            val[name] = dd[0][desname];
        } else {
            val[name] = '';
        }
    });
    return sou;
};

util.isEmpty = function (obj) {
    if (obj === 0) return true;
    if (Array.isArray(obj)) return !(obj.length > 0);
    return (obj === null || obj === undefined || obj === '' || obj === NaN);
};

// 点击的菜单往横线菜单里面进行push的
util.openNewPage = function (vm, name, argu, query) {
        let tagsList = vm.$store.state.app.tagsList;
        let tag = tagsList.filter(o => o.name === name)[0];
        if (tag) {
            if (argu) {
                tag.argu = argu;
            }
            if (query) {
                tag.query = query;
            }
            // 关键就是这一部
            vm.$store.commit('increateTag', tag);
           
        }
};
export default util;

export function isObject (obj) {
    return obj !== null && typeof obj === 'object'
  }

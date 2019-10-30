<template>
    <Select
        ref="select"
        v-model="vModel"
        style="width:100%"
        filterable
        clearable
        :placement="direction"
        remote
        placeholder=''
        :remote-method="remoteMethod"
        not-found-text="无匹配内容"
        :loading="false">
        <Option v-for="option in options" :value="option.value" :key="option.key">{{option.label}}</Option>
        <Spin v-if="spinShow" style="margin-left:48%"></Spin>
        <!-- <Spin v-if="spinShow" style="margin-left:10px"></Spin> -->
    </Select>
</template>
<script>
    import util from '../../libs/util.js';
    import { getStyle } from 'iview/src/utils/assist.js';
    export default {
        data() {
            return {              
                vModel: '', // value
                loading: true, // 加载状态
                spinShow:true, // 下拉加载动画效果
                options: [], // 下拉框选项
                query:'', // 搜索值
                loadPage:0,  // 加载更多初始页码
                remoteMethodPage:0,  // 远程搜索初始页码
                sourceData:[], // 源数据
                defaultLoadData:[], // 默认加载数据
                onePageFlag:true // 第一页获取标记
            }
        },
        components: {},
        props:{
            matchField:{  // matchField 必传字段数组（用于获取指定字典数据及相关判断） 
                type:Array,
                required:true
            },
            echo:{  // echo 数据回显值  
                type:Object,
                required:false
            },
            direction:{  // direction  下拉框展开方向  
                type:String,
                required:false
            },
            clearable:{  // clearable  清空标识
                type:Number,
                required:false
            }
        },
        name: 'long-range-select',
        created() {},
        mounted() {
            this.loadingData()
        },
        watch:{
            vModel( val ){ // 选定下拉内容时，传给父组件
                if(val === null || val === undefined ) this.vModel = ''
                if(val === '' ){
                    this.query = '' //情况远程搜索参数
                    this.options=this.defaultLoadData // 此处初始化下拉项
                } 
                if( val != undefined ) this.$emit('model', val);
                const index = util.indexOfObject(val,this.options,this.matchField[0])
                if( this.options[index] != undefined ) this.$emit('currObject', this.options[index]);
                // 为避免父组件由于没有源数据导致只拿到ID，此处将选定的对象传给父组件
            },
            echo( val , oldval ){  //  回显值变动时 开始回显
                console.log(val,oldval,'回显')
                if(val != null) {
                    if( oldval == null || oldval.id !== val.id ){
                        this.remoteMethod(val.name)
                    }
                    // this.remoteMethod(val,true)   // 与统一按id查询有关（暂不启用）
                }
            },
            options(){  // 监听到options变动，启用滚动监听
                this.$nextTick(() => {
                    const dom = this.$refs.select.$el.querySelectorAll('.ivu-select-dropdown')[0]; // 获取下拉框DOM对象
                    dom.addEventListener('scroll', () => { //  将dom对象的滚动加入监听
                        const domHeight = getStyle(dom, 'height'); // 获取dom对象的高度（暂未用到）
                        const scrollHeight = dom.scrollTop // 获取dom对象滚动条距顶部高度 
                        // 判断滚动至底部执行加载更多
                        if(scrollHeight-(this.loadPage == 0 ? 0 : this.loadPage - 1)*300 == 110) {
                            // 按条件判断加载查询结果或是加载默认数据
                            if(this.query != ''){
                                console.log('加载查询下一页')
                                this.remoteMethod(this.query) // 加载更多查询
                            }else{
                                this.loadingData() // 加载更多默认
                                console.log('加载默认下一页')
                            }
                        }
                        dom.scrollTop=scrollHeight // 固定滚动条至当前位置（避免加载更多滚动条回至顶部）
                    });
                }) 
            },
            clearable(){
                console.log('子组件已清空')
                this.vModel=''
                this.$emit('model', '');
                this.$emit('currObject', {});
            },
        },
        methods: {
            loadingData(){  // 默认加载
                this.spinShow = true;
                this.loadPage++
                //  根据父组件传参'matchField'（必传字段）最后一个下标 即对应的字典下标 分页获取数据
                //  目前size不可变（滚动条滚动至底部加载未做联动，故此需固定10条）
                if(this.options.length!==0 && this.loadPage==1) this.loadPage++ //  若此时备选框已经恢复初始值，则跳过第1页避免重复请求
                let nowData={
                    'dictType':this.matchField[3],
                    'hospitalId':this.$store.state.userInfoObj.hospitalId,
                    'page':this.loadPage,
                    'size':10 
                }
                if(this.matchField[3] == 'HIS_SYS_USER_DEPT'){
                    nowData.primaryKeyId = this.$store.state.userInfoObj.userId
                }
                this.$store.dispatch("getCommDict",nowData).then(res => {
                    if( res.data.code === 200){
                        let resList = res.data.data.list
                        if(this.loadPage==1){ // 第一页为页面加载即返回数据 
                            this.sourceData = resList
                            this.dataFormat()
                        }else{
                            if( this.echo !== null){
                                this.sourceData = resList
                                this.dataFormat()
                            }else{
                                setTimeout(() => {  // 此处设置延时器，是为避免网速过快时无加载动画，效果较硬化
                                    this.sourceData = resList
                                    this.dataFormat()
                                }, 500); //  设定1s延时 加载效果流畅
                            }
                        }
                    }
                })
            },
            remoteMethod (query) {  // 远程搜索
                if (query !== '') {
                    // if(this.vModel!=''){ // 若此时下拉框绑定已有值，则无需搜索
                    //     console.log('已有选项')
                    //     return
                    // }
                    this.loadPage = 0  //启用查询功能时，初始化默认加载分页码
                    // if(this.query !== query) this.remoteMethodPage=0  // 查询条件变动时，不需拼接历史搜索到的数据，同时初始化查询分页码
                    // this.remoteMethodPage++
                    this.spinShow = true;
                    //按需查询 支持五笔  拼音  名称 
                    let nowData = {
                        'dictType':this.matchField[3],
                        'hospitalId':this.$store.state.userInfoObj.hospitalId,
                        // 'page':this.remoteMethodPage,
                        'page':1,
                        'size':10,
                        'serachParam':query.toString()
                    }
                    // if (flag) {    // 与统一按id查询有关（暂不启用）
                    //     delete nowData['serachParam']
                    //     nowData['primaryKeyId']=query
                    // }
                    if(this.matchField[3] == 'HIS_SYS_USER_DEPT'){
                        nowData.primaryKeyId = this.$store.state.userInfoObj.userId
                    }
                    this.$store.dispatch("getCommDict",nowData).then(res => {
                        if( res.data.code === 200){
                            let resList = res.data.data.list
                            this.sourceData = resList
                            console.log(resList,'查到的内容')
                            this.dataFormat() // 数据格式化
                        }
                    })
                    this.query = query
                }else{
                    // 清空搜索框内容 初始化
                    console.log('清空搜索框')
                    this.vModel=''
                    this.query = ''
                    this.loadPage=0
                    this.remoteMethodPage=0
                    this.options=this.defaultLoadData // 此处初始化下拉项 （避免与format冲突）
                }         
            },
            dataFormat () {  // 数据格式化
                // console.log('开始数据格式化')
                const nowList=this.sourceData
                // 取父组件传参 配置option的 :value :key  label 
                nowList.map( item => {
                    item['value']=item[this.matchField[0]]
                    item['key']=item[this.matchField[1]]
                    item['label']=item[this.matchField[2]]
                })
                if (this.remoteMethodPage === 1 || this.vModel !== ''){
                    this.options=[] //启用搜索功能时 清掉不相关数据
                } 
                this.options=this.options.concat(nowList)  //将分页的数据拼接
                if(this.loadPage == 1 && this.onePageFlag){ 
                    this.defaultLoadData = this.options
                    console.log(this.defaultLoadData)
                    this.onePageFlag = false
                } 
                if( this.echo !== null){ // options渲染加载下拉框  延时赋值v-model
                    setTimeout(() => {
                        this.vModel = this.echo.id
                        // this.vModel = this.echo   // 与统一按id查询有关（暂不启用）
                    }, 500);
                }
                this.spinShow = false; 
            },
        },
    }
</script>

<style lang="less" scoped>
    @import '../../styles/common.less';    
</style>
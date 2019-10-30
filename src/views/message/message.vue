<style lang="less">
    @import './message.less';
</style>

<template>
    <div class="message-main-con">
        <div class="message-mainlist-con">
            <div>
                <Button @click="setCurrentMesType('unread')" size="large" long type="text"><transition name="mes-current-type-btn"><Icon v-show="currentMessageType === 'unread'" type="checkmark"></Icon></transition><span class="mes-type-btn-text">未读消息</span><Badge class="message-count-badge-outer" class-name="message-count-badge" :count="unreadCount"></Badge></Button>
            </div>
            <div>
                <Button @click="setCurrentMesType('hasread')" size="large" long type="text"><transition name="mes-current-type-btn"><Icon v-show="currentMessageType === 'hasread'" type="checkmark"></Icon></transition><span class="mes-type-btn-text">已读消息</span><Badge class="message-count-badge-outer" class-name="message-count-badge" :count="hasreadCount"></Badge></Button>
            </div>
            <div>
                <Button @click="setCurrentMesType('handled')" size="large" long type="text"><transition name="mes-current-type-btn"><Icon v-show="currentMessageType === 'handled'" type="checkmark"></Icon></transition><span class="mes-type-btn-text">已处理</span><Badge class="message-count-badge-outer" class-name="message-count-badge" :count="handlebinCount"></Badge></Button>
            </div>
        </div>
        <div class="message-content-con">
            <transition name="view-message">
                <div v-if="showMesTitleList" class="message-title-list-con">
                    <Table ref="messageList"  :columns="mesTitleColumns" :data="currentMesList" :no-data-text="noDataText"></Table>
                </div>
            </transition>
            <transition name="back-message-list">
                <div v-if="!showMesTitleList" class="message-view-content-con">
                    <div class="message-content-top-bar">
                        <span class="mes-back-btn-con"><Button type="text" @click="backMesTitleList"><Icon type="chevron-left"></Icon>&nbsp;&nbsp;返回</Button></span>
                        <h3 class="mes-title">{{ mes.title }}</h3>
                    </div>
                    <p class="mes-time-con"><Icon type="android-time"></Icon>&nbsp;&nbsp;{{ mes.time }}</p>
                    <div class="message-content-body">
                        <p class="message-content">{{ mes.content }}</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import util from '../../libs/util'
export default {
    name: 'message_index',
    data () {
        const markAsreadBtn = (h, params) => {
            return h('Button', {
                props: {
                    size: 'small',
                    type: 'success'
                },
                on: {
                    click: () => {
                        this.hasreadMesList.unshift(this.currentMesList.splice(params.index, 1)[0]);
                        this.$store.commit('setMessageCount', this.unreadMesList.length);
                    }
                }
            }, '标为已读');
        };
        const handleMesBtn = (h, params) => {
            return h('Button', {
                props: {
                    size: 'small',
                    type: 'warning'
                },
                on: {
                    click: () => {
                        this.handlebinList.unshift(this.hasreadMesList.splice(params.index, 1)[0]);
                    }
                }
            }, '标为已处理');
        };
        const restoreBtn = (h, params) => {
            return h('Button', {
                props: {
                    size: 'small',
                    type: 'error'
                },
                on: {
                    click: () => {
                        this.hasreadMesList.unshift(this.handlebinList.splice(params.index, 1)[0]);
                    }
                }
            }, '取消处理');
        };
        return {
            messageObj:[],
            loading:true,
            currentMesList: [],
            unreadMesList: [],  //未读消息  
            hasreadMesList: [], //已读消息
            handlebinList: [], //已处理消息
            currentMessageType: 'unread',
            showMesTitleList: true,
            unreadCount: 0,
            hasreadCount: 0,
            handlebinCount: 0,
            noDataText: '暂无未读消息',
            mes: {
                title: '',
                time: '',
                content: ''
            },
            mesTitleColumns: [
                // {
                //     type: 'selection',
                //     width: 50,
                //     align: 'center'
                // },
                // {
                //     type: 'selection',
                //     width: 50,
                //     align: 'center'
                // },
                {
                    title: '标题',
                    key: 'messageTitle',
                    align: 'left',
                    ellipsis: true,
                    render: (h, params) => {
                        return h('a', {
                            on: {
                                click: () => {
                                    this.showMesTitleList = false;
                                    this.mes.title = params.row.messageTitle;
                                    this.mes.time = this.formatDate(params.row.sendTime);
                                    this.getContent(params.row,params.index);
                                    this.hasreadMesList.unshift(this.currentMesList.splice(params.index, 1)[0]);
                                    this.$store.commit('setMessageCount', this.unreadMesList.length);
                                }
                            }
                        }, params.row.messageTitle);
                    }
                },
                {
                    title: '时间',
                    key: 'sendTime',
                    align: 'center',
                    width: 180,
                    render: (h, params) => {
                        return h('span', [
                            h('Icon', {
                                props: {
                                    type: 'android-time',
                                    size: 12
                                },
                                style: {
                                    margin: '0 5px'
                                }
                            }),
                            h('span', {
                                props: {
                                    type: 'android-time',
                                    size: 12
                                }
                            }, this.formatDate(params.row.sendTime))
                        ]);
                    }
                },
                {
                    title: '操作',
                    key: 'asread',
                    align: 'center',
                    width: 100,
                    render: (h, params) => {
                        if (this.currentMessageType === 'unread') {
                            return h('div', [
                                markAsreadBtn(h, params)
                            ]);
                        } else if (this.currentMessageType === 'hasread') {
                            return h('div', [
                                handleMesBtn(h, params)
                            ]);
                        } 
                        // else {
                        //     return h('div', [
                        //         restoreBtn(h, params)
                        //     ]);
                        // }
                    }
                }
            ]
        };
    },
    methods: {
        init(){
            this.$store.dispatch('getMessage', {'flag': 1 }).then(res => {
                console.log(res)
                if(res.data.code===200){
                    let resList=res.data.data
                    console.log(resList)
                    this.currentMesList = this.unreadMesList=resList
                    this.unreadCount = this.unreadMesList.length;
                }
            })
            this.$store.dispatch('getMessage', {'flag': 2 }).then(res => {
                console.log(res)
                if(res.data.code===200){
                    let resList=res.data.data
                    this.hasreadMesList=resList
                    this.hasreadCount = this.hasreadMesList.length;
                }
            })
            this.$store.dispatch('getMessage', {'flag': 3 }).then(res => {
                console.log(res)
                if(res.data.code===200){
                    let resList=res.data.data
                    this.handlebinList=resList
                    this.handlebinCount = this.handlebinList.length;
                }
            })

                // this.messageObj=this.$store.state.app.messageObj
                // console.log('消息赋值')
            
                // this.currentMesList = this.unreadMesList=this.messageObj.unreadMesList
                // this.unreadCount = this.unreadMesList.length;
                // this.hasreadMesList=this.messageObj.hasreadMesList
                // this.hasreadCount = this.hasreadCount.length;
                // this.handlebinList=this.messageObj.handlebinList
                // this.handlebinCount = this.handlebinCount.length;
            // let timer=setInterval(() => {
            //     this.messageObj=this.$store.state.app.messageObj
            //     this.loading=!util.isEmpty(this.messageObj)
            //     if(!this.loading){
            //         console.log('消息赋值')
            //         clearInterval(timer); 
            //     }
            // }, 50);
            
        },
        formatDate (time) {
            let date = new Date(time);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            return year + '/' + month + '/' + day + '  ' + hour + ':' + minute + ':' + second;
        },
        backMesTitleList () {
            this.showMesTitleList = true;
        },
        setCurrentMesType (type) {
            if (this.currentMessageType !== type) {
                this.showMesTitleList = true;
            }
            this.currentMessageType = type;
            if (type === 'unread') {
                this.noDataText = '暂无未读消息';
                this.currentMesList = this.unreadMesList;
            } else if (type === 'hasread') {
                this.noDataText = '暂无已读消息';
                this.currentMesList = this.hasreadMesList;
            } else {
                this.noDataText = '暂无已处理消息';
                this.currentMesList = this.handlebinList;
            }
        },
        getContent (item,index) {
            this.mes.content = item.messageInfo;
            if(this.currentMessageType === 'unread'){ //当前为未读
                // 点开内容改变状态至已读
                this.$store.dispatch('setMessage', {'flag': 1,messageId:item.messageId,userId:this.$store.state.userInfoObj.userId}).then(res => {

                })
            }
            if(this.currentMessageType === 'hasread'){ //当前为已读
                // 点开同时弹窗，点处理按钮才访问
                this.$store.dispatch('setMessage', {'flag': 2,messageId:item.messageId,userId:this.$store.state.userInfoObj.userId}).then(res => {

                })

            }
            if(this.currentMessageType === 'handled'){ //当前为已处理

            }
            
            
        }
    },
    mounted () {
        this.init()
    },
    watch: {
        unreadMesList (arr) {
            this.unreadCount = arr.length;
        },
        hasreadMesList (arr) {
            this.hasreadCount = arr.length;
        },
        handlebinList (arr) {
            this.handlebinCount = arr.length;
        }

    },
};
</script>


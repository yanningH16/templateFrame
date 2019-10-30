<template>
    <div>
        <template v-for="(item, index) in menuList">
                <div style="text-align: center;" :key="index">
                    <!-- 多级菜单的 -->
                <Dropdown transfer v-if="item.children.length !== 1" placement="right-start" :key="index" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" :color="iconColor" :type="item.icon"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <template v-for="(child, i) in item.children">
                            <DropdownItem :name="child.name" :key="i"><Icon :type="child.icon"></Icon><span style="padding-left:10px;">{{ itemTitle(child) }}</span></DropdownItem>
                        </template>
                    </DropdownMenu>
                </Dropdown>
                <!-- 一级菜单的 -->
                <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu">
                    <Button @click="changeMenu(item.children[0].name)" style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" :color="iconColor" :type="item.icon"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem :name="item.children[0].name" :key="'d' + index"><Icon :type="item.icon"></Icon><span style="padding-left:10px;">{{ itemTitle(item.children[0]) }}</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data(){
       return {
            value1:'',
            name: 'sidebarMenuShrink',
       }
    },
    props: {
        menuList: {
            type: Array
        },
        iconColor: {
            type: String,
            default: 'red'
        },
        menuTheme: {
            type: String,
            default: 'darck'
        }
    },
    watch:{
        menuList(){
            // console.log(this.menuList)
        }
    },
    mounted() {
        // this.init()
    },
    methods: {
        init(){

        },
        changeMenu (active,item) {
            this.$emit('on-change', active,item);
        },
        itemTitle (item) {
            if (typeof item.title === 'object') {
                return (item.title.i18n);
            } else {
                return item.title;
            }
        }
    }
};
</script>
<style>
#noChild .ivu-icon-arrow-right-b{
    display: none
}
</style>

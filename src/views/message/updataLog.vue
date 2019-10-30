<template>
  <div class=" bg-white"
       style="height:90%;width:100%">
    <div style="margin:10px 0 0 50px;width:300px">
      <h2>更新日志</h2>
    </div>
    <div style="max-width:730px;overflow:hidden;margin:10px 0 0 50px;height:100%">
      <div style="max-height:85%;width:750px;overflow-y:auto;overflow-x:hidden">
        <Timeline style="margin:10px 0 0 100px">
          <TimelineItem color="blue">
            <p class="time leftShow">2019-04-01</p>
            <p class="content rightShow">正式版 v8.2.5</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 处方查询功能</p>

            <p class="content liText">ㅇ 优化 处方发药功能</p>
            <p class="content liText">ㅇ 优化 就诊服务 界面边距和保存的防重复的增加</p>
            <p class="content liText">ㅇ 优化 号类字典 弹窗界面以及下拉框更换</p>
            <p class="content liText">ㅇ 优化 出诊排班 滚动条优化，按钮样式优化</p>
            <p class="content liText">ㅇ 优化 床位费用 界面优化和数字保留两位小数的优化</p>
            <p class="content liText">ㅇ 优化 项目调价 历史所有的调价记录不允许删除,时间不需要到秒的优化</p>
            <p class="content liText">ㅇ 优化 手术安排 必输项的校验，手术项目的展示，联动清空，增加防重复的优化</p>
            <p class="content liText">ㅇ 优化 医嘱开立 刷新的增加，手术和会诊24h格式的处理优化</p>
            <p class="content liText">ㅇ 优化 床位一览 右侧操作的内容，做相应跳转的优化</p>
            <p class="content liText">ㅇ 优化 住院处方 新增药品弹框中搜索框的聚焦</p>
            <p class="content liText">ㅇ 优化 医疗卫生机构 树形的重构，需求的变更进行的优化</p>
            <p class="content liText">ㅇ 优化 用户管理增加防重复校验的优化</p>

            <p class="content liText">ㅇ 修复 出诊排班 新增的接口报错以及预约排班的 bug</p>
            <p class="content liText">ㅇ 修复 物资管理 点击确定无法新增的 bug</p>
            <p class="content liText">ㅇ 修复 门诊处方 周医嘱开立的 bug</p>
            <p class="content liText">ㅇ 修复 医嘱领药设置 删除展示错误的 bug</p>
            <p class="content liText">ㅇ 修复 医嘱录入 医嘱列表分页的 bug</p>

          </TimelineItem>
          <TimelineItem color="blue">
            <p class="time leftShow">2019-02-16</p>
            <p class="content rightShow">正式版 v8.2.4</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 电子病历浏览器功能</p>
            <p class="content liText">ㅇ 新增 住院报告功能</p>

            <p class="content liText">ㅇ 优化 住院流程 所有诊断的替换成全局获取</p>
            <p class="content liText">ㅇ 优化 住院流程 会诊的症候、病名、治法和多余代码的删除</p>
            <p class="content liText">ㅇ 优化 住院流程 病人信息下的省市区全局获取和展示的修改</p>
            <p class="content liText">ㅇ 优化 系统菜单 文字间距、提示信息、滚动条样式</p>
            <p class="content liText">ㅇ 优化 诊断字典 输入框搜索及联动效果</p>
            <p class="content liText">ㅇ 优化 医疗卫生机构 保存后提示的信息</p>
            <p class="content liText">ㅇ 优化 门诊病人诊疗药品 新增药品弹框中搜索框的聚焦</p>
            <p class="content liText">ㅇ 优化 门诊病人诊疗处置 新增药品弹框中搜索框的聚焦</p>
            <p class="content liText">ㅇ 优化 住院处方 新增药品弹框中搜索框的聚焦</p>
            <p class="content liText">ㅇ 优化 处方模板 西药药品弹窗，中药药品弹窗，处置弹窗位置以及光标聚焦的调整</p>
            <p class="content liText">ㅇ 优化 处方模板 药品的药房的默认，金额保留两位小数</p>
            <p class="content liText">ㅇ 优化 处方模板 所有滚动条的样式以及弹框边距高度的调整</p>

            <p class="content liText">ㅇ 修复 病人门诊诊疗药品部分 解决了抗菌药填写用药指征的回显 bug</p>
            <p class="content liText">ㅇ 修复 系统菜单 进行新增/修改时，备注内容未传和保存时错误的提示信息 bug</p>
            <p class="content liText">ㅇ 修复 病人门诊诊疗处置部分 处置项目弹窗中的提示信息不正确 bug</p>
            <p class="content liText">ㅇ 修复 系统参数 停用时提示停用成功，但是实际却没有成功 bug</p>
            <p class="content liText">ㅇ 修复 手术划价模板 搜索框定位 bug</p>
            <p class="content liText">ㅇ 修复 处方模板 删除后不选择任何东西再次点击删除没有做校验 bug</p>
            <p class="content liText">ㅇ 修复 处方模板 删除时没有联动清空 bug</p>
            <p class="content liText">ㅇ 修复 处方模板 检查检验没有项目不显示[] bug</p>
            <p class="content liText">ㅇ 修复 处方模板 检验回显显示错误 bug</p>
            <p class="content liText">ㅇ 修复 处方模板 检查开立角标错误 bug</p>
            <p class="content liText">ㅇ 修复 处方模板 药品开立后顺序和组关系错误 bug</p>

          </TimelineItem>
          <TimelineItem color="blue">
            <p class="time leftShow">2019-01-28</p>
            <p class="content rightShow">正式版 v8.2.3</p>
            <p class="content title">主程序</p>

            <p class="content liText">ㅇ 优化 菜单管理页面 去掉报表名称和自定义报表的选项</p>
            <p class="content liText">ㅇ 优化 角色管理页面 增加拼音码、五笔码</p>
            <p class="content liText">ㅇ 优化 资源权限页面 弹框中增加用户名输入项，可以更改</p>
            <p class="content liText">ㅇ 优化 资源权限页面 增加拼音码搜索</p>
            <p class="content liText">ㅇ 优化 资源权限页面 输入框增加提示信息</p>
            <p class="content liText">ㅇ 优化 资源权限页面 树状图增加节点显示</p>
            <p class="content liText">ㅇ 优化 科室项目页面 左上方增加搜索框</p>
            <p class="content liText">ㅇ 优化 科室项目页面 增加备注列</p>
            <p class="content liText">ㅇ 优化 科室项目页面 临床项目如果增加到左侧则右侧不显示</p>
            <p class="content liText">ㅇ 优化 科室项目页面 左侧增加分页</p>
            <p class="content liText">ㅇ 优化 科室项目页面 左侧执行属性勾选时联动修改</p>
            <p class="content liText">ㅇ 优化 科室用法维护 左右两侧【已维护用法】【未维护用法】增加搜索框</p>
            <p class="content liText">ㅇ 优化 科室用法维护 已添加到左侧的用法，右侧不再显示</p>
            <p class="content liText">ㅇ 优化 科室用法维护 执行科室增加过滤，只显示出科室</p>
            <p class="content liText">ㅇ 优化 临床项目页面 所有的按钮样式统一</p>
            <p class="content liText">ㅇ 优化 皮试设置页面 表头有效期更改为启用</p>
            <p class="content liText">ㅇ 优化 号表设置页面 列表中状态显示启用或停用</p>
            <p class="content liText">ㅇ 优化 用户管理页面 弹框增加拼音码五笔码</p>
            <p class="content liText">ㅇ 优化 用户管理页面 增加输入密码错误次数</p>
            <p class="content liText">ㅇ 优化 检验_检验联动收费页面 样式间距调整</p>
            <p class="content liText">ㅇ 优化 号类字典页面 d、h改为 天/小时</p>
            <p class="content liText">ㅇ 优化 号类字典页面 修改弹出框中项目位置右移</p>
            <p class="content liText">ㅇ 优化 号类字典页面 修改弹出框中搜索问题</p>
            <p class="content liText">ㅇ 优化 号类字典页面 修改弹出框中项目下拉框只留下处置类项目</p>
            <p class="content liText">ㅇ 优化 号类字典页面 编码改为：序号</p>
            <p class="content liText">ㅇ 优化 诊室设置页面 中间号表改为诊室对应号表</p>
            <p class="content liText">ㅇ 优化 诊室设置页面 右侧名称改为待选号表查询框使用最新的搜索框样式</p>
            <p class="content liText">ㅇ 优化 病区科室对照页面 切换按病区/按科室时，右侧表格样式不一致</p>
            <p class="content liText">ㅇ 优化 手术划价，麻醉模板 优化退费后金额没有联动刷新</p>
            <p class="content liText">ㅇ 优化 输血划价，优化退费后金额没有联动刷新</p>
            <p class="content liText">ㅇ 优化 检验划价，诊间支付后金额没有联动刷新，优化查询成功等提示</p>
            <p class="content liText">ㅇ 优化 项目调价，单价输入不为价格，历史调价记录倒序显示</p>
            <p class="content liText">ㅇ 优化 医嘱处置开立，金额显示错误，药品弹窗打开未清空</p>
            <p class="content liText">ㅇ 优化 医嘱开立检验检测优化，默认申请时间为当天</p>
            <p class="content liText">ㅇ 优化 门诊处方权限优化</p>
            <p class="content liText">ㅇ 优化 会诊流程，优化诊断请求的数据，请求的状态 </p>
            <p class="content liText">ㅇ 优化 历史处方，优化去掉科室显示，增加开立医生显示</p>
            <p class="content liText">ㅇ 优化 门诊病人诊疗，模板调用历史处方打开方式优化</p>
            <p class="content liText">ㅇ 优化 处置执行，优化开立药品检查时联动出来的项目执行的时候不显示，申请单信息正序显示</p>
            <p class="content liText">ㅇ 优化 医嘱补记账，多个病人信息卡片全部显示处理</p>
            <p class="content liText">ㅇ 优化 病人门诊诊疗页面，病人信息 住院凭证 费用</p>
            <p class="content liText">ㅇ 优化 病人信息页面，优化省市区三级联动</p>
            <p class="content liText">ㅇ 优化 病区领药维护页面，已维护用法和未维护用法增加搜索功能，已维护用法点选医嘱更改</p>
            <p class="content liText">ㅇ 优化 疾病诊断页面，进入页面未选中已维护诊断右侧显示出全部诊断</p>
            <p class="content liText">ㅇ 优化 手术权限页面，权限勾选直接保存</p>
            <p class="content liText">ㅇ 优化 手术房间页面，手术房间控制最多3级</p>
            <p class="content liText">ㅇ 优化 检验类别页面，类别对应项目维护检验项目，右侧此检验项目部显示</p>
            <p class="content liText">ㅇ 优化 护士分诊取消登记的权限问题</p>

            <p class="content liText">ㅇ 修复 号表设置页面 解决了修复连续点击出现重复列表的 bug</p>
            <p class="content liText">ㅇ 修复 解决了同组药 只显示第一个的频次，用法，执行时间 操作</p>
            <p class="content liText">ㅇ 修复 解决了新增住院护理单据打印功能</p>
            <p class="content liText">ㅇ 修复 解决了手术划价模板和麻醉模板定位搜索功能</p>
            <p class="content liText">ㅇ 修复 解决了住院处方的 bug</p>
            <p class="content liText">ㅇ 修复 解决了住院医嘱增加检查检验手术的删除功能</p>
            <p class="content liText">ㅇ 修复 解决了医嘱处方，门诊处方计算总量和价格的 bug</p>
            <p class="content liText">ㅇ 修复 解决了修改医嘱退药申请的 bug</p>
            <p class="content liText">ㅇ 修复 解决了住院预约 bug</p>
            <p class="content liText">ㅇ 修复 病区科室页面 解决了混乱 bug</p>
            <p class="content liText">ㅇ 修复 标识数据页面 解决了新增弹窗目录弹窗与节点弹窗进行区分 bug</p>
            <p class="content liText">ㅇ 修复 标识数据页面 解决了左侧数状态，拉宽显示 bug</p>
            <p class="content liText">ㅇ 修复 标识数据页面 目录弹窗有备注，节点弹窗没有备注 bug</p>
            <p class="content liText">ㅇ 修复 收费项目页面 解决了弹框中form验证提示位置 bug</p>
            <p class="content liText">ㅇ 修复 术语字典页面 解决了搜索框进行搜索后再次清空未勾选显示全部的 bug</p>
            <p class="content liText">ㅇ 修复 术语字典页面 解决了搜索框列表数据没有排序的 bug</p>
            <p class="content liText">ㅇ 修复 卫生服务人员页面 解决了不惦记保存的情况下检验信息显示处理的 bug</p>
            <p class="content liText">ㅇ 修复 病区科室页面 解决了待选科室科室没有显示 bug</p>
            <p class="content liText">ㅇ 修复 门诊诊疗处置页面 解决了去掉药厂，库房，药房 bug</p>
            <p class="content liText">ㅇ 修复 护士执行页面 解决了数量增加校验并且默认为1 bug</p>
            <p class="content liText">ㅇ 修复 检查划价页面 解决了申请单详情预览图片 bug</p>
            <p class="content liText">ㅇ 修复 医嘱开立检验页面 解决了诊断拉宽显示 bug</p>
            <p class="content liText">ㅇ 修复 医嘱开立手术页面 解决了标准诊断位置发生变化 bug</p>
            <p class="content liText">ㅇ 修复 术语页面 解决了部分字段没有翻译且状态反了 bug</p>
            <p class="content liText">ㅇ 修复 病区科室页面 解决了样式混乱 bug</p>
          </TimelineItem>
          <TimelineItem color="blue">
            <p class="time leftShow">2019-01-15</p>
            <p class="content rightShow">正式版 v8.2.2</p>
            <p class="content title">主程序</p>

            <p class="content liText">ㅇ 优化 标识数据管理 页面，新增弹框中备注校验，备注必须是json格式，扩大左侧数据宽度</p>
            <p class="content liText">ㅇ 优化 术语字典 页面，优化条件查询，切换左侧项目后右侧联动清空</p>
            <p class="content liText">ㅇ 优化 病人诊疗 页面，一卡通缴费界面增加滚动条，底部下拉框下拉方向改为向上</p>
            <p class="content liText">ㅇ 优化 病人诊疗 页面，过滤重复取值的API请求，并减少组件间相互跳转，提高性能</p>
            <p class="content liText">ㅇ 优化 科室项目 页面，执行科室下拉框增加拼音码五笔码搜索功能</p>
            <p class="content liText">ㅇ 优化 临床项目 页面，新增临床项目增加别名，并不再显示执行科室是否默认</p>
            <p class="content liText">ㅇ 优化 用户管理 页面，现支持修改登陆账号，并校验唯一性</p>

            <p class="content liText">ㅇ 修复 病区科室 页面，解决按病区中待选科室没有显示出科室的 bug</p>
            <p class="content liText">ㅇ 修复 项目调价 页面，解决项目调价存在的问题</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决一卡通缴费中联动项目没有在费用明细中显示的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决处方开立，删除项目后没有联动清空的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决待诊队列拉入诊中后必须再选中一下的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决检查检验使用一卡通扣费后点击左侧列表回显后仍然能删除的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决处方药品开立保存时，药品组关系错误的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决切换病人后病历和医嘱界面部分数据未清空的 bug</p>
            <p class="content liText">ㅇ 修复 医嘱录入 页面，解决长期医嘱修改为临时医嘱保存报错的 bug</p>
            <p class="content liText">ㅇ 修复 主数据管理 页面，解决主数据值查询不到的 bug</p>
            <p class="content liText">ㅇ 修复 用户管理 页面，解决人员代码取值错误的 bug</p>
          </TimelineItem>
          <TimelineItem color="blue">
            <p class="time leftShow">2019-01-07</p>
            <p class="content rightShow">正式版 v8.2.1</p>
            <p class="content title">主程序</p>

            <p class="content liText">ㅇ 优化 门诊处方 模板，中西药同一张处方，回显选择诊断</p>
            <p class="content liText">ㅇ 优化 住院预约 流程，优化住院预约界面，优化床位一览，显示被预约的床位</p>
            <p class="content liText">ㅇ 优化 注册审核 页面，查询条件由单选变为多选</p>
            <p class="content liText">ㅇ 优化 国籍选择 下拉框，将中国默认为第一个</p>
            <p class="content liText">ㅇ 优化 住院医嘱退药申请 页面，退药时弹窗选择，按批次号填入退药数量</p>

            <p class="content liText">ㅇ 修复 处方退药 页面，修改门诊/住院的判断依据，修复门诊退药报错的 bug</p>
          </TimelineItem>
          <TimelineItem color="blue">
            <p class="time leftShow">2018-12-29</p>
            <p class="content rightShow">Beta v8.2.0</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 业务权限 页面</p>
            <p class="content liText">ㅇ 新增 单据打印 页面</p>
            <p class="content liText">ㅇ 新增 客户端下载 引导功能</p>
            <p class="content liText">ㅇ 新增 病人诊疗 引导功能</p>
            <p class="content liText">ㅇ 新增 住院医嘱 模板功能</p>

            <p class="content liText">ㅇ 优化 病人诊疗 页面，普通药不能与精神一二类同时开出</p>
            <p class="content liText">ㅇ 优化 住院处方 流程，住院处方退药申请修改，按批次填入退药数量后申请</p>
          </TimelineItem>
          <!-- Beta v8.1.2 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-12-24</p>
            <p class="content rightShow">正式版 v8.1.2</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 医嘱查询 页面</p>
            <p class="content liText">ㅇ 新增 门诊一卡通 流程</p>
            <p class="content liText">ㅇ 新增 单据打印规则 维护页面</p>
            <!-- <p class="content liText">ㅇ 新增 单据打印 页面</p>  -->

            <p class="content liText">ㅇ 优化 门诊医嘱 模板，增加模板调用</p>
            <p class="content liText">ㅇ 优化 手术记帐单 模板，优化数量输入的校验</p>
            <p class="content liText">ㅇ 优化 处置开立 页面，优化数量输入，空白数量默认为null</p>
            <p class="content liText">ㅇ 优化 住院凭证 页面，优化诊断名称无效字符显示，科室及诊断输入增加拼音码</p>

            <p class="content liText">ㅇ 优化 住院处方 页面，优化界面、去除不必要按钮</p>
            <p class="content liText">ㅇ 优化 住院处方 页面，中药处方开立点击空白行选择药品</p>
            <p class="content liText">ㅇ 优化 医嘱核对 页面，住院处方同组药品增加组标记，且实现同步勾选</p>
            <p class="content liText">ㅇ 优化 医嘱领药申请 页面，住院处方同组药品增加组标记，且实现同步勾选</p>
            <p class="content liText">ㅇ 优化 医嘱领药申请 页面，增加住院处方药品汇总功能</p>

            <p class="content liText">ㅇ 修复 手术划价 页面，解决弹窗手术模板调用没有数据显示的 bug</p>
            <p class="content liText">ㅇ 修复 手术记帐单 模板，解决模板删除报错的 bug</p>
            <p class="content liText">ㅇ 修复 病人补记帐 页面，解决切换页面后数据被清空的 bug</p>
            <p class="content liText">ㅇ 修复 号类字典 页面，解决滚动加载下拉框因横向滚动条导致滚动加载失效的 bug</p>
            <p class="content liText">ㅇ 修复 住院处方 页面，解决中药处方剂数计算失败，用法及特殊用法显示错误的 bug</p>
            <p class="content liText">ㅇ 修复 医嘱领药申请 页面，解决住院处方领药报错的 bug</p>
            <p class="content liText">ㅇ 修复 门诊排班 页面，解决复制成功后，有预约排班的无法删除预约排班的 bug</p>
            <p class="content liText">ㅇ 修复 医嘱执行 页面，解决医嘱执行组套关系显示错误及勾选框勾选错误的 bug</p>
            <p class="content liText">ㅇ 修复 处置执行 页面，解决单价显示为两位小数的 bug</p>
            <p class="content liText">ㅇ 修复 会诊接收 页面，解决医生显示不完整的 bug</p>
            <p class="content liText">ㅇ 修复 床位一览 页面，解决新入界面在勾选全院和取消勾选切换后，新入病人不再显示的 bug</p>
            <p class="content liText">ㅇ 修复 床位一览 页面，解决门诊诊断展示不完整的 bug</p>
          </TimelineItem>

          <!-- 正式 v8.1.1 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-12-15</p>
            <p class="content rightShow">正式版 v8.1.1</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 处方笺、医嘱单 打印功能</p>

            <p class="content liText">ㅇ 优化 病人诊疗 页面，将处方的药品金额列扩展至支持‘999.99’长度</p>
            <p class="content liText">ㅇ 优化 病人诊疗 页面，将处方的药品弹窗的单价显示为保留两位</p>
            <p class="content liText">ㅇ 优化 病人诊疗 页面，将本次就诊的诊断输入框改为支持自定义诊断</p>
            <p class="content liText">ㅇ 优化 角色管理 页面，一个角色可以对应web的菜单也可对应c#的菜单</p>
            <p class="content liText">ㅇ 优化 手术字典 页面，新增修改接口，选择了手术类型时，手术等级必填，选择其他类型(操作)时，不必填</p>
            <p class="content liText">ㅇ 优化 术语字典 页面，允许扩展条件增加can_ext=1，并增加排序号</p>
            <p class="content liText">ㅇ 优化 物资请领 页面，去除无用的 '申请'/'已处理' 等状态显示</p>
            <p class="content liText">ㅇ 优化 下拉框/弹窗 组件，医嘱相关流程的下拉框支持拼音五笔的搜索</p>
            <!-- <p class="content liText">ㅇ 优化 门诊模板 页面，按需求完善门诊模板的修改及调用</p>  -->
            <p class="content liText">ㅇ 优化 术语字典的用药途径 页面，修复页面弹窗卡顿，临床项目获取接口更换</p>
            <p class="content liText">ㅇ 优化 检查、检验划价 页面，将申请单信息上的检查或检验项目改成'XXX等'</p>

            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决处置取全部材料的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决专科专家号没有根据权限进行过滤的 bug</p>
            <p class="content liText">ㅇ 修复 处方发药 页面，解决发药金额文字换行的 bug</p>
            <p class="content liText">ㅇ 修复 毒麻药品 页面，解决精神药品出入库时在台账界面无法查询到的 bug</p>
          </TimelineItem>
          <!-- 正式版 v8.1.0 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-12-10</p>
            <p class="content rightShow">正式版 v8.1.0</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 门急诊登记本 功能，新增登记窗口，可以登记和查询</p>
            <p class="content liText">ㅇ 新增 抗菌药管理 功能，按规则管理抗菌药</p>

            <!-- <p class="content liText">ㅇ 优化 住院预约 功能，预约病人，在入科界面加上'预约'标志，病人床位自动带出预约床位</p> -->
            <p class="content liText">ㅇ 优化 远程搜索 组件，修复弹窗回显错乱，更换回显数据获取方式</p>
            <p class="content liText">ㅇ 优化 打折方案 页面，修复页面弹窗卡顿，临床项目获取接口更换</p>
            <p class="content liText">ㅇ 优化 号类字典 页面，修复页面弹窗卡顿，临床项目获取接口更换</p>
            <p class="content liText">ㅇ 优化 术语字典的护理等级 页面，修复页面弹窗卡顿，临床项目获取接口更换</p>
            <p class="content liText">ㅇ 优化 皮试设置 页面，修复页面弹窗卡顿，临床项目获取接口更换</p>
            <p class="content liText">ㅇ 优化 病人诊疗 页面，诊断取标准诊断，删除自定义诊断项，更换诊断接口</p>
            <p class="content liText">ㅇ 优化 疾病诊断 页面，诊断数据取医院维护后的数据信息/而非字典数据信息</p>

            <p class="content liText">ㅇ 修复 物资请领 页面，解决C#端物资请领后库存数据不正确的 bug</p>
            <p class="content liText">ㅇ 修复 门诊报告 页面，解决报告结果显示不正确的 bug</p>
            <p class="content liText">ㅇ 修复 标识数据管理 页面，解决标识数据的nodeId为0不显示的 bug</p>
            <p class="content liText">ㅇ 修复 全局表格 组件，解决因重置依赖导致的表头错位的 bug</p>
            <p class="content liText">ㅇ 修复 产婴登记 页面，解决显示问题及相关单位未显示的 bug</p>
            <p class="content liText">ㅇ 修复 二次分诊 页面，解决查询条件有误和第二次查询卡顿的 bug</p>
            <p class="content liText">ㅇ 修复 二次分诊 页面，解决诊台下拉框与诊台维护不符的 bug</p>
            <p class="content liText">ㅇ 修复 病区催款设置 页面，解决患者欠费费用显示错误的 bug</p>
          </TimelineItem>
          <!-- 正式版 v8.0.0.14 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-12-01</p>
            <p class="content rightShow">正式版 v8.0.0.14</p>
            <p class="content title">主程序</p>
            <!-- <p class="content liText">ㅇ 新增 门急诊登记本 功能，新增登记窗口，可以登记和查询</p> -->
            <!-- <p class="content liText">ㅇ 新增 web端跳转C#电子病历 功能，新增登记窗口，可以登记和查询</p> -->

            <p class="content liText">ㅇ 修复 检验套餐 页面，解决检验类别下临床项目显示错误的 bug</p>
            <p class="content liText">ㅇ 修复 术语字典 页面，解决用药途径编辑弹窗中的门诊住院可用修改失败的 bug</p>
            <p class="content liText">ㅇ 修复 住院凭证 页面，解决打印和删除凭证未作校验的 bug</p>
            <p class="content liText">ㅇ 修复 病区领药 页面，解决查询领药申请未查询医嘱类别项目代码的 bug</p>
            <p class="content liText">ㅇ 修复 病区催款 页面，解决除全自费类别外其他查询不到的 bug</p>
            <p class="content liText">ㅇ 修复 门诊医生站 登陆，解决号表切换时表中数据未进行修改的 bug</p>

            <p class="content liText">ㅇ 优化 协作医疗 页面，增加页面初始化时自动按规则查询</p>
            <p class="content liText">ㅇ 优化 检验联动收费 页面，按照UI界面对弹框，表格等做修改</p>
            <p class="content liText">ㅇ 优化 分页组件，支持最多三位数页码显示</p>
            <!-- <p class="content liText">ㅇ 优化 住院处方 页面，对西药处方开立进行优化</p> -->
            <!-- <p class="content liText">ㅇ 优化 门诊医嘱模板 页面，增加检查、检验模板</p> -->
            <p class="content liText">ㅇ 优化 检查检验开立 流程，增加申请时间选择，住院用户选择，门诊默认当前</p>
            <!-- <p class="content liText">ㅇ 优化 历史处方 页面，修改弹窗页面显示，表格扩展显示药品详情</p> -->
            <p class="content liText">ㅇ 优化 门诊诊疗 页面，允许查看病人历史就诊信息</p>
            <p class="content liText">ㅇ 优化 产婴登记 页面，按照相关规则对产妇产婴的医嘱进行优化</p>
            <p class="content liText">ㅇ 优化 处方发药 页面，按照处方发药窗口号规则进行优化，收费时后台自动分配窗口</p>
          </TimelineItem>
          <!-- 正式版 v8.0.0.13 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-11-17</p>
            <p class="content rightShow">正式版 v8.0.0.13</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 毒麻药品台账查询 功能</p>
            <p class="content liText">ㅇ 新增 毒麻药品处理查询 功能</p>
            <p class="content liText">ㅇ 新增 麻醉划价 功能</p>
            <p class="content liText">ㅇ 优化 危急值处理 功能，增加角色判断显示不同处理弹窗</p>
            <p class="content liText">ㅇ 优化 检查、检验报告 页面，更换报告显示位置，增加结果显示</p>
            <p class="content liText">ㅇ 优化 处置划价 流程，增加划价主项目及联动项目区分显示</p>
            <p class="content liText">ㅇ 优化 检查检验 开立时间，去除秒数显示，接口内部判断若为空默认当前时间</p>
            <p class="content liText">ㅇ 优化 处方开立 页面，增加药品取值分页获取，支持模糊查询药品名</p>
            <p class="content liText">ㅇ 优化 号表设置 页面，按照号表状态显示修改删除按钮，行内编辑启用停用</p>
            <p class="content liText">ㅇ 优化 号表设置 页面，优化新增修改的校验</p>
            <p class="content liText">ㅇ 优化 号表设置 页面，优化新增修改的校验</p>
            <p class="content liText">ㅇ 优化 手术划价 页面，优化模板调用的页面布局</p>

            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决诊断和药房的回显的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，增加药房权限的 校验</p>
            <p class="content liText">ㅇ 修复 发药管理 页面，修改处方审核、处方发药/退药逻辑上的 bug</p>
            <p class="content liText">ㅇ 修复 检查开立 页面，修改检查开立回显一级二级按钮回显不出来的 bug</p>
            <p class="content liText">ㅇ 修复 检查开立 页面，修改开立多个项目后取消其中的任意项目，分类上的数量显示有误的 bug</p>
            <p class="content liText">ㅇ 修复 检查开立 页面，修改回显后检查类别的角标未显示的 bug</p>
            <p class="content liText">ㅇ 修复 术语字典 页面，修改新增/修改界面 校验信息位置，提示信息修改</p>
            <p class="content liText">ㅇ 修复 术语字典 页面，修改自定义数据字典没有防重复校验的 bug</p>
            <p class="content liText">ㅇ 修复 处方配药发药 页面，修改配药发药状态值</p>
            <p class="content liText">ㅇ 修复 检查划价 页面，修复查询病人申请单接口报错的 bug</p>
          </TimelineItem>
          <!-- 正式版 v8.0.0.12 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-11-11</p>
            <p class="content rightShow">正式版 v8.0.0.12</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 检查开立 页面上传病人图片信息功能</p>
            <p class="content liText">ㅇ 优化 二次分诊 功能，省略操作点击步骤，去除表格排号显示</p>
            <p class="content liText">ㅇ 优化 班次设置 页面，必填项校验提示信息居左对齐输入框</p>
            <p class="content liText">ㅇ 优化 病人诊疗 页面，增加连续诊毕控制，并联动刷新病人列表</p>
            <p class="content liText">ㅇ 优化 项目划价 功能，将表格内金额字段以保留有两位小数显示</p>
            <p class="content liText">ㅇ 优化 医嘱发药 页面，去掉发药数量为个位时前面的0</p>

            <p class="content liText">ㅇ 修复 出诊排班 页面，解决预约安排报错的 bug</p>
            <p class="content liText">ㅇ 修复 二次分诊 页面，解决点击诊毕，病人还在诊中列表的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决无病人状态下病史信息未清空的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决叫号读卡提示该诊室无待诊病人的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决处方开立修改药方访问新增接口的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决中药处方开立药方未联动回显的 bug</p>
            <p class="content liText">ㅇ 修复 病人诊疗 页面，解决已审核药方回显审核状态不正确的 bug</p>
            <p class="content liText">ㅇ 修复 处置划价 页面，解决收费项目确认报错的 bug</p>
            <p class="content liText">ㅇ 修复 处置划价 页面，解决处置申请单主项目仍可删除的 bug</p>
            <p class="content liText">ㅇ 修复 输液执行 页面，修复查询不到输液申请记录的 bug</p>
            <p class="content liText">ㅇ 修复 床位一览 页面，修复病人信息回显数据不全的 bug</p>
            <p class="content liText">ㅇ 修复 医嘱录入 页面，修复次诊断第一次保存未能回显的 bug</p>
            <p class="content liText">ㅇ 修复 检查划价 页面，修复收费项目补划不能保存的 bug</p>
            <p class="content liText">ㅇ 修复 手术划价 页面，修复划价记账成功后提示无手术申请信息的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.12 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-11-08</p>
            <p class="content rightShow">Beta v8.0.0.12</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 更换头像 功能</p>

            <p class="content liText">ㅇ 优化 门诊读卡 功能，增加读卡后弹窗选择</p>
            <p class="content liText">ㅇ 优化 科室项目 页面，增加项目查询框</p>
            <p class="content liText">ㅇ 优化 号类字典 页面，增加弹窗的下拉框拼音码搜索功能</p>
            <p class="content liText">ㅇ 优化 检查、检验、处置、手术、发药管理 流程，优化页面布局样式</p>
            <p class="content liText">ㅇ 优化 协作诊疗 流程，优化诊断下拉菜单条件显示</p>
            <p class="content liText">ㅇ 优化 手术分级 页面，增加手术类型下拉框，新增至医院手术时可选择手术类型</p>
            <p class="content liText">ㅇ 优化 临床项目 页面，优化表格宽度显示</p>

            <p class="content liText">ㅇ 修改 角色管理 页面，解决取消保存后再次保存无反应的 bug</p>
            <p class="content liText">ㅇ 修改 号表设置 页面，优化界面，修改操作提示语，解决医生下拉框的 bug</p>
            <p class="content liText">ㅇ 修改 医嘱开立 页面，解决开立长期医嘱后审核页面查询不到医嘱信息的 bug</p>
            <p class="content liText">ㅇ 修改 树形结构 保存或修改后为清空父级节点造成垃圾数据的 bug</p>
            <p class="content liText">ㅇ 修改 诊室设置 页面，修复序号修改无效的 bug</p>
            <p class="content liText">ㅇ 修改 二次分诊 页面，修复号表登录医生人数有误的 bug</p>
            <p class="content liText">ㅇ 修改 病人诊疗 页面，修复药品开立后切换西药处方，诊断和药房丢失的 bug</p>
            <p class="content liText">ㅇ 修改 病人诊疗 页面，修复住院凭证由读卡获取数据不全的 bug</p>
            <p class="content liText">ㅇ 修改 划价流程 页面，修复门诊划价保存划价项目后无法读取到的 bug</p>
            <p class="content liText">ㅇ 修改 床位一览 页面，修复取消新入不显示病床号的 bug</p>
            <p class="content liText">ㅇ 修改 处置划价 页面，修复收费后补划再退费数量不对的 bug</p>
            <p class="content liText">ㅇ 修改 医嘱录入 页面，修复病人信息中入院主诊断回显失败的 bug</p>
            <p class="content liText">ㅇ 修改 医嘱录入 页面，修复保存病人信息接口报错的 bug</p>
            <p class="content liText">ㅇ 修改 医嘱录入 页面，修复处置新增弹窗的价格显示未保留两位小数的 bug</p>
            <p class="content liText">ㅇ 修改 医嘱录入 页面，修复输血医嘱开立病人血型未能回显的 bug</p>
            <p class="content liText">ㅇ 修改 医嘱退药申请 页面，增加已执行不可退药校验，以及药品包装单位显示异常的 bug</p>
            <p class="content liText">ㅇ 修改 划价流程 页面，修复主项目可删除的 bug</p>
            <p class="content liText">ㅇ 修改 划价流程 页面，修复未找到病人时未清空上一次查询结果的 bug</p>
            <p class="content liText">ㅇ 修改 手术划价 页面，修复选择不同手术室查询结果一致的 bug</p>

            <p class="content liText">ㅇ 修复 处方开立 功能，修复药品单位取值错误的 bug</p>
            <p class="content liText">ㅇ 修复 病人出入转 功能，修复下拉框取值报错的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.11 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-10-27</p>
            <p class="content rightShow">Beta v8.0.0.11</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 取消就诊 功能</p>
            <p class="content liText">ㅇ 新增 死亡报告卡 审核功能</p>
            <p class="content liText">ㅇ 新增 传染病报告卡 审核功能</p>
            <p class="content liText">ㅇ 新增 报表授权 功能，嵌入用户权限内</p>

            <p class="content liText">ㅇ 优化 收费项目 获取方式，解决页面因数据量过大导致崩溃的问题</p>
            <p class="content liText">ㅇ 优化 病人诊疗 页面，解决刷卡后病人信息传递</p>
            <p class="content liText">ㅇ 优化 项目树形结构 新增方式，未点击树结构默认新增大分类，点击树结构默认为其增加子分类</p>
            <p class="content liText">ㅇ 优化 系统管理 功能，优化系统管理下页面UI</p>
            <p class="content liText">ㅇ 优化 字典管理 功能，优化字典管理下页面UI</p>

            <p class="content liText">ㅇ 修改 临床项目 获取方式，采取分页获取，同时增设搜索功能</p>
            <p class="content liText">ㅇ 修改 检查划价 页面，门诊住院补划接口更换</p>
            <p class="content liText">ㅇ 修改 检验划价 页面，门诊住院补划接口更换</p>
            <p class="content liText">ㅇ 修改 门诊检查检验报告 模板，修改报个状态显示，修改报告结果显示信息</p>
            <p class="content liText">ㅇ 修改 病人诊疗检验 模板，修改检验申请单开立，只能选择科室联动下的检验类别，支持多个类别一张申请单</p>
            <p class="content liText">ㅇ 修改 病人诊疗检查 模板，修改检查申请单开立，只能选择科室联动下的检验类别，不支持多个类别一张申请单</p>
            <p class="content liText">ㅇ 修改 报表查询 页面，获取报表内容为当前用户权限内容</p>

            <p class="content liText">ㅇ 修复 术语字典 页面 bug ，扩展功能传参增加 数据ID</p>
            <p class="content liText">ㅇ 修复 第三方系统 页面，修复授权保存保存的 bug</p>
            <p class="content liText">ㅇ 修复 检验类别科室维护 页面，增加表格固定高度，修改表格内容过滤停用项</p>
            <p class="content liText">ㅇ 修复 检查类别科室维护 页面，增加表格固定高度，修改表格内容过滤停用项</p>
          </TimelineItem>
          <!-- Beta v8.0.0.10 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-10-22</p>
            <p class="content rightShow">Beta v8.0.0.10</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 检查科室类别 维护页面</p>
            <p class="content liText">ㅇ 新增 检验科室类别 维护页面</p>
            <p class="content liText">ㅇ 新增 打折方案 维护页面</p>
            <p class="content liText">ㅇ 优化 产婴登记 实现响应式布局</p>
            <p class="content liText">ㅇ 优化 医嘱录入 页面，条件控制新增提交按钮的显示和隐藏</p>
            <p class="content liText">ㅇ 优化 住院处方开立 功能，长期医嘱不能开立毒、麻、精神类药品</p>
            <p class="content liText">ㅇ 优化 发药规则 功能，接口新增累计发药</p>
            <p class="content liText">ㅇ 优化 标识数据维护 页面，增加标识数据PD码显示</p>
            <p class="content liText">ㅇ 优化 划价流程 ，增加划价弹窗显示可退数量及退费记录</p>
            <p class="content liText">ㅇ 优化 处方开立 页面，增加全局变量控制是否显示药品厂家</p>
            <p class="content liText">ㅇ 优化 检查检验 流程，划价查询增加登记号</p>
            <p class="content liText">ㅇ 优化 临床项目 页面，增加分页按钮，联动查询</p>
            <p class="content liText">ㅇ 优化 收费项目 页面，增加分页按钮，联动查询</p>
            <p class="content liText">ㅇ 优化 科室项目 页面，增加临床备选表分页按钮，联动查询</p>
            <p class="content liText">ㅇ 修改 取消新入 科室字段，修改科室无法显示的问题</p>
            <p class="content liText">ㅇ 修改 会诊流程 表格行内图标，接收图标和取消接收图标根据状态显示</p>
            <p class="content liText">ㅇ 修改 门诊处方 模板，处置类点击当前行，只回显当前行数据 </p>
            <p class="content liText">ㅇ 修复 护士执行 页面 bug ，完善调整排序，查询条件，取值问题</p>
            <p class="content liText">ㅇ 修复 号类字典 页面 bug ，选择价表项目时，将选择价表项目的价格联动到费用栏</p>
          </TimelineItem>
          <!-- Beta v8.0.0.9 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-10-13</p>
            <p class="content rightShow">Beta v8.0.0.9</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 死亡报告卡 页面，实现新增死亡报告卡功能</p>
            <p class="content liText">ㅇ 新增 病人出入转流程 的 产婴登记页面，实现登记功能</p>
            <p class="content liText">ㅇ 新增 用户登录安全 模式，登录后规定时间内无任何操作将自动锁屏</p>
            <p class="content liText">ㅇ 新增 医嘱审核 功能，药品类医嘱开立后需审核</p>
            <p class="content liText">ㅇ 新增 住院凭证 打印功能，调外部程序实现预览功能</p>
            <p class="content liText">ㅇ 优化 左侧菜单 现支持二级菜单，同步修改收缩菜单图标间距</p>
            <p class="content liText">ㅇ 优化 床位一览表 增加双击病人跳转详情功能</p>
            <p class="content liText">ㅇ 优化 划价流程 按权重显示病人信息</p>
            <p class="content liText">ㅇ 优化 处方开立 执行时间改为计划时间</p>
            <p class="content liText">ㅇ 优化 处方发药配药 流程，对页面显示内容进行控制</p>
            <p class="content liText">ㅇ 优化 门诊病人诊疗 页面，优化病历保存按钮位置</p>
            <p class="content liText">ㅇ 优化 医嘱复核 页面，表格内信息增加组标记</p>
            <p class="content liText">ㅇ 优化 床位一览表 增加‘只看新入’过滤勾选框，并加粗标识新入病人</p>
            <p class="content liText">ㅇ 优化 门诊医嘱模板 页面，实现处方、处置、检查模板医嘱新增、修改、删除功能</p>
            <p class="content liText">ㅇ 优化 检查检验划价 页面，添加住院病人划价窗口显示可退数量及退费明细</p>
            <p class="content liText">ㅇ 优化 病人出入转 的页面显示以及功能跳转</p>
            <p class="content liText">ㅇ 修改 住院医嘱 流程，修改树结构的父节点有其他请求数据导致报错问题</p>
            <p class="content liText">ㅇ 修改 门诊诊疗 流程的病人病史信息新增完未联动查询回显，导致再次保存报错的 bug</p>
            <p class="content liText">ㅇ 修复 出院流程 无法撤销出院医嘱的 bug</p>
            <p class="content liText">ㅇ 修复 手术安排 台次字段回显错误的 bug</p>
            <p class="content liText">ㅇ 修复 报表管理 连续两次修改导致源数据丢失的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.8 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-09-23</p>
            <p class="content rightShow">Beta v8.0.0.8</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 住院皮试 流程，调整住院处方开立联动皮试信息</p>
            <p class="content liText">ㅇ 优化 门诊划价 流程，调整诊间支付、划价确认和取消确认参数</p>
            <p class="content liText">ㅇ 优化 病人出入转 流程，修改转出转入清空或默认显示的数据</p>
            <p class="content liText">ㅇ 优化 临床项目 收费项目 页面，修改临床项目对应价表事，不可修改类别及项目</p>
            <p class="content liText">ㅇ 优化 住院医嘱 流程，处方或医嘱开立后，弹窗页面不关闭，同时，每个页面自动获取头部主诊断</p>
            <p class="content liText">ㅇ 优化 住院医嘱 流程，检查医嘱开立时高亮显示所选临床项目</p>
            <p class="content liText">ㅇ 优化 门诊病人诊疗 页面，优化刷卡定位的函数，避免多次循环导致页面卡顿</p>
            <p class="content liText">ㅇ 优化 检验模板 页面，调整各个模板切换效果，改为tab页显示</p>
            <p class="content liText">ㅇ 优化 处方退药 页面，修改为同一种药，不同批次不同显示，且按批次退药</p>
            <p class="content liText">ㅇ 优化 处方权限 手术权限 页面，将数据库结构改为每位医生，手术权限和处方权限分两行储存</p>
            <p class="content liText">ㅇ 优化 手术安排 页面，修复安排时间显示不完全的 bug</p>
            <p class="content liText">ㅇ 修改 科室授权 页面，修改获取科室权限接口传参</p>
          </TimelineItem>
          <!-- Beta v8.0.0.7 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-09-18</p>
            <p class="content rightShow">Beta v8.0.0.7</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 优化 科室列表 下拉组件，将下拉列表更换为用户权限下且具当前页面所需科室属性的内容</p>
            <p class="content liText">ㅇ 优化 住院预约 页面，将查询卡号/身份证号/手机号的返回改为单个直接回显，多个弹窗选择</p>
            <p class="content liText">ㅇ 优化 护士分诊、皮试执行 页面，添加自动刷新和手动刷新功能</p>
            <p class="content liText">ㅇ 优化 检查、检验、处置划价 页面申请单确认和取消确认流程 </p>
            <p class="content liText">ㅇ 优化 住院出入转 流程，完善床位管理、换床、及预约联动等流程</p>
            <p class="content liText">ㅇ 修改 卫生服务人员 页面，调整联系电话、办公室电话等字段传参</p>
            <p class="content liText">ㅇ 修改 诊室设置 页面，修复连点两次修改后，源数据丢失name的 bug</p>
            <p class="content liText">ㅇ 修改 用户管理 页面，修复新增用户将id保存为name的 bug</p>
            <p class="content liText">ㅇ 修改 退药申请 页面，调整退药申请接口</p>
            <p class="content liText">ㅇ 修改 住院凭证 页面，将诊断改为多选且数据库可储存多选的字段</p>
            <p class="content liText">ㅇ 修改 基础字典扩展 页面，修复由于版本升级造成的旧版函数报错的 bug</p>
            <p class="content liText">ㅇ 修复 处方开立 后，原有诊断和药房清空的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.6 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-09-15</p>
            <p class="content rightShow">Beta v8.0.0.6</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 优化 检查、检验、处置划价 页面诊间支付流程 </p>
            <p class="content liText">ㅇ 优化 门诊病人诊疗 页面，修复检查检验申请单开立参数传递的 bug</p>
            <p class="content liText">ㅇ 修改 皮试执行 页面，将执行科室改为用户权限下科室，且按是否为注射科排序优先级</p>
            <p class="content liText">ㅇ 修改 皮试执行 页面，优化执行和记录皮试项目的开始时间和结束时间</p>
            <p class="content liText">ㅇ 修改 注射执行 页面，将执行科室改为用户权限下科室，且按是否为注射科排序优先级</p>
            <p class="content liText">ㅇ 修改 输液执行 页面，将执行科室改为用户权限下科室，且按是否为输液科排序优先级</p>
            <p class="content liText">ㅇ 修改 门诊病人诊疗 页面，修复刷卡后页面仍显示叫号信息的 bug</p>
            <p class="content liText">ㅇ 修改 诊室设置 页面，将新增修改诊室时的地址和排序号换为非必填项</p>
            <p class="content liText">ㅇ 修改 门诊划价 流程，修改划价确认和取消确认</p>
            <p class="content liText">ㅇ 修复 护士分诊台 页面，优化病人信息弹窗，修改病人列表拖拽排序的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.5 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-09-14</p>
            <p class="content rightShow">Beta v8.0.0.5</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 皮试执行 页面的执行科室查询条件，后台匹配此科室维护项目</p>
            <p class="content liText">ㅇ 修改 皮试执行 页面，将皮试结果的阴性、阳性改为 + - </p>
            <p class="content liText">ㅇ 修改 科室用法维护 执行科室下拉框取值，改为当前用户权限科室</p>
            <p class="content liText">ㅇ 修改 科室项目维护 执行科室下拉框取值，改为当前用户权限科室</p>
            <p class="content liText">ㅇ 修复 处方发药 页面查询时间与申请单时间不符的 bug</p>
            <p class="content liText">ㅇ 修复 输液执行 后台未联动查询执行科室用法权限的 bug</p>
            <p class="content liText">ㅇ 修复 注射执行 后台未联动查询执行科室用法权限的 bug</p>
            <p class="content liText">ㅇ 修复 处方发药 页面药品标签显示频次用法的数据不准确的 bug</p>
            <p class="content liText">ㅇ 修复 处方配药 页面查询时间与申请单时间不符的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.4 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-09-13</p>
            <p class="content rightShow">Beta v8.0.0.4</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 修改 检查检验报告 页面，检查检验按钮切换为 Tab页 </p>
            <p class="content liText">ㅇ 修改 临床项目 页面，去除执行科室 新增、修改、删除 功能</p>
            <p class="content liText">ㅇ 修改 住院、门诊划价 页面日期选择，默认时间区间为当前时间向前一周</p>
            <p class="content liText">ㅇ 修改 住院、门诊划价 病人信息显示不完整，以及执行科室更换为当前用户的权限科室</p>
            <p class="content liText">ㅇ 修改 门诊病人诊疗 页面，开立处方及处置时，显示弹框的方式，及弹框内容实时获取</p>
            <p class="content liText">ㅇ 修改 门诊病人诊疗 页面，申请单回显时，如果状态为已收费，不显示删除按钮</p>
            <p class="content liText">ㅇ 修改 处方配药 页面，金额保留两位小数，显示病人姓名</p>
            <p class="content liText">ㅇ 修复 门诊病人诊疗 申请单开立页面样式高度不统一的 bug</p>
            <p class="content liText">ㅇ 修复 检查检验 划价页面，发票号查询失败的 bug</p>
            <p class="content liText">ㅇ 修复 处方发药 流程所有页面显示药品金额与开立时不符的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.3 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-09-12</p>
            <p class="content rightShow">Beta v8.0.0.3</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 修改 号类字典 收费项目对应下拉框去掉 药品、材料 类临床项目</p>
            <p class="content liText">ㅇ 修改 号类字典 收费项目 非空 时，其对应下拉框为必填项</p>
            <p class="content liText">ㅇ 修复 检查申请单 数据回显时未自动跳转至该项目标签页的 bug</p>
            <p class="content liText">ㅇ 修复 检查申请单 开立时，勾选框联动失败的 bug</p>
            <p class="content liText">ㅇ 修复 检验联动收费 的类别联动项目价格显示异常的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.2 -->
          <TimelineItem color="red">
            <p class="time leftShow">2018-09-11</p>
            <p class="content rightShow">Beta v8.0.0.2</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 修复 医嘱发药 在未选择 病区 时，左侧病人列表显示出错的 bug</p>
            <p class="content liText">ㅇ 修复 Select 在异步赋值时，无法显示选中项的 bug</p>
            <p class="content liText">ㅇ 修复 基础字典 在 新增修改时无法正常保存的 bug</p>
            <p class="content liText">ㅇ 修复 门诊划价 在 支付后 未同步刷新金额的 bug</p>
          </TimelineItem>
          <!-- Beta v8.0.0.1 -->
          <TimelineItem color="blue">
            <p class="time leftShow">2018-08-31</p>
            <p class="content rightShow">Beta v8.0.0.1</p>
            <p class="content title">主程序</p>
            <p class="content liText">ㅇ 新增 字典管理的科室项目、科室用法、病区领药规则等维护</p>
            <p class="content liText">ㅇ 新增 划价项目账单补录搜索收费项目 功能</p>
            <p class="content liText">ㅇ 修复 护士分诊特聘专科专家号的指定诊室限制</p>
            <p class="content liText">ㅇ 修复 Dropdown 首次点击自动关闭的 bug</p>
            <p class="content liText">ㅇ 修复 Select 在异步设置 Option 时，无法显示选中项的 bug</p>
          </TimelineItem>
          <!-- 问世 -->
          <TimelineItem color="green">
            <p class="time leftShow">2018-08-30</p>
            <p class="content rightShow">睿颐 "智慧医疗云HIS" 问世</p>
            <p class="content title">颠覆传统HIS系统</p>
            <p class="content liText">ㅇ 界面实用、简洁和直观。全面支持键盘输入，操作灵活、便捷</p>
            <p class="content liText">ㅇ 提供了药品编码、五笔码、拼音码等多种录入方式，有效的提高了工作效率</p>
            <p class="content liText">ㅇ 充分考虑了用户的操作习惯和输入的方便性，尽一切可能降低了用户的输入击键次数</p>
            <p class="content liText">ㅇ 全方位、多角度实时查询统计，用户可以在任何时间实时的查询到需要的各种信息</p>
            <p class="content liText">ㅇ 完全符合卫生部的《HIS基本功能规范》，采用国际规范行业标准</p>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  </div>
</template>
<script>
import util from '../../libs/util.js';
export default {
  data () {
    return {
    }
  },
  components: {},
  name: 'updata_log',
  methods: {
    init () {
    },
  },
  created () {
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
@import "../../styles/common.less";
.leftShow {
  position: relative;
  left: -120px;
  font-size: 16px;
  line-height: 16px;
}
.rightShow {
  font-size: 16px;
  margin: -20px 0 0 10px;
}
.title {
  font-size: 14px;
  margin: 20px 0 10px 10px;
}
.liText {
  margin: 20px 0 0 10px;
  color: #666;
}
</style>
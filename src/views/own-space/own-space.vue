<template>
  <div class="bg-white ownspace_index clearfix">
    <div class="fl">
      <Card style="width:150px;padding: 3px 0 3px;">
        <div style="text-align:center">
          <p v-for="item in arrays.title"
             :key="item.text"
             :class="item.flag ? 'ry-color ry-border-bg' : ''"
             @click="clickTab(item)">
            <i class="iconfont"
               :class="item.icon"></i>
            {{ item.text }}
          </p>
        </div>
      </Card>
    </div>
    <Card style="width:83.7%;margin-left:20px;height:86.5%"
          class="fl content">
      <div class="right"
           v-show="flag.basic">
        <Button type="primary"
                class="fr"
                @click="showEditPassword">
          <i class="iconfont iconxiugai1"></i>&#8194;修改密码
        </Button>
        <div v-if="!adminShow"
             style="width: 100%;margin: 0 auto 0;display:flex;justify-content: space-between;"
             class="clearfix">
          <div class="avatar-container"
               style="position:relative;cursor:pointer;margin:20px 30px 20px 30px">
            <Avatar :src="userImg"></Avatar>
            <div class="cover"
                 style="text-align:center">更换头像</div>
            <div class="file-box">
              <input type="file"
                     @change="change"
                     class="file-btn"
                     accept="image/gif, image/jpeg, image/png, image/bmp" />
            </div>
            <cropper :option="cropperOption"
                     v-model="file"
                     @upload="sendAvatar"></cropper>
          </div>
          <Form ref="userForm"
                :model="userForm"
                :label-width="82"
                class="formClasss"
                label-position="left"
                :rules="inforValidate"
                style="margin-right: 0;flex:1;flex-direction:row;justify-content: flex-start;flex-wrap:wrap;">
            <div style="width:100%;display:flex;flex-direction:row;justify-content: flex-start;flex-wrap:wrap;">
              <FormItem label="人员编码："
                        style="width:210px;margin-right:15px;">
                <span>{{ this.infor.personCode }}</span>
              </FormItem>
              <FormItem label="用户姓名："
                        prop="name"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.personName }}</span>
              </FormItem>
              <FormItem label="身份证号："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.recordNumber }}</span>
              </FormItem>
              <FormItem label="性别："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.sexName }}</span>
              </FormItem>
              <FormItem label="联系电话："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.telephone }}</span>
              </FormItem>
              <FormItem label="出生日期："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.birthday }}</span>
              </FormItem>
              <FormItem label="从事工种："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.workType }}</span>
              </FormItem>
              <FormItem label="工作证号："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.empNo }}</span>
              </FormItem>
              <FormItem label="胸牌号："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.chestGrade }}</span>
              </FormItem>
              <FormItem label="生效日期："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.validDate }}</span>
              </FormItem>
              <FormItem label="失效日期："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.unvalidDate }}</span>
              </FormItem>
              <FormItem label="常住地址户籍标志："
                        :label-width="140"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.permanentName }}</span>
              </FormItem>
              <FormItem label="电子邮箱："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.email }}</span>
              </FormItem>
              <FormItem label="国籍："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.countryName }}</span>
              </FormItem>
              <FormItem label="民族："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.nationName }}</span>
              </FormItem>
              <FormItem label="地址："
                        style="width:440px;margin-right:20px">
                <span>{{ this.infor.addres }}</span>
              </FormItem>
              <FormItem label="乡："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.townshipAddr }}</span>
              </FormItem>
              <FormItem label="村："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.villageAddr }}</span>
              </FormItem>
              <FormItem label="门牌号码："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.addrNumber }}</span>
              </FormItem>
              <FormItem label="邮政编码："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.phoneNumber }}</span>
              </FormItem>
              <FormItem label="职业类别："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.occupationTypeName }}</span>
              </FormItem>
              <FormItem label="婚姻状况："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.marriageTypeName }}</span>
              </FormItem>
              <FormItem label="参加工作日期："
                        :label-width="110"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.workDate }}</span>
              </FormItem>
              <FormItem label="最高学位："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.academicDegreeName }}</span>
              </FormItem>
              <FormItem label="最高学历："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.degreeName }}</span>
              </FormItem>
              <FormItem label="职工手机："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.mobileNumber }}</span>
              </FormItem>
              <FormItem label="办公室电话："
                        :label-width="100"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.officeTelephone }}</span>
              </FormItem>

              <FormItem label="办公室传真："
                        :label-width="100"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.officeFax }}</span>
              </FormItem>
              <FormItem label="职称等级："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.titleClassName }}</span>
              </FormItem>
              <FormItem label="职务等级："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.postClassName }}</span>
              </FormItem>
              <FormItem label="到本单位日期："
                        :label-width="110"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.entryDate }}</span>
              </FormItem>
              <FormItem label="职工分类标志："
                        :label-width="110"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.personClassName }}</span>
              </FormItem>
              <FormItem label="党派："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.partyName }}</span>
              </FormItem>

              <FormItem label="毕业学校："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.graduateSchool }}</span>
              </FormItem>
              <FormItem label="所学专业名称："
                        :label-width="110"
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.professionalName }}</span>
              </FormItem>
              <FormItem label="毕业日期："
                        style="width:210px;margin-right:20px">
                <span>{{ this.infor.graduateDate }}</span>
              </FormItem>
            </div>
          </Form>
        </div>
      </div>
      <div class="right"
           id="rights"
           v-show="flag.resources"
           style="height:100%">
        <Table class="noBorder"
               :columns="tables.resourcesColumns"
               :data="tables.resourcesData"
               :height="tableHightRt"
               style="margin: 10px 0 0 0;"></Table>
      </div>
      <div class="right"
           v-show="flag.homePage">
        <div style="height:58px;">
          <Button type="primary"
                  style="margin: 12px 0 12px;"
                  class="fr"
                  @click="addHomePage('homePageCurTable')">
            <i class="iconfont icon-tianjia"
               size="14"></i>&#8194;新增
          </Button>
        </div>
        <Table class="noBorder"
               highlight-row
               :loading="tables.homePageLoading"
               stripe
               :height="tableHightRt - 50"
               :columns="tables.homePageColumns"
               :data="tables.homePageData"></Table>
      </div>
    </Card>
    <!-- 修改密码 -->
    <Modal v-model="editPasswordModal"
           :closable="false"
           width="800px"
           :mask-closable="false">
      <div slot="footer">
        <Button type="text"
                @click="editPasswordModal = false">取消</Button>
        <Button type="primary"
                :loading="savePassLoading"
                @click.native="saveEditPass">保存</Button>
      </div>
      <Form ref="editPasswordForm"
            :model="editPasswordForm"
            :rules="passwordValidate"
            :label-width="100">
        <Row>
          <i-Col span="24">
            <FormItem label="原密码"
                      prop="oldPass"
                      style="display: flex;">
              <Input v-model.trim="editPasswordForm.oldPass"
                     type="password"
                     placeholder="请输入现在使用的密码"
                     ref="oldpwd"
                     style="width:370px" />
            </FormItem>
          </i-Col>
        </Row>
        <Row>
          <i-Col span="24">
            <FormItem label="新密码"
                      prop="newPass"
                      style="display: flex;">
              <Input v-model.trim="editPasswordForm.newPass"
                     type="password"
                     placeholder="请输入新密码，至少6位字符"
                     style="width:370px" />
            </FormItem>
          </i-Col>
        </Row>
        <Row>
          <i-Col span="24">
            <FormItem label="确认新密码"
                      prop="rePass"
                      style="display: flex;">
              <Input v-model.trim="editPasswordForm.rePass"
                     type="password"
                     placeholder="请再次输入新密码"
                     ref="newpwd"
                     style="width:370px" />
            </FormItem>
          </i-Col>
        </Row>
      </Form>
    </Modal>
    <Modal v-model="showModal.homePageAction"
           width="500"
           :mask-closable="false"
           :closable="false">
      <div slot="footer">
        <Button type="text"
                size="large"
                @click="homePageHandleReset('homePageCurTable')">取消</Button>
        <Button type="primary"
                size="large"
                @click="addOrModify">确定</Button>
      </div>
      <Form class="homePageCurTable"
            ref="homePageCurTable"
            :model="homePageCurTable"
            :rules="homePageRuleValidate"
            :label-width="80">
        <FormItem label="报表名称"
                  prop="reportId">
          <Select v-model="homePageCurTable.reportId"
                  style="width: 387px;">
            <Option v-for="item in arrays.nameList"
                    :value="item.customReportId"
                    :key="item.customReportId">{{ item.reportName }}</Option>
          </Select>
        </FormItem>
        <div class="clearfix">
          <FormItem class="fl"
                    label="行数(限2)"
                    prop="lineNo"
                    style="width: 48%">
            <InputNumber :max="2"
                         :min="1"
                         v-model="homePageCurTable.lineNo"
                         style="width:64%"></InputNumber>
          </FormItem>
          <FormItem class="fr"
                    label="列数(限4)"
                    prop="columnNo"
                    style="width: 48%">
            <InputNumber :max="4"
                         :min="1"
                         v-model="homePageCurTable.columnNo"
                         style="width:64%"></InputNumber>
          </FormItem>
        </div>
      </Form>
    </Modal>
    <!-- 删除确认 -->
    <confirmDeletion :show="showModal.homePageShowDel"
                     :msg="showModal.homePageDelMsg"
                     @ok="homePageDel"
                     @close="showModal.homePageShowDel=false" />
  </div>
</template>

<script>
import util from "../../libs/util.js";
import confirmDeletion from "../components/confirmDeletion.vue";
import cropper from "../components/cropper";
import Cookies from "js-cookie";
export default {
  name: "ownspace_index",
  components: {
    confirmDeletion,
    cropper
  },
  inject: ["app"],
  data () {
    const validePhone = (rule, value, callback) => {
      var re = /^1[0-9]{10}$/;
      if (!re.test(value)) {
        callback(new Error("请输入正确格式的手机号"));
      } else {
        callback();
      }
    };
    const valideRePassword = (rule, value, callback) => {
      if (value !== this.editPasswordForm.newPass) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    const valideOldPassword = (rule, value, callback) => {
      if (value !== Cookies.get("password")) {
        callback(new Error("密码不正确"));
      } else {
        callback();
      }
    };
    return {
      tableHightRt: 500, //资源信息和首页信息的表格高度
      adminShow: false, //点击tab判断右侧是否显示隐藏
      addressData: [], //获取到的省市
      workTypeList: [],
      infor: {},
      curIndex: 0,
      userForm: {
        name: "",
        cellphone: "",
        company: "",
        department: ""
      },
      editPasswordForm: {
        oldPass: "",
        newPass: "",
        rePass: ""
      },
      savePassLoading: false,
      editPasswordModal: false, // 修改密码模态框显示
      passwordValidate: {
        oldPass: [
          { required: true, message: "请输入原密码", trigger: "blur" },
          { validator: valideOldPassword, trigger: "blur" }
        ],
        newPass: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { min: 6, message: "请至少输入6个字符", trigger: "blur" },
          { max: 32, message: "最多输入32个字符", trigger: "blur" }
        ],
        rePass: [
          { required: true, message: "请再次输入新密码", trigger: "blur" },
          { validator: valideRePassword, trigger: "blur" }
        ]
      },
      inforValidate: {},
      showModal: {
        homePageAction: false,
        homePageShowDel: false,
        homePageDelMsg: ""
      },
      homePageCurTable: {},
      homePageRuleValidate: {
        reportId: [
          {
            required: true,
            type: "number",
            message: "请选择报表名称",
            trigger: "change"
          }
        ]
      },
      resources: false,
      arrays: {
        resourcesList: [],
        nameList: [],
        title: [
          {
            icon: "icon-ren",
            text: "基本信息",
            flag: true
          },
          {
            icon: "icon-ziyuan-xianxing",
            text: "资源信息",
            flag: false
          },
          {
            icon: "icon-tubiao",
            text: "首页信息",
            flag: false
          }
        ]
      },
      flag: {
        basic: true,
        resources: false,
        homePage: false
      },
      tables: {
        resourcesColumns: [],
        resourcesData: [],
        homePageLoading: false,
        homePageColumns: [
          {
            title: "报表名称",
            key: "reportName"
          },
          {
            title: "大小",
            width: 200,
            key: "size"
          },
          {
            title: "操作",
            width: 200,
            align: "center",
            render: (h, params) => {
              return h("div", [
                h(
                  "Poptip",
                  {
                    props: {
                      trigger: "hover",
                      placement: "top"
                    }
                  },
                  [
                    h("i", {
                      class: util.icon.modify,
                      style: {
                        marginRight: "16px",
                        verticalAlign: "middle",
                        fontSize: "18px"
                      },
                      on: {
                        click: () => {
                          this.showModal.homePageAction = true;
                          this.homePageCurTable = params.row;
                        }
                      }
                    }),
                    h(
                      "div",
                      {
                        slot: "content"
                      },
                      "修改"
                    )
                  ]
                ),
                h(
                  "Poptip",
                  {
                    props: {
                      trigger: "hover",
                      placement: "top"
                    }
                  },
                  [
                    h("i", {
                      class: util.icon.delete,
                      style: {
                        verticalAlign: "middle",
                        fontSize: "18px"
                      },
                      on: {
                        click: () => {
                          this.remove(params.index);
                        }
                      }
                    }),
                    h(
                      "div",
                      {
                        slot: "content"
                      },
                      "删除"
                    )
                  ]
                )
              ]);
            }
          }
        ],
        homePageData: []
      },
      cropperOption: {
        viewMode: 1, // 将裁剪框限制为不超过画布的大小。
        dragMode: "move", // 定义裁剪器的拖动模式(move: 移动画布)
        aspectRatio: 1 / 1, // 设置裁剪框的宽高比
        minContainerWidth: 200, // 容器的最小宽度,默认： 200
        minContainerHeight: 100, // 容器的最小高度,默认： 100
        minCanvasWidth: 200, // 画布的最小宽度（图像包装器）,默认： 0
        minCanvasHeight: 200, // 画布的最小高度（图像包装器）,默认： 0
        minCropBoxWidth: 100, // 裁剪框的最小宽度,默认： 0. 这个大小是相对于页面，而不是图像。
        minCropBoxHeight: 100, // 裁剪框的最小高度,默认： 0. 这个大小是相对于页面，而不是图像。
        preview: ".copper-img-preview" // 图片预览
      },
      file: null,
      datahavezyFB: []
    };
  },
  computed: {
    userImg () {
      return this.$store.state.publicApi.userImg;
    },
    uploadUrl () {
      return util.BaseURL + '/api/sysUser/uploadPicture' + '?hospitalId=' + this.$store.state.userInfoObj.hospitalId
    },
    uploadHeaders () {
      return {
        Authorization: Cookies.get("token")
      };
    }
  },
  watch: {
    "tables.resourcesColumns": function (val) {
      console.log(val);
    }
  },
  methods: {
    showEditPassword () {
      this.$refs["editPasswordForm"].resetFields();
      this.editPasswordModal = true;
    },
    init () {
      let nowdata = {
        id: this.$store.state.userInfoObj.userId * 1
      };
      this.$store.dispatch("detailUsers", nowdata).then(res => {
        if (res.data.code !== 200) {
          util.showMsg(this, res.data);
        } else {
          let resObj = res.data.data;
          console.log(resObj, 222);
          this.userForm.name = resObj.userName;
          this.userForm.company = this.$store.state.userInfoObj.hospitalName;
          this.userForm.department = this.$store.state.userInfoObj.deptName;
          if (resObj.userName === "admin" || resObj.userName === "SUPERADMIN") {
            this.$store.dispatch("detailUserAdmins", {
              id: this.$store.state.userInfoObj.hospitalId
            })
              .then(res => {
                if (res.data.code !== 200) {
                  util.showMsg(this, res.data);
                } else {
                  this.userForm.cellphone = util.isEmpty(
                    res.data.data.phoneNumber
                  )
                    ? "无"
                    : res.data.data.phoneNumber;
                }
              });
          } else {
            this.$store.dispatch("getServicePersonal", { id: resObj.personId * 1 }).then(res => {
              if (res.data.data != "" && res.data.data != null) {
                let res2Obj = res.data.data;
                this.infor = res.data.data;
                this.infor.birthday = util.isEmpty(res.data.data.birthday)
                  ? ""
                  : JSON.parse(JSON.stringify(res.data.data.birthday)).substr(
                    0,
                    10
                  );
                this.infor.validDate = util.isEmpty(res.data.data.validDate)
                  ? ""
                  : JSON.parse(
                    JSON.stringify(res.data.data.validDate)
                  ).substr(0, 10);
                this.infor.unvalidDate = util.isEmpty(
                  res.data.data.unvalidDate
                )
                  ? ""
                  : JSON.parse(
                    JSON.stringify(res.data.data.unvalidDate)
                  ).substr(0, 10);
                this.infor.workDate = util.isEmpty(res.data.data.workDate)
                  ? ""
                  : JSON.parse(JSON.stringify(res.data.data.workDate)).substr(
                    0,
                    10
                  );
                this.infor.entryDate = util.isEmpty(res.data.data.entryDate)
                  ? ""
                  : JSON.parse(
                    JSON.stringify(res.data.data.entryDate)
                  ).substr(0, 10);
                this.infor.graduateDate = util.isEmpty(
                  res.data.data.graduateDate
                )
                  ? ""
                  : JSON.parse(
                    JSON.stringify(res.data.data.graduateDate)
                  ).substr(0, 10);
                // this.userForm.personCode =  res2Obj.personCode;
                let workType = [];
                this.infor.workTypeList.map((value, index) => {
                  this.workTypeList.map(val => {
                    val.flagdataValue * 1 === value
                      ? workType.push(val.flagdataValueRemark)
                      : "";
                    return;
                  });
                });
                this.infor.workType = workType.join("、");
                let privice = null;
                let citys = null;
                let countrys = null;
                this.addressData.map(items => {
                  if (!util.isEmpty(this.infor.provinceId)) {
                    items.value === this.infor.provinceId
                      ? (privice = items)
                      : "";
                  } else {
                    return;
                  }
                });
                if (!util.isEmpty(privice)) {
                  privice.children.map(itemsh => {
                    if (!util.isEmpty(this.infor.cityId)) {
                      itemsh.value === this.infor.cityId
                        ? (citys = itemsh)
                        : "";
                    }
                  });
                }

                if (!util.isEmpty(citys)) {
                  citys.children.map(itemx => {
                    if (!util.isEmpty(this.infor.countyId)) {
                      itemx.value === this.infor.countyId
                        ? (countrys = itemx)
                        : "";
                    }
                  });
                }
                this.infor.addres =
                  !util.isEmpty(privice) &&
                    !util.isEmpty(citys) &&
                    !util.isEmpty(countrys)
                    ? privice.label + citys.label + countrys.label
                    : "";
              } else {
                this.infor = {};
              }
            });
          }
        }
      });
      this.$store.dispatch("getCustomReportHpDict", {
        hospitalId: this.$store.state.userInfoObj.hospitalId
      })
        .then(res => {
          if (res.data.code === 200) {
            this.tables.homePageData = res.data.data.list;
            this.tables.homePageData.map(val => {
              val.size = val.lineNo + "*" + val.columnNo;
            });
          } else {
            util.showMsg(this, res.data);
          }
        });
      // 资源信息表头
      this.$store.dispatch("getCustomReportDict", { reportType: 3 })
        .then(res => {
          if (res.data.code === 200) {
            this.arrays.nameList = res.data.data.list;
          } else {
            util.showMsg(this, res.data);
          }
        });

      let datas = {
        userId: this.$store.state.userInfoObj.userId,
        groupType: "1,2",
        hospitalId: this.$store.state.userInfoObj.hospitalId
      };
      // this.zyzPoeserLoading = true
      this.$store.dispatch("getUserGroupResourcess", datas).then(res => {
        if (res.data.code === 200) {
          // console.log(res.data.data.list)
          let reslist = JSON.parse(JSON.stringify(res.data.data.list));
          reslist.map(val => {
            if (!util.isEmpty(val.resourceName)) {
              this.datahavezyFB.push(val);
            }
          });
          let i = 0;
          let y = this.datahavezyFB.length;
          for (i; i < y; i++) {
            const index = util.indexOfObject(
              i,
              this.datahavezyFB,
              "resourceType"
            );
            if (index != -1) {
              if (i === 1) {
                this.tables.resourcesColumns.push({
                  key: "hbKey",
                  title: "号表权限"
                });
              } else if (i === 2) {
                this.tables.resourcesColumns.push({
                  key: "fztKey",
                  title: "分诊台权限"
                });
              } else if (i === 3) {
                this.tables.resourcesColumns.push({
                  key: "ksKey",
                  title: "科室权限"
                });
              } else if (i === 4) {
                this.tables.resourcesColumns.push({
                  key: "yfKey",
                  title: "药房权限"
                });
              } else if (i === 5) {
                this.tables.resourcesColumns.push({
                  key: "ykKey",
                  title: "药库权限"
                });
              } else if (i === 6) {
                this.tables.resourcesColumns.push({
                  key: "dsfKey",
                  title: "第三方系统权限"
                });
              } else if (i === 7) {
                this.tables.resourcesColumns.push({
                  key: "zdyKey",
                  title: "自定义报表权限"
                });
              } else if (i === 8) {
                this.tables.resourcesColumns.push({
                  key: "cdKey",
                  title: "菜单权限"
                });
              } else if (i === 9) {
                this.tables.resourcesColumns.push({
                  key: "cbbKey",
                  title: "C#报表权限"
                });
              }
            }
          }
          this.getResourcesData();
        } else {
          util.showMsg(this, res.data);
        }
      });
    },
    //获取资源信息表格
    getResourcesData () {
      let hbarry = [];
      let fztarry = [];
      let ksarry = [];
      let yfarry = [];
      let ykarry = [];
      let dsfarry = [];
      let zdyarry = [];
      let cdarry = [];
      let cbbarry = [];
      let allarry = [];
      this.datahavezyFB.map(val => {
        if (val.resourceType * 1 === 1) {
          hbarry.push({
            hbKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 2) {
          fztarry.push({
            fztKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 3) {
          ksarry.push({
            ksKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 4) {
          yfarry.push({
            yfKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 5) {
          ykarry.push({
            ykKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 6) {
          dsfarry.push({
            dsfKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 7) {
          zdyarry.push({
            zdyKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 8) {
          cdarry.push({
            cdKey: val.resourceName
          });
        } else if (val.resourceType * 1 === 9) {
          cbbarry.push({
            cbbKey: val.resourceName
          });
        }
      });
      hbarry.map(val1 => {
        allarry.push(val1);
      });
      fztarry.map((val2, index2) => {
        allarry.length - 1 >= index2
          ? (allarry[index2].fztKey = val2.fztKey)
          : allarry.push(val2);
      });
      ksarry.map((val3, index3) => {
        allarry.length - 1 >= index3
          ? (allarry[index3].ksKey = val3.ksKey)
          : allarry.push(val3);
      });
      yfarry.map((val4, index4) => {
        allarry.length - 1 >= index4
          ? (allarry[index4].yfKey = val4.yfKey)
          : allarry.push(val4);
      });
      ykarry.map((val5, index5) => {
        allarry.length - 1 >= index5
          ? (allarry[index5].ykKey = val5.ykKey)
          : allarry.push(val5);
      });
      dsfarry.map((val6, index6) => {
        allarry.length - 1 >= index6
          ? (allarry[index6].dsfKey = val6.dsfKey)
          : allarry.push(val6);
      });
      zdyarry.map((val7, index7) => {
        allarry.length - 1 >= index7
          ? (allarry[index7].zdyKey = val7.zdyKey)
          : allarry.push(val7);
      });
      cdarry.map((val8, index8) => {
        allarry.length - 1 >= index8
          ? (allarry[index8].cdKey = val8.cdKey)
          : allarry.push(val8);
      });
      cbbarry.map((val9, index9) => {
        allarry.length - 1 >= index9
          ? (allarry[index9].cbbKey = val9.cbbKey)
          : allarry.push(val9);
      });
      this.tables.resourcesData = allarry;
    },
    saveEditPass () {
      //输密码窗口
      this.$refs["editPasswordForm"].validate(valid => {
        if (valid) {
          let params = {
            loginName: this.$store.state.userInfoObj.loginName,
            oldPsw: this.editPasswordForm.oldPass.toString(),
            newPsw: this.editPasswordForm.newPass.toString()
          };
          this.$store.dispatch("updSysUserpwd", params).then(res => {
            if (res.data.code === 200) {
              this.editPasswordModal = false;
              this.save_loading = false;
              util.showMsg(this, { succ: "密码修改成功" });
              Cookies.set(
                "password",
                this.editPasswordForm.newPass.toString(),
                7
              );
            } else {
              util.showMsg(this, res.data);
            }
          });
        } else {
        }
      });
    },
    reset () {
      this.resources = false;
      this.flag.basic = false;
      this.flag.resources = false;
      this.flag.homePage = false;
    },
    resourcesReset () {
      this.arrays.resourcesList.map(val => {
        val.flag = false;
      });
    },
    clickTab (item) {
      this.reset();
      this.arrays.title.map(val => {
        val.flag = false;
      });
      item.flag = true;
      if (item.text === "基本信息") {
        this.flag.basic = true;
      } else if (item.text === "资源信息") {
        this.resources = true;
        this.flag.resources = true;
      } else if (item.text === "首页信息") {
        this.flag.homePage = true;
      }
    },
    clickResourcesTab (item) {
      this.resourcesReset();
      item.flag = true;
    },
    addHomePage (name) {
      this.showModal.homePageAction = true;
      this.$refs[name].resetFields();
      this.homePageCurTable = {};
      this.homePageCurTable.columnNo = 1;
      this.homePageCurTable.lineNo = 1;
    },
    homePageHandleReset (name) {
      this.showModal.homePageAction = false;
      this.$refs[name].resetFields();
    },
    addOrModify () {
      this.$refs["homePageCurTable"].validate(valid => {
        if (valid) {
          if (util.isEmpty(this.homePageCurTable.customReportHpId)) {
            this.homePageAddAjax();
          } else {
            this.homePageUpdateAjax();
          }
        }
      });
    },
    homePageAddAjax () {
      let data = {
        columnNo: this.homePageCurTable.columnNo,
        hospitalId: this.$store.state.userInfoObj.hospitalId,
        lineNo: this.homePageCurTable.lineNo,
        reportId: this.homePageCurTable.reportId,
        userId: this.$store.state.userInfoObj.userId
      };
      this.$store.dispatch("addCustomReportHpDict", data).then(res => {
        this.showModal.homePageAction = false;
        if (res.data.code === 200) {
          this.init();
        } else {
          util.showMsg(this, res.data);
        }
      });
    },
    homePageUpdateAjax () {
      let data = {
        dataVersion: this.homePageCurTable.dataVersion,
        customReportHpId: this.homePageCurTable.customReportHpId,
        columnNo: this.homePageCurTable.columnNo,
        hospitalId: this.homePageCurTable.hospitalId,
        lineNo: this.homePageCurTable.lineNo,
        reportId: this.homePageCurTable.reportId,
        userId: this.homePageCurTable.userId
      };
      this.$store.dispatch("updateCustomReportHpDict", data).then(res => {
        this.showModal.homePageAction = false;
        util.showMsg(this, res.data);
        if (res.data.code === 200) {
          this.init();
        } else {
          util.showMsg(this, res.data);
        }
      });
    },
    // 确认删除
    remove (index) {
      this.curIndex = index;
      this.showModal.homePageDelMsg =
        "确定要删除【" + this.tables.homePageData[index].shiftName + "】吗？";
      this.showModal.homePageShowDel = true;
    },
    // 删除
    homePageDel () {
      let data = {
        id: this.tables.homePageData[this.curIndex].customReportHpId
      };
      this.$store.dispatch("delCustomReportHpDict", data).then(res => {
        util.showMsg(this, res.data);
        this.showModal.homePageShowDel = false;
        if (res.data.code === 200) {
          this.init();
        } else {
          util.showMsg(this, res.data);
        }
      });
    },
    change (e) {
      this.file = e.target.files[0];
      e.target.value = "";
    },
    sendAvatar (file) {
      const formData = new FormData()
      formData.append('multipartFile', file)
      util.ajax({
        method: 'post',
        url: this.uploadUrl,
        data: formData,
      }).then(res => {
        const imgPath = res.data.data || ''
        this.$store.commit('setLocalStorageAvator', imgPath)
        this.$store.commit('setUserImg', imgPath)
        Cookies.set('avatar', imgPath)
      })
    }
  },
  mounted () {
    this.$store.state.userInfoObj.name == "SUPERADMIN" ||
      this.$store.state.userInfoObj.name == "admin"
      ? (this.adminShow = true)
      : "";
    this.addressData = this.app.vShow.addressData;
    this.init();
    this.$store.dispatch("getFDAttr", { flagdataCode: "FD000192" }).then(res => {
      //获取fd数据
      if (res.data.code !== 200) {
        util.showMsg(this, { diy: res.data.message });
      } else {
        this.workTypeList = res.data.data;
      }
    });
    this.tableHightRt = $("#rights").height() - 30;
  }
};
</script>

<style lang="less" scoped>
@import "../../styles/common.less";
.ownspace_index p {
  font-size: 18px;
  height: 32px;
  margin: 10px 0;
  line-height: 32px;
  cursor: pointer;
  border-right: 2px solid #fff;
}
.ownspace_index .iconfont {
  font-size: 20px;
  vertical-align: middle;
}
.ownspace_index .ry-border-bg {
  border-right: 2px solid;
}
.ownspace_index .right {
  height: 100%;
}
.ownspace_index .basic > div {
  width: 48%;
  height: 48px;
}
.ownspace_index .square {
  list-style: square;
}
</style>
<style lang='less'>
.ownspace_index {
  .ivu-avatar {
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 50px;
    cursor: pointer;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  .avatar-container {
    margin-top: 20px;
    height: 100px;
    .cover {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      height: 100px;
      width: 100px;
      line-height: 100px;
      border-radius: 50px;
    }
    &:hover {
      .cover {
        display: block;
        background: rgba(0, 0, 0, 0.2);
        color: #fff;
      }
    }
  }
  .ivu-upload-drag {
    background: transparent;
    box-sizing: border-box;
    border: 0;
  }
  .ivu-upload-list {
    display: none;
  }

  .file-box {
    display: inline-block;
    position: absolute;
    padding: 3px 5px;
    overflow: hidden;
    color: #fff;
    height: 100px;
    width: 100px;
    top: 0;
    left: 0;
    border-radius: 50px;
  }
  .file-btn {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    outline: none;
    background-color: transparent;
    opacity: 0;
  }
}
.homePageCurTable .ivu-form-item-error-tip {
  left: 80px !important;
}
.formClasss .ivu-form-item {
  margin-bottom: 2px !important;
}
.formClasss .ivu-form-item-content {
  display: flex;
  justify-content: flex-start;
}
</style>



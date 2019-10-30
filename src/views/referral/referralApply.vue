<template>
  <div>
    <Button @click='clickHeight'>点击改变高度</Button>
    <p :class="test?'aaa':'bbb'">
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
      <Input v-model="value"
             placeholder="Enter something..."
             style="width: 300px" />
    </p>

    <Input v-model="value"
           placeholder="Enter something..."
           style="width: 300px;margin-top:30px" />
    <h1>测试的页面</h1>
    <Table :columns="columns"
           :data="data">
      <template slot-scope="{ row, index }"
                slot="name">
        <Input type="text"
               v-model="editName"
               v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{ row, index }"
                slot="age">
        <Input type="text"
               v-model="editAge"
               v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>

      <template slot-scope="{ row, index }"
                slot="birthday">
        <Input type="text"
               v-model="editBirthday"
               v-if="editIndex === index" />
        <span v-else>{{ (row.birthday) }}</span>
      </template>

      <template slot-scope="{ row, index }"
                slot="address">
        <Input type="text"
               v-model="editAddress"
               v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>

      <template slot-scope="{ row, index }"
                slot="action">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)"
                  type="primary">保存</Button>
          <Button @click="editIndex = -1"
                  style="margin-left:10px">取消</Button>
        </div>
        <div v-else>
          <Tooltip placement="top"
                   theme='light'
                   content="操作">
            <Icon @click="handleEdit(row, index)"
                  type="ios-brush-outline" />
          </Tooltip>
        </div>
      </template>
    </Table>
    <Button type="primary"
            @click="download">下载</Button>

    <div style="margin-top:20pox">
      <Form ref="formValidate"
            :model="formValidate"
            :rules="ruleValidate"
            :label-width="80">
        <FormItem label="Name"
                  prop="name">
          <Input v-model="formValidate.name"
                 placeholder="Enter your name" />
        </FormItem>
        <FormItem label="E-mail"
                  prop="mail">
          <Input v-model="formValidate.mail"
                 placeholder="Enter your e-mail" />
        </FormItem>
        <FormItem label="City"
                  prop="city">
          <Select v-model="formValidate.city"
                  placeholder="Select your city">
            <Option value="beijing">New York</Option>
            <Option value="shanghai">London</Option>
            <Option value="shenzhen">Sydney</Option>
          </Select>
        </FormItem>
        <FormItem label="Date">
          <Row>
            <i-Col span="11">
              <FormItem prop="date">
                <DatePicker type="date"
                            placeholder="Select date"
                            v-model="formValidate.date"></DatePicker>
              </FormItem>
            </i-Col>
            <i-Col span="2"
                   style="text-align: center">-</i-Col>
            <i-Col span="11">
              <FormItem prop="time">
                <TimePicker type="time"
                            placeholder="Select time"
                            v-model="formValidate.time"></TimePicker>
              </FormItem>
            </i-Col>
          </Row>
        </FormItem>
        <FormItem label="Gender"
                  prop="gender">
          <RadioGroup v-model="formValidate.gender">
            <Radio label="male">Male</Radio>
            <Radio label="female">Female</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="Hobby"
                  prop="interest">
          <CheckboxGroup v-model="formValidate.interest">
            <Checkbox label="Eat"></Checkbox>
            <Checkbox label="Sleep"></Checkbox>
            <Checkbox label="Run"></Checkbox>
            <Checkbox label="Movie"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem label="Desc"
                  prop="desc">
          <Input v-model="formValidate.desc"
                 type="textarea"
                 :autosize="{minRows: 2,maxRows: 5}"
                 placeholder="Enter something..." />
        </FormItem>
        <FormItem>
          <Button type="primary"
                  @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')"
                  style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
import { isObject } from '@/libs/util'
export default {
  name: 'newMange',
  data () {
    return {
      test: 100,
      value: '',
      columns: [
        {
          title: '姓名',
          slot: 'name'
        },
        {
          title: '年龄',
          slot: 'age'
        },
        {
          title: '出生日期',
          slot: 'birthday'
        },
        {
          title: '地址',
          slot: 'address'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      data: [
        {
          name: '王小明',
          age: 18,
          birthday: '2019-10-10',
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          birthday: '1999-10-20',
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          birthday: '2000-10-30',
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          birthday: '1998-06-03',
          address: '深圳市南山区深南大道'
        }
      ],
      editIndex: -1,  // 当前聚焦的输入框的行数
      editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editAge: '',  // 第二列输入框
      editBirthday: '',  // 第三列输入框
      editAddress: '',  // 第四列输入框
      formValidate: {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
          { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
          { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
          { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        date: [
          { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
          { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        desc: [
          { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      },
      someObject: {
        some: '这是啥',
        somebb: '你猜这是啥'
      }
    }
  },
  methods: {
    download () {
      const url = "文件地址"
      axios.get(url, {
        responseType: 'blob'
      }).then(res => {
        let blob = new Blob([res.data])
        let downloadElement = document.createElement('a')
        let href = window.URL.createObjectURL(blob); //创建下载的链接
        downloadElement.href = href;
        downloadElement.download = `new name`; //下载后文件名
        document.body.appendChild(downloadElement);
        downloadElement.click(); //点击下载
        document.body.removeChild(downloadElement); //下载完成移除元素
        window.URL.revokeObjectURL(href); //释放blob对象
      })

    },
    handleEdit (row, index) {
      this.editName = row.name;
      this.editAge = row.age;
      this.editAddress = row.address;
      this.editBirthday = row.birthday;
      this.editIndex = index;
    },
    handleSave (index) {
      this.data[index].name = this.editName;
      this.data[index].age = this.editAge;
      this.data[index].birthday = this.editBirthday;
      this.data[index].address = this.editAddress;
      this.editIndex = -1;
    },
    getBirthday (birthday) {
      const date = new Date(parseInt(birthday));
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${year}-${month}-${day}`;
    },
    // form表单的
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('请完善信息');
        }
      })
    },
    // form表单重置的
    handleReset (name) {
      this.$refs[name].resetFields();
    },
    clickHeight () {
      if (isObject(this.someObject)) {
        debugger
      }
      this.test = !this.test
      this.someObject = Object.assign({}, this.someObject, { a: '对象1', b: '对象2' })
      console.log(this.someObject)
    }
  },
}
</script>
<style lang="less" scoped>
.aaa {
  width: 500px;
  height: 100px;
  border: 2px solid red;
  overflow: hidden;
}
.bbb {
  width: 500px;
  border: 2px solid red;
}
</style>
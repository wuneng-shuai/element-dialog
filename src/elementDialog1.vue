<!--suppress ALL -->
<template>
  <!--suppress HtmlUnknownTag -->
  <el-dialog title="自定义弹窗框demo" :visible.sync="visible">
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="姓名" >
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form ref="form" :model="formData" label-width="80px">
        <el-form-item label="年龄">
          <el-input v-model="formData.age"></el-input>
        </el-form-item>
        <el-form-item label="电话1">
          <el-input v-model="formData.phone1"></el-input>
        </el-form-item>
        <el-form-item label="电话2">
          <el-input v-model="formData.phone2"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="$closeDialog(false)">取消</el-button>
      </el-form-item>
    </el-form>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name:'ElementDialog',
  props: {
    form:Object,
  },
  created() {
    this.loadData()
  },
  data() {
    return {
      formData: {
        name: '',
        age: '',
        phone1:'',
        phone2:"",
      },
      visible: false,
    }
  },
  methods:{
    onSubmit(){
      this.$closeDialog(true)
    },
    loadData(){
      this.formData=this.form
      const phone=this.formData.phone
      this.$set(  this.formData,'phone1', phone.split(',')[0])
      this.$set(  this.formData,'phone2' ,phone.split(',')[1])
    }
  }
};
</script>

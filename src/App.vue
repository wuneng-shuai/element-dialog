<template>
  <div id="app">
    <el-button type="primary" @click="open1" size="small">编程式打开ElementUI Dialog1</el-button>
    <el-button type="primary" @click="open2" size="small">编程式打开ElementUI Dialog2</el-button>
  </div>
</template>

<script>
import elementDialog1 from "./elementDialog1";
import elementDialog2 from './elementDialog2'
export default {
  name: 'App',
  data(){
    return{
      form: {
        name: '测试',
        age: '23',
        phone:"134xxxxxxxx,151xxxxxxxx"
      },
    }
  },
  methods: {
     open1() {
      const phone1=this.form.phone.split(',')[0]
      const phone2=this.form.phone.split(',')[0]
         this.$openDialog(elementDialog1)({
          form:{
            ...this.form,
            phone1,
            phone2
          },
        }).then(()=>{
         this.$message.success('编辑成功');
       }).catch( ()=>{
           this.$message.info('取消编辑');
         })
    },
    open2(){
  this.$openDialog(elementDialog2)({})
      .then(()=>{
        this.$message.success('确定')
      }).catch(()=>{
        this.$message.info('取消')
  })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

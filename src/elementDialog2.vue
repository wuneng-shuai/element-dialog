<!--suppress ALL -->
<template>
  <!--suppress HtmlUnknownTag -->
  <el-dialog title="自定义弹窗框demo" :visible.sync="visible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
 <div class="demobox">
   <el-button type="primary" @click="$closeDialog(true)">确定</el-button>
   <el-button @click="$closeDialog(false)">取消</el-button>
 </div>
    </el-dialog>
</template>

<script>
export default {
  name:'ElementDialog',
  data() {
    return {
      gridData: [
          {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }
      ],
      visible: false,
    }
  },
};
</script>
<style>
.demobox{
  margin-top: 10px;
  text-align: center;
}
</style>
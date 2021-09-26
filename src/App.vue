<template>
  <h1>jsonpath提取</h1>
  <el-row :gutter="20">
    <el-col :span="12">
      <div>
        <el-input
            v-model="text"
            autosize
            type="textarea"
            placeholder="Please input"
        />
        <el-button type="primary" style="margin-top: 20px" @click="convert">转换</el-button>
      </div>
    </el-col>
    <el-col :span="12">
      <div>
        <JsonPicker :code="code" @path="test"></JsonPicker>
      </div>
    </el-col>
  </el-row>

</template>

<script>
import JsonPicker from './components/JsonPicker.vue'
import { ElMessageBox } from 'element-plus'

export default {
  name: 'App',
  data() {
    return {
      text: '',
      code: {
        "result": 1,
        "dynamicIconV2": {
          "result": 1,
          "isLive": false,
          "type": 3,
          "photoCount": 254
        },
        "llsid": 2000927706048274978,
        "host-name": "public-fk-c-kce-node40.idczw.hb1.kwaidc.com",
        "shieldNextPhoto": false
      }
    }
  },
  methods: {
    convert() {
      try {
        this.code = JSON.parse(this.text)
      }catch (e) {
        console.log(e)
        ElMessageBox.alert('json格式错误', '警告', {
          confirmButtonText: 'OK',
          callback: (action) => {
          },
        })
      }
    },
    test(val){
      ElMessageBox.alert("$."+val, 'JsonPath表达式', {
        confirmButtonText: 'OK',
        callback: (action) => {
        },
      })
    }
  },
  components: {
    JsonPicker
  }
}
</script>
<style lang="css">
.el-textarea > textarea{
    height: 500px!important;
  }


</style>

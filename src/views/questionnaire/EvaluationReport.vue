<template>
  <div>
    <div class="evaluation-report-page">
      <div class="userInfo-table table-box">
        <div class="table-header">
          基本信息
        </div>
        <div class="row flex">
          <div>就诊时间</div>
          <div>{{userInfo.consultationDate}}</div>
          <div>姓名</div>
          <div>{{userInfo.patientName}}</div>
        </div>
        <div class="row flex">
          <div>年龄</div>
          <div>{{getAge(userInfo.birthday)}}</div>
          <div>电话</div>
          <div>{{userInfo.phone}}</div>
        </div>
        <div class="row flex">
          <div>ID号</div>
          <div>{{userInfo.idCardNum}}</div>
          <div>性别</div>
          <div>{{userInfo.gender}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAge } from '@/utils/commonFtn.js'
import {
  getPatientInfoById,
} from '@/api/mtms'
export default {
  name: 'EvaluationReport',
  props: ['patientId', 'assessmentId'],
  data () {
    return {
      userInfo: {}
    }
  },
  mounted () {
    this.getAllInfo()
  },
  methods: {
    getAllInfo () {
      if (this.patientId) {
        this.getPatientInfo()
      }
    },
    getAge (data) {
      return getAge(data)
    },
    getPatientInfo () {
      getPatientInfoById(this.patientId).then(res => {
        console.log('用户信息：', res)
        let { data } = res
        if (data) {
          let { gender } = data
          this.userInfo = data
          gender === 1 ? this.userInfo.gender = '男' : gender === 2 ? this.userInfo.gender = '女' : this.userInfo.gender = '未知'
        }
      })
    }
  },
  watch: {
    patientId: {
      handler (v) {
        if (v) {
          this.getAllInfo()
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="less">
.evaluation-report-page {
  .table-box {
    width: 800px;
    .table-header {
      height: 50px;
      line-height: 50px;
      background: #f5f5f5;
      font-weight: bold;
      text-align: center;
      border: 1px solid #e4e3de;
    }
    .row {
      border-left: 1px solid #e4e3de;
      border-right: 1px solid #e4e3de;
      > div {
        border-bottom: 1px solid #e4e3de;
        border-right: 1px solid #e4e3de;
        padding: 0 10px;
      }
      > div:last-child {
        border-right: none;
      }
    }
  }
  //
  .userInfo-table {
    .row > div {
      width: 200px;
      height: 50px;
      line-height: 50px;
      background-color: #fcf8e3;
    }
  }
}
</style>

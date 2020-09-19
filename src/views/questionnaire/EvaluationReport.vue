<template>
  <div>
    <div class="evaluation-report-page">
      <!-- 基本信息 -->
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
      <!-- 既往史 -->
      <div class="history-table table-box">
        <div class="table-header">
          既往史
        </div>
        <table>
          <tr>
            <td>既往病史</td>
            <td>
              <a-tag color="green"
                     v-for="(item, index) in historyMed"
                     :key="index">{{item.diseaseName}}</a-tag>
            </td>
          </tr>
          <tr>
            <td>既往手术史</td>
            <td></td>
          </tr>
        </table>
      </div>
      <!-- 生活方式 -->
      <div class="life-table table-box">
        <div class="table-header">
          生活方式
        </div>
        <div class="row flex">
          <div>总结</div>
          <div class="flex_one">
            <a-input placeholder="输入建议..."
                     v-model="lifestyleSummary" />
          </div>
          <div>
            <a-button type="primary"
                      @click="saveLifestyleSummary">
              保存
            </a-button>
          </div>
        </div>
      </div>
      <!-- 用药依从性 -->
      <div class="medResult-table table-box">
        <div class="table-header">
          用药依从性
        </div>
        <div class="row flex">
          <div>得分：{{morCountScore}}</div>
          <div class="flex_one">
            {{description}}
          </div>
        </div>
      </div>
      <!-- 问题计划 -->
      <div class="problemPlan-table table-box">
        <div class="table-header">
          问题/计划
          <a-button type="link"
                    class="save-btn"
                    @click="pushData">
            添加
          </a-button>
        </div>
        <div class="row flex"
             v-for="(item,index) in proPlaData">
          <div>{{index+1}}</div>
          <div class="problem-td">
            <a-input placeholder="发现问题"
                     v-model="item.problemDesc" />
          </div>
          <div class="flex_one">
            <a-input placeholder="干预计划"
                     v-model="item.interventionPlan" />
          </div>
          <div v-if="!item.saved"
               class="action-td">
            <a-button type="link"
                      @click="deleteData(index)">
              删除
            </a-button>
            <a-button type="link"
                      @click="confirmData(index)">
              保存
            </a-button>
          </div>
        </div>
      </div>
      <!-- 转归 -->
      <div class="back-table table-box">
        <div class="table-header">
          转归
        </div>
        <div class="row flex">
          <div class="flex_one">
            <a-input placeholder="转归详情"
                     v-model="sequelae" />
          </div>
          <div>
            <a-button type="link"
                      @click="confirmDataBack">
              保存
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAge } from '@/utils/commonFtn.js'
import {
  getPatientInfoById,
  getPastMedicalHistory,
  saveLifestyleSummary,
  getPastSurgicalHistories,
  getMoriskyInfo,
  saveEvaluationReportProblem,
  saveSequelae
} from '@/api/mtms'
export default {
  name: 'EvaluationReport',
  props: ['patientId', 'assessmentId'],
  data () {
    return {
      userInfo: {},
      historyMed: [],
      lifestyleSummary: '',
      proPlaData: [],
      morCountScore: '',
      description: '',
      sequelae: ''
    }
  },
  mounted () {
    this.getAllInfo()
  },
  methods: {
    getAllInfo () {
      if (this.patientId) {
        this.getPatientInfo()
        this.getPastMedicalHistory()
        this.getPastSurgicalHistories()
        this.getMoriskyInfo()
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
    },
    getPastMedicalHistory () {
      getPastMedicalHistory({ patientId: this.patientId }).then(res => {
        let { data } = res
        this.historyMed = data
      })
    },
    getPastSurgicalHistories () {
      getPastSurgicalHistories({ assessmentId: this.assessmentId, patientId: this.patientId }).then(res => {
        console.log('手术：', res)
      })
    },
    saveLifestyleSummary () {
      saveLifestyleSummary({ lifestyleSummary: this.lifestyleSummary, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getMoriskyInfo () {
      getMoriskyInfo({ assessmentId: this.assessmentId, patientId: this.patientId }).then(res => {
        console.log('getMoriskyInfo: ', res)
        this.morCountScore = res.data.morCountScore
        if (this.morCountScore) {
          if (this.morCountScore < 6) {
            this.description = '依从性差'
          } else if (this.morCountScore === 8) {
            this.description = '依从性好'
          } else {
            this.description = '依从性中等'
          }
        }
      })
    },
    pushData () {
      this.proPlaData.push({
        interventionPlan: '',
        problemDesc: '',
        saved: false
      })
    },
    deleteData (index) {
      this.proPlaData.splice(index, 1)
    },
    confirmData (index) {
      saveEvaluationReportProblem({
        assessmentIdthis: this.assessmentId,
        patientId: this.patientId,
        ...this.proPlaData[index]
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
          this.proPlaData[index].saved = true
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    confirmDataBack () {
      saveSequelae({
        assessmentId: this.assessmentId,
        sequelae: this.sequelae
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
          this.proPlaData[index].saved = true
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
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
  .table-box,
  table {
    width: 800px;
    .table-header {
      height: 50px;
      line-height: 50px;
      background: #f5f5f5;
      font-weight: bold;
      text-align: center;
      border: 1px solid #e4e3de;
    }
    .row,
    tr {
      border-left: 1px solid #e4e3de;
      border-right: 1px solid #e4e3de;
      input {
        border: none;
      }
      > div,
      > td {
        border-bottom: 1px solid #e4e3de;
        border-right: 1px solid #e4e3de;
        padding: 0 10px;
      }
      td {
        padding: 10px;
        min-height: 50px;
      }
      > div:last-child,
      > td:last-child {
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
  //
  .history-table td {
    background-color: #f9cccc;
  }
  //
  .life-table .row {
    > div {
      padding: 10px;
      background-color: #dff0d8;
    }
    > div:first-child,
    > div:last-child {
      width: 200px;
    }
  }
  //
  .problemPlan-table {
    .save-btn {
      float: right;
      margin-top: 10px;
    }
    .row {
      div {
        padding: 10px;
      }
      > div:first-child {
        width: 150px;
      }
      .problem-td {
        width: 300px;
      }
      .action-td {
        width: 100px;
      }
    }
  }
  //
  .medResult-table {
    .row {
      > div {
        padding: 10px;
      }
      > div:first-child {
        width: 100px;
      }
    }
  }
  //
  .back-table {
    .row {
      > div {
        padding: 10px;
      }
      > div:last-child {
        width: 100px;
      }
    }
  }
}
</style>

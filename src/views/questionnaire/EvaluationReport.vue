<template>
  <div>
    <div class="evaluation-report-page">
      <!-- 基本信息 -->
      <div class="userInfo-table table-box">
        <div class="table-header">
          （一）基本信息
        </div>
        <div class="row flex">
          <div class="label-div">就诊时间</div>
          <div>{{userInfo.consultationDate}}</div>
          <div class="label-div">姓名</div>
          <div>{{userInfo.patientName}}</div>
        </div>
        <div class="row flex">
          <div class="label-div">年龄</div>
          <div>{{userInfo.birthday&&getAge(userInfo.birthday)}}</div>
          <div class="label-div">电话</div>
          <div>{{userInfo.phone}}</div>
        </div>
        <div class="row flex">
          <div class="label-div">ID号</div>
          <div>{{userInfo.idCardNum}}</div>
          <div class="label-div">性别</div>
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
            <td class="label-div">既往病史</td>
            <td>
              <a-tag color="green"
                     v-for="(item, index) in historyMed"
                     :key="index">{{item.diseaseName}}</a-tag>
            </td>
          </tr>
          <tr>
            <td class="label-div">既往手术史</td>
            <td>
              <a-tag color="green"
                     v-for="(item, index) in pastSurgicalList"
                     :key="index">{{item.surgeryName}}</a-tag>
            </td>
          </tr>
          <tr>
            <td class="label-div">过敏史</td>
            <td>{{assessmentInfo.allergyHistory?'是':'否'}}</td>
          </tr>
          <tr>
            <td class="label-div">肝损害</td>
            <td>{{assessmentInfo.liverDamage?'是':'否'}}</td>
          </tr>
          <tr>
            <td class="label-div">肾损害</td>
            <td>{{assessmentInfo.kidneyDamage?'是':'否'}}</td>
          </tr>
        </table>
      </div>
      <!-- 药物不良反应史 -->
      <div class="table-box">
        <div class="table-header">
          药物不良反应史
        </div>
        <div class="table-div">
          <table>
            <tr>
              <td class="label-div">序号</td>
              <td class="label-div">药品名称</td>
              <td class="label-div">不良反应症状</td>
              <td class="label-div">发生时间</td>
            </tr>
            <tr :key="index"
                v-for="(item, index) in medicHostoryList">
              <td>
                <div>{{ index + 1 }}</div>
              </td>
              <td> {{item.medName}}</td>
              <td>
                <a-tag color="green"
                       v-for="(item, index) in historyMed"
                       :key="index">{{item.diseaseName}}</a-tag>
              </td>
              <td><span>{{item.occurrenceDatetime}}</span></td>
            </tr>
          </table>
        </div>
      </div>
      <!-- 现有症状 -->
      <div class="table-box">
        <div class="table-header">
          现有症状
        </div>
        <table>
          <tr>
            <td class="label-div">主诉</td>
            <td></td>
          </tr>
          <tr>
            <td class="label-div">诊断</td>
            <td></td>
          </tr>
          <tr>
            <td class="label-div">当前症状描述</td>
            <td></td>
          </tr>
        </table>
      </div>
      <!-- 生活方式 -->
      <div class="life-table table-box">
        <div class="table-header">
          生活方式
        </div>
        <div class="row flex row-one">
          <div class="label-div">身高</div>
          <div>{{userInfo.height}}</div>
          <div class="label-div">体重</div>
          <div>{{userInfo.weight}}</div>
        </div>
        <div class="row flex row-one">
          <div class="label-div">BMI</div>
          <div>{{userInfo.bmi}}</div>
          <div class="label-div">过去一年体重变化</div>
          <div>{{lifeStyle.weightChangeType === 1?'增加:':'减少:'}}{{lifeStyle.weightChangeValue}}kg</div>
        </div>
        <div class="row flex row-one">
          <div class="label-div">每日主食量</div>
          <div>{{lifeStyle.dailyBasicFoodAmount}}两</div>
          <div class="label-div">摄盐量</div>
          <div>{{getKeyValue(lifeStyle.dailySaltAmount)}}</div>
        </div>
        <div class="row flex row-one">
          <div class="label-div">油脂</div>
          <div>{{getKeyValue(lifeStyle.dailyFatAmount)}}</div>
          <div class="label-div">蔬菜水果</div>
          <div>{{getKeyValue(lifeStyle.dailyVegetableFruitAmount)}}</div>
        </div>
        <div class="row flex">
          <div class="label-div">吸烟</div>
          <div class="sec-label">
            <div class="label-div">吸烟量</div>
            <div class="label-div">吸烟年限</div>
            <div class="label-div">戒烟年限</div>
          </div>
          <div>
            <div>{{lifeStyle.smokingNum}}支/天</div>
            <div>{{lifeStyle.smokingYear}}年</div>
            <div>{{lifeStyle.quitSmokingTime}}年</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">饮酒</div>
          <div class="sec-label">
            <div class="label-div">饮酒量</div>
            <div class="label-div">饮酒年限</div>
          </div>
          <div>
            <div>{{lifeStyle.drinkingNum}}两/天</div>
            <div>{{lifeStyle.drinkingNum}}年</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">运动</div>
          <div class="sec-label">
            <div class="label-div">运动项目</div>
            <div class="label-div">每周运动时间</div>
          </div>
          <div>
            <div>{{lifeStyle.usualSports}}</div>
            <div>{{lifeStyle.eachExerciseTime}}分钟</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">睡眠/跌倒</div>
          <div class="sec-label">
            <div class="label-div">睡眠障碍</div>
            <div class="label-div">跌倒原因</div>
          </div>
          <div>
            <div>{{lifeStyle.sleepDisorderAmount}}次/周</div>
            <div>{{lifeStyle.fallReason}}</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">建议</div>
          <div class="flex_one">
          </div>
        </div>
      </div>
      <!-- 总结 -->
      <!-- <div class="row flex">
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
        </div> -->
      <!-- 费用 -->
      <div class="pay-table table-box">
        <div class="table-header">
          费用
        </div>
        <div class="expense-table">
          <div class="table-title row">
            <div>就诊前</div>
          </div>
          <div class="row flex">
            <div class="label-div">每月医疗总花费</div>
            <div>
              <span>{{lifeStyle.beforeTreatmentMonthlyTotal}}</span>
            </div>
            <div class="label-div">每月药费</div>
            <div>
              <span>{{lifeStyle.beforeTreatmentMonthlyMedicalExpenses}}</span>
            </div>
          </div>
          <div class="table-title row">
            <div>就诊3个月后</div>
          </div>
          <div class="flex row">
            <div class="label-div">每月医疗总花费(元)</div>
            <div>
              <span>{{lifeStyle.afterThreeMonthsTreatmentMonthlyTotal}}</span>
            </div>
            <div class="label-div">每月药费(元)</div>
            <div>
              <span>{{lifeStyle.afterThreeMonthsTreatmentMonthlyMedicalExpenses}}</span>
            </div>
          </div>
          <div class="table-title row">
            <div>就诊6个月后</div>
          </div>
          <div class="flex row">
            <div class="label-div">每月医疗总花费(元)</div>
            <div>
              <span>{{lifeStyle.afterSixMonthsTreatmentMonthlyTotal}}</span>
            </div>
            <div class="label-div">每月药费(元)</div>
            <div>
              <span>{{lifeStyle.afterSixMonthsTreatmentMonthlyMedicalExpenses}}</span>
            </div>
          </div>
          <div class="table-title row">
            <div>就诊12个月后</div>
          </div>
          <div class="flex row">
            <div class="label-div">每月医疗总花费(元)</div>
            <div>
              {{lifeStyle.afterTwelveMonthsTreatmentMonthlyTotal}}
            </div>
            <div class="label-div">每月药费(元)</div>
            <div>
              <span>{{lifeStyle.afterTwelveMonthsTreatmentMonthlyMedicalExpenses}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 用药记录 -->
      <div class="table-box">
        <div class="table-header">
          用药记录
        </div>
        <a-table :data-source="medRecordList"
                 class="mr_table"
                 :pagination="false"
                 bordered>
          <a-table-column key="useStartTime"
                          title="开始时间"
                          data-index="useStartTime">
            <template slot-scope="text, record">
              <span>{{record.useStartTime}}</span>
            </template>
          </a-table-column>
          <a-table-column key="useEndTime"
                          title="结束时间"
                          data-index="useEndTime">
            <template slot-scope="text, record">
              <span>{{record.useEndTime}}</span>
            </template>
          </a-table-column>
          <a-table-column key="medName"
                          title="药品名称"
                          data-index="medName">
            <template slot-scope="text, record">
              <span>{{record.medName}}</span>
            </template>
          </a-table-column>
          <a-table-column key="indication"
                          title="适应症"
                          data-index="indication">
            <template slot-scope="text, record">
              <span>{{record.indication}}</span>
            </template>
          </a-table-column>
          <a-table-column key="usage"
                          title="用法"
                          data-index="usage">
            <template slot-scope="text, record">
              <span>{{record.usage}}</span>
            </template>
          </a-table-column>
          <a-table-column key="dosageMonthly"
                          title="月用药量（盒）"
                          data-index="dosageMonthly">
            <template slot-scope="text, record">
              <span>{{record.dosageMonthly}}</span>
            </template>
          </a-table-column>
          <a-table-column key="remark"
                          title="备注（新增/停用）"
                          data-index="remark">
            <template slot-scope="text, record">
              {{record.remark}}
            </template>
          </a-table-column>
        </a-table>
      </div>
      <!--  -->
      <!-- 用药依从性 -->
      <!-- <div class="medResult-table table-box">
        <div class="table-header">
          用药依从性
        </div>
        <div class="row flex">
          <div>得分：{{morCountScore}}</div>
          <div class="flex_one">
            {{description}}
          </div>
        </div>
      </div> -->
      <!-- 问题计划 -->
      <div class="problemPlan-table table-box">
        <div class="table-header">
          问题及干预
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
            <a-textarea placeholder="发现问题"
                        v-model="item.problemDesc" />
          </div>
          <div class="flex_one">
            <a-textarea placeholder="干预计划"
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
            <a-textarea placeholder="转归详情"
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
      <!-- 随访复诊 -->
      <div class="visit-table table-box">
        <div class="table-header">
          随访复诊
        </div>
        <div class="row flex">
          <div class="label-div">下次随访时间</div>
          <div class="flex_one">
            <a-date-picker v-model="nextTime"
                           :valueFormat="'YYYY/MM/DD'"
                           :format="'YYYY/MM/DD'" />
          </div>
          <div v-if="!saved"
               class="action-td">
            <a-button type="link"
                      @click="confirmNextTime(index)">
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
  saveSequelae,
  getMedicationSideEffectList,
  getDiagnosis,
  getUseMedRecordList,
  getAssessmentInfo,
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
      sequelae: '',
      medicHostoryList: [], // 药物不良反应
      pastSurgicalList: [], //手术
      lifeStyle: [], // 生活方式
      medRecordList: [], // 用药记录,
      assessmentInfo: {},
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
        this.getMedicationSideEffectList()
        this.getDiagnosis()
        this.getUseMedRecordList()
        this.getAssessmentInfo()
      }
    },
    getKeyValue (value) {
      let _result = ''
      switch (value) {
        case 1: _result = '少'; break;
        case 2: _result = '中'; break;
        case 3: _result = '多'; break;
      }
      return _result
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
        console.log('既往病史：', res)
        let { data } = res
        this.historyMed = data
      })
    },
    getPastSurgicalHistories () {
      getPastSurgicalHistories({ assessmentId: this.assessmentId, patientId: this.patientId }).then(res => {
        console.log('手术：', res)
        let { data } = res
        if (data) {
          this.pastSurgicalList = data
        }
      })
    },
    getMedicationSideEffectList () {
      getMedicationSideEffectList({ patientId: this.patientId }).then(res => {
        console.log('药物不良反应：', res)
        let { data } = res
        if (data) {
          this.medicHostoryList = data
        }
      })
    },
    getDiagnosis () {
      getDiagnosis({
        assessmentId: this.assessmentId,
        patientId: this.patientId
      }).then(res => {
        console.log('现有症状：', res)

      })
    },
    getUseMedRecordList () {
      getUseMedRecordList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        this.medRecordList = rows
      })
    },
    getAssessmentInfo () {
      getAssessmentInfo({ patientId: this.patientId }).then(res => {
        console.log('评估记录: ', res)
        let { data } = res
        this.assessmentInfo = data
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
      background: #ffd965;
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
    }
  }
  //
  //
  .life-table {
    .row-one {
      > div {
        flex: 1;
      }
    }
  }
  .life-table .row {
    > div {
      padding: 10px;
    }
    .sec-label {
      padding: 0;
      .label-div {
        border-bottom: 1px solid #e4e3de;
      }
    }
    .sec-label + div {
      flex: 1;
      padding: 0;
      div {
        border-bottom: 1px solid #e4e3de;
        min-height: 50px;
        padding: 10px;
      }
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
  //

  .label-div {
    width: 200px;
    background: #d8d8d8;
    font-weight: bold;
    padding: 10px;
    min-height: 50px;
  }
  .table-title > div {
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .pay-table {
    .row > div {
      flex: 1;
      height: 50px;
      line-height: 50px;
      padding: 0 10px;
    }
  }
  .ant-table-body {
    table {
      border-right: 1px solid #e4e3de;
      .ant-table-row-cell-last {
        border-right: none;
      }
    }
  }
  .visit-table {
    .row {
      div {
        line-height: 50px;
      }
    }
  }
}
</style>

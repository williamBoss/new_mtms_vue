<template>
  <div>
    <div class="evaluation-report-page">
      <a-button type="primary" icon="reload" @click="getAllInfo">
        刷新本页面数据
      </a-button>
      <!-- 基本信息 -->
      <div class="userInfo-table table-box">
        <div class="table-header">
          基本信息
        </div>
        <div class="row flex">
          <div class="label-div">就诊时间</div>
          <div>{{ assessmentInfo.fillDate }}</div>
          <div class="label-div">姓名</div>
          <div>{{ userInfo.patientName }}</div>
        </div>
        <div class="row flex">
          <div class="label-div">年龄</div>
          <div>{{ userInfo.birthday && getAge(userInfo.birthday) }}</div>
          <div class="label-div">电话</div>
          <div>{{ userInfo.phone }}</div>
        </div>
        <div class="row flex">
          <div class="label-div">ID号</div>
          <div>{{ userInfo.patientSelfId }}</div>
          <div class="label-div">性别</div>
          <div>{{ userInfo.gender }}</div>
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
                     :key="index">{{ item.diseaseName }}
              </a-tag>
            </td>
          </tr>
          <tr>
            <td class="label-div">既往手术史</td>
            <td>
              <a-tag color="green"
                     v-for="(item, index) in pastSurgicalList"
                     :key="index">{{ item.surgeryName }}
              </a-tag>
            </td>
          </tr>
          <tr>
            <td class="label-div">过敏史</td>
            <td>{{ assessmentInfo ? assessmentInfo.allergyHistory ? '是' : '否' : '' }}</td>
          </tr>
          <tr>
            <td class="label-div">肝损害</td>
            <td>{{ assessmentInfo ? assessmentInfo.liverDamage ? '是' : '否' : '' }}</td>
          </tr>
          <tr>
            <td class="label-div">肾损害</td>
            <td>{{ assessmentInfo ? assessmentInfo.kidneyDamage ? '是' : '否' : '' }}</td>
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
              <td> {{ item.medName }}</td>
              <td>
                <span>{{ item.adverseReactionsSymptoms }}</span>
              </td>
              <td><span>{{ item.occurrenceDatetime }}</span></td>
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
            <td>{{ existingSymptoms.mainConsult }}</td>
          </tr>
          <tr>
            <td class="label-div">诊断</td>
            <td>{{ getDiseaseName(
              existingSymptoms.assessmentDiagnosisList ? existingSymptoms.assessmentDiagnosisList : []) }}
            </td>
          </tr>
          <tr>
            <td class="label-div">当前症状描述</td>
            <td>{{ getDesc }}</td>
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
          <div>{{ userInfo.height }}cm</div>
          <div class="label-div">体重</div>
          <div>{{ userInfo.weight }}kg</div>
        </div>
        <div class="row flex row-one">
          <div class="label-div">BMI</div>
          <div>{{ userInfo.bmi }}</div>
          <div class="label-div">过去一年体重变化</div>
          <div>{{ lifeStyle ? lifeStyle.weightChangeType === 1 ? '增加:' : '减少:' : '' }}{{ lifeStyle
            ? lifeStyle.weightChangeValue
            : '' }}kg
          </div>
        </div>
        <div class="row flex row-one">
          <div class="label-div">每日主食量</div>
          <div>{{ lifeStyle ? lifeStyle.dailyBasicFoodAmount : '' }}两</div>
          <div class="label-div">摄盐量</div>
          <div>{{ getKeyValue(lifeStyle ? lifeStyle.dailySaltAmount : '') }}</div>
        </div>
        <div class="row flex row-one">
          <div class="label-div">油脂</div>
          <div>{{ getKeyValue(lifeStyle ? lifeStyle.dailyFatAmount : '') }}</div>
          <div class="label-div">蔬菜水果</div>
          <div>{{ getKeyValue(lifeStyle ? lifeStyle.dailyVegetableFruitAmount : '') }}</div>
        </div>
        <div class="row flex">
          <div class="label-div">吸烟</div>
          <div class="sec-label">
            <div class="label-div">吸烟量</div>
            <div class="label-div">吸烟年限</div>
            <div class="label-div">戒烟年限</div>
          </div>
          <div>
            <div>{{ lifeStyle ? lifeStyle.smokingNum : '' }}支/天</div>
            <div>{{ lifeStyle ? lifeStyle.smokingYear : '' }}年</div>
            <div>{{ lifeStyle ? lifeStyle.quitSmokingTime : '' }}年</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">饮酒</div>
          <div class="sec-label">
            <div class="label-div">饮酒量</div>
            <div class="label-div">饮酒年限</div>
          </div>
          <div>
            <div>{{ lifeStyle ? lifeStyle.drinkingNum : '' }}两/天</div>
            <div>{{ lifeStyle ? lifeStyle.drinkingNum : '' }}年</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">运动</div>
          <div class="sec-label">
            <div class="label-div">运动项目</div>
            <div class="label-div">每周运动时间</div>
          </div>
          <div>
            <div>{{ lifeStyle ? lifeStyle.usualSports : '' }}</div>
            <div>{{ lifeStyle ? lifeStyle.eachExerciseTime : '' }}分钟</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">睡眠/跌倒</div>
          <div class="sec-label">
            <div class="label-div">睡眠障碍</div>
            <div class="label-div">跌倒原因</div>
          </div>
          <div>
            <div>{{ lifeStyle ? lifeStyle.sleepDisorderAmount : '' }}次/周</div>
            <div>{{ lifeStyle ? lifeStyle.fallReason : '' }}</div>
          </div>
        </div>
        <div class="row flex">
          <div class="label-div">建议</div>
          <div class="flex_one">
            {{ lifeStyle ? lifeStyle.lifestyleSummary : '' }}
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
      <!-- 患者生存质量表 -->
      <div class="pay-table table-box">
        <div class="table-header">
          患者生存质量
        </div>
        <div class="expense-table">
          <div class="row flex">
            <div class="label-div">用药依从性</div>
            <div>
              <span>得分：{{ morCountScore }}</span><span>{{ description }}</span>
            </div>
            <div class="label-div">EQ-5D-3L</div>
            <div>
              <span>得分：{{ eq5d3lScore }}</span>
            </div>
          </div>
          <div class="row flex">
            <div class="label-div">EQ-5D-5L</div>
            <div>
              <span>得分：{{ eq5d5lScore }}</span>
            </div>
            <div class="label-div">SDS焦虑抑郁量表</div>
            <div>
              <span>得分：{{ sdsScore }}</span>
            </div>
          </div>
          <div class="row flex">
            <div class="label-div">VAS疼痛评分</div>
            <div>
              <span>得分：{{ vasScore }}</span>
            </div>
            <div class="label-div">caprini静脉血栓评分</div>
            <div>
              <span>得分：{{ capriniScore }}</span>
            </div>
          </div>
        </div>
      </div>
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
            <div class="label-div">每月医疗总花费(元)</div>
            <div>
              <span>{{ lifeStyle ? lifeStyle.beforeTreatmentMonthlyTotal : '' }}</span>
            </div>
            <div class="label-div">每月药费(元)</div>
            <div>
              <span>{{ lifeStyle ? lifeStyle.beforeTreatmentMonthlyMedicalExpenses : '' }}</span>
            </div>
          </div>
          <div class="table-title row">
            <div>就诊3个月后</div>
          </div>
          <div class="flex row">
            <div class="label-div">每月医疗总花费(元)</div>
            <div>
              <span>{{ lifeStyle ? lifeStyle.afterThreeMonthsTreatmentMonthlyTotal : '' }}</span>
            </div>
            <div class="label-div">每月药费(元)</div>
            <div>
              <span>{{ lifeStyle ? lifeStyle.afterThreeMonthsTreatmentMonthlyMedicalExpenses : '' }}</span>
            </div>
          </div>
          <div class="table-title row">
            <div>就诊6个月后</div>
          </div>
          <div class="flex row">
            <div class="label-div">每月医疗总花费(元)</div>
            <div>
              <span>{{ lifeStyle ? lifeStyle.afterSixMonthsTreatmentMonthlyTotal : '' }}</span>
            </div>
            <div class="label-div">每月药费(元)</div>
            <div>
              <span>{{ lifeStyle ? lifeStyle.afterSixMonthsTreatmentMonthlyMedicalExpenses : '' }}</span>
            </div>
          </div>
          <div class="table-title row">
            <div>就诊12个月后</div>
          </div>
          <div class="flex row">
            <div class="label-div">每月医疗总花费(元)</div>
            <div>
              {{ lifeStyle ? lifeStyle.afterTwelveMonthsTreatmentMonthlyTotal : '' }}
            </div>
            <div class="label-div">每月药费(元)</div>
            <div>
              <span>{{ lifeStyle ? lifeStyle.afterTwelveMonthsTreatmentMonthlyMedicalExpenses : '' }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 药物治疗相关问题处理建议 -->
      <div class="table-box">
        <div class="table-header">
          药物治疗相关问题处理建议
        </div>
        <a-table :data-source="mpData"
                 class="mr_table"
                 :pagination="false"
                 :scroll="{ x: 800 }"
                 bordered>
          <a-table-column key="index"
                          title="序号"
                          :width="100"
                          data-index="index">
            <template slot-scope="text, record, index">{{ index + 1 }}</template>
          </a-table-column>
          <a-table-column key="diseaseName"
                          title="相关疾病"
                          :width="200"
                          data-index="diseaseName">

          </a-table-column>
          <a-table-column key="medName"
                          title="相关药物"
                          :width="200"
                          data-index="medName">
            <template slot-scope="text, record">
              <span>{{ record.medName }}</span>
            </template>
          </a-table-column>
          <a-table-column key="indicationses"
                          title="适应性"
                          :width="400"
                          data-index="indicationses">
            <template slot-scope="text, record">
              <div>
                <a-cascader :options="indicationsList"
                            :placeholder="'适应性'"
                            :fieldNames="{
                              label: 'medicationProblems'
                              ,
                              value: 'id'
                              ,
                              children: 'childList'
                            }"
                            v-model="record.indicationses" />
              </div>
              <div>
                <a-cascader :options="safetyList"
                            :placeholder="'安全性'"
                            :fieldNames="{
                              label: 'medicationProblems'
                              ,
                              value: 'id'
                              ,
                              children: 'childList'
                            }"
                            v-model="record.safeties" />
              </div>
              <div>
                <a-cascader :options="effectivenessList"
                            :placeholder="'有效性'"
                            :fieldNames="{
                              label: 'medicationProblems'
                              ,
                              value: 'id'
                              ,
                              children: 'childList'
                            }"
                            v-model="record.effectivenessies" />
              </div>
              <div>
                <a-cascader :options="complianceList"
                            :placeholder="'依从性'"
                            :fieldNames="{
                              label: 'medicationProblems'
                              ,
                              value: 'id'
                              ,
                              children: 'childList'
                            }"
                            v-model="record.compliances" />
              </div>
            </template>
          </a-table-column>
          <a-table-column key="detail"
                          title="具体问题"
                          :width="400"
                          data-index="detail">
            <template slot-scope="text, record">
              <span>{{ record.problem }}</span>
            </template>
          </a-table-column>
          <a-table-column key="detail"
                          title="处理建议"
                          :width="400"
                          data-index="detail">
            <template slot-scope="text, record">
              <span>{{ record.treatmentSuggestion }}</span>
            </template>
          </a-table-column>
          <a-table-column key="improve"
                          title="改善详情"
                          :width="400"
                          data-index="improve">
            <template slot-scope="text, record">
              <span>{{ record.improvementDetails }}</span>
            </template>
          </a-table-column>
        </a-table>
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
                      @click="confirmDataBack(index)">
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
import problemList from './problemConfig.js'
import {
  getPatientInfoById,
  getPastMedicalHistory,
  saveLifestyleSummary,
  getPastSurgicalHistories,
  getMoriskyInfo,
  saveEvaluationReportProblem,
  saveSequelae,
  getMedicationSideEffectList,
  getUseMedRecordList,
  getAssessmentInfo,
  getLifestyle,
  getExistingSymptoms,
  medicationProblemsDict,
  getMedicationProblem,
  getDiseaseList,
  getAllMed, getEq5d3lInfo, getEq5d5lInfo, getSDSlInfo, getVasInfo, getCapriniInfo
} from '@/api/mtms'

export default {
  name: 'EvaluationReport',
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      userInfo: {},
      historyMed: [],
      lifestyleSummary: '',
      proPlaData: [
        {
          interventionPlan: '',
          problemDesc: '',
          saved: false
        } ],
      morCountScore: '',
      eq5d3lScore: '',
      eq5d5lScore: '',
      sdsScore: '',
      vasScore: '',
      capriniScore: '',
      description: '',
      sequelae: '',
      medicHostoryList: [], // 药物不良反应
      pastSurgicalList: [], // 手术
      lifeStyle: {}, // 生活方式
      medRecordList: [], // 用药记录,
      assessmentInfo: {},
      existingSymptoms: {},
      //
      indicationsList: [],
      effectivenessList: [],
      safetyList: [],
      complianceList: [],
      mpData: [],
      painList: [],
      medicData: [],
      problemList
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
        this.getEq5d3lInfo()
        this.getEq5d5lInfo()
        this.getVasInfo()
        this.getCapriniInfo()
        this.getSDSlInfo()
        this.getMedicationSideEffectList()
        // this.getDiagnosis()
        this.getUseMedRecordList()
        this.getAssessmentInfo()
        this.getLifestyle()
        this.medicationProblemsDict()
        this.getMedicationProblem()
        this.getDiseaseList()
        this.getMedList()
        this.getExistingSymptoms()
      }
    },
    getKeyValue (value) {
      let _result = ''
      switch (value) {
        case 1:
          _result = '少'
          break
        case 2:
          _result = '中'
          break
        case 3:
          _result = '多'
          break
      }
      return _result
    },
    getAge (data) {
      return getAge(data)
    },
    getPatientInfo () {
      getPatientInfoById(this.patientId).then(res => {
        console.log('用户信息：', res)
        const { data } = res
        if (data) {
          const { gender } = data
          this.userInfo = data
          gender === 1 ? this.userInfo.gender = '男' : gender === 2
            ? this.userInfo.gender = '女'
            : this.userInfo.gender = '未知'
        }
      })
    },
    getPastMedicalHistory () {
      getPastMedicalHistory({ patientId: this.patientId }).then(res => {
        console.log('既往病史：', res)
        const { data } = res
        this.historyMed = data
      })
    },
    getPastSurgicalHistories () {
      getPastSurgicalHistories({ patientId: this.patientId }).then(res => {
        console.log('手术：', res)
        const { data } = res
        if (data) {
          this.pastSurgicalList = data
        }
      })
    },
    getMedicationSideEffectList () {
      getMedicationSideEffectList({ patientId: this.patientId }).then(res => {
        console.log('药物不良反应：', res)
        const { data } = res
        if (data) {
          this.medicHostoryList = data
        }
      })
    },
    getUseMedRecordList () {
      getUseMedRecordList({ patientId: this.patientId }).then(res => {
        const { rows } = res
        this.medRecordList = rows
      })
    },
    getAssessmentInfo () {
      getAssessmentInfo({ patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        console.log('评估记录: ', res)
        const { data } = res
        this.assessmentInfo = data
      })
    },
    getLifestyle () {
      getLifestyle({ patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        console.log('生活方式：', res)
        const { data } = res
        console.log(data)
        this.lifeStyle = data
      })
    },
    getExistingSymptoms () {
      getExistingSymptoms({ patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        const { data } = res
        console.log('现有症状1：', res)
        this.existingSymptoms = data
      })
    },
    medicationProblemsDict () {
      // 问题类型 1.适应症 2.有效性 3.安全性 4.依从性
      medicationProblemsDict({ problemType: 1 }).then(res => {
        console.log(res)
        const { data } = res
        this.indicationsList = data
      })
      medicationProblemsDict({ problemType: 2 }).then(res => {
        console.log(res)
        const { data } = res
        this.effectivenessList = data
      })
      medicationProblemsDict({ problemType: 3 }).then(res => {
        console.log(res)
        const { data } = res
        this.safetyList = data
      })
      medicationProblemsDict({ problemType: 4 }).then(res => {
        console.log(res)
        const { data } = res
        this.complianceList = data
      })
    },
    getMedicationProblem () {
      if (this.patientId) {
        getMedicationProblem({ patientId: this.patientId }).then(res => {
          const { data } = res
          if (data) {
            const { records } = data
            if (records) {
              this.mpData = records.filter(item => { return item.isResolved === 1 })
              console.log('获取药物问题记录:', this.mpData)
            }
          }
        })
      }
    },
    // 所有疾病列表
    getDiseaseList () {
      getDiseaseList({ pageSize: 1000 }).then(res => {
        console.log('所有病种：', res)
        const { rows } = res
        if (rows) {
          this.painList = rows
        }
      })
    },
    // 药物列表
    getMedList () {
      getAllMed().then(res => {
        console.log('药品列表：', res)
        const { data } = res
        if (data) {
          this.medicData = data
        }
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
        const { data } = res
        if (data) {
          this.morCountScore = data.morCountScore
        }
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
    getEq5d3lInfo () {
      getEq5d3lInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        console.log('Eq5d3l:', res)
        const { data } = res
        if (data) {
          this.eq5d3lScore = data.eq5d3lScore
        }
      })
    },
    getEq5d5lInfo () {
      getEq5d5lInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        console.log('Eq5d5l:', res)
        const { data } = res
        if (data) {
          this.eq5d5lScore = data.eq5d5lScore
        }
      })
    },
    getSDSlInfo () {
      getSDSlInfo({ patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        console.log('sds:', res)
        const { data } = res
        if (data) {
          this.sdsScore = data.sdsScore
        }
      })
    },
    getVasInfo () {
      getVasInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        console.log('vas:', res)
        const { data } = res
        if (data) {
          this.vasScore = data.vasScore
        }
      })
    },
    getCapriniInfo () {
      getCapriniInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        console.log('caprini:', res)
        const { data } = res
        if (data) {
          this.capriniScore = data.capriniScore
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
        ...this.proPlaData[ index ]
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
          this.proPlaData[ index ].saved = true
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    confirmDataBack (index) {
      saveSequelae({
        assessmentId: this.assessmentId,
        sequelae: this.sequelae
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
          this.proPlaData[ index ].saved = true
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getDiseaseName (arr) {
      if (arr.length > 0) {
        const _arr = []
        arr.forEach(item => {
          _arr.push(item.diseaseName)
        })
        return _arr.join(' ')
      } else {
        return ''
      }
    }
  },
  computed: {
    getDesc () {
      if (this.existingSymptoms) {
        // console.log('existingSymptoms: ', this.existingSymptoms)
        const _arr = []
        const keys = Object.keys(this.problemList)
        // console.log(keys)
        keys.forEach(key => {
          // console.log(key, this.existingSymptoms[key])
          if (this.existingSymptoms[ key ]) {
            this.existingSymptoms[ key ].forEach(num => {
              _arr.push(this.problemList[ key ][ num ])
            })
          }
        })
        return _arr.join(' ')
      } else {
        return ''
      }
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
      background: #1890ff;
      color: #ffffff;
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
    font-weight: bold;
    color: #333;
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

  .ant-table-row-cell-break-word {
  }

  /deep/ .ant-cascader-picker {
    width: 100% !important;

    .ant-input.ant-cascader-input {
      width: 100%;
    }

    // input {
    //   width: 100%;
    // }
  }

  /deep/ .ant-cascader-picker {
    width: 100%;
  }

  .ant-cascader-picker {
    width: 100%;
  }
}
</style>

<template>
  <div style="height:100%;margin-top: -25px;">
    <patient-info @onChangeCardContentWidth="onChangeCardContentWidth" ref="patientInfo" @patient-id="getPatientId" />
    <a-button type="link" @click="linkBackUp" style="margin-bottom: 20px;">
      <a-icon type="rollback" />
      患者信息
    </a-button>
    <a-card :bordered="false" :style="{ width: cardContentWidth }" ref="cardContent">
      <a-tabs
        :defaultActiveKey="'BasicInformation'"
        :active-key="activeKey"
        @change="tabChange"
      >
        <a-tab-pane :key="'BasicInformation'" :tab="'基本信息'">
          <div ref="mainContent" class="mainContent">
            <basic-information ref="BasicInformation" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'LifeStyle'" :tab="'生活方式'">
          <div ref="mainContent" class="mainContent">
            <life-style ref="LifeStyle" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'MedicationRecords'" :tab="'用药记录'">
          <div ref="mainContent" class="mainContent">
            <medication-records ref="MedicationRecords" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'InspectionAndInspection'" :tab="'检验检查'">
          <div ref="mainContent" class="mainContent">
            <inspection-and-inspection ref="InspectionAndInspection" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'MedicationProblems'" :tab="'药物治疗问题'">
          <div ref="mainContent" class="mainContent">
            <medication-problems ref="MedicationProblems" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'AssessmentScale'" :tab="'评估量表'">
          <div ref="mainContent" class="mainContent">
            <assessment-scale ref="AssessmentScale" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'EvaluationReport'" :tab="'评估报告'">
          <div ref="mainContent" class="mainContent">
            <evaluation-report ref="EvaluationReport" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'FollowUp'" :tab="'随访复诊'">
          <div ref="mainContent" class="mainContent">
            <follow-up ref="FollowUp" />
          </div>
        </a-tab-pane>
        <a-tab-pane :key="'EvaluationRecord'" :tab="'评估记录'">
          <div ref="mainContent" class="mainContent">
            <evaluation-record ref="EvaluationRecord" />
          </div>
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <a-card :bordered="false" :style="{width: cardContentWidth,background:'#f0f2f5'}">
      <a-button-group :style="{ marginTop: '10px',float: 'right',marginRight:'-24px' }">
        <a-button v-if="isShowGoBack" type="primary" @click="goBackTab">
          <a-icon type="left" />
          上一步
        </a-button>
        <a-button type="primary" @click="saveAssessmentInfo">
          下一步
          <a-icon type="right" />
        </a-button>
      </a-button-group>
    </a-card>
  </div>
</template>
<script>
  import PatientInfo from '@/views/patient/PatientInfo'
  import BasicInformation from '@/views/questionnaire/BasicInformation'
  import LifeStyle from '@/views/questionnaire/LifeStyle'
  import MedicationRecords from '@/views/questionnaire/MedicationRecords'
  import InspectionAndInspection from '@/views/questionnaire/InspectionAndInspection'
  import MedicationProblems from '@/views/questionnaire/MedicationProblems'
  import AssessmentScale from '@/views/questionnaire/AssessmentScale'
  import EvaluationReport from '@/views/questionnaire/EvaluationReport'
  import FollowUp from '@/views/questionnaire/FollowUp'
  import EvaluationRecord from '@/views/questionnaire/EvaluationRecord'

  export default {
    name: 'PatientAssessment',
    components: {
      EvaluationRecord,
      FollowUp,
      EvaluationReport,
      AssessmentScale,
      MedicationProblems,
      InspectionAndInspection,
      MedicationRecords,
      LifeStyle,
      BasicInformation,
      PatientInfo
    },
    data () {
      return {
        cardContentWidth: '100%',
        isShowGoBack: false,
        clientHeight: '',
        patientId: 0,
        assessmentId: 0,
        activeKey: 'BasicInformation',
        tabs: [
          'BasicInformation',
          'LifeStyle',
          'MedicationRecords',
          'InspectionAndInspection',
          'MedicationProblems',
          'AssessmentScale',
          'EvaluationReport',
          'FollowUp',
          'EvaluationRecord'
        ]
      }
    },
    mounted () {
      this.onChangeCardContentWidth(true)
      // 获取浏览器可视区域高度
      this.clientHeight = `${ document.documentElement.clientHeight }`
    },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
    methods: {
      onChangeCardContentWidth (visible) {
        const cardContentWidth = this.$refs.cardContent.$el.clientWidth
        if (visible) {
          this.cardContentWidth = (cardContentWidth - 400) + 'px'
        } else {
          this.cardContentWidth = '100%'
        }
      },
      linkBackUp () {
        this.$router.push({ name: 'patientList' })
      },
      tabChange (activeKey) {
        this.activeKey = activeKey
        this.isShowGoBack = activeKey !== 'BasicInformation'
      },
      goBackTab () {
        const keyIndex = this.tabs.findIndex((e) => {
          return e === this.activeKey
        })
        this.activeKey = this.tabs[ keyIndex - 1 ]
        this.tabChange(this.activeKey)
      },
      changeFixed (clientHeight) {
        // 动态修改样式
        this.$refs.mainContent.style.height = clientHeight - 350 + 'px'
      },
      saveAssessmentInfo () {
        if (this.activeKey === 'BasicInformation') {
          this.$refs.patientInfo.handleSubmit()
        }
        this.$refs[ this.activeKey ].onSubmit()
      },
      getPatientId (id) {
        console.log(id)
        this.patientId = id
      }
    }
  }
</script>
<style scoped>
</style>

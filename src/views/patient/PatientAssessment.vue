<template>
  <div class="patientAss"
       style="margin-top: -25px;">
    <patient-info @onChangeCardContentWidth="onChangeCardContentWidth"
                  ref="patientInfo"
                  @patient-id="getPatientId" />
    <a-button type="link"
              @click="linkBackUp"
              style="margin-bottom: 20px;">
      <a-icon type="rollback" />
      患者信息
    </a-button>
    <a-card :bordered="false"
            :style="{ width: cardContentWidth }"
            ref="cardContent">
      <a-tabs :defaultActiveKey="'HistoryInfo'"
              :active-key="activeKey"
              @change="tabChange">
        <a-tab-pane :key="'HistoryInfo'"
                    :tab="'家族史和既往史'">
        </a-tab-pane>
        <a-tab-pane :key="'ExistingSymptoms'"
                    :tab="'现有症状'">
        </a-tab-pane>
        <a-tab-pane :key="'LifeStyle'"
                    :tab="'生活方式'">
        </a-tab-pane>
        <a-tab-pane :key="'MedicationRecords'"
                    :tab="'用药记录'"
                    :patientId="patientId">
        </a-tab-pane>
        <a-tab-pane :key="'InspectionAndInspection'"
                    :tab="'检验检查'">
        </a-tab-pane>
        <a-tab-pane :key="'MedicationProblems'"
                    :tab="'药物治疗问题'">
        </a-tab-pane>
        <a-tab-pane :key="'MoriskyQuestionnaire'"
                    :tab="'用药依从性'">
        </a-tab-pane>
        <a-tab-pane :key="'EQ5D3LQuestionnaire'"
                    :tab="'EQ-5D-3L'">
        </a-tab-pane>
        <a-tab-pane :key="'EQ5D5LQuestionnaire'"
                    :tab="'EQ-5D-5L'">
        </a-tab-pane>
        <a-tab-pane :key="'Sf36Questionnaire'"
                    :tab="'SF-36'">
        </a-tab-pane>
        <a-tab-pane :key="'SDSQuestionnaire'"
                    :tab="'SDS焦虑抑郁量表'">
        </a-tab-pane>
        <a-tab-pane :key="'AssessmentScale'"
                    :tab="'心脑血管病风险评估（China-PAR）'">
        </a-tab-pane>
        <a-tab-pane :key="'EvaluationReport'"
                    :tab="'评估报告'">
        </a-tab-pane>
        <!-- <a-tab-pane :key="'FollowUp'"
                    :tab="'随访复诊'">
        </a-tab-pane> -->
      </a-tabs>
      <!-- 页面 -->
      <div class="content-view">
        <keep-alive>
          <component :is="activeKey"
                     :ref="activeKey"
                     :patientId="patientId"
                     :assessmentId="assessmentId"></component>
        </keep-alive>
      </div>
    </a-card>
    <a-card :bordered="false"
            :style="{width: cardContentWidth,background:'#f0f2f5'}">
      <a-button-group :style="{ marginTop: '10px',float: 'right',marginRight:'-24px' }">
        <a-button v-if="isShowGoBack"
                  type="primary"
                  @click="goBackTab">
          <a-icon type="left" />
          上一步
        </a-button>
        <a-button type="primary"
                  v-if="activeKey === 'EvaluationReport'"
                  @click="linkBackUp">
          完成
        </a-button>
        <a-button type="primary"
                  v-else
                  @click="saveAssessmentInfo">
          下一步
          <a-icon type="right" />
        </a-button>

      </a-button-group>
    </a-card>
  </div>
</template>
<script>
import PatientInfo from '@/views/patient/PatientInfo'
import ExistingSymptoms from '@/views/questionnaire/ExistingSymptoms'
import HistoryInfo from '@/views/questionnaire/HistoryInfo'
import LifeStyle from '@/views/questionnaire/LifeStyle'
import MedicationRecords from '@/views/questionnaire/MedicationRecords'
import InspectionAndInspection from '@/views/questionnaire/InspectionAndInspection'
import MedicationProblems from '@/views/questionnaire/MedicationProblems'
import AssessmentScale from '@/views/questionnaire/AssessmentScale'
import EvaluationReport from '@/views/questionnaire/EvaluationReport'
import FollowUp from '@/views/questionnaire/FollowUp'
import MoriskyQuestionnaire from '@/views/questionnaire/MoriskyQuestionnaire'
import EQ5D3LQuestionnaire from '@/views/questionnaire/EQ5D3LQuestionnaire'
import EQ5D5LQuestionnaire from '@/views/questionnaire/EQ5D5LQuestionnaire'
import SDSQuestionnaire from '@/views/questionnaire/SDSQuestionnaire'
import Sf36Questionnaire from '@/views/questionnaire/Sf36Questionnaire'
import {
  saveAssessment
} from '@/api/mtms'

export default {
  name: 'PatientAssessment',
  components: {
    FollowUp,
    EvaluationReport,
    AssessmentScale,
    MedicationProblems,
    InspectionAndInspection,
    MedicationRecords,
    LifeStyle,
    PatientInfo,
    HistoryInfo,
    ExistingSymptoms,
    MoriskyQuestionnaire,
    EQ5D3LQuestionnaire,
    EQ5D5LQuestionnaire,
    SDSQuestionnaire,
    Sf36Questionnaire
  },
  data () {
    return {
      cardContentWidth: '100%',
      isShowGoBack: false,
      clientHeight: '',
      patientId: '',
      assessmentId: 0,
      activeKey: 'HistoryInfo',
      tabs: [
        'HistoryInfo',
        'ExistingSymptoms',
        'LifeStyle',
        'MedicationRecords',
        'InspectionAndInspection',
        'MedicationProblems',
        'MoriskyQuestionnaire',
        'EQ5D3LQuestionnaire',
        'EQ5D5LQuestionnaire',
        'Sf36Questionnaire',
        'SDSQuestionnaire',
        'AssessmentScale',
        'EvaluationReport',
      ]
    }
  },
  mounted () {
    // if (!this.patientId) {
    //   this.$message.error('尚未获取患者信息！')
    // }
    this.saveAssessment()
    this.onChangeCardContentWidth(true)
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`
    console.log(this.$route)
    if (this.$route.query.patientId && this.$route.query.type) {
      if (this.$route.query.type === 'detail') {
        this.activeKey = 'EvaluationReport'
        this.patientId = this.$route.query.patientId
      }
    }
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    },
  },
  methods: {
    saveAssessment () {
      saveAssessment().then(res => {
        this.assessmentId = res.data.assessmentId
      })
    },
    onChangeCardContentWidth (visible) {
      const cardContentWidth = this.$refs.cardContent.$el.clientWidth
      if (visible) {
        this.cardContentWidth = (cardContentWidth - 400) + 'px'
      } else {
        this.cardContentWidth = '100%'
      }
    },
    linkBackUp () {
      this.$router.push({ name: 'PatientList' })
    },
    tabChange (activeKey) {
      this.activeKey = activeKey
      let _index = this.tabs.indexOf(this.activeKey)
      this.isShowGoBack = _index
    },
    goBackTab () {
      let _index = this.tabs.indexOf(this.activeKey)
      if (_index > 0) {
        this.activeKey = this.tabs[_index - 1]
      }
    },
    changeFixed (clientHeight) {
      // 动态修改样式
      this.$refs.mainContent.style.height = clientHeight - 350 + 'px'
    },
    saveAssessmentInfo () {
      if (this.activeKey === 'BasicInformation') {
        this.$refs.patientInfo.handleSubmit()
      }
      if (this.$refs[this.activeKey]) {
        let { onSubmit } = this.$refs[this.activeKey]
        if (onSubmit) {
          onSubmit()
        }
        // this.$refs[this.activeKey].onSubmit()
        let _index = this.tabs.indexOf(this.activeKey)
        if (_index < this.tabs.length - 1) {
          this.activeKey = this.tabs[_index + 1]
        }
        console.log(_index)
      }
    },
    getPatientId (id) {
      console.log(id)
      this.patientId = id
    }
  },
  watch: {
    activeKey: {
      handler (v) {
        if (v) {
          let _index = this.tabs.indexOf(this.activeKey)
          this.isShowGoBack = _index
        }
      }
    }
  }
}
</script>
<style lang="less">
.patientAss {
  height: calc(100vh - 162px);
  overflow: scroll;
}

.patientAss::-webkit-scrollbar {
  display: none;
}

.patientAss {
  .flex {
    display: flex;
  }
  .flex_one {
    flex: 1;
  }
  .flex-bettween {
    display: flex;
    justify-content: space-between;
  }

  .footer-btn-box {
    margin-top: 20px;
    text-align: center;
  }

  .table-addbtn-box {
    margin-bottom: 10px;
  }

  .ant-collapse-content-box > div {
    margin-bottom: 24px;
  }

  .ant-form-item:not(.user-set) .ant-form-item-control {
    width: 250px;
  }

  .ant-form-item-label {
    display: inline-block;
    min-width: 100px;
    vertical-align: top;
  }

  .ant-form-item-control-wrapper {
    display: inline-block;
    width: 56.6666%;
  }

  .ant-form-item-children {
    .title,
    .content-box {
      display: inline-block;
      vertical-align: text-top;
    }

    .content-box {
      div {
        word-break: keep-all;
      }
    }
  }

  .title {
    margin-right: 8px;
  }

  .unit {
    margin-left: 5px;
  }
}
</style>

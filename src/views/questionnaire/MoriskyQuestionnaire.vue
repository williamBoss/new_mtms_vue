<template>
  <a-form-model
    ref="moriskyForm"
    :model="moriskyForm"
    layout="vertical"
    :label-col="{ span: 14 }"
    :wrapper-col="{ span: 14 }"
  >
    <a-form-model-item
      label="1.您是否有时忘记服药？"
      prop="moriskyQuestion1"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion1">
        <a-radio :value="0">
          是
        </a-radio>
        <a-radio :value="1">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      label="2.在过去的2周内，是否有一天或几天您忘记服药？"
      prop="moriskyQuestion2"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion2">
        <a-radio :value="0">
          是
        </a-radio>
        <a-radio :value="1">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      label="3.治疗期间，当您觉得症状加重或出现其他症状时，您是否未告知医生而自行减少药量或停止服药？"
      prop="moriskyQuestion3"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion3">
        <a-radio :value="0">
          是
        </a-radio>
        <a-radio :value="1">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      label="4.当您外出旅行或长时间离家时，您是否有时忘记随身携带药物？"
      prop="moriskyQuestion4"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion4">
        <a-radio :value="0">
          是
        </a-radio>
        <a-radio :value="1">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      label="5.昨天您服药了吗？"
      prop="moriskyQuestion5"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion5">
        <a-radio :value="0">
          是
        </a-radio>
        <a-radio :value="1">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      label="6.当您觉得自己的疾病已经得到控制时，您是否停止过服药？"
      prop="moriskyQuestion6"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion6">
        <a-radio :value="0">
          是
        </a-radio>
        <a-radio :value="1">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      label="7.您是否觉得要坚持治疗计划有困难？"
      prop="moriskyQuestion7"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion7">
        <a-radio :value="0">
          是
        </a-radio>
        <a-radio :value="1">
          否
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      label="8.您觉得要记住按时按量服药很难吗？"
      prop="moriskyQuestion8"
    >
      <a-radio-group v-model="moriskyForm.moriskyQuestion8">
        <a-radio :value="1">
          从不
        </a-radio>
        <a-radio :value="2">
          偶尔
        </a-radio>
        <a-radio :value="3">
          有时
        </a-radio>
        <a-radio :value="4">
          经常
        </a-radio>
        <a-radio :value="5">
          所有时间
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item>
      总分：{{ moriskyForm.morCountScore }}
    </a-form-model-item>
    <div class="footer-btn-box">
      <a-button
        type="primary"
        @click="confirmData"
      >
        保存
      </a-button>
    </div>
  </a-form-model>
</template>
<script>
import {
  saveMoriskyInfo,
  getMoriskyInfo
} from '@/api/mtms'

export default {
  name: 'MoriskyQuestionnaire',
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      moriskyForm: {
        'assessmentId': this.assessmentId,
        'morCountScore': 0,
        'moriskyId': '',
        'moriskyQuestion1': '',
        'moriskyQuestion2': '',
        'moriskyQuestion3': '',
        'moriskyQuestion4': '',
        'moriskyQuestion5': '',
        'moriskyQuestion6': '',
        'moriskyQuestion7': '',
        'moriskyQuestion8': '',
        'patId': this.patientId
      }
    }
  },
  mounted () {
    this.getMoriskyInfo()
  },
  methods: {
    getMoriskyInfo () {
      getMoriskyInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        console.log(res)
        const { data } = res
        if (data.moriskyId != null) {
          this.moriskyForm = data
        }
      })
    },
    confirmData () {
      saveMoriskyInfo({
        ...this.moriskyForm
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getScore () {
      let _scoreNum = 0
      if (this.moriskyForm.moriskyQuestion1 !== '') {
        _scoreNum += this.moriskyForm.moriskyQuestion1
      }
      if (this.moriskyForm.moriskyQuestion2 !== '') {
        _scoreNum += this.moriskyForm.moriskyQuestion2
      }
      if (this.moriskyForm.moriskyQuestion3 !== '') {
        _scoreNum += this.moriskyForm.moriskyQuestion3
      }
      if (this.moriskyForm.moriskyQuestion4 !== '') {
        _scoreNum += this.moriskyForm.moriskyQuestion4
      }
      if (this.moriskyForm.moriskyQuestion5 !== '') {
        _scoreNum += !this.moriskyForm.moriskyQuestion5
      }
      if (this.moriskyForm.moriskyQuestion6 !== '') {
        _scoreNum += this.moriskyForm.moriskyQuestion6
      }
      if (this.moriskyForm.moriskyQuestion7 !== '') {
        _scoreNum += this.moriskyForm.moriskyQuestion7
      }
      if (this.moriskyForm.moriskyQuestion8 !== '') {
        _scoreNum += (125 - this.moriskyForm.moriskyQuestion8 * 25) / 100
      }
      this.moriskyForm.morCountScore = _scoreNum
    }
  },
  watch: {
    moriskyForm: {
      handler () {
        this.getScore()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style scoped>
</style>

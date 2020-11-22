<template>
  <a-form-model ref="eq5d5lForm"
                :model="eq5d5lForm"
                layout="vertical"
                :label-col="{ span: 14 }"
                :wrapper-col="{ span: 14 }">
    <a-form-model-item label="1.行动能力——我四处活动"
                       prop="actionQ">
      <a-radio-group v-model="eq5d5lForm.actionQ">
        <a-radio :value="1">
          没有困难
        </a-radio>
        <a-radio :value="2">
          有一点困难
        </a-radio>
        <a-radio :value="3">
          有中度困难
        </a-radio>
        <a-radio :value="4">
          有严重困难
        </a-radio>
        <a-radio :value="5">
          我无法四处活动
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="2.自我照顾——我自己洗澡或穿衣"
                       prop="lookAfterSelfQ">
      <a-radio-group v-model="eq5d5lForm.lookAfterSelfQ">
        <a-radio :value="1">
          没有困难
        </a-radio>
        <a-radio :value="2">
          有一点困难
        </a-radio>
        <a-radio :value="3">
          有中度困难
        </a-radio>
        <a-radio :value="4">
          有严重困难
        </a-radio>
        <a-radio :value="5">
          我无法照顾自己
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="3.日常活动（如工作、学习、家务、家庭或休闲活动）"
                       prop="dailyActQ">
      <a-radio-group v-model="eq5d5lForm.dailyActQ">
        <a-radio :value="1">
          没有困难
        </a-radio>
        <a-radio :value="2">
          有一点困难
        </a-radio>
        <a-radio :value="3">
          有中度困难
        </a-radio>
        <a-radio :value="4">
          有严重困难
        </a-radio>
        <a-radio :value="5">
          我无法进行日常活动
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="4.疼痛或不舒服"
                       prop="painQ">
      <a-radio-group v-model="eq5d5lForm.painQ">
        <a-radio :value="1">
          没有疼痛或不舒服
        </a-radio>
        <a-radio :value="2">
          有一点疼痛或不舒服
        </a-radio>
        <a-radio :value="3">
          有中度疼痛或不舒服
        </a-radio>
        <a-radio :value="4">
          有严重疼痛或不舒服
        </a-radio>
        <a-radio :value="5">
          有非常严重的疼痛或不舒服
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="5.焦虑或沮丧"
                       prop="anxietyQ">
      <a-radio-group v-model="eq5d5lForm.anxietyQ">
        <a-radio :value="1">
          没有焦虑或沮丧
        </a-radio>
        <a-radio :value="2">
          有一点焦虑或沮丧
        </a-radio>
        <a-radio :value="3">
          有中度焦虑或沮丧
        </a-radio>
        <a-radio :value="4">
          有严重的焦虑或沮丧
        </a-radio>
        <a-radio :value="5">
          有非常严重的焦虑或沮丧
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item>
      总分：{{ eq5d5lForm.eq5d5lScore }}
    </a-form-model-item>
    <div class="footer-btn-box">
      <a-button type="primary"
                @click="confirmData">
        保存
      </a-button>
    </div>
  </a-form-model>
</template>
<script>
import {
  saveEq5d5lInfo,
  getEq5d5lInfo
} from '@/api/mtms'

export default {
  name: 'EQ5D5LQuestionnaire',
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      layout: 'vertical',
      eq5d5lForm: {
        'actionQ': '',
        'anxietyQ': '',
        'assessmentId': this.assessmentId,
        'dailyActQ': '',
        'eq5d5lScore': '',
        'lookAfterSelfQ': '',
        'painQ': '',
        'patId': this.patientId
      }
    }
  },
  mounted () {
    this.getEq5d5lInfo()
  },
  methods: {
    getEq5d5lInfo () {
      getEq5d5lInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        let { data } = res
        if (data) {
          this.eq5d5lForm = data
        }
      })
    },
    confirmData () {
      saveEq5d5lInfo({ ...this.eq5d5lForm }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getScore () {
      let _scoreNum = 0
      if (this.eq5d5lForm.actionQ === 2) {
        _scoreNum += 66
      } else if (this.eq5d5lForm.actionQ === 3) {
        _scoreNum += 158
      } else if (this.eq5d5lForm.actionQ === 4) {
        _scoreNum += 287
      } else if (this.eq5d5lForm.actionQ === 5) {
        _scoreNum += 345
      }
      //
      if (this.eq5d5lForm.anxietyQ === 2) {
        _scoreNum += 49
      } else if (this.eq5d5lForm.anxietyQ === 3) {
        _scoreNum += 118
      } else if (this.eq5d5lForm.anxietyQ === 4) {
        _scoreNum += 215
      } else if (this.eq5d5lForm.anxietyQ === 5) {
        _scoreNum += 258
      }
      //
      if (this.eq5d5lForm.dailyActQ === 2) {
        _scoreNum += 45
      } else if (this.eq5d5lForm.dailyActQ === 3) {
        _scoreNum += 107
      } else if (this.eq5d5lForm.dailyActQ === 4) {
        _scoreNum += 194
      } else if (this.eq5d5lForm.dailyActQ === 5) {
        _scoreNum += 233
      }
      //
      if (this.eq5d5lForm.lookAfterSelfQ === 2) {
        _scoreNum += 48
      } else if (this.eq5d5lForm.lookAfterSelfQ === 3) {
        _scoreNum += 116
      } else if (this.eq5d5lForm.lookAfterSelfQ === 4) {
        _scoreNum += 210
      } else if (this.eq5d5lForm.lookAfterSelfQ === 5) {
        _scoreNum += 253
      }
      //
      if (this.eq5d5lForm.painQ === 2) {
        _scoreNum += 58
      } else if (this.eq5d5lForm.painQ === 3) {
        _scoreNum += 138
      } else if (this.eq5d5lForm.painQ === 4) {
        _scoreNum += 252
      } else if (this.eq5d5lForm.painQ === 5) {
        _scoreNum += 302
      }
      this.eq5d5lForm.eq5d5lScore = _scoreNum / 1000
    }
  },
  watch: {
    eq5d5lForm: {
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

<template>
  <a-form-model ref="eq5d3lForm"
                :model="eq5d3lForm"
                layout="vertical"
                :label-col="{ span: 14 }"
                :wrapper-col="{ span: 14 }">
    <a-form-model-item label="1.行动能力"
                       prop="actionQ">
      <a-radio-group v-model="eq5d3lForm.actionQ">
        <a-radio :value="0">
          我可以四处走动, 没有任何困难。
        </a-radio>
        <a-radio :value="1">
          我四处走动有些不方便。
        </a-radio>
        <a-radio :value="2">
          我不能下床活动。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="2.自己照顾自己"
                       prop="lookAfterSelfQ">
      <a-radio-group v-model="eq5d3lForm.lookAfterSelfQ">
        <a-radio :value="0">
          我能自己照顾自己, 没有任何困难。
        </a-radio>
        <a-radio :value="1">
          我在洗脸、刷牙、洗澡或穿衣方面有些困难。
        </a-radio>
        <a-radio :value="2">
          我无法自己洗脸、刷牙、洗澡或穿衣。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="3.日常活动（如工作, 学习, 家务事, 家庭或休闲活动）"
                       prop="dailyActQ">
      <a-radio-group v-model="eq5d3lForm.dailyActQ">
        <a-radio :value="0">
          我能进行日常活动, 没有任何困难。
        </a-radio>
        <a-radio :value="1">
          我在进行日常活动方面有些困难。
        </a-radio>
        <a-radio :value="2">
          我无法进行日常活动。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="4.疼痛 / 不舒服"
                       prop="painQ">
      <a-radio-group v-model="eq5d3lForm.painQ">
        <a-radio :value="0">
          我没有任何疼痛或不舒服。
        </a-radio>
        <a-radio :value="1">
          我觉得中度疼痛或不舒服。
        </a-radio>
        <a-radio :value="2">
          我觉得极度疼痛或不舒服。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="5.焦虑 (如紧张、担心、不安等等) / 抑郁 (如做事情缺乏兴趣、没乐趣、提不起精神等等)"
                       prop="anxietyQ">
      <a-radio-group v-model="eq5d3lForm.anxietyQ">
        <a-radio :value="0">
          我不觉得焦虑或抑郁。
        </a-radio>
        <a-radio :value="1">
          我觉得中度焦虑或抑郁。
        </a-radio>
        <a-radio :value="2">
          我觉得极度焦虑或抑郁。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item>
      总分：{{ eq5d3lForm.eq5d3lScore }}
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
  saveEq5d3lInfo,
  getEq5d3lInfo
} from '@/api/mtms'

export default {
  name: 'EQ5D3LQuestionnaire',
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      layout: 'vertical',
      eq5d3lForm: {
        'actionQ': '',
        'anxietyQ': '',
        'assessmentId': this.assessmentId,
        'dailyActQ': '',
        'eq5d3lScore': '',
        'lookAfterSelfQ': '',
        'painQ': '',
        'patId': this.patientId
      }
    }
  },
  mounted () {
    this.getEq5d3lInfo()
  },
  methods: {
    getEq5d3lInfo () {
      getEq5d3lInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        let { data } = res
        if (data) {
          this.eq5d3lForm = data
        }
      })
    },
    confirmData () {
      saveEq5d3lInfo({ ...this.eq5d3lForm }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getScore () {
      let _scoreNum = 0
      if (this.eq5d3lForm.actionQ === 1) {
        _scoreNum += 69
      } else if (this.eq5d3lForm.actionQ === 2) {
        _scoreNum += 314
      }
      //
      if (this.eq5d3lForm.anxietyQ === 1) {
        _scoreNum += 71
      } else if (this.eq5d3lForm.anxietyQ === 2) {
        _scoreNum += 236
      }
      //
      if (this.eq5d3lForm.dailyActQ === 1) {
        _scoreNum += 36
      } else if (this.eq5d3lForm.dailyActQ === 2) {
        _scoreNum += 94
      }
      //
      if (this.eq5d3lForm.lookAfterSelfQ === 1) {
        _scoreNum += 104
      } else if (this.eq5d3lForm.lookAfterSelfQ === 2) {
        _scoreNum += 214
      }
      //
      if (this.eq5d3lForm.painQ === 1) {
        _scoreNum += 123
      } else if (this.eq5d3lForm.painQ === 2) {
        _scoreNum += 386
      }
      this.eq5d3lForm.eq5d3lScore = _scoreNum / 1000
    }
  },
  watch: {
    eq5d3lForm: {
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

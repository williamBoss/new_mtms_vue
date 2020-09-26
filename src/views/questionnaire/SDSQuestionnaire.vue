<template>
  <a-form-model ref="sdsForm"
                :model="sdsForm"
                :layout="layout">
    <a-form-model-item label="1.我感到情绪沮丧，郁闷？"
                       prop="sdsQ8">
      <a-radio-group v-model="sdsForm.sdsQ8">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="2.我感到早晨心情最好？"
                       prop="sdsQ2">
      <a-radio-group v-model="sdsForm.sdsQ2">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="3.我要哭或想哭？"
                       prop="sdsQ3">
      <a-radio-group v-model="sdsForm.sdsQ3">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="4.我晚上睡眠不好？"
                       prop="sdsQ4">
      <a-radio-group v-model="sdsForm.sdsQ4">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="5.我吃得和平时一样多？"
                       prop="sdsQ5">
      <a-radio-group v-model="sdsForm.sdsQ5">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="6.异性接触时和以往一样感到愉快？"
                       prop="sdsQ6">
      <a-radio-group v-model="sdsForm.sdsQ6">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="7.我感到体重减轻？"
                       prop="sdsQ7">
      <a-radio-group v-model="sdsForm.sdsQ7">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="8.我有便秘的苦恼？"
                       prop="sdsQ8">
      <a-radio-group v-model="sdsForm.sdsQ8">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="9.我的心跳比平时快？"
                       prop="sdsQ9">
      <a-radio-group v-model="sdsForm.sdsQ9">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="10.我无故感到疲劳？"
                       prop="sdsQ10">
      <a-radio-group v-model="sdsForm.sdsQ10">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="11.我的头脑象往常一样清楚？"
                       prop="sdsQ11">
      <a-radio-group v-model="sdsForm.sdsQ11">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="12.我做事情象平时一样不感到困难？"
                       prop="sdsQ12">
      <a-radio-group v-model="sdsForm.sdsQ12">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="13.我坐卧不安,难以保持平静？"
                       prop="sdsQ13">
      <a-radio-group v-model="sdsForm.sdsQ13">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="14.我对未来感到有希望？"
                       prop="sdsQ14">
      <a-radio-group v-model="sdsForm.sdsQ14">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="15.我比平时更容易激怒？"
                       prop="sdsQ15">
      <a-radio-group v-model="sdsForm.sdsQ15">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="16.我觉得决定什么事很容易？"
                       prop="sdsQ16">
      <a-radio-group v-model="sdsForm.sdsQ16">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="17.感到自己是有用的和不可缺少的人？"
                       prop="sdsQ17">
      <a-radio-group v-model="sdsForm.sdsQ17">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="18.我的生活很有意义？"
                       prop="sdsQ18">
      <a-radio-group v-model="sdsForm.sdsQ18">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="19.假若我死了别人会过得更好？"
                       prop="sdsQ19">
      <a-radio-group v-model="sdsForm.sdsQ19">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="20.我仍旧喜爱自己平时喜爱的东西？"
                       prop="sdsQ20">
      <a-radio-group v-model="sdsForm.sdsQ20">
        <a-radio :value="1">
          很少
        </a-radio>
        <a-radio :value="2">
          有时
        </a-radio>
        <a-radio :value="3">
          经常
        </a-radio>
        <a-radio :value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item>
      总分：{{sdsForm.sdsScore}}
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
  saveSDSlInfo,
  getSDSlInfo
} from '@/api/mtms'
export default {
  name: 'SDSQuestionnaire',
  props: ['patientId', 'assessmentId'],
  data () {
    return {
      layout: 'vertical',
      sdsForm: {
        "assessmentId": this.assessmentId,
        "patId": this.patientId,
        "sdsQ1": 1,
        "sdsQ10": 1,
        "sdsQ11": 1,
        "sdsQ12": 1,
        "sdsQ13": 1,
        "sdsQ14": 1,
        "sdsQ15": 1,
        "sdsQ16": 1,
        "sdsQ17": 1,
        "sdsQ18": 1,
        "sdsQ19": 1,
        "sdsQ2": 1,
        "sdsQ20": 1,
        "sdsQ3": 1,
        "sdsQ4": 1,
        "sdsQ5": 1,
        "sdsQ6": 1,
        "sdsQ7": 1,
        "sdsQ8": 1,
        "sdsQ9": 1,
        "sdsScore": 0
      }
    }
  },
  mounted () {
    this.getSDSlInfo()
  },
  methods: {
    getSDSlInfo () {
      getSDSlInfo({ patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        let { data } = res
        if (data) {
          this.sdsForm = data
        }
      })
    },
    confirmData () {
      saveSDSlInfo({ ...this.sdsForm }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getScore () {
      let _num = 0
      let _arr = Object.entries(this.sdsForm)
      // console.log(_arr)
      for (let [key, value] of _arr) {
        if (key.includes('sdsQ')) {
          let num = parseInt(key.split('sdsQ')[1])
          if ([2, 5, 6, 11, 12, 14, 16, 17, 18, 20].includes(num)) {
            _num += 5 - value
          } else {
            _num += value
          }
        }
      }
      this.sdsForm.sdsScore = parseInt(_num * 1.25)
    },
  },
  watch: {
    sdsForm: {
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

<template>
  <div class="vas">
    <a-form-model ref="vasForm"
                  :model="vasForm"
                  layout="vertical"
                  :label-col="{ span: 14 }"
                  :wrapper-col="{ span: 14 }">
      <a-form-model-item label="1.疼痛得分：">
        <a-slider :marks="marks"
                  :step="1"
                  :default-value="0"
                  :min="0"
                  :max="10"
                  v-model="vasForm.vasScore"
                  @change="getScore"
                  style="width:85%;height: 250px;margin-left: 50px" />
      </a-form-model-item>
      <a-form-model-item>
        得分描述：{{ vasForm.desc }}
      </a-form-model-item>
      <div class="footer-btn-box">
        <a-button type="primary"
                  @click="confirmData">
          保存
        </a-button>
      </div>
    </a-form-model>
  </div>
</template>
<script>
import {
  getVasInfo, saveVasInfo
} from '@/api/mtms'

export default {
  name: 'VASQuestionnaire',
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      layout: 'vertical',
      vasForm: {
        assessmentId: this.assessmentId,
        patId: this.patientId,
        vasScore: 0,
        desc: ''
      },
      marks: {
        0: { label: <img src="/10001_01.png" /> },
        2: { label: <img src="/10001_02.png" /> },
        4: { label: <img src="/10001_03.png" /> },
        6: { label: <img src="/10001_04.png" /> },
        8: { label: <img src="/10001_05.png" /> },
        10: { label: <img src="/10001_06.png" /> }
      }
    }
  },
  mounted () {
    this.getVasInfo()
  }
  ,
  methods: {
    getVasInfo () {
      getVasInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        const { data } = res
        if (data) {
          this.vasForm = data
        }
      })
    }
    ,
    confirmData () {
      saveVasInfo({ ...this.vasForm }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，保存失败，请稍后再试')
        }
      })
    }
    ,
    getScore (val) {
      if (val === 0) {
        this.vasForm.desc = '无痛'
      } else if (val <= 3) {
        this.vasForm.desc = '有轻微的疼痛，能忍受'
      } else if (val >= 4 && val <= 6) {
        this.vasForm.desc = '患者疼痛并影响到睡眠，尚能忍受'
      } else if (val >= 7 && val <= 10) {
        this.vasForm.desc = '患者出现强烈的疼痛，难以忍受，影响睡眠和食欲'
      }
    }
  }
  ,
  watch: {
    vasForm: {
      handler () {
        this.getScore()
      }
      ,
      deep: true,
      immediate
:
true
}
}
}
</script>
<style lang="less">
.vas {
  .ant-form-item-control-wrapper,
  .ant-form-item-control {
    width: 100% !important;
  }
}
</style>

<template>
  <div class="caprini">
    <a-form-model ref="capriniForm"
                  :model="capriniForm"
                  layout="vertical"
                  :label-col="{ span: 14 }">
      <a-checkbox-group v-model="capriniForm.capriniChooseArr">
        <a-form-model-item label="1.以下每项风险因素记1分"
                           prop="actionQ">
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="1" name="capriniChooseArr">
                年龄41-60岁
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="2" name="capriniChooseArr">
                BMI≥25kg/㎡
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="3" name="capriniChooseArr">
                下肢水肿
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="4" name="capriniChooseArr">
                静脉曲张
              </a-checkbox>
            </a-col>
          </a-row>
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="5" name="capriniChooseArr">
                妊娠期或产后（＜1个月）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="6" name="capriniChooseArr">
                不明原因或习惯性流产史
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="7" name="capriniChooseArr">
                服避孕药或雌激素替代治疗
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="8" name="capriniChooseArr">
                脓毒症（＜1个月）
              </a-checkbox>
            </a-col>
          </a-row>
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="9" name="capriniChooseArr">
                严重肺病，含肺炎（＜1个月）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="10" name="capriniChooseArr">
                肺功能异常（COPD）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="11" name="capriniChooseArr">
                急性心肌梗死
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="12" name="capriniChooseArr">
                充血性心力衰竭（＜1个月）
              </a-checkbox>
            </a-col>
          </a-row>
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="13" name="capriniChooseArr">
                炎性肠病史
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="14" name="capriniChooseArr">
                卧床内科患者
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="15" name="capriniChooseArr">
                小手术
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="16" name="capriniChooseArr">
                其他风险因素
              </a-checkbox>
            </a-col>
          </a-row>
        </a-form-model-item>
        <a-form-model-item label="2.以下每项风险因素记2分"
                           prop="actionQ">
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="17" name="capriniChooseArr">
                年龄61-74岁
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="18" name="capriniChooseArr">
                恶性肿瘤（既往或现患）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="19" name="capriniChooseArr">
                石膏固定（＜1个月）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="20" name="capriniChooseArr">
                限制卧床（＞72小时）
              </a-checkbox>
            </a-col>
          </a-row>
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="21" name="capriniChooseArr">
                中心静脉置管
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="22" name="capriniChooseArr">
                大手术（＞45分）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="23" name="capriniChooseArr">
                关节镜手术
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="24" name="capriniChooseArr">
                腹腔镜手术数（＞45分）
              </a-checkbox>
            </a-col>
          </a-row>
        </a-form-model-item>
        <a-form-model-item label="3.以下每项风险因素记3分"
                           prop="actionQ">
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="25" name="capriniChooseArr">
                年龄≥75岁
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="26" name="capriniChooseArr">
                血栓家族史
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="27" name="capriniChooseArr">
                DVT/PTE史
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="28" name="capriniChooseArr">
                未列出的先天或后天血栓形成
              </a-checkbox>
            </a-col>
          </a-row>
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="29" name="capriniChooseArr">
                凝血酶原20210A阳性
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="30" name="capriniChooseArr">
                因子V Leiden阳性
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="31" name="capriniChooseArr">
                狼疮抗凝物阳性
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="32" name="capriniChooseArr">
                血清同型半胱氨酸升高
              </a-checkbox>
            </a-col>
          </a-row>
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="33" name="capriniChooseArr">
                抗心磷脂抗体升高
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="34" name="capriniChooseArr">
                肝素引起的血小板减少HIT
              </a-checkbox>
            </a-col>
          </a-row>
        </a-form-model-item>
        <a-form-model-item label="4.以下每项风险因素记5分"
                           prop="actionQ">
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="35" name="capriniChooseArr">
                脑卒中（＜1个月）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="36" name="capriniChooseArr">
                急性脊髓损伤（瘫痪）（＜1个月）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="37" name="capriniChooseArr">
                多发性创伤（＜1个月）
              </a-checkbox>
            </a-col>
            <a-col :span="6">
              <a-checkbox value="38" name="capriniChooseArr">
                髋关节、骨盆或下肢骨折
              </a-checkbox>
            </a-col>
          </a-row>
          <a-row :gutter="[8,8]">
            <a-col :span="6">
              <a-checkbox value="39" name="capriniChooseArr">
                选择性下肢关节置换术
              </a-checkbox>
            </a-col>
          </a-row>
        </a-form-model-item>
      </a-checkbox-group>
      <a-form-model-item>
        总分：{{ capriniForm.capriniScore }}
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
  getCapriniInfo, saveCapriniInfo

} from '@/api/mtms'

export default {
  name: 'CapriniQuestionnaire',
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      layout: 'vertical',
      capriniForm: {
        'assessmentId': this.assessmentId,
        'patId': this.patientId,
        'capriniChooseArr': [],
        'capriniScore': 0
      }
    }
  },
  mounted () {
    this.getCapriniInfo()
  },
  methods: {
    getCapriniInfo () {
      getCapriniInfo({
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        const { data } = res
        if (data) {
          this.capriniForm = data
        }
      })
    },
    confirmData () {
      saveCapriniInfo({ ...this.capriniForm }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，保存失败，请稍后再试')
        }
      })
    },
    getScore () {
      let _scoreNum = 0
      this.capriniForm.capriniChooseArr.forEach(v => {
        if (v <= 16) {
          _scoreNum += 1
        } else if (v <= 24) {
          _scoreNum += 2
        } else if (v <= 34) {
          _scoreNum += 3
        } else if (v <= 39) {
          _scoreNum += 5
        }
      })
      this.capriniForm.capriniScore = _scoreNum
    }
  },
  watch: {
    capriniForm: {
      handler () {
        this.getScore()
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style>
.caprini .ant-form-item-control-wrapper {
  width: 100% !important;
}

.caprini .ant-form-item-control {
  width: 100% !important;
}

.caprini .ant-checkbox-group {
  display: block;
}
</style>

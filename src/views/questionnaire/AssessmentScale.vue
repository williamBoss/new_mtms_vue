<template>
  <div>
    <div class="china-par-page">
      <a-collapse>
        <!-- 1 -->
        <a-collapse-panel key="1"
                          header="心脑血管病10年发病风险评估结果">
          <div class="outlink_div">
            <a href="http://www.cvdrisk.com.cn/ASCVD/Eval"
               target="_blank">心脑血管病风险评估</a>
          </div>
          <div class="theader_box">
            心脑血管病10年发病风险评估结果
          </div>
          <div class="row_div flex">
            <div class="number">
              1
            </div>
            <div class="flex flex_one">
              <div>10年发病风险</div>
            </div>
            <div class="action_div">
              <a-select v-model="data.riskTenYearLevel">
                <a-select-option :value="1">低危</a-select-option>
                <a-select-option :value="2">中危</a-select-option>
                <a-select-option :value="3">高危</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="row_div flex">
            <div class="number">
              2
            </div>
            <div class="flex flex_one">
              <div>理想危险因素状态下，您的心脑血管病10年发病风险应小于</div>
            </div>
            <div class="action_div">
              <a-input v-model="data.estimatedRiskTenYear" />
            </div>
          </div>
          <div class="row_div footer_div">
            <h4>备注：</h4>
            <div>{{tips}}</div>
          </div>
        </a-collapse-panel>
        <!-- 2 -->
        <a-collapse-panel key="2"
                          header="心脑血管病终生发病风险评估结果">
          <div class="theader_box">
            心脑血管病终生发病风险评估结果
            <p class="tips">（从目前生存至85岁时发生心脑血管病的风险，只在60岁以下人群中计算）</p>
          </div>
          <div class="row_div flex">
            <div class="number">
              1
            </div>
            <div class="flex flex_one">
              <div>终生发病风险</div>
            </div>
            <div class="action_div">
              <a-select v-model="data.riskLifetimeLevel">
                <a-select-option :value="1">低危</a-select-option>
                <a-select-option :value="2">中危</a-select-option>
                <a-select-option :value="3">高危</a-select-option>
              </a-select>
            </div>
          </div>
          <div class="row_div flex">
            <div class="number">
              2
            </div>
            <div class="flex flex_one">
              <div>理想危险因素状态下，您的心脑血管病终生发病风险应小于</div>
            </div>
            <div class="action_div">
              <a-input v-model="data.estimatedRiskLifetime" />
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
      <div class="footer-btn-box">
        <a-button type="primary"
                  @click="confirmData">
          保存
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  saveParInfo
} from '@/api/mtms'
export default {
  name: 'AssessmentScale',
  props: ['patientId', 'assessmentId'],
  data () {
    return {
      tips: '理想危险因素状态：总胆固醇 < 200 mg/dl(5.18 mmol/L)，高密度脂蛋白胆固醇 ≥ 40 mg/dl(1.04 mmol/L)，未治疗的收缩压 < 120 mmHg，舒张压 < 80mmHg，腰围男性 < 90cm、女性 < 85cm，当前不吸烟，没有糖尿病，无心脑血管病家族史。年龄、性别和现居住地区使用用户输入的数值。',
      data: {
        "assessmentId": this.assessmentId,
        "estimatedRiskLifetime": "",
        "estimatedRiskTenYear": "",
        "patId": this.patientId,
        "riskLifetimeLevel": 1,
        "riskTenYearLevel": 1
      }
    }
  },
  methods: {
    confirmData () {
      saveParInfo({ ...this.data }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    }
  }
}
</script>

<style lang="less">
.china-par-page {
  div.ant-collapse-content-box > div {
    margin-bottom: 0;
  }
}
.tips {
  font-size: 13px;
  color: #999;
  margin-top: 10px;
}
.theader_box {
  border: 1px solid #eee;
  border-bottom: none;
  text-align: center;
  padding: 10px 0;
  margin-top: 15px;
}
.row_div {
  border: 1px solid #eee;
  border-bottom: none;
}
.table_box > .row_div:last-child,
.footer_div {
  border-bottom: 1px solid #eee;
}
.number {
  width: 50px;
  text-align: center;
  line-height: 50px;
}
.action_div {
  width: 100px;
}
.row_div > div {
  border-right: 1px solid #eee;
  padding: 5px 10px;
}
.row_div > div:last-child {
  border: none;
}
.footer_div {
  padding: 15px;
}
</style>

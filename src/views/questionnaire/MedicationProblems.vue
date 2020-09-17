<template>
  <div class="medPro-pag">
    <div>
      <div class="table-addbtn-box flex-bettween">
        <a-button type="primary"
                  class="addHistoryBtn"
                  @click="pushDataList()">
          添加记录
        </a-button>
      </div>
      <a-table :data-source="data"
               class="mr_table"
               :pagination="false"
               bordered>

        <a-table-column key="index"
                        title="序号"
                        data-index="index">
          <template slot-scope="text, record, index">{{index+1}}</template>
        </a-table-column>
        <a-table-column key="sick"
                        title="相关疾病"
                        data-index="sick">
          <template slot-scope="text, record, index">
            <a-button type="link"
                      class="innerDiv"
                      @click="chiocePain(index)">{{record.diseaseName||'选择疾病'}}</a-button>
          </template>
        </a-table-column>
        <a-table-column key="medicine"
                        title="相关药物"
                        data-index="medicine">
          <template slot-scope="text, record, index">
            <a-button type="link"
                      class="innerDiv"
                      @click="chioceMed(index)">{{record.medName||'选择药物'}}</a-button>
          </template>
        </a-table-column>
        <a-table-column key="indications"
                        title="适应性"
                        data-index="indications">
          <template slot-scope="text, record">
            <a-cascader :options="indicationsList"
                        v-model="record.indications" />
          </template>
        </a-table-column>
        <a-table-column key="safety"
                        title="安全性"
                        data-index="safety">
          <template slot-scope="text, record">
            <a-cascader :options="safetyList"
                        v-model="record.safety" />
          </template>
        </a-table-column>
        <a-table-column key="effectiveness"
                        title="有效性"
                        data-index="effectiveness">
          <template slot-scope="text, record">
            <a-cascader :options="effectivenessList"
                        v-model="record.effectiveness" />
          </template>
        </a-table-column>
        <a-table-column key="compliance"
                        title="依从性"
                        data-index="compliance">
          <template slot-scope="text, record">
            <a-cascader :options="complianceList"
                        v-model="record.compliance" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="具体问题"
                        data-index="detail">
          <template slot-scope="text, record">
            <a-input v-model="record.problem" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="处理建议"
                        data-index="detail">
          <template slot-scope="text, record">
            <a-input v-model="record.treatmentSuggestion" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="是否解决"
                        data-index="detail">
          <template slot-scope="text, record">
            <a-radio-group v-model="record.isResolved">
              <a-radio :value="1"> 本次就诊解决 </a-radio>
              <a-radio :value="2"> 未解决 </a-radio>
              <a-radio :value="3"> 待解决 </a-radio>
            </a-radio-group>
          </template>
        </a-table-column>
        <a-table-column key="improve"
                        title="改善详情"
                        data-index="improve">
          <template slot-scope="text, record">
            <a-input v-model="record.improvementDetails" />
          </template>
        </a-table-column>
        <a-table-column key="action"
                        title="操作"
                        data-index="action">
          <template slot-scope="text, record, index">
            <div v-if="!record.saved">
              <a-button type="link"
                        @click="deleteData(index)">
                删除
              </a-button>
              <a-button type="link"
                        @click="confirmData(index)">
                保存
              </a-button>
            </div>
          </template>
        </a-table-column>
      </a-table>
    </div>
    <a-modal v-model="visible"
             title="选择病种"
             class="paintDiolag"
             @ok="handleOk">
      <div class="checkPainBoxList">
        <a-radio-group v-model="choicedList">
          <div class="item"
               v-for="(sitem, sindex) in painList"
               :key="sindex">
            <a-radio :value="sitem">
              {{ sitem.diseaseName }}
            </a-radio>
          </div>
        </a-radio-group>
      </div>
    </a-modal>
    <a-modal v-model="visibleM"
             title="选择病种"
             class="paintDiolag"
             @ok="handleOkM">
      <div class="checkPainBoxList">
        <a-radio-group v-model="choicedListM">
          <div class="item"
               v-for="(sitem, sindex) in medicData"
               :key="sindex">
            <a-radio :value="sitem">
              {{ sitem.medName }}
            </a-radio>
          </div>
        </a-radio-group>
      </div>
    </a-modal>
  </div>
</template>

<script>
import {
  getAllMed,
  getDiseaseList,
  saveMedicationProblem,
  getMedicationProblem,
} from '@/api/mtms'
export default {
  name: 'MedicationProblems',
  props: ['patientId'],
  data () {
    return {
      visible: false,
      visibleM: false,
      data: [],
      painList: [],
      medicData: [],
      actionIndex: '',
      //
      choicedList: '',
      choicedListM: '',
      //
      indicationsList: [{
        value: '适应证',
        label: '适应证',
        children: [
          {
            value: '不必要的药物治疗',
            label: '不必要的药物治疗',
            children: [
              {
                value: '无适应证用药',
                label: '无适应证用药',
              },
              {
                value: '重复用药',
                label: '重复用药',
              },
              {
                value: '无须药物治疗',
                label: '无须药物治疗',
              },
              {
                value: '用于治疗另一种药物的不良反应',
                label: '用于治疗另一种药物的不良反应',
              }
            ]
          },
          {
            value: '需要额外的药物治疗',
            label: '需要额外的药物治疗',
            children: [
              {
                value: '因身体或疾病状况需要额外的药物治疗',
                label: '因身体或疾病状况需要额外的药物治疗',
              },
              {
                value: '预防用药',
                label: '预防用药',
              },
              {
                value: '通过增加药物产生协同作用',
                label: '通过增加药物产生协同作用',
              }
            ]
          }
        ]
      }],
      //
      safetyList: [{
        value: '安全性',
        label: '安全性',
        children: [
          {
            value: '药物不良事件',
            label: '药物不良事件',
            children: [
              {
                value: '与药物剂量无关的不良反应',
                label: '与药物剂量无关的不良反应',
              },
              {
                value: '有更安全的药物',
                label: '有更安全的药物',
              },
              {
                value: '药物相互作用引起的与剂量无关的不良反应',
                label: '药物相互作用引起的与剂量无关的不良反应',
              },
              {
                value: '给药方案调整过快',
                label: '给药方案调整过快',
              },
              {
                value: '药物相关的过敏反应',
                label: '药物相关的过敏反应',
              },
              {
                value: '患者存在用药禁忌证',
                label: '患者存在用药禁忌证',
              },
              {
                value: '用法用量或剂型使用不当',
                label: '用法用量或剂型使用不当',
              }
            ]
          },
          {
            value: '药物剂量过高',
            label: '药物剂量过高',
            children: [
              {
                value: '剂量过高',
                label: '剂量过高',
              },
              {
                value: '用药间隔时间太短',
                label: '用药间隔时间太短',
              },
              {
                value: '用药持续时间太长',
                label: '用药持续时间太长',
              },
              {
                value: '药物相互作用引起的毒性反应',
                label: '药物相互作用引起的毒性反应'
              },
              {
                value: '药物剂量调整过快',
                label: '药物剂量调整过快'
              }
            ]
          }
        ]
      }],
      effectivenessList: [{
        value: '有效性',
        label: '有效性',
        children: [
          {
            value: '无效的药物',
            label: '无效的药物',
            children: [
              { value: '患者对药物耐药', label: '患者对药物耐药' },
              { value: '药物剂型不合适', label: '药物剂型不合适' },
              { value: '对已确诊的疾病无有效作用', label: '对已确诊的疾病无有效作用' },
            ]
          },
          {
            value: '药物剂量过低',
            label: '药物剂量过低',
            children: [
              { value: '药物剂量过低', label: '药物剂量过低' },
              { value: '药物使用间隔过长', label: '药物使用间隔过长' },
              { value: '药物相互作用导致药物活性降低', label: '药物相互作用导致药物活性降低' },
              { value: '药物治疗时间过短', label: '药物治疗时间过短' },
            ]
          }
        ]
      }],
      complianceList: [{
        value: '依从性',
        label: '依从性',
        children: [
          {
            value: '用药依从性问题',
            label: '用药依从性问题',
            children: [
              { value: '患者对药物信息了解不足', label: '患者对药物信息了解不足' },
              { value: '患者更倾向于不吃药', label: '患者更倾向于不吃药' },
              { value: '患者经常忘记服药', label: '患者经常忘记服药' },
              { value: '患者无法负担药费', label: '患者无法负担药费' },
              { value: '患者自行服用或管理药物', label: '患者自行服用或管理药物' },
              { value: '患者无法购买到这种药物', label: '患者无法购买到这种药物' }
            ]
          }
        ]
      }]
    }
  },
  mounted () {
    this.getMedList();
    this.getDiseaseList();
  },
  methods: {
    // 获取记录
    getDateList () {
      if (this.patientId) {
        getMedicationProblem({ patientId: this.patientId }).then(res => {
          console.log(res)
        })
      }
    },
    // 药物列表
    getMedList () {
      getAllMed().then(res => {
        console.log('药品列表：', res)
        let { data } = res
        if (data) {
          this.medicData = data
        }
      })
    },
    // 所有疾病列表
    getDiseaseList () {
      getDiseaseList().then(res => {
        console.log('所有病种：', res)
        let { rows } = res
        if (rows) {
          this.painList = rows
        }
      })
    },
    //
    deleteData (index) {
      this.data.splice(index, 1)
    },
    //
    handleOk () {
      this.data[this.actionIndex].diseaseName = this.choicedList.diseaseName
      this.data[this.actionIndex].diseaseId = this.choicedList.diseaseId
      this.visible = false
    },
    //
    handleOkM () {
      this.data[this.actionIndex].medName = this.choicedListM.medName
      this.data[this.actionIndex].medId = this.choicedListM.medId
      this.visibleM = false
    },
    //
    pushDataList () {
      this.data.push({
        compliance: '',
        effectiveness: '',
        indications: '',
        safety: '',
        diseaseId: '',
        diseaseName: '',
        medId: '',
        medName: '',
        problem: '',
        treatmentSuggestion: '',
        isResolved: '',
        saved: false
      })
    },
    //
    confirmData (index) {
      const _data = {
        patientId: this.patientId,
        compliance: this.data[this.actionIndex].compliance,
        effectiveness: this.data[this.actionIndex].effectiveness,
        indications: this.data[this.actionIndex].indications,
        safety: this.data[this.actionIndex].safety,
        diseaseId: this.data[this.actionIndex].diseaseId,
        diseaseName: this.data[this.actionIndex].diseaseName,
        medId: this.data[this.actionIndex].medId,
        medName: this.data[this.actionIndex].medName,
        problem: this.data[this.actionIndex].problem,
        treatmentSuggestion: this.data[this.actionIndex].treatmentSuggestion,
        isResolved: this.data[this.actionIndex].isResolved,
      }
      saveMedicationProblem({ ..._data }).then(res => {
        if (res.code === 200) {
          this.data[this.actionIndex].saved = true
          this.$message.success('新增成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    chiocePain (index) {
      this.actionIndex = index
      this.choicedList = ''
      this.visible = true
    },
    chioceMed (index) {
      this.actionIndex = index
      this.choicedListM = ''
      this.visibleM = true
    }
  },
  watch: {
    patientId: {
      handler (v) {
        if (v) {
          this.getDateList()
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style scoped>
</style>

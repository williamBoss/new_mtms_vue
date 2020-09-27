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
               :scroll="{ x: 800 }"
               bordered>

        <a-table-column key="index"
                        title="序号"
                        :width="100"
                        data-index="index">
          <template slot-scope="text, record, index">{{index+1}}</template>
        </a-table-column>
        <a-table-column key="sick"
                        title="相关疾病"
                        :width="200"
                        data-index="sick">
          <template slot-scope="text, record, index">
            <a-button type="link"
                      class="innerDiv"
                      @click="chiocePain(index)">{{record.diseaseName||'选择疾病'}}</a-button>
          </template>
        </a-table-column>
        <a-table-column key="medicine"
                        title="相关药物"
                        :width="200"
                        data-index="medicine">
          <template slot-scope="text, record, index">
            <!-- <a-button type="link"
                      class="innerDiv"
                      @click="chioceMed(index)">{{record.medName||'选择药物'}}</a-button> -->
            <a-auto-complete v-model="choicedListM"
                             :data-source="medicFilterData"
                             @change="changeMedicData"
                             placeholder="药品名称" />
          </template>
        </a-table-column>
        <a-table-column key="indicationses"
                        title="问题类型"
                        :width="400"
                        data-index="indicationses">
          <template slot-scope="text, record">
            <div>
              <a-cascader :options="indicationsList"
                          :placeholder="'适应性'"
                          :fieldNames="{
                        label: 'medicationProblems'
                        ,
                        value: 'id'
                        ,
                        children: 'childList'
                        }"
                          v-model="record.indicationses" />
            </div>
            <div>
              <a-cascader :options="safetyList"
                          :placeholder="'安全性'"
                          :fieldNames="{
                        label: 'medicationProblems'
                        ,
                        value: 'id'
                        ,
                        children: 'childList'
                        }"
                          v-model="record.safeties" />
            </div>
            <div>
              <a-cascader :options="effectivenessList"
                          :placeholder="'有效性'"
                          :fieldNames="{
                        label: 'medicationProblems'
                        ,
                        value: 'id'
                        ,
                        children: 'childList'
                        }"
                          v-model="record.effectivenessies" />
            </div>
            <div>
              <a-cascader :options="complianceList"
                          :placeholder="'依从性'"
                          :fieldNames="{
                        label: 'medicationProblems'
                        ,
                        value: 'id'
                        ,
                        children: 'childList'
                        }"
                          v-model="record.compliances" />
            </div>
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="具体问题"
                        :width="400"
                        data-index="detail">
          <template slot-scope="text, record">
            <a-textarea v-model="record.problem" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="处理建议"
                        :width="400"
                        data-index="detail">
          <template slot-scope="text, record">
            <a-textarea v-model="record.treatmentSuggestion" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="是否解决"
                        :width="200"
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
                        :width="400"
                        data-index="improve">
          <template slot-scope="text, record">
            <a-textarea v-model="record.improvementDetails" />
          </template>
        </a-table-column>
        <a-table-column key="action"
                        title="操作"
                        :width="200"
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
            <div v-else>已保存</div>
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
             title="选择药品"
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
  medicationProblemsDict,
} from '@/api/mtms'
export default {
  name: 'MedicationProblems',
  props: ['patientId', 'assessmentId'],
  data () {
    return {
      visible: false,
      visibleM: false,
      data: [],
      painList: [],
      medicData: [],
      actionIndex: '',
      medicFilterData: [],
      //
      choicedList: '',
      choicedListM: '',
      //
      indicationsList: [],
      //
      safetyList: [],
      effectivenessList: [],
      complianceList: []
    }
  },
  mounted () {
    this.getDateList();
    this.getMedList();
    this.getDiseaseList();
    this.medicationProblemsDict();
  },
  methods: {
    // 获取记录
    getDateList () {
      if (this.patientId) {
        getMedicationProblem({ patientId: this.patientId }).then(res => {
          let { data } = res

          if (data) {
            let { records } = data
            if (records) {
              console.log('获取记录:', records)
              records.map(item => {
                item.saved = true
              })
              this.data = records
            }
          }
        })
      }
    },
    changeMedicData (searchText) {
      const _data = this.medicData.filter(item => { return item.medName.includes(searchText) })
      const _arr = []
      _data.forEach(item => {
        _arr.push(item.medName)
      })
      this.medicFilterData = _arr
    },
    //
    medicationProblemsDict () {
      // 问题类型 1.适应症 2.有效性 3.安全性 4.依从性
      medicationProblemsDict({ problemType: 1 }).then(res => {
        console.log(res)
        let { data } = res
        this.indicationsList = data
      })
      medicationProblemsDict({ problemType: 2 }).then(res => {
        console.log(res)
        let { data } = res
        this.effectivenessList = data
      })
      medicationProblemsDict({ problemType: 3 }).then(res => {
        console.log(res)
        let { data } = res
        this.safetyList = data
      })
      medicationProblemsDict({ problemType: 4 }).then(res => {
        console.log(res)
        let { data } = res
        this.complianceList = data
      })

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
        compliances: '',
        effectivenessies: '',
        indicationses: '',
        safeties: '',
        diseaseId: '',
        diseaseName: '',
        medId: '',
        medName: '',
        problem: '',
        treatmentSuggestion: '',
        improvementDetails: '',
        isResolved: '',
        saved: false
      })
    },
    //
    confirmData (index) {
      const _data = {
        patientId: this.patientId,
        assessmentId: this.assessmentId,
        compliances: this.data[this.actionIndex].compliances,
        effectivenessies: this.data[this.actionIndex].effectivenessies,
        indicationses: this.data[this.actionIndex].indicationses,
        safeties: this.data[this.actionIndex].safeties,
        diseaseId: this.data[this.actionIndex].diseaseId,
        diseaseName: this.data[this.actionIndex].diseaseName,
        medId: this.data[this.actionIndex].medId,
        medName: this.data[this.actionIndex].medName,
        problem: this.data[this.actionIndex].problem,
        treatmentSuggestion: this.data[this.actionIndex].treatmentSuggestion,
        isResolved: this.data[this.actionIndex].isResolved,
        improvementDetails: this.data[this.actionIndex].improvementDetails
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
<style lang="less">
.medPro-pag {
  textarea {
    min-width: 300px;
  }
  .ant-cascader-picker {
    width: 100%;
  }
}
</style>

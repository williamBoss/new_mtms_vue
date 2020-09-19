<template>
  <div>
    <div class="historyInfo-page">
      <a-collapse>
        <!-- 1 -->
        <a-collapse-panel key="1"
                          header="家族史">
          <a-form-model-item label="家族史">
            <a-tag color="green"
                   v-for="(item, index) in familyMedicalHistoryDisease"
                   :key="index">{{item.diseaseName}}</a-tag>
            <a-button type="primary"
                      @click="addPaint('family')">添加病种</a-button>
          </a-form-model-item>

        </a-collapse-panel>
        <!-- 2 -->
        <a-collapse-panel key="2"
                          header="既往病史">
          <a-form-model-item label="既往病史">
            <a-tag color="green"
                   v-for="(item, index) in pastMedicalHistoryDisease"
                   :key="index">{{item.diseaseName}}</a-tag>
            <a-button type="primary"
                      @click="addPaint('history')">添加病种</a-button>
          </a-form-model-item>
        </a-collapse-panel>
        <!-- 3 -->
        <a-collapse-panel key="3"
                          header="既往手术史">
          <a-checkbox-group v-model="form.pastSurgicalHistoryId">
            <a-checkbox :value="item.surgicalHistoryId"
                        v-for="(item, index) in surgicalHistoryList"
                        :key="index">
              {{item.surgeryName}}
            </a-checkbox>
          </a-checkbox-group>
          <div class="btn-box">
            <a-button @click="savePastSurgicalHistories">保存</a-button>
          </div>
        </a-collapse-panel>
        <!-- 4 -->
        <a-collapse-panel key="4"
                          header="过敏史">
          <a-form-model-item label="过敏史">
            <a-radio-group v-model="form.allergyHistory">
              <a-radio :value="0"> 无 </a-radio>
              <a-radio :value="1"> 有 </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="过敏源"
                             v-if="form.allergyHistory===1">
            <a-input v-model="form.allergen" />
          </a-form-model-item>
          <a-form-model-item label="过敏症状"
                             v-if="form.allergyHistory===1">
            <a-input v-model="form.allergySymptoms" />
          </a-form-model-item>
          <a-form-model-item label="过敏发生时间"
                             v-if="form.allergyHistory===1">
            <a-date-picker v-model="form.allergyDatetime"
                           :format="'YYYY/MM/DD'" />
          </a-form-model-item>
          <div class="btn-box">
            <a-button @click="saveAllergyHistory">保存</a-button>
          </div>
        </a-collapse-panel>
        <!-- 5 -->
        <a-collapse-panel key="5"
                          header="肝损害">
          <a-form-model-item label="肝损害">
            <a-radio-group v-model="form.liverDamage">
              <a-radio :value="0"> 否 </a-radio>
              <a-radio :value="1"> 是 </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="详情描述"
                             v-if="form.liverDamage===1">
            <a-input v-model="form.liverDamageDesc" />
          </a-form-model-item>
          <div class="btn-box">
            <a-button @click="saveLiverDamage">保存</a-button>
          </div>
        </a-collapse-panel>
        <!-- 6 -->
        <a-collapse-panel key="6"
                          header="肾损害">
          <a-form-model-item label="肾损害">
            <a-radio-group v-model="form.kidneyDamage">
              <a-radio :value="0"> 否 </a-radio>
              <a-radio :value="1"> 是 </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="详情描述"
                             v-if="form.kidneyDamage===1">
            <a-input v-model="form.kidneyDamageDesc" />
          </a-form-model-item>
          <div class="btn-box">
            <a-button @click="saveKidneyDamage">保存</a-button>
          </div>
        </a-collapse-panel>
        <!-- 7 -->
        <a-collapse-panel key="7"
                          header="药物不良反应史">
          <a-form-model-item label="药物不良反应史">
            <a-radio-group v-model="form.medicationSideEffect">
              <a-radio :value="0"> 否 </a-radio>
              <a-radio :value="1"> 是 </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <div class="table-addbtn-box flex-bettween"
               v-if="form.medicationSideEffect===1">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushSymptoms()">
              添加不良反应史
            </a-button>
          </div>
          <div class="table-div"
               v-if="form.medicationSideEffect===1">
            <div class="table-title flex">
              <div>序号</div>
              <div>药品名称</div>
              <div>不良反应症状</div>
              <div>发生时间</div>
              <div>操作</div>
            </div>
            <div class="table-body">
              <div class="row flex"
                   :key="index"
                   v-for="(item, index) in medicHostoryList">
                <div>{{ index+1 }}</div>
                <!-- medId -->
                <div>
                  <a-auto-complete v-model="item.medName"
                                   :data-source="medicFilterData"
                                   @change="changeMedicData"
                                   placeholder="药品名称" />
                </div>
                <!-- adverseReactionsSymptoms -->
                <div>
                  <a-checkbox-group v-model="item.adverseReactionsSymptoms">
                    <a-checkbox :value="sitem"
                                v-for="(sitem, sindex) in symptomslist"
                                :key="sindex">
                      {{ sitem }}
                    </a-checkbox>
                  </a-checkbox-group>
                  <a-form-model-item label="其他">
                    <a-input v-model="item.otherSymptoms" />
                  </a-form-model-item>
                </div>
                <!-- occurrenceDatetime -->
                <div>
                  <a-date-picker v-model="item.occurrenceDatetime"
                                 :valueFormat="'YYYY/MM/DD'"
                                 :format="'YYYY/MM/DD'" />
                </div>
                <div>
                  <div v-if="!item.saved">
                    <a-button type="link"
                              class="addHistoryBtn"
                              @click="deleteSymptoms(index)">
                      删除
                    </a-button>
                    <a-button type="link"
                              class="addHistoryBtn"
                              @click="saveSymptoms(index)">
                      保存
                    </a-button>
                  </div>
                  <div v-else>
                    已保存
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
    <a-modal v-model="visible"
             title="选择病种"
             class="paintDiolag"
             @ok="handleOk">
      <div class="checkPainBoxList">
        <a-checkbox-group v-model="choicedList">
          <div class="item"
               v-for="(sitem, sindex) in painList"
               :key="sindex">
            <a-checkbox :value="sitem">
              {{ sitem.diseaseName }}
            </a-checkbox>
          </div>
        </a-checkbox-group>
      </div>
    </a-modal>
  </div>
</template>
<script>
import {
  getAllMed,
  getDiseaseList,
  saveFamilyMedicalHistory,
  savePastHistoryMedicalHistory,
  saveMedicationSideEffect,
  savePastSurgicalHistories,
  saveLiverDamage,
  saveKidneyDamage,
  allSurgicalHistory,
  //
  getFamilyMedicalHistory,
  getPastMedicalHistory,
  getMedicationSideEffectList
} from '@/api/mtms'
export default {
  props: ['patientId', 'assessmentId'],
  data () {
    return {
      visible: false,
      visibleType: '',
      historyList: [
        { name: '糖尿病' },
        { name: '高血压' },
        { name: '高脂血症' },
        { name: '心律不齐（房颤）' },
        { name: '脑卒中' },
        { name: '脑梗死' },
        { name: '心脏病' },
        { name: '慢性阻塞性肺疾病' },
        { name: '胃食管反流病（返酸）' },
        { name: '溃疡（胃/肠）' },
        { name: '哮喘' },
        { name: '抑郁症' },
        { name: '焦虑' },
        { name: '失眠（睡眠困难）' },
        { name: '甲状腺疾病' },
        { name: '癌症' },
        { name: '水肿' }
      ],
      familyHistoryList: [
        { name: '高血压' },
        { name: '高血脂' },
        { name: '心脏病' },
        { name: '糖尿病（1型 / 2型）' },
        { name: '脑梗' },
        { name: '焦虑/抑郁症' },
        { name: '癌症' },
        { name: '哮喘' },
        { name: '肾病' },
        { name: '肝炎' }
      ],
      form: {
        history: '',
        otherHistory: '',
        pastSurgicalHistoryId: '',
        otherSurgery: '',
        allergen: '',
        allergyHistory: 0,
        allergySymptoms: '',
        allergyDatetime: '',
        liverDamage: 0,
        liverDamageDesc: '',
        medicationSideEffect: 0,
        kidneyDamage: 0,
        kidneyDamageDesc: ''
      },
      medicHostoryList: [{
        otherSymptoms: '',
        adverseReactionsSymptoms: '',
        medId: '',
        medicationSideEffectId: 0,
        occurrenceDatetime: '',
        saved: false
      }],
      medicData: [],
      medicFilterData: [],
      painList: [],
      symptomslist: ['恶心', '呕吐', '便秘', '腹泻', '腹痛', '失眠', '头晕', '肌痛', '肝功能异常'
      ],
      familyMedicalHistoryDisease: [],
      pastMedicalHistoryDisease: [],
      choicedList: [],
      surgicalHistoryList: []
    }
  },
  mounted () {
    // this.getMedList()
    this.getDiseaseList()
    this.getAllSurgicalHistory()
    this.getMedicationSideEffectList()
  },
  methods: {
    /**
     * 保存操作
     */
    // 药物列表
    getMedList () {
      getAllMed().then(res => {
        let { data } = res
        if (data) {
          this.medicData = data
        }
      })
    },
    // 所有疾病列表
    getDiseaseList () {
      getDiseaseList().then(res => {
        let { rows } = res
        if (rows) {
          this.painList = rows
        }
      })
    },
    pushSymptoms () {
      console.log('添加数据')
      this.medicHostoryList.unshift({
        otherSymptoms: '',
        adverseReactionsSymptoms: '',
        medId: '',
        medicationSideEffectId: 0,
        occurrenceDatetime: '',
        saved: false
      })
    },
    deleteSymptoms (index) {
      console.log(index)
      this.medicHostoryList.splice(index, 1)
    },
    // 校验不良反应史数据
    checkSymptomsData (index) {
      if (!this.patientId) { return false }
      if (!this.medicHostoryList[index].medName) { return false }
      if (!this.medicHostoryList[index].occurrenceDatetime) { return false }
      if (this.medicHostoryList[index].adverseReactionsSymptoms.length < 1 && !this.medicHostoryList[index].otherSymptoms) { return false }
      return true
    },
    // 保存药物不良反应记录
    saveSymptoms (index) {
      if (!this.checkSymptomsData(index)) return
      let _otherSymptoms = []
      if (this.medicHostoryList[index].otherSymptoms) {
        _otherSymptoms = this.medicHostoryList[index].otherSymptoms.splice(',')
      }
      const adverseReactionsSymptoms = this.medicHostoryList[index].adverseReactionsSymptoms.concat(_otherSymptoms).join(',')
      saveMedicationSideEffect({
        adverseReactionsSymptoms: adverseReactionsSymptoms,
        medName: this.medicHostoryList[index].medName,
        occurrenceDatetime: this.medicHostoryList[index].occurrenceDatetime,
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }).then(res => {
        const { code } = res
        if (code === 200) {
          this.medicHostoryList[index].saved = true
          this.$message.success('新增成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    // 保存家族史 既往病史
    handleOk () {
      const _arr = JSON.parse(JSON.stringify(this.choicedList))
      let ids = []
      _arr.forEach(item => {
        ids.push(item.diseaseId)
      })
      if (this.visibleType === 'family') {
        saveFamilyMedicalHistory({
          patientId: this.patientId,
          familyMedicalHistoryDiseaseIds: ids
        }).then(res => {
          console.log(res)
          if (res.code === 200) {
            this.$message.success('新增成功')
            this.visible = false
            this.familyMedicalHistoryDisease = _arr
          } else {
            this.$message.error('系统错误，获取患者信息失败，请稍后再试')
          }
        })
      } else if (this.visibleType === 'history') {
        savePastHistoryMedicalHistory({
          patientId: this.patientId,
          pastMedicalHistoryDiseaseIds: ids
        }).then(res => {
          if (res.code === 200) {
            this.$message.success('新增成功')
            this.visible = false
            this.pastMedicalHistoryDisease = _arr
          } else {
            this.$message.error('系统错误，获取患者信息失败，请稍后再试')
          }
        })
      }

    },
    addPaint (type) {
      this.visibleType = type
      if (type === 'family') {
        this.choicedList = this.familyMedicalHistoryDisease
      } else if (type === 'history') {
        this.choicedList = this.pastMedicalHistoryDisease
      }
      this.visible = true
    },
    changeMedicData (searchText) {
      const _data = this.medicData.filter(item => { return item.medName.includes(searchText) })
      const _arr = []
      _data.forEach(item => {
        _arr.push(item.medName)
      })
      this.medicFilterData = _arr
    },
    // 获取既往手术史
    getAllSurgicalHistory () {
      allSurgicalHistory().then(res => {
        console.log(res);
        const { data } = res;
        data ? this.surgicalHistoryList = data : '';
      })
    },
    // 保存既往手术史
    savePastSurgicalHistories () {
      savePastSurgicalHistories({
        patientId: this.patientId,
        surgicalIds: this.form.pastSurgicalHistoryId,
        assessmentId: this.assessmentId
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    // 保存过敏史
    saveAllergyHistory () {
      saveAllergyHistory({
        patientId: this.patientId,
        allergyHistory: this.form.allergyHistory,
        allergen: this.form.allergen,
        allergySymptoms: this.form.allergySymptoms,
        allergyDatetime: this.form.allergyDatetime,
        assessmentId: this.assessmentId
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    // 保存肝损伤
    saveLiverDamage () {
      saveLiverDamage({
        patientId: this.patientId,
        liverDamageDesc: this.form.liverDamageDesc,
        liverDamage: this.form.liverDamage,
        assessmentId: this.assessmentId
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    // 保存肾损害
    saveKidneyDamage () {
      saveKidneyDamage({
        patientId: this.patientId,
        kidneyDamage: this.form.kidneyDamage,
        kidneyDamageDesc: this.form.kidneyDamageDesc,
        assessmentId: this.assessmentId
      }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    /**
     * 获取历史数据
     */
    getAllHistoryList () {
      this.getFamilyMedicalHistory()
      this.getPastMedicalHistory()
    },
    getFamilyMedicalHistory () {
      getFamilyMedicalHistory({ patientId: this.patientId }).then(res => {
        let { data } = res
        this.familyMedicalHistoryDisease = data
      })
    },
    getPastMedicalHistory () {
      getPastMedicalHistory({ patientId: this.patientId }).then(res => {
        let { data } = res
        this.pastMedicalHistoryDisease = data
      })
    },
    async getMedicationSideEffectList () {
      await this.getMedList()
      await getMedicationSideEffectList({
        patientId: this.patientId
      }).then(res => {
        console.log(res)
        let { data } = res
        if (data && data.length > 0) {
          this.form.medicationSideEffect = 1
        }
        data && data.map(item => {
          item.saved = true
          let adverseReactionsSymptoms = []
          adverseReactionsSymptoms = item.adverseReactionsSymptoms.split(',')
          item.adverseReactionsSymptoms = []
          let otherSym = []
          adverseReactionsSymptoms.forEach(sym => {
            let result = false
            if (this.symptomslist.includes(sym)) {
              item.adverseReactionsSymptoms.push(sym)
            } else {
              otherSym.push(sym)
            }
          })
          item.otherSymptoms = otherSym.join(',')
          if (this.medicData) {
            this.medicData.forEach(med => {
              if (med.medId === item.medId) {
                item.medName = med.medName
              }
            })
          }
        })
        this.medicHostoryList = data
      })
    }
  },
  watch: {
    medicHostoryList: {
      handler (c) {
        console.log('medicHostoryList: ', c)
      },
      deep: true,
      immediate: true
    },
    patientId: {
      handler (d) {
        if (d) {
          console.log(d)
          this.getAllHistoryList()
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang="less">
.historyInfo-page {
  div.ant-collapse-content-box .ant-form-item .ant-form-item-control {
    width: auto;
  }
  .ant-checkbox-wrapper {
    display: block;
    margin-left: 8px;
  }
  .table-div {
    width: 800px;
    .table-title {
      background: #ccc;
      div {
        text-align: center;
        color: #fff;
      }
    }
    .ant-form-item-label {
      min-width: auto;
    }
    .ant-form-item-control {
      max-width: 100% !important;
    }
    .table-title > div,
    .row > div {
      padding: 5px 10px;
      border-right: 1px solid #666;
      border-bottom: 1px solid #666;
    }
    .table-title > div:first-child,
    .row > div:first-child {
      width: 100px;
      border-left: 1px solid #666;
    }
    .table-title > div:nth-child(2),
    .row > div:nth-child(2) {
      width: 200px;
    }
    .table-title > div:nth-child(3),
    .row > div:nth-child(3) {
      width: 200px;
      .ant-checkbox-wrapper {
        display: inline-block;
      }
    }
    .table-title > div:nth-child(4),
    .row > div:nth-child(4) {
      width: 200px;
      .ant-checkbox-wrapper {
        display: inline-block;
      }
    }
    .table-title > div:last-child,
    .row > div:last-child {
      width: 100px;
    }
  }
  .addHistoryBtn {
    margin-bottom: 15px;
  }
  .checkPainBoxList {
  }
}
</style>

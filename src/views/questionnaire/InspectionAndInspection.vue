<template>
  <div>
    <div class="inspectionAnd-page">
      <a-collapse>
        <!-- 血压 -->
        <a-collapse-panel key="1"
                          header="血压">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushData('bloodPressure')">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column">
              <div class="title">血压</div>
              <div>早</div>
              <div>中</div>
              <div>晚</div>
            </div>
            <div class="column"
                 v-for="(item,index) in bloodPressure"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.morningValue" />
              </div>
              <div>
                <a-input v-model="item.noonValue" />
              </div>
              <div>
                <a-input v-model="item.nightValue" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveDetectBloodPressure(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'bloodPressure')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 心率 -->
        <a-collapse-panel key="2"
                          header="心率">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushData('heartRate')">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column">
              <div class="title">心率</div>
              <div>早</div>
              <div>中</div>
              <div>晚</div>
            </div>
            <div class="column"
                 v-for="(item,index) in heartRate"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.morningValue" />
              </div>
              <div>
                <a-input v-model="item.noonValue" />
              </div>
              <div>
                <a-input v-model="item.nightValue" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveDetectHeartRate(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'heartRate')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 血脂记录 -->
        <a-collapse-panel key="3"
                          header="血脂记录">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushBloodLipidsData()">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column middle">
              <div class="title">血脂记录</div>
              <div>总胆固醇TC(mmol/L)</div>
              <div>低密度脂蛋白LDL-C(mmol/L)</div>
              <div>甘油三酯TG(mmol/L)</div>
              <div>脂蛋白LP-A</div>
              <div>高密度脂蛋白HDL-C（mmol/L）</div>
              <div>低密度脂蛋白胆固醇</div>
            </div>
            <div class="column middle"
                 v-for="(item,index) in bloodLipids"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.tc" />
              </div>
              <div>
                <a-input v-model="item.ldl" />
              </div>
              <div>
                <a-input v-model="item.tg" />
              </div>
              <div>
                <a-input v-model="item.lpA" />
              </div>
              <div>
                <a-input v-model="item.hdlC" />
              </div>
              <div>
                <a-input v-model="item.ldlC" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="savebloodLipids(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'bloodLipids')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 血糖记录bloodSugar -->
        <a-collapse-panel key="4"
                          header="血糖记录">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushBloodSugar()">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column middle">
              <div class="title">血糖记录</div>
              <div>空腹血糖(mmol/L)</div>
              <div>糖化血红蛋白(%)</div>
              <div>餐后2小时血糖（mmol/L）</div>
              <div>尿微量白蛋白（mg/L）</div>
            </div>
            <div class="column middle"
                 v-for="(item,index) in bloodSugar"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.fastingBloodGlucose" />
              </div>
              <div>
                <a-input v-model="item.glycatedHemoglobin" />
              </div>
              <div>
                <a-input v-model="item.twoHoursPostprandial" />
              </div>
              <div>
                <a-input v-model="item.urineMicroalbumin" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveBloodSugar(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'bloodSugar')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 同型半胱氨酸 -->
        <a-collapse-panel key="5"
                          header="同型半胱氨酸">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushHomocysteine()">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column middle">
              <div class="title">同型半胱氨酸</div>
              <div>同型半胱氨酸（umol/L）</div>
            </div>
            <div class="column middle"
                 v-for="(item,index) in homocysteine"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.homocysteineValue" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveHomocysteine(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'homocysteine')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 血尿酸bloodUricAcid -->
        <a-collapse-panel key="6"
                          header="血尿酸">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushBloodUricAcid()">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column middle">
              <div class="title">血尿酸</div>
              <div>血尿酸（mmol/L）</div>
            </div>
            <div class="column middle"
                 v-for="(item,index) in bloodUricAcid"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.bloodUricAcidValue" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveBloodUricAcid(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'bloodUricAcid')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 肝功能liverFunction -->
        <a-collapse-panel key="7"
                          header="肝功能">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushLiverFunction()">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column middle">
              <div class="title">肝功能</div>
              <div>谷丙转氨酶 ALT（U/L）</div>
              <div>谷草转氨酶 AST（U/L）</div>
            </div>
            <div class="column middle"
                 v-for="(item,index) in liverFunction"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.alt" />
              </div>
              <div>
                <a-input v-model="item.ast" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveLiverFunction(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'liverFunction')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 肾功能 -->
        <a-collapse-panel key="8"
                          header="肾功能">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushKidneyFunction()">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column middle">
              <div class="title">肾功能</div>
              <div>血肌酐Cr（umol/L）</div>
              <div>24h尿蛋白（mg）</div>
              <div>肾小球滤过率（GFR）</div>
              <div>肌酐清除率（ml/min）</div>
              <div>肌酸激酶CK</div>
            </div>
            <div class="column middle"
                 v-for="(item,index) in kidneyFunctionList"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.serumCreatinine" />
              </div>
              <div>
                <a-input v-model="item.twentyFourHourUrineProtein" />
              </div>
              <div>
                <a-input v-model="item.glomerularFiltrationRate" />
              </div>
              <div>
                <a-input v-model="item.creatinineClearanceRate" />
              </div>
              <div>
                <a-input v-model="item.creatineKinase" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveDetectKidneyFunction(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'kidneyFunction')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 电解质 -->
        <a-collapse-panel key="9"
                          header="电解质">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushElectrolyte()">
              添加
            </a-button>
          </div>
          <div class="table flex">
            <div class="column middle">
              <div class="title">电解质</div>
              <div>钙</div>
              <div>磷</div>
              <div>25-OH-维生素D（25-OH-Vitd）</div>
            </div>
            <div class="column middle"
                 v-for="(item, index) in electrolyte"
                 :key="index">
              <div class="">
                <a-date-picker v-model="item.detectDate"
                               :valueFormat="'YYYY/MM/DD'"
                               :format="'YYYY/MM/DD'" />
              </div>
              <div>
                <a-input v-model="item.calcium" />
              </div>
              <div>
                <a-input v-model="item.phosphorus" />
              </div>
              <div>
                <a-input v-model="item.tfOhVitd" />
              </div>
              <div class="not-border"
                   v-if="!item.saved">
                <a-button type="link"
                          @click="saveDetectElectrolyte(index)">
                  保存
                </a-button>
                <a-button type="link"
                          @click="deleteData(index, 'electrolyte')">
                  取消
                </a-button>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 其他 -->
        <a-collapse-panel key="10"
                          header="其他">
          <div class="table-addbtn-box flex">
            <a-button type="primary"
                      class="addHistoryBtn"
                      @click="pushOther()">
              添加
            </a-button>
          </div>
          <div class="table flex last-table">
            <div class="column middle">
              <div class="row"
                   v-for="(item, index) in detectOtherList"
                   :key="index">
                <div>
                  <a-input placeholder="检测项名称"
                           v-model="item.detectName" />
                </div>
                <div>
                  <a-input placeholder="检测项单位"
                           v-model="item.detectUnit" />
                </div>
                <div class="">
                  <a-date-picker v-model="item.detectDate"
                                 :valueFormat="'YYYY/MM/DD'"
                                 :format="'YYYY/MM/DD'" />
                </div>
                <div>
                  <a-input placeholder="检测值"
                           v-model="item.detectValue" />
                </div>
                <div class="not-border"
                     v-if="!item.saved">
                  <a-button type="link"
                            @click="saveDetectOther(index)">
                    保存
                  </a-button>
                  <a-button type="link"
                            @click="deleteData(index, 'electrolyte')">
                    取消
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
import {
  saveDetectBloodPressure,
  getDetectBloodPressureList,
  saveDetectHeartRate,
  getDetectHeartRateList,
  saveDetectBloodLipids,
  getDetectBloodLipidsList,
  saveDetectBloodSugar,
  getDetectBloodSugarList,
  saveDetectHomocysteine,
  getDetectHomocysteineList,
  saveDetectBloodUricAcid,
  getDetectBloodUricAcidList,
  saveDetectLiverFunction,
  getDetectLiverFunctionList,
  saveDetectKidneyFunction,
  getDetectKidneyFunctionList,
  saveDetectElectrolyte,
  getDetectElectrolyteList,
  saveDetectOther
} from '@/api/mtms'
export default {
  name: 'InspectionAndInspection',
  props: ['patientId', 'assessmentId'],
  data () {
    return {
      bloodPressure: [],
      heartRate: [],
      bloodLipids: [],
      bloodSugar: [],
      homocysteine: [],
      bloodUricAcid: [],
      liverFunction: [],
      kidneyFunctionList: [],
      electrolyte: [],
      detectOtherList: []
    }
  },
  methods: {
    getAllData () {
      this.getBloodPressure()
      this.getDetectHeartRateList()
      this.getBloodLipids()
      this.getBloodSugar()
      this.getBloodSugar()
      this.getHomocysteine()
      this.getBloodUricAcid()
      this.getLiverFunction()
      this.getDetectKidneyFunctionList()
      this.getDetectElectrolyteList()
      this.getOtherList()
    },
    pushData (type) {
      this[type].push({
        detectDate: '',
        morningValue: '',
        noonValue: '',
        nightValue: '',
        saved: false
      })
    },
    pushBloodLipidsData () {
      this.bloodLipids.push({
        detectDate: '',
        tc: '',
        ldl: '',
        tg: '',
        lpA: '',
        hdlC: '',
        ldlC: '',
        saved: false
      })
    },
    deleteData (index, type) {
      this[type].splice(index, 1)
    },
    // 血压
    getBloodPressure () {
      getDetectBloodPressureList({ patientId: this.patientId }).then(res => {
        console.log(res)
        let { rows } = res
        if (rows) {
          this.bloodPressure = rows
        }
      })
    },
    saveDetectBloodPressure (index) {
      let data = {
        detectDate: this.bloodPressure[index].detectDate,
        morningValue: this.bloodPressure[index].morningValue,
        noonValue: this.bloodPressure[index].noonValue,
        nightValue: this.bloodPressure[index].nightValue,
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }
      saveDetectBloodPressure({ ...data }).then(res => {
        if (res.code === 200) {
          this.bloodPressure[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    // 心率
    getDetectHeartRateList () {
      getDetectHeartRateList({ patientId: this.patientId }).then(res => {
        console.log(res)
        let { rows } = res
        if (rows) {
          this.heartRate = rows
        }
      })
    },
    saveDetectHeartRate (index) {
      let data = {
        detectDate: this.heartRate[index].detectDate,
        morningValue: this.heartRate[index].morningValue,
        noonValue: this.heartRate[index].noonValue,
        nightValue: this.heartRate[index].nightValue,
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }
      saveDetectHeartRate({ ...data }).then(res => {
        if (res.code === 200) {
          this.heartRate[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    // 血脂
    getBloodLipids () {
      getDetectBloodLipidsList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        if (rows) {
          this.bloodLipids = rows
        }
      })
    },
    savebloodLipids (index) {
      let _data = JSON.parse(JSON.stringify(this.bloodLipids[index]))
      delete _data.saved
      saveDetectBloodLipids({ ..._data, patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.bloodLipids[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    // 血糖
    pushBloodSugar () {
      this.bloodSugar.push({
        detectDate: '',
        fastingBloodGlucose: '',
        glycatedHemoglobin: '',
        twoHoursPostprandial: '',
        urineMicroalbumin: '',
        saved: false
      })
    },
    saveBloodSugar (index) {
      let _dataBL = JSON.parse(JSON.stringify(this.bloodLipids[index]))
      delete _dataBL.saved
      saveDetectBloodSugar({ ..._dataBL, patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.bloodSugar[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getBloodSugar () {
      getDetectBloodSugarList({ patientId: this.patientId }).then(res => {
        console.log(res)
        let { rows } = res
        if (rows) {
          this.bloodSugar = rows
        }
      })
    },
    // 同型半胱氨酸
    pushHomocysteine () {
      this.homocysteine.push({
        detectDate: '',
        homocysteineValue: '',
        saved: false
      })
    },
    saveHomocysteine (index) {
      let _dataH = JSON.parse(JSON.stringify(this.homocysteine[index]))
      delete _dataH.saved
      saveDetectHomocysteine({ ..._dataH, patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.homocysteine[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getHomocysteine () {
      getDetectHomocysteineList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        if (rows) {
          this.bloodLipids = rows
        }
      })
    },
    // 血尿酸
    pushBloodUricAcid () {
      this.bloodUricAcid.push({
        saved: false,
        detectDate: '',
        bloodUricAcidValue: ''
      })
    },
    saveBloodUricAcid (index) {
      let _dataBUA = JSON.parse(JSON.stringify(this.bloodUricAcid[index]))
      delete _dataBUA.saved
      saveDetectBloodUricAcid({ ..._dataBUA, patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.bloodUricAcid[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getBloodUricAcid () {
      getDetectBloodUricAcidList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        if (rows) {
          this.bloodUricAcid = rows
        }
      })
    },
    // 肝功能
    pushLiverFunction () {
      this.liverFunction.push({
        saved: false,
        detectDate: '',
        alt: '',
        ast: ''
      })
    },
    saveLiverFunction (index) {
      let _dataLF = JSON.parse(JSON.stringify(this.liverFunction[index]))
      delete _dataLF.saved
      saveDetectLiverFunction({ ..._dataLF, patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.liverFunction[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getLiverFunction () {
      getDetectLiverFunctionList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        if (rows) {
          this.liverFunction = rows
        }
      })
    },
    // 肾功能
    pushKidneyFunction () {
      this.kidneyFunctionList.push({
        saved: false,
        detectDate: '',
        creatineKinase: '',
        twentyFourHourUrineProtein: '',
        glomerularFiltrationRate: '',
        creatinineClearanceRate: '',
        creatineKinase: ''
      })
    },
    saveDetectKidneyFunction () {
      let _dataKF = JSON.parse(JSON.stringify(this.kidneyFunctionList[index]))
      delete _dataKF.saved
      saveDetectLiverFunction({ ..._dataKF, patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.kidneyFunctionList[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getDetectKidneyFunctionList () {
      getDetectKidneyFunctionList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        if (rows) {
          this.kidneyFunctionList = rows
        }
      })
    },
    // 电解质
    pushElectrolyte () {
      this.electrolyte.push({
        saved: false,
        calcium: '',
        phosphorus: '',
        tfOhVitd: ''
      })
    },
    saveDetectElectrolyte (index) {
      let _dataE = JSON.parse(JSON.stringify(this.electrolyte[index]))
      delete _dataE.saved
      saveDetectElectrolyte({ ..._dataE, patientId: this.patientId, assessmentId: this.assessmentId }).then(res => {
        if (res.code === 200) {
          this.electrolyte[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    getDetectElectrolyteList () {
      getDetectElectrolyteList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        if (rows) {
          this.electrolyte = rows
        }
      })
    },
    // 其他
    pushOther () {
      this.detectOtherList.push({
        saved: false,
        "detectDate": "",
        "detectName": "",
        "detectUnit": "",
        "detectValue": ""
      })
    },
    getOtherList () {
      getDetectOtherList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        if (rows) {
          this.electrolyte = rows
        }
      })
    },
    saveDetectOther (index) {
      let data = {
        "detectDate": this.detectOtherList[index].detectDate,
        "detectName": this.detectOtherList[index].detectName,
        "detectUnit": this.detectOtherList[index].detectUnit,
        "detectValue": this.detectOtherList[index].detectValue,
        patientId: this.patientId,
        assessmentId: this.assessmentId
      }
      saveDetectOther({ ...data }).then(res => {
        if (res.code === 200) {
          this.detectOtherList[index].saved = true
          this.$message.success('添加成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    }
  },
  watch: {
    patientId: {
      handler (v) {
        this.getAllData()
      },
      immediate: true
    }
  }
}
</script>

<style lang="less">
.inspectionAnd-page {
  .flex {
    display: flex;
  }
  .table .column {
    width: 140px;
  }
  .table > .column:last-child > div {
    border-right: 1px solid #eee;
  }
  .column > div {
    border: 1px solid #eee;
    height: 30px;
    line-height: 20px;
    padding: 5px;
    box-sizing: border-box;
    border-bottom: none;
    border-right: none;
  }
  .column.middle {
    width: 140px;
  }
  .column.middle > div {
    height: 50px;
    box-sizing: border-box;
    // line-height: 16px;
    overflow: hidden;
  }
  .column > div.title {
    margin: 0;
  }
  .column > div:first-child:not(.title) {
    line-height: 30px;
    padding: 0;
    overflow: hidden;
  }
  .column input {
    border: none !important;
    line-height: 30px;
  }
  .column.middle > div:first-child input {
    // padding: 0;
    height: 50px;
    line-height: 50px;
  }
  .column.middle input {
    height: 50px;
    line-height: 50px;
  }
  .column > div:last-child:not(.not-border) {
    border-bottom: 1px solid #eee;
  }
  .column > div input {
    height: 20px;
    border: none;
  }
  .column .title {
    background-color: #00b050;
    color: #fff;
  }
  .table-addbtn-box {
    width: 100%;
  }
  .ant-calendar-picker-input.ant-input {
    border: none;
  }
  .not-border {
    border-left: none !important;
    border-right: none !important;
    border-top: 1px solid #eee;
  }
  .last-table {
    // width: 600px;
    .column.middle {
      width: auto;
    }
    .row {
      overflow: hidden;
      padding: 0;
      > div {
        float: left;
        width: 150px;
        line-height: 50px;
        overflow: hidden;
      }
      > div:not(:last-child) {
        border-right: 1px solid #eee;
      }
    }
  }
}
</style>

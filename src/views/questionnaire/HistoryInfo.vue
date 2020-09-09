<template>
  <div>
    <div class="historyInfo-page">
      <a-collapse>
        <!-- 1 -->
        <a-collapse-panel key="1"
                          header="家族史">
          <a-form-model-item label="家族史">
            <a-checkbox-group v-model="form.history">
              <a-checkbox :value="item.name"
                          v-for="(item,index) in familyHistoryList"
                          :key="index">
                {{ item.name }}
              </a-checkbox>
            </a-checkbox-group>
            <div class="other-div">
              <div class=" input-div flex">
                <div>其他</div>
                <div class="input-item">
                  <a-input v-model="form.otherHistory" />
                </div>
              </div>
            </div>
          </a-form-model-item>
        </a-collapse-panel>
        <!-- 2 -->
        <a-collapse-panel key="2"
                          header="既往病史">
          <a-form-model-item label="既往病史">
            <a-checkbox-group v-model="form.history">
              <a-checkbox :value="item.name"
                          v-for="(item,index) in historyList"
                          :key="index">
                {{ item.name }}
              </a-checkbox>
            </a-checkbox-group>
            <div class="other-div">
              <div class=" input-div flex">
                <div>其他</div>
                <div class="input-item">
                  <a-input v-model="form.otherHistory" />
                </div>
              </div>
            </div>
          </a-form-model-item>
        </a-collapse-panel>
        <!-- 3 -->
        <a-collapse-panel key="3"
                          header="既往手术史">
          <a-checkbox-group v-model="form.surgery">
            <a-form-model-item label="心脏">
              <a-checkbox value="血管成形术（球囊手术）或支架">
                血管成形术（球囊手术）或支架
              </a-checkbox>
              <a-checkbox value="冠状动脉旁路移植术（搭桥）">
                冠状动脉旁路移植术（搭桥）
              </a-checkbox>
              <a-checkbox value="心脏起搏器和除颤器">
                心脏起搏器和除颤器
              </a-checkbox>
            </a-form-model-item>
            <a-form-model-item label="支架">
              <a-checkbox value="颈动脉">
                颈动脉
              </a-checkbox>
              <a-checkbox value="肾动脉">
                肾动脉
              </a-checkbox>
            </a-form-model-item>
            <a-form-model-item label="移植手术">
              <a-checkbox value="肾移植">
                肾移植
              </a-checkbox>
              <a-checkbox value="肝移植">
                肝移植
              </a-checkbox>
              <a-checkbox value="骨髓移植">
                骨髓移植
              </a-checkbox>
            </a-form-model-item>
            <a-form-model-item label="关节置换">
              <a-checkbox value="髋关节">
                髋关节
              </a-checkbox>
              <a-checkbox value="膝关节">
                膝关节
              </a-checkbox>
            </a-form-model-item>
            <a-form-model-item label="其他手术">
              <a-checkbox value="阑尾切除术">
                阑尾切除术
              </a-checkbox>
              <a-checkbox value="子宫切除术">
                子宫切除术
              </a-checkbox>
              <a-checkbox value="生产手术">
                生产手术
              </a-checkbox>
            </a-form-model-item>
          </a-checkbox-group>
          <div class="other-div">
            <div class=" input-div flex">
              <div>其他</div>
              <div class="input-item">
                <a-input v-model="form.otherSurgery" />
              </div>
            </div>
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
            <a-input />
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
                  <a-auto-complete v-model="item.medId"
                                   :data-source="medicData"
                                   placeholder="药品名称" />
                </div>
                <!-- adverseReactionsSymptoms -->
                <div>
                  <a-checkbox-group v-model="item.adverseReactionsSymptoms">
                    <a-checkbox :value="sitem.name"
                                v-for="(sitem, sindex) in symptomslist"
                                :key="sindex">
                      {{ sitem.name }}
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
  getAllMed,
  saveMedicationSideEffect
} from '@/api/mtms'
export default {
  props: {
    patientId: {
      // type:
    }
  },
  data () {
    return {
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
        surgery: '',
        otherSurgery: '',
        allergyHistory: 0,
        allergySymptoms: '',
        allergyDatetime: '',
        liverDamage: 0,
        liverDamageDesc: '',
        medicationSideEffect: 0
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
      symptomslist: [
        { name: '恶心' },
        { name: '呕吐' },
        { name: '便秘' },
        { name: '腹泻' },
        { name: '腹痛' },
        { name: '失眠' },
        { name: '头晕' },
        { name: '肌痛' },
        { name: '肝功能异常' }
      ]
    }
  },
  mounted () {
    this.getMedList()
  },
  methods: {
    // 药物列表
    getMedList () {
      getAllMed().then(res => {
        console.log('药品列表：', res)
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
      if (!this.medicHostoryList[index].medId) { return false }
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
        medId: this.medicHostoryList[index].medId,
        occurrenceDatetime: this.medicHostoryList[index].occurrenceDatetime,
        patientId: this.patientId
      }).then(res => {
        const { success } = res
        if (success) {
          this.medicHostoryList[index].saved = true
          this.$message.success('新增成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
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
    patientId: function (d) {
      console.log(d)
    }
  }
}
</script>
<style lang="less">
.historyInfo-page {
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
}
</style>

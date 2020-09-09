<template>
  <div>
    <div class="ExistingSymptoms-page">
      <vue-scroll>
        <a-form-model :layout="'vertical'"
                      :model="form"
                      :rules="rules">
          <!-- <div style="padding: 12px 16px;">
            <a-form-model-item label="接诊日期"
                               ref="fillDate"
                               prop="fillDate">
              <a-date-picker v-model="form.fillDate"
                             placeholder="选择日期"
                             :defaultValue="moment(getCurrentDate(), 'YYYY-MM-DD')" />
            </a-form-model-item>
          </div>
          <a-divider style="margin: 8px 0;" /> -->
          <a-collapse v-model="collapseActiveKey">
            <a-collapse-panel key="MainConsult"
                              header="主诉"
                              :style="customStyle">
              <a-form-model-item label="1.主诉"
                                 ref="mainConsult"
                                 prop="mainConsult">
                <a-input v-model="form.mainConsult"
                         type="textarea"
                         :rows="6" />
              </a-form-model-item>
            </a-collapse-panel>
            <a-collapse-panel key="DiseaseIds"
                              header="诊断"
                              :style="customStyle">
              <a-form-model-item label="1.诊断"
                                 ref="diseaseIds"
                                 prop="diseaseIds">
                <a-checkbox-group v-model="form.diseaseId">
                  <a-checkbox value="1"
                              name="diseaseIds">高血压</a-checkbox>
                  <a-checkbox value="2"
                              name="diseaseIds">高血脂</a-checkbox>
                  <a-checkbox value="3"
                              name="diseaseIds">高尿酸</a-checkbox>
                  <a-checkbox value="4"
                              name="diseaseIds">高同型半胱氨酸</a-checkbox>
                  <a-checkbox value="5"
                              name="diseaseIds">心肌梗死</a-checkbox>
                  <a-checkbox value="6"
                              name="diseaseIds">PCI术后</a-checkbox>
                  <a-checkbox value="7"
                              name="diseaseIds">糖尿病1型</a-checkbox>
                  <a-checkbox value="8"
                              name="diseaseIds">糖尿病2型</a-checkbox>
                  <a-checkbox value="9"
                              name="diseaseIds">脑梗死</a-checkbox>
                  <a-checkbox value="10"
                              name="diseaseIds">脑卒中</a-checkbox>
                  <a-checkbox value="11"
                              name="diseaseIds">冠心病</a-checkbox>
                  <a-checkbox value="12"
                              name="diseaseIds">心律不齐（房颤）</a-checkbox>
                  <a-checkbox value="13"
                              name="diseaseIds">哮喘</a-checkbox>
                  <a-checkbox value="14"
                              name="diseaseIds">慢性阻塞性肺疾病</a-checkbox>
                  <a-checkbox value="15"
                              name="diseaseIds">疼痛</a-checkbox>
                  <a-checkbox value="16"
                              name="diseaseIds">胃食管反流病</a-checkbox>
                  <a-checkbox value="17"
                              name="diseaseIds">消化道溃疡（胃/肠）</a-checkbox>
                  <a-checkbox value="18"
                              name="diseaseIds">焦虑/抑郁症</a-checkbox>
                  <a-checkbox value="19"
                              name="diseaseIds">甲状腺疾病</a-checkbox>
                  <a-checkbox value="20"
                              name="diseaseIds">肿瘤</a-checkbox>
                  <a-checkbox value="21"
                              name="diseaseIds">慢性肾病</a-checkbox>
                  <a-checkbox value="22"
                              name="diseaseIds">前列腺增生</a-checkbox>
                  <a-checkbox value="23"
                              name="diseaseIds">腰椎间盘突出</a-checkbox>
                  <a-checkbox value="23"
                              name="diseaseIds">类风湿关节炎</a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他病种"
                                 ref="diseaseName"
                                 prop="diseaseName">
                <a-input v-model="form.diseaseName"
                         placeholder="请输入其他具体病种，多个病种用顿号间隔病种名称" />
              </a-form-model-item>
            </a-collapse-panel>
            <a-collapse-panel key="SymptomDescription"
                              header="当前症状描述"
                              :style="customStyle">
              <a-form-model-item label="1.体质"
                                 ref="physique"
                                 prop="physique">
                <a-checkbox-group v-model="form.physique">
                  <a-checkbox value="1"
                              name="physique">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="physique">
                    体重减轻
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="physique">
                    体重增加
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="physique">
                    盗汗
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="physique">
                    疲劳
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他体质问题"
                                 ref="physiqueOtherDesc"
                                 prop="physiqueOtherDesc">
                <a-input v-model="form.physiqueOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="2.五官"
                                 ref="facialFeatures"
                                 prop="facialFeatures">
                <a-checkbox-group v-model="form.facialFeatures">
                  <a-checkbox value="1"
                              name="facialFeatures">
                    无
                  </a-checkbox>
                  <div class="flex">
                    <div class="title"> 视力问题</div>
                    <div>
                      <a-checkbox value="3"
                                  name="facialFeatures">
                        重影
                      </a-checkbox>
                      <a-checkbox value="4"
                                  name="facialFeatures">
                        青光眼
                      </a-checkbox>
                      <a-checkbox value="5"
                                  name="facialFeatures">
                        白内障
                      </a-checkbox>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="title">听力障碍</div>
                    <div>
                      <a-checkbox value="7"
                                  name="facialFeatures">
                        耳鸣
                      </a-checkbox>
                      <a-checkbox value="8"
                                  name="facialFeatures">
                        耳痛
                      </a-checkbox>
                      <a-checkbox value="9"
                                  name="facialFeatures">
                        眩晕
                      </a-checkbox>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="title">鼻子问题</div>
                    <div>
                      <a-checkbox value="10"
                                  name="facialFeatures">
                        鼻塞
                      </a-checkbox>
                      <a-checkbox value="11"
                                  name="facialFeatures">
                        流涕
                      </a-checkbox>
                      <a-checkbox value="12"
                                  name="facialFeatures">
                        鼻血
                      </a-checkbox>
                      <a-checkbox value="13"
                                  name="facialFeatures">
                        感染
                      </a-checkbox>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="title">咽喉口腔问题</div>
                    <div>
                      <a-checkbox value="14"
                                  name="facialFeatures">
                        吞咽困难
                      </a-checkbox>
                      <a-checkbox value="15"
                                  name="facialFeatures">
                        声音嘶哑
                      </a-checkbox>
                      <a-checkbox value="16"
                                  name="facialFeatures">
                        喉咙痛
                      </a-checkbox>
                      <a-checkbox value="17"
                                  name="facialFeatures">
                        牙龈出血
                      </a-checkbox>
                    </div>
                  </div>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他五官问题"
                                 ref="facialFeaturesOtherDesc"
                                 prop="facialFeaturesOtherDesc">
                <a-input v-model="form.facialFeaturesOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="3.内分泌"
                                 ref="endocrine"
                                 prop="endocrine">
                <a-checkbox-group v-model="form.endocrine">
                  <a-checkbox value="1"
                              name="endocrine">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="endocrine">
                    腺体肿胀
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="endocrine">
                    甲状腺问题
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="endocrine">
                    糖尿病
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他内分泌问题"
                                 ref="diseaseName"
                                 prop="diseaseName">
                <a-input v-model="form.diseaseName"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="4.呼吸系统"
                                 ref="respiratorySystem"
                                 prop="respiratorySystem">
                <a-checkbox-group v-model="form.respiratorySystem">
                  <a-checkbox value="1"
                              name="respiratorySystem">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="respiratorySystem">
                    咳嗽
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="respiratorySystem">
                    呼吸急促
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="respiratorySystem">
                    咯痰
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="respiratorySystem">
                    哮喘
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="respiratorySystem">
                    吸烟
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他呼吸系统问题"
                                 ref="respiratorySystemOtherDesc"
                                 prop="respiratorySystemOtherDesc">
                <a-input v-model="form.respiratorySystemOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="5.心血管"
                                 ref="cardiovascular"
                                 prop="cardiovascular">
                <a-checkbox-group v-model="form.cardiovascular">
                  <a-checkbox value="1"
                              name="cardiovascular">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="cardiovascular">
                    心痛
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="cardiovascular">
                    高血压
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="cardiovascular">
                    心律失常
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="cardiovascular">
                    心悸
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="cardiovascular">
                    腿部水肿
                  </a-checkbox>
                  <a-checkbox value="7"
                              name="cardiovascular">
                    平躺时呼吸困难
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他心血管问题"
                                 ref="cardiovascularOtherDesc"
                                 prop="cardiovascularOtherDesc">
                <a-input v-model="form.cardiovascularOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="6.消化系统"
                                 ref="digestiveSystem"
                                 prop="digestiveSystem">
                <a-checkbox-group v-model="form.digestiveSystem">
                  <a-checkbox value="1"
                              name="digestiveSystem">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="digestiveSystem">
                    便秘
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="digestiveSystem">
                    胃食管返流
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="digestiveSystem">
                    烧心
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="digestiveSystem">
                    胃肠溃疡
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="digestiveSystem">
                    肝炎
                  </a-checkbox>
                  <a-checkbox value="7"
                              name="digestiveSystem">
                    恶心/呕吐
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他消化系统问题"
                                 ref="digestiveSystemOtherDesc"
                                 prop="digestiveSystemOtherDesc">
                <a-input v-model="form.digestiveSystemOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="7.泌尿生殖系统"
                                 ref="urogenitalSystem"
                                 prop="urogenitalSystem">
                <a-checkbox-group v-model="form.urogenitalSystem">
                  <a-checkbox value="1"
                              name="urogenitalSystem">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="urogenitalSystem">
                    尿频
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="urogenitalSystem">
                    尿痛
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="urogenitalSystem">
                    血尿
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="urogenitalSystem">
                    尿失禁
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他泌尿生殖系统问题"
                                 ref="urogenitalSystemOtherDesc"
                                 prop="urogenitalSystemOtherDesc">
                <a-input v-model="form.urogenitalSystemOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="8.肌肉骨骼系统"
                                 ref="musculoskeletalSystem"
                                 prop="musculoskeletalSystem">
                <a-checkbox-group v-model="form.musculoskeletalSystem">
                  <a-checkbox value="1"
                              name="musculoskeletalSystem">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="musculoskeletalSystem">
                    关节痛
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="musculoskeletalSystem">
                    肌无力
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="musculoskeletalSystem">
                    腿部无力
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="musculoskeletalSystem">
                    肌肉抽筋
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他肌肉骨骼系统问题"
                                 ref="musculoskeletalSystemOtherDesc"
                                 prop="musculoskeletalSystemOtherDesc">
                <a-input v-model="form.musculoskeletalSystemOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="9.神经系统"
                                 ref="nervousSystem"
                                 prop="nervousSystem">
                <a-checkbox-group v-model="form.nervousSystem">
                  <a-checkbox value="1"
                              name="nervousSystem">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="nervousSystem">
                    头痛
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="nervousSystem">
                    偏头痛
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="nervousSystem">
                    癫痫
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="nervousSystem">
                    麻木
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="nervousSystem">
                    震颤
                  </a-checkbox>
                  <a-checkbox value="7"
                              name="nervousSystem">
                    晕厥
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他神经系统问题"
                                 ref="nervousSystemOtherDesc"
                                 prop="nervousSystemOtherDesc">
                <a-input v-model="form.nervousSystemOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="10.血液淋巴系统"
                                 ref="hemolymphSystem"
                                 prop="hemolymphSystem">
                <a-checkbox-group v-model="form.hemolymphSystem">
                  <a-checkbox value="1"
                              name="hemolymphSystem">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="hemolymphSystem">
                    出血
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="hemolymphSystem">
                    血栓
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="hemolymphSystem">
                    腺体肿胀
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他血液淋巴系统问题"
                                 ref="hemolymphSystemOtherDesc"
                                 prop="hemolymphSystemOtherDesc">
                <a-input v-model="form.hemolymphSystemOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="11.免疫系统"
                                 ref="immuneSystem"
                                 prop="immuneSystem">
                <a-checkbox-group v-model="form.immuneSystem">
                  <a-checkbox value="1"
                              name="immuneSystem">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="immuneSystem">
                    过敏
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="immuneSystem">
                    皮疹
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="immuneSystem">
                    感染
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他免疫系统问题"
                                 ref="immuneSystemOtherDesc"
                                 prop="immuneSystemOtherDesc">
                <a-input v-model="form.immuneSystemOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="12.心理"
                                 ref="psychological"
                                 prop="psychological">
                <a-checkbox-group v-model="form.psychological">
                  <a-checkbox value="1"
                              name="psychological">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="psychological">
                    抑郁
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="psychological">
                    哭闹
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="psychological">
                    焦虑
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="psychological">
                    嗜睡
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="psychological">
                    睡眠障碍
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他心理问题"
                                 ref="psychologicalOtherDesc"
                                 prop="psychologicalOtherDesc">
                <a-input v-model="form.psychologicalOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
            </a-collapse-panel>
          </a-collapse>
        </a-form-model>
        <div class="footer-btn-box">
          <a-button type="primary"
                    @click="confirmData">
            保存
          </a-button>
        </div>
      </vue-scroll>
    </div>
  </div>
</template>
<script>
import MedicationSideEffectTemplate from './medicationSideEffectTemplate'
import moment from 'moment'
import {
  saveExistSymptoms
} from '@/api/mtms'
export default {
  name: 'BasicInformation',
  components: {
    MedicationSideEffectTemplate
  },
  data () {
    return {
      collapseActiveKey: ['MainConsult', 'DiseaseIds'],
      customStyle:
        'background: #ffffff;border-radius: 4px;',
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0'
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1'
        }
      ],
      count: 2,
      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: 'age',
          dataIndex: 'age'
        },
        {
          title: 'address',
          dataIndex: 'address'
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          scopedSlots: { customRender: 'operation' }
        }
      ],
      form: {
        fillDate: '',
        mainConsult: '',
        diseaseId: [],
        diseaseName: '',
        physique: [],
        physiqueOtherDesc: '',
        facialFeatures: [],
        facialFeaturesOtherDesc: '',
        endocrine: [],
        endocrineOtherDesc: '',
        respiratorySystem: [],
        respiratorySystemOtherDesc: '',
        cardiovascular: [],
        cardiovascularOtherDesc: '',
        digestiveSystem: [],
        digestiveSystemOtherDesc: '',
        urogenitalSystem: [],
        urogenitalSystemOtherDesc: '',
        musculoskeletalSystem: [],
        musculoskeletalSystemOtherDesc: '',
        nervousSystem: [],
        nervousSystemOtherDesc: '',
        hemolymphSystem: [],
        hemolymphSystemOtherDesc: '',
        immuneSystem: [],
        immuneSystemOtherDesc: '',
        psychological: [],
        psychologicalOtherDesc: '',
        pastMedicalHistoryDiseaseIds: [],
        pastMedicalHistoryDiseaseName: ''
      },
      rules: {
        mainConsult: [
          { required: true, message: '请填写主诉！', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    moment,
    getCurrentDate () {
      return new Date().toLocaleDateString()
    },
    confirmData () {
      console.log('submit!', this.form)
      saveExistSymptoms({

        // diseaseId: this.form.diseaseId,
      })
    },
    onCellChange (key, dataIndex, value) {
      const dataSource = [...this.dataSource]
      const target = dataSource.find(item => item.key === key)
      if (target) {
        target[dataIndex] = value
        this.dataSource = dataSource
      }
    },
    onDelete (key) {
      const dataSource = [...this.dataSource]
      this.dataSource = dataSource.filter(item => item.key !== key)
    },
    addMedicationSideEffect () {
      const { count, dataSource } = this
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`
      }
      this.dataSource = [...dataSource, newData]
      this.count = count + 1
    }
  }
}
</script>
<style lang="less">
.ExistingSymptoms-page {
  .ant-collapse-header {
    background-color: #fafafa;
  }
}
</style>

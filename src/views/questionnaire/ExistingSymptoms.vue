<template>
  <div>
    <div class="ExistingSymptoms-page">
      <vue-scroll>
        <a-form-model :layout="'vertical'"
                      :model="form"
                      :rules="rules">
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
                <a-checkbox-group v-model="diagnosisDiseaseIds">
                  <template v-for="(sitem,index) in painList" v-if="index%2===0">
                    <a-row :gutter="[8,8]">
                      <a-col :span="12">
                        <a-checkbox :value="sitem">
                          {{ sitem.diseaseName }}
                        </a-checkbox>
                      </a-col>
                      <a-col :span="12" v-if="index+1<painList.length">
                        <a-checkbox :value="painList[ index + 1 ]">
                          {{ painList[ index + 1 ].diseaseName }}
                        </a-checkbox>
                      </a-col>
                    </a-row>
                  </template>
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
                                 ref="physiques"
                                 prop="physiques">
                <a-checkbox-group v-model="form.physiques">
                  <a-checkbox value="1"
                              name="physiques">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="physiques">
                    体重减轻
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="physiques">
                    体重增加
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="physiques">
                    盗汗
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="physiques">
                    疲劳
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="physiques">
                    其他
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他体质问题"
                                 ref="psychologicalOtherDesc"
                                 prop="psychologicalOtherDesc">
                <a-input v-model="form.psychologicalOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="2.五官"
                                 ref="facialFeaturess"
                                 prop="facialFeaturess">
                <a-checkbox-group v-model="form.facialFeaturess">
                  <a-checkbox value="1"
                              name="facialFeaturess">
                    无
                  </a-checkbox>
                  <div class="flex">
                    <div class="title"> 视力问题</div>
                    <div>
                      <a-checkbox value="3"
                                  name="facialFeaturess">
                        重影
                      </a-checkbox>
                      <a-checkbox value="4"
                                  name="facialFeaturess">
                        青光眼
                      </a-checkbox>
                      <a-checkbox value="5"
                                  name="facialFeaturess">
                        白内障
                      </a-checkbox>
                    </div>
                  </div>

                  <div class="flex">
                    <div class="title">听力障碍</div>
                    <div>
                      <a-checkbox value="7"
                                  name="facialFeaturess">
                        耳鸣
                      </a-checkbox>
                      <a-checkbox value="8"
                                  name="facialFeaturess">
                        耳痛
                      </a-checkbox>
                      <a-checkbox value="9"
                                  name="facialFeaturess">
                        眩晕
                      </a-checkbox>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="title">鼻子问题</div>
                    <div>
                      <a-checkbox value="10"
                                  name="facialFeaturess">
                        鼻塞
                      </a-checkbox>
                      <a-checkbox value="11"
                                  name="facialFeaturess">
                        流涕
                      </a-checkbox>
                      <a-checkbox value="12"
                                  name="facialFeaturess">
                        鼻血
                      </a-checkbox>
                      <a-checkbox value="13"
                                  name="facialFeaturess">
                        感染
                      </a-checkbox>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="title">咽喉口腔问题</div>
                    <div>
                      <a-checkbox value="14"
                                  name="facialFeaturess">
                        吞咽困难
                      </a-checkbox>
                      <a-checkbox value="15"
                                  name="facialFeaturess">
                        声音嘶哑
                      </a-checkbox>
                      <a-checkbox value="16"
                                  name="facialFeaturess">
                        喉咙痛
                      </a-checkbox>
                      <a-checkbox value="17"
                                  name="facialFeaturess">
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
                                 ref="endocrines"
                                 prop="endocrines">
                <a-checkbox-group v-model="form.endocrines">
                  <a-checkbox value="1"
                              name="endocrines">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="endocrines">
                    腺体肿胀
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="endocrines">
                    甲状腺问题
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="endocrines">
                    糖尿病
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="endocrines">
                    其他
                  </a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
              <a-form-model-item label="其他内分泌问题"
                                 ref="endocrineOtherDesc"
                                 prop="endocrineOtherDesc">
                <a-input v-model="form.endocrineOtherDesc"
                         placeholder="请输入" />
              </a-form-model-item>
              <a-form-model-item label="4.呼吸系统"
                                 ref="respiratorySystems"
                                 prop="respiratorySystems">
                <a-checkbox-group v-model="form.respiratorySystems">
                  <a-checkbox value="1"
                              name="respiratorySystems">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="respiratorySystems">
                    咳嗽
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="respiratorySystems">
                    呼吸急促
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="respiratorySystems">
                    咯痰
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="respiratorySystems">
                    哮喘
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="respiratorySystems">
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
                                 ref="cardiovasculars"
                                 prop="cardiovasculars">
                <a-checkbox-group v-model="form.cardiovasculars">
                  <a-checkbox value="1"
                              name="cardiovasculars">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="cardiovasculars">
                    心痛
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="cardiovasculars">
                    高血压
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="cardiovasculars">
                    心律失常
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="cardiovasculars">
                    心悸
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="cardiovasculars">
                    腿部水肿
                  </a-checkbox>
                  <a-checkbox value="7"
                              name="cardiovasculars">
                    平躺时呼吸困难
                  </a-checkbox>
                  <a-checkbox value="8"
                              name="cardiovasculars">
                    其他
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
                                 ref="digestiveSystems"
                                 prop="digestiveSystems">
                <a-checkbox-group v-model="form.digestiveSystems">
                  <a-checkbox value="1"
                              name="digestiveSystems">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="digestiveSystems">
                    便秘
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="digestiveSystems">
                    胃食管返流
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="digestiveSystems">
                    烧心
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="digestiveSystems">
                    胃肠溃疡
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="digestiveSystems">
                    肝炎
                  </a-checkbox>
                  <a-checkbox value="7"
                              name="digestiveSystems">
                    恶心/呕吐
                  </a-checkbox>
                  <a-checkbox value="8"
                              name="digestiveSystems">
                    其他
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
                                 ref="urogenitalSystems"
                                 prop="urogenitalSystems">
                <a-checkbox-group v-model="form.urogenitalSystems">
                  <a-checkbox value="1"
                              name="urogenitalSystems">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="urogenitalSystems">
                    尿频
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="urogenitalSystems">
                    尿痛
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="urogenitalSystems">
                    血尿
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="urogenitalSystems">
                    尿失禁
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="urogenitalSystems">
                    其他
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
                                 ref="musculoskeletalSystems"
                                 prop="musculoskeletalSystems">
                <a-checkbox-group v-model="form.musculoskeletalSystems">
                  <a-checkbox value="1"
                              name="musculoskeletalSystems">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="musculoskeletalSystems">
                    关节痛
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="musculoskeletalSystems">
                    肌无力
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="musculoskeletalSystems">
                    腿部无力
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="musculoskeletalSystems">
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
                                 ref="nervousSystems"
                                 prop="nervousSystems">
                <a-checkbox-group v-model="form.nervousSystems">
                  <a-checkbox value="1"
                              name="nervousSystems">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="nervousSystems">
                    头痛
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="nervousSystems">
                    偏头痛
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="nervousSystems">
                    癫痫
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="nervousSystems">
                    麻木
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="nervousSystems">
                    震颤
                  </a-checkbox>
                  <a-checkbox value="7"
                              name="nervousSystems">
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
                                 ref="hemolymphSystems"
                                 prop="hemolymphSystems">
                <a-checkbox-group v-model="form.hemolymphSystems">
                  <a-checkbox value="1"
                              name="hemolymphSystems">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="hemolymphSystems">
                    出血
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="hemolymphSystems">
                    血栓
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="hemolymphSystems">
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
                                 ref="immuneSystems"
                                 prop="immuneSystems">
                <a-checkbox-group v-model="form.immuneSystems">
                  <a-checkbox value="1"
                              name="immuneSystems">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="immuneSystems">
                    过敏
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="immuneSystems">
                    皮疹
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="immuneSystems">
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
                                 ref="psychologicals"
                                 prop="psychologicals">
                <a-checkbox-group v-model="form.psychologicals">
                  <a-checkbox value="1"
                              name="psychologicals">
                    无
                  </a-checkbox>
                  <a-checkbox value="2"
                              name="psychologicals">
                    抑郁
                  </a-checkbox>
                  <a-checkbox value="3"
                              name="psychologicals">
                    哭闹
                  </a-checkbox>
                  <a-checkbox value="4"
                              name="psychologicals">
                    焦虑
                  </a-checkbox>
                  <a-checkbox value="5"
                              name="psychologicals">
                    嗜睡
                  </a-checkbox>
                  <a-checkbox value="6"
                              name="psychologicals">
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
                    @click="onSubmit">
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
  saveDiagnosis,
  saveExistSymptoms,
  getDiagnosis, getDiseaseList
} from '@/api/mtms'

export default {
  name: 'BasicInformation',
  components: {
    MedicationSideEffectTemplate
  },
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      collapseActiveKey: [ 'MainConsult' ],
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
      diagnosisDiseaseIds: [],
      painList: [],
      form: {
        mainConsult: '',
        physiques: [],
        facialFeaturess: [],
        facialFeaturesOtherDesc: '',
        endocrines: [],
        endocrineOtherDesc: '',
        respiratorySystems: [],
        respiratorySystemOtherDesc: '',
        cardiovasculars: [],
        cardiovascularOtherDesc: '',
        digestiveSystems: [],
        digestiveSystemOtherDesc: '',
        urogenitalSystems: [],
        urogenitalSystemOtherDesc: '',
        musculoskeletalSystems: [],
        musculoskeletalSystemOtherDesc: '',
        nervousSystems: [],
        nervousSystemOtherDesc: '',
        hemolymphSystems: [],
        hemolymphSystemOtherDesc: '',
        immuneSystems: [],
        immuneSystemOtherDesc: '',
        psychologicals: [],
        psychologicalOtherDesc: ''
      },
      rules: {
        mainConsult: [
          { required: true, message: '请填写主诉！', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.getDiseaseList()
    this.getDiagnosis()
  },
  methods: {
    moment,
    // 所有疾病列表
    getDiseaseList () {
      getDiseaseList({ pageSize: 100 }).then(res => {
        const { rows } = res
        if (rows) {
          this.painList = rows
        }
      })
    },
    getCurrentDate () {
      return new Date().toLocaleDateString()
    },
    async onSubmit () {
      console.log('submit!', this.form)
      let res1 = await saveDiagnosis({
        patientId: this.patientId,
        assessmentId: this.assessmentId,
        diagnosisDiseaseIds: this.diagnosisDiseaseIds
      })
      let res2 = saveExistSymptoms({
        ...this.form,
        patientId: this.patientId,
        assessmentId: this.assessmentId
      })
      Promise.all([ res1, res2 ]).then(data => {
        console.log(data)
        if (data[ 0 ].code === 200 && data[ 1 ].code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    },
    onCellChange (key, dataIndex, value) {
      const dataSource = [ ...this.dataSource ]
      const target = dataSource.find(item => item.key === key)
      if (target) {
        target[ dataIndex ] = value
        this.dataSource = dataSource
      }
    },
    onDelete (key) {
      const dataSource = [ ...this.dataSource ]
      this.dataSource = dataSource.filter(item => item.key !== key)
    },
    addMedicationSideEffect () {
      const { count, dataSource } = this
      const newData = {
        key: count,
        name: `Edward King ${ count }`,
        age: 32,
        address: `London, Park Lane no. ${ count }`
      }
      this.dataSource = [ ...dataSource, newData ]
      this.count = count + 1
    },
    getDiagnosis () {
      getDiagnosis({
        assessmentId: this.assessmentId,
        patientId: this.patientId
      }).then(res => {
        console.log('现有症状：', res)

      })
    }
  }
}
</script>
<style lang="less">
.ExistingSymptoms-page {
  .ant-collapse-header {
    background-color: #fafafa;
  }

  .ant-form-item-label {
    width: 150px;
  }

  .ant-form-item-control,
  .ant-form-item-children,
  .ant-checkbox-group {
    width: 100% !important;

    .ant-checkbox-wrapper {
      //width: 25%;
      display: inline-block;
    }
  }

  .ant-form-item label {
    display: block;
    margin-left: 0;
  }

  .title {
    width: 90px;
  }

  .flex {
    margin-bottom: 10px;

    .title + div {
      flex: 1;
    }
  }

  input {
    margin-left: 10px;
  }
}
</style>

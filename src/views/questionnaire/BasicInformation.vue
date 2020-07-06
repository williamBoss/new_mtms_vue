<template>
  <vue-scroll>
    <a-form-model :layout="'vertical'" :model="form" :rules="rules">
      <div style="padding: 12px 16px;">
        <a-form-model-item label="接诊日期" ref="fillDate" prop="fillDate">
          <a-date-picker
            v-model="form.fillDate"
            placeholder="选择日期"
            :defaultValue="moment(getCurrentDate(), 'YYYY-MM-DD')"
          />
        </a-form-model-item>
      </div>
      <a-divider style="margin: 8px 0;" />
      <a-collapse v-model="collapseActiveKey" :bordered="false">
        <a-collapse-panel key="MainConsult" header="主诉" :style="customStyle">
          <a-form-model-item label="1.主诉" ref="mainConsult" prop="mainConsult">
            <a-input v-model="form.mainConsult" type="textarea" :rows="6" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="DiseaseIds" header="诊断" :style="customStyle">
          <a-form-model-item label="1.诊断" ref="diseaseIds" prop="diseaseIds">
            <a-checkbox-group v-model="form.diseaseIds">
              <a-checkbox value="1" name="diseaseIds">
                高血压
              </a-checkbox>
              <a-checkbox value="2" name="diseaseIds">
                糖尿病
              </a-checkbox>
              <a-checkbox value="3" name="diseaseIds">
                肺气肿
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他病种" ref="diseaseName" prop="diseaseName">
            <a-input v-model="form.diseaseName" placeholder="请输入其他具体病种，多个病种用顿号间隔病种名称" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="SymptomDescription" header="当前症状描述" :style="customStyle">
          <a-form-model-item label="1.体质" ref="physique" prop="physique">
            <a-checkbox-group v-model="form.physique">
              <a-checkbox value="1" name="physique">
                无
              </a-checkbox>
              <a-checkbox value="2" name="physique">
                体重减轻
              </a-checkbox>
              <a-checkbox value="3" name="physique">
                体重增加
              </a-checkbox>
              <a-checkbox value="4" name="physique">
                盗汗
              </a-checkbox>
              <a-checkbox value="5" name="physique">
                疲劳
              </a-checkbox>
              <a-checkbox value="6" name="physique">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他体质问题" ref="physiqueOtherDesc" prop="physiqueOtherDesc">
            <a-input v-model="form.physiqueOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="2.五官" ref="facialFeatures" prop="facialFeatures">
            <a-checkbox-group v-model="form.facialFeatures">
              <a-checkbox value="1" name="facialFeatures">
                无
              </a-checkbox>
              <a-checkbox value="2" name="facialFeatures">
                视力问题
              </a-checkbox>
              <a-checkbox value="3" name="facialFeatures">
                重影
              </a-checkbox>
              <a-checkbox value="4" name="facialFeatures">
                青光眼
              </a-checkbox>
              <a-checkbox value="5" name="facialFeatures">
                白内障
              </a-checkbox>
              <a-checkbox value="6" name="facialFeatures">
                听力障碍
              </a-checkbox>
              <a-checkbox value="7" name="facialFeatures">
                耳鸣
              </a-checkbox>
              <a-checkbox value="8" name="facialFeatures">
                耳痛
              </a-checkbox>
              <a-checkbox value="9" name="facialFeatures">
                眩晕
              </a-checkbox>
              <a-checkbox value="10" name="facialFeatures">
                鼻塞
              </a-checkbox>
              <a-checkbox value="11" name="facialFeatures">
                流涕
              </a-checkbox>
              <a-checkbox value="12" name="facialFeatures">
                鼻血
              </a-checkbox>
              <a-checkbox value="13" name="facialFeatures">
                感染
              </a-checkbox>
              <a-checkbox value="14" name="facialFeatures">
                吞咽困难
              </a-checkbox>
              <a-checkbox value="15" name="facialFeatures">
                声音嘶哑
              </a-checkbox>
              <a-checkbox value="16" name="facialFeatures">
                喉咙痛
              </a-checkbox>
              <a-checkbox value="17" name="facialFeatures">
                牙龈出血
              </a-checkbox>
              <a-checkbox value="18" name="facialFeatures">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他五官问题" ref="facialFeaturesOtherDesc" prop="facialFeaturesOtherDesc">
            <a-input v-model="form.facialFeaturesOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="3.内分泌" ref="endocrine" prop="endocrine">
            <a-checkbox-group v-model="form.endocrine">
              <a-checkbox value="1" name="endocrine">
                无
              </a-checkbox>
              <a-checkbox value="2" name="endocrine">
                腺体肿胀
              </a-checkbox>
              <a-checkbox value="3" name="endocrine">
                甲状腺问题
              </a-checkbox>
              <a-checkbox value="4" name="endocrine">
                糖尿病
              </a-checkbox>
              <a-checkbox value="5" name="endocrine">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他内分泌问题" ref="diseaseName" prop="diseaseName">
            <a-input v-model="form.diseaseName" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="4.呼吸系统" ref="respiratorySystem" prop="respiratorySystem">
            <a-checkbox-group v-model="form.respiratorySystem">
              <a-checkbox value="1" name="respiratorySystem">
                无
              </a-checkbox>
              <a-checkbox value="2" name="respiratorySystem">
                咳嗽
              </a-checkbox>
              <a-checkbox value="3" name="respiratorySystem">
                呼吸急促
              </a-checkbox>
              <a-checkbox value="4" name="respiratorySystem">
                咯痰
              </a-checkbox>
              <a-checkbox value="5" name="respiratorySystem">
                哮喘
              </a-checkbox>
              <a-checkbox value="6" name="respiratorySystem">
                吸烟
              </a-checkbox>
              <a-checkbox value="7" name="respiratorySystem">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他呼吸系统问题" ref="respiratorySystemOtherDesc" prop="respiratorySystemOtherDesc">
            <a-input v-model="form.respiratorySystemOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="5.心血管" ref="cardiovascular" prop="cardiovascular">
            <a-checkbox-group v-model="form.cardiovascular">
              <a-checkbox value="1" name="cardiovascular">
                无
              </a-checkbox>
              <a-checkbox value="2" name="cardiovascular">
                心痛
              </a-checkbox>
              <a-checkbox value="3" name="cardiovascular">
                高血压
              </a-checkbox>
              <a-checkbox value="4" name="cardiovascular">
                心律失常
              </a-checkbox>
              <a-checkbox value="5" name="cardiovascular">
                心悸
              </a-checkbox>
              <a-checkbox value="6" name="cardiovascular">
                腿部水肿
              </a-checkbox>
              <a-checkbox value="7" name="cardiovascular">
                平躺时呼吸困难
              </a-checkbox>
              <a-checkbox value="8" name="cardiovascular">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他心血管问题" ref="cardiovascularOtherDesc" prop="cardiovascularOtherDesc">
            <a-input v-model="form.cardiovascularOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="6.消化系统" ref="digestiveSystem" prop="digestiveSystem">
            <a-checkbox-group v-model="form.digestiveSystem">
              <a-checkbox value="1" name="digestiveSystem">
                无
              </a-checkbox>
              <a-checkbox value="2" name="digestiveSystem">
                便秘
              </a-checkbox>
              <a-checkbox value="3" name="digestiveSystem">
                胃食管返流
              </a-checkbox>
              <a-checkbox value="4" name="digestiveSystem">
                烧心
              </a-checkbox>
              <a-checkbox value="5" name="digestiveSystem">
                胃肠溃疡
              </a-checkbox>
              <a-checkbox value="6" name="digestiveSystem">
                肝炎
              </a-checkbox>
              <a-checkbox value="7" name="digestiveSystem">
                恶心/呕吐
              </a-checkbox>
              <a-checkbox value="8" name="digestiveSystem">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他消化系统问题" ref="digestiveSystemOtherDesc" prop="digestiveSystemOtherDesc">
            <a-input v-model="form.digestiveSystemOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="7.泌尿生殖系统" ref="urogenitalSystem" prop="urogenitalSystem">
            <a-checkbox-group v-model="form.urogenitalSystem">
              <a-checkbox value="1" name="urogenitalSystem">
                无
              </a-checkbox>
              <a-checkbox value="2" name="urogenitalSystem">
                尿频
              </a-checkbox>
              <a-checkbox value="3" name="urogenitalSystem">
                尿痛
              </a-checkbox>
              <a-checkbox value="4" name="urogenitalSystem">
                血尿
              </a-checkbox>
              <a-checkbox value="5" name="urogenitalSystem">
                尿失禁
              </a-checkbox>
              <a-checkbox value="6" name="urogenitalSystem">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他泌尿生殖系统问题" ref="urogenitalSystemOtherDesc" prop="urogenitalSystemOtherDesc">
            <a-input v-model="form.urogenitalSystemOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="8.肌肉骨骼系统" ref="musculoskeletalSystem" prop="musculoskeletalSystem">
            <a-checkbox-group v-model="form.musculoskeletalSystem">
              <a-checkbox value="1" name="musculoskeletalSystem">
                无
              </a-checkbox>
              <a-checkbox value="2" name="musculoskeletalSystem">
                关节痛
              </a-checkbox>
              <a-checkbox value="3" name="musculoskeletalSystem">
                肌无力
              </a-checkbox>
              <a-checkbox value="4" name="musculoskeletalSystem">
                腿部无力
              </a-checkbox>
              <a-checkbox value="5" name="musculoskeletalSystem">
                肌肉抽筋
              </a-checkbox>
              <a-checkbox value="6" name="musculoskeletalSystem">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item
            label="其他肌肉骨骼系统问题"
            ref="musculoskeletalSystemOtherDesc"
            prop="musculoskeletalSystemOtherDesc"
          >
            <a-input v-model="form.musculoskeletalSystemOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="9.神经系统" ref="nervousSystem" prop="nervousSystem">
            <a-checkbox-group v-model="form.nervousSystem">
              <a-checkbox value="1" name="nervousSystem">
                无
              </a-checkbox>
              <a-checkbox value="2" name="nervousSystem">
                头痛
              </a-checkbox>
              <a-checkbox value="3" name="nervousSystem">
                偏头痛
              </a-checkbox>
              <a-checkbox value="4" name="nervousSystem">
                癫痫
              </a-checkbox>
              <a-checkbox value="5" name="nervousSystem">
                麻木
              </a-checkbox>
              <a-checkbox value="6" name="nervousSystem">
                震颤
              </a-checkbox>
              <a-checkbox value="7" name="nervousSystem">
                晕厥
              </a-checkbox>
              <a-checkbox value="8" name="nervousSystem">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他神经系统问题" ref="nervousSystemOtherDesc" prop="nervousSystemOtherDesc">
            <a-input v-model="form.nervousSystemOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="10.血液淋巴系统" ref="hemolymphSystem" prop="hemolymphSystem">
            <a-checkbox-group v-model="form.hemolymphSystem">
              <a-checkbox value="1" name="hemolymphSystem">
                无
              </a-checkbox>
              <a-checkbox value="2" name="hemolymphSystem">
                出血
              </a-checkbox>
              <a-checkbox value="3" name="hemolymphSystem">
                血栓
              </a-checkbox>
              <a-checkbox value="4" name="hemolymphSystem">
                腺体肿胀
              </a-checkbox>
              <a-checkbox value="5" name="hemolymphSystem">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他血液淋巴系统问题" ref="hemolymphSystemOtherDesc" prop="hemolymphSystemOtherDesc">
            <a-input v-model="form.hemolymphSystemOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="11.免疫系统" ref="immuneSystem" prop="immuneSystem">
            <a-checkbox-group v-model="form.immuneSystem">
              <a-checkbox value="1" name="immuneSystem">
                无
              </a-checkbox>
              <a-checkbox value="2" name="immuneSystem">
                过敏
              </a-checkbox>
              <a-checkbox value="3" name="immuneSystem">
                皮疹
              </a-checkbox>
              <a-checkbox value="4" name="immuneSystem">
                感染
              </a-checkbox>
              <a-checkbox value="5" name="immuneSystem">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他免疫系统问题" ref="immuneSystemOtherDesc" prop="immuneSystemOtherDesc">
            <a-input v-model="form.immuneSystemOtherDesc" placeholder="请输入" />
          </a-form-model-item>
          <a-form-model-item label="12.心理" ref="psychological" prop="psychological">
            <a-checkbox-group v-model="form.psychological">
              <a-checkbox value="1" name="psychological">
                无
              </a-checkbox>
              <a-checkbox value="2" name="psychological">
                抑郁
              </a-checkbox>
              <a-checkbox value="3" name="psychological">
                哭闹
              </a-checkbox>
              <a-checkbox value="4" name="psychological">
                焦虑
              </a-checkbox>
              <a-checkbox value="5" name="psychological">
                嗜睡
              </a-checkbox>
              <a-checkbox value="6" name="psychological">
                睡眠障碍
              </a-checkbox>
              <a-checkbox value="7" name="psychological">
                其他
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他心理问题" ref="psychologicalOtherDesc" prop="psychologicalOtherDesc">
            <a-input v-model="form.psychologicalOtherDesc" placeholder="请输入" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="PastMedicalHistory" header="既往病史" :style="customStyle">
          <a-form-model-item label="1.既往病史" ref="pastMedicalHistoryDiseaseIds" prop="pastMedicalHistoryDiseaseIds">
            <a-checkbox-group v-model="form.pastMedicalHistoryDiseaseIds">
              <a-checkbox value="1" name="pastMedicalHistoryDiseaseIds">
                高血压
              </a-checkbox>
              <a-checkbox value="2" name="pastMedicalHistoryDiseaseIds">
                糖尿病
              </a-checkbox>
              <a-checkbox value="3" name="pastMedicalHistoryDiseaseIds">
                肺气肿
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他既往病史病种" ref="pastMedicalHistoryDiseaseName" prop="pastMedicalHistoryDiseaseName">
            <a-input v-model="form.pastMedicalHistoryDiseaseName" placeholder="请输入其他具体病种，多个病种用顿号间隔病种名称" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="LiverDamage" header="肝损害" :style="customStyle">
          <a-form-model-item label="1.肝损害" ref="liverDamage" prop="liverDamage">
            <a-radio-group v-model="form.liverDamage">
              <a-radio value="1">
                是
              </a-radio>
              <a-radio value="0">
                否
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="肝损害详细描述" ref="liverDamageDesc" prop="liverDamageDesc">
            <a-input v-model="form.liverDamageDesc" type="textarea" :rows="6" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="KidneyDamage" header="肾损害" :style="customStyle">
          <a-form-model-item label="1.肾损害" ref="kidneyDamage" prop="kidneyDamage">
            <a-radio-group v-model="form.kidneyDamage">
              <a-radio value="1">
                是
              </a-radio>
              <a-radio value="0">
                否
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="肾损害详细描述" ref="kidneyDamageDesc" prop="kidneyDamageDesc">
            <a-input v-model="form.kidneyDamageDesc" type="textarea" :rows="6" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="FamilyMedicalHistory" header="家族史" :style="customStyle">
          <a-form-model-item label="1.家族史" ref="familyMedicalHistoryDiseaseIds" prop="familyMedicalHistoryDiseaseIds">
            <a-checkbox-group v-model="form.familyMedicalHistoryDiseaseIds">
              <a-checkbox value="1" name="familyMedicalHistoryDiseaseIds">
                高血压
              </a-checkbox>
              <a-checkbox value="2" name="familyMedicalHistoryDiseaseIds">
                糖尿病
              </a-checkbox>
              <a-checkbox value="3" name="familyMedicalHistoryDiseaseIds">
                肺气肿
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item
            label="其他家族史病种"
            ref="familyMedicalHistoryDiseaseName"
            prop="familyMedicalHistoryDiseaseName"
          >
            <a-input v-model="form.familyMedicalHistoryDiseaseName" placeholder="请输入其他具体病种，多个病种用顿号间隔病种名称" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="PastSurgicalHistory" header="既往手术史" :style="customStyle">
          <a-form-model-item label="1.既往手术史" ref="surgicalHistoryIds" prop="surgicalHistoryIds">
            <a-checkbox-group v-model="form.surgicalHistoryIds">
              <a-checkbox value="1" name="surgicalHistoryIds">
                阑尾切除术
              </a-checkbox>
              <a-checkbox value="2" name="surgicalHistoryIds">
                血管成形术（球囊手术）或支架
              </a-checkbox>
              <a-checkbox value="3" name="surgicalHistoryIds">
                冠状动脉旁路移植术（搭桥）
              </a-checkbox>
            </a-checkbox-group>
          </a-form-model-item>
          <a-form-model-item label="其他既往手术名称" ref="surgeryName" prop="surgeryName">
            <a-input v-model="form.surgeryName" placeholder="请输入其他具体手术名称，多个手术用顿号间隔手术名称" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="AllergyHistory" header="过敏史" :style="customStyle">
          <a-form-model-item label="1.过敏史" prop="allergyHistory">
            <a-radio-group v-model="form.allergyHistory">
              <a-radio value="1">
                有
              </a-radio>
              <a-radio value="0">
                无
              </a-radio>
            </a-radio-group>
          </a-form-model-item>
          <a-form-model-item label="2.过敏发生时间接诊日期" ref="allergyDatetime" prop="allergyDatetime">
            <a-date-picker
              v-model="form.allergyDatetime"
              placeholder="选择日期"
            />
          </a-form-model-item>
          <a-form-model-item label="3.过敏症状" ref="allergySymptoms" prop="allergySymptoms">
            <a-input v-model="form.allergySymptoms" type="textarea" :rows="6" placeholder="请输入过敏具体症状" />
          </a-form-model-item>
        </a-collapse-panel>
        <a-collapse-panel key="MedicationSideEffect" header="药物不良反应史" :style="customStyle">
          <a-button class="editable-add-btn" @click="addMedicationSideEffect">
            添加药物不良反应史
          </a-button>
          <a-table bordered :data-source="dataSource" :columns="columns">
            <template slot="name" slot-scope="text, record">
              <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)" />
            </template>
            <template slot="operation" slot-scope="text, record">
              <a-popconfirm
                v-if="dataSource.length"
                title="Sure to delete?"
                @confirm="() => onDelete(record.key)"
              >
                <a href="javascript:;">Delete</a>
              </a-popconfirm>
            </template>
          </a-table>
        </a-collapse-panel>
      </a-collapse>
    </a-form-model>
  </vue-scroll>
</template>
<script>
  import MedicationSideEffectTemplate from './medicationSideEffectTemplate'
  import moment from 'moment'

  export default {
    name: 'BasicInformation',
    components: {
      MedicationSideEffectTemplate
    },
    data () {
      return {
        collapseActiveKey: [ 'MainConsult', 'DiseaseIds' ],
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
          diseaseIds: [],
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
          pastMedicalHistoryDiseaseName: '',
          liverDamage: '',
          liverDamageDesc: '',
          kidneyDamage: '',
          kidneyDamageDesc: '',
          familyMedicalHistoryDiseaseIds: [],
          familyMedicalHistoryDiseaseName: '',
          surgicalHistoryIds: [],
          surgeryName: '',
          allergyHistory: '',
          allergySymptoms: '',
          allergyDatetime: ''
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
      onSubmit () {
        console.log('submit!', this.form)
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
      }
    }
  }
</script>
<style scoped>
</style>

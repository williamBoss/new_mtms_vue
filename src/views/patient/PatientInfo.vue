<template>
  <div>
    <div>
      <a-drawer
        :width="400"
        placement="right"
        :visible="visible"
        :closable="false"
        :mask="false"
        :keyboard="false"
        :body-style="{ paddingBottom: '80px' }"
        @close="onClose"
        style="padding: 0"
      >
        <a-tabs default-active-key="1">
          <a-tab-pane
            key="1"
            tab="患者信息"
          >
            <a-form-model
              ref="patientBasicInfoForm"
              :model="form"
              :rules="rules"
              :layout="'vertical'"
            >
              <a-form-model-item
                ref="phone"
                prop="phone"
              >
                <span slot="label">
                  电话&nbsp;
                  <a-tooltip title="建议填写患者手机号">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-auto-complete
                  class="global-search"
                  placeholder="请输入"
                  option-label-prop="title"
                  @blur="handleSelectPatient"
                  v-model="form.phone"
                >
                  <template slot="dataSource">
                    <a-select-option
                      v-for="p in patientInfo"
                      :key="p.phone"
                      :title="p.phone"
                    >
                      {{ p.phone }}-{{ p.patientName }}
                    </a-select-option>
                  </template>
                </a-auto-complete>
              </a-form-model-item>
              <a-form-model-item
                label="姓名"
                ref="patientName"
                prop="patientName"
              >
                <a-input
                  v-model="form.patientName"
                  placeholder="请输入"
                />
              </a-form-model-item>
              <a-form-model-item
                label="生日"
                ref="birthday"
                prop="birthday"
              >
                <a-date-picker
                  v-model="form.birthday"
                  format="'YYYY/MM/DD'"
                  :valueFormat="'YYYY/MM/DD'"
                  @change="onChange"
                />
              </a-form-model-item>
              <a-form-model-item
                label="性别"
                ref="gender"
                prop="gender"
              >
                <a-radio-group
                  v-model="form.gender"
                  button-style="solid"
                >
                  <a-radio-button :value="1">
                    男
                  </a-radio-button>
                  <a-radio-button :value="2">
                    女
                  </a-radio-button>
                  <a-radio-button :value="0">
                    未知
                  </a-radio-button>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item
                label="患者ID"
                ref="patientSelfId"
                prop="patientSelfId"
              >
                <a-input
                  v-model="form.patientSelfId"
                  placeholder="请输入"
                />
              </a-form-model-item>
              <a-form-model-item
                label="身高(CM)"
                ref="height"
                prop="height"
              >
                <a-input-number
                  v-model="form.height"
                  :min="0"
                  :max="1000"
                  :step="0.1"
                  placeholder="请输入"
                  style="width: 100%;"
                />
              </a-form-model-item>
              <a-form-model-item
                label="体重(KG)"
                ref="weight"
                prop="weight"
              >
                <a-input-number
                  v-model="form.weight"
                  :min="0"
                  :max="1000"
                  :step="0.1"
                  placeholder="请输入"
                  style="width: 100%;"
                />
              </a-form-model-item>
              <a-form-model-item
                ref="bmi"
                prop="BMI"
              >
                <span slot="label">
                  bmi&nbsp;
                  <a-tooltip title="计算公式：体质指数(bmi)=体重(kg)/身高^2(m)">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-input-number
                  v-model="form.bmi"
                  style="width: 100%;"
                  disabled="true"
                />
              </a-form-model-item>
              <a-form-model-item
                label="身份证号"
                ref="idCardNum"
                prop="idCardNum"
              >
                <a-input
                  v-model="form.idCardNum"
                  placeholder="请输入"
                />
              </a-form-model-item>
              <a-form-model-item
                label="医保类型"
                ref="medicareType"
                prop="medicareType"
              >
                <a-radio-group
                  v-model="form.medicareType"
                  button-style="solid"
                >
                  <a-radio-button :value="1">
                    医保（北京）
                  </a-radio-button>
                  <a-radio-button :value="2">
                    医保（外地）
                  </a-radio-button>
                  <a-radio-button :value="3">
                    公费
                  </a-radio-button>
                  <a-radio-button :value="4">
                    新农合
                  </a-radio-button>
                  <a-radio-button :value="5">
                    其他
                  </a-radio-button>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item
                ref="otherMedicareType"
                prop="otherMedicareType"
              >
                <span slot="label">
                  其他医保类型&nbsp;
                  <a-tooltip title="选择其他医保类型，请输入具体的医保类型">
                    <a-icon type="question-circle-o" />
                  </a-tooltip>
                </span>
                <a-input
                  v-model="form.otherMedicareType"
                  placeholder="请输入"
                />
              </a-form-model-item>
              <a-form-model-item
                label="受教育程度"
                ref="educationLevel"
                prop="educationLevel"
              >
                <a-radio-group
                  v-model="form.educationLevel"
                  button-style="solid"
                >
                  <a-radio-button :value="1">
                    小学及以下
                  </a-radio-button>
                  <a-radio-button :value="2">
                    初高中
                  </a-radio-button>
                  <a-radio-button :value="3">
                    大专及本科
                  </a-radio-button>
                  <a-radio-button :value="4">
                    硕士及以上
                  </a-radio-button>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item
                label="婚姻状况"
                ref="maritalStatus"
                prop="maritalStatus"
              >
                <a-radio-group
                  v-model="form.maritalStatus"
                  button-style="solid"
                >
                  <a-radio-button :value="1">
                    已婚
                  </a-radio-button>
                  <a-radio-button :value="2">
                    未婚
                  </a-radio-button>
                  <a-radio-button :value="3">
                    离异
                  </a-radio-button>
                  <a-radio-button :value="4">
                    丧偶
                  </a-radio-button>
                </a-radio-group>
              </a-form-model-item>
              <a-form-model-item
                label="家庭住址"
                ref="downtownAddressArr"
                prop="downtownAddressArr"
              >
                <span>所在地区</span>
                <a-cascader
                  v-model="form.downtownAddressArr"
                  :options="distOptionTrees"
                  expand-trigger="hover"
                  placeholder="请选择家庭住址的省市区"
                  style="width: 100%;margin:5px 0 10px 0;"
                />
                <span>详细地址</span>
                <a-input
                  v-model="form.homeAddress"
                  placeholder="请输入详细家庭住址"
                  style="margin:5px 0 10px 0;"
                />
              </a-form-model-item>
              <a-form-model-item
                label="工作单位"
                ref="company"
                prop="company"
              >
                <a-input
                  v-model="form.company"
                  placeholder="请输入"
                />
              </a-form-model-item>
              <a-form-model-item
                label="就诊后一年"
                ref="emergencyInfusionNum"
                prop="emergencyInfusionNum"
              >
                <span>急诊/输液次数</span>
                <a-input
                  v-model="form.emergencyInfusionNum"
                  placeholder="请输入"
                  style="margin:5px 0 10px 0;"
                />
                <span>住院次数</span>
                <a-input
                  v-model="form.hospitalizationNum"
                  placeholder="请输入"
                  style="margin:5px 0 10px 0;"
                />
              </a-form-model-item>
              <a-form-model-item
                label="接诊医师"
                ref="physician"
                prop="physician"
              >
                <a-input
                  v-model="form.physician"
                  placeholder="请输入接诊医师姓名"
                  style="width: 100%;"
                />
              </a-form-model-item>
              <a-form-model-item
                label="科室"
                ref="department"
                prop="department"
              >
                <a-input
                  v-model="form.department"
                  placeholder="请输入科室"
                  style="width: 100%;"
                />
              </a-form-model-item>
              <a-form-model-item
                label="接诊药师"
                ref="pharmacist"
                prop="pharmacist"
              >
                <a-input
                  v-model="form.pharmacist"
                  style="width: 100%;"
                />
              </a-form-model-item>
              <a-form-model-item>
                <a-button
                  type="primary"
                  :loading="confirmLoading"
                  @click="handleSubmit"
                >
                  保存信息
                </a-button>
                <a-button
                  style="margin-left: 10px;"
                  @click="resetForm"
                >
                  清空重置
                </a-button>
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
          <a-tab-pane
            key="2"
            tab="评估记录"
            force-render
          >
            <a-timeline v-if="assessmentRecording.length === 0">
              <a-timeline-item>
                该患者暂无评估记录
              </a-timeline-item>
            </a-timeline>
            <a-timeline v-else>
              <a-timeline-item
                v-for="(r, index) in assessmentRecording"
                :key="index"
              >
                {{ r.fillDate }}
                <a-tag
                  color="#2db7f5"
                  style="float: right;"
                >
                  患者评估
                </a-tag>
                <a-card :bordered="false">
                  <h4>药师：{{ r.userName }}</h4>
                  <p>主诉：{{ r.mainConsult }}</p>
                </a-card>
              </a-timeline-item>
              <!--<a-timeline-item>
                2015-09-01
                药师：李医师
                <a-tag color="#f50" style="float: right;">
                  药学门诊
                </a-tag>
              </a-timeline-item>-->
            </a-timeline>
          </a-tab-pane>
          <a-tab-pane
            key="3"
            tab="药物不良反应记录"
            force-render
          >
            <a-timeline>
              <a-timeline-item>
                2017-09-01
                <a-tag
                  color="#2db7f5"
                  style="float: right;"
                >
                  患者评估
                </a-tag>
                <a-card :bordered="false">
                  <h4>药师：李医师</h4>
                  <p>咳嗽、咳痰伴发热3天，患者于3天前因下地干农活受凉后出现咳嗽、咳痰，无恶心、呕吐，无胸闷、气短，无腹胀、腹痛及腹泻，近日上述症状加重，今日故日前来我院就诊。</p>
                </a-card>
              </a-timeline-item>
              <a-timeline-item>
                2015-09-01
                药师：李医师
                <a-tag
                  color="#f50"
                  style="float: right;"
                >
                  药学门诊
                </a-tag>
              </a-timeline-item>
            </a-timeline>
          </a-tab-pane>
        </a-tabs>
        <div
          class="setting-drawer-index-handle"
          @click="toggle"
          slot="handle"
        >
          <a-icon
            type="left"
            v-if="!visible"
          />
          <a-icon
            type="right"
            v-else
          />
        </div>
      </a-drawer>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import {
  getAssessmentListByPatientId,
  getPatientInfoByPhone,
  getPatientListByPhone,
  savePatientInfo,
  updatePatientInfo
} from '@/api/mtms'
import { getDistTree } from '@/api/system'
import { getInfo } from '@/api/login'

export default {
  name: 'PatientInfo',
  data () {
    return {
      visible: true,
      confirmLoading: false,
      distOptionTrees: [],
      patientId: 0,
      patientInfo: [],
      assessmentRecording: [],
      form: {
        patientName: '',
        birthday: '',
        gender: '',
        phone: undefined,
        patientSelfId: '',
        height: '',
        weight: '',
        bmi: 0,
        idCardNum: '',
        medicareType: '',
        otherMedicareType: '',
        educationLevel: '',
        consultationDate: '',
        maritalStatus: '',
        downtownAddressArr: [],
        homeAddress: '',
        company: '',
        emergencyInfusionNum: '',
        hospitalizationNum: '',
        pharmacist: ''
      },
      rules: {
        phone: [
          { required: true, message: '请填写患者联系电话！', trigger: 'blur' },
          { type: 'number', message: '请输入数字', trigger: 'blur', transform: (value) => Number(value) }
        ],
        patientName: [
          { required: true, message: '请填写患者姓名', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: '请填写患者生日！', trigger: 'blur' }
        ],
        gender: [
          { required: true, message: '请选择患者性别', trigger: 'change' }
        ],
        patientSelfId: [
          { type: 'number', message: '请输入数字', trigger: 'blur', transform: (value) => Number(value) }
        ]
      }
    }
  },
  created () {
    getDistTree().then(res => {
      this.distOptionTrees = res.data.districtsTrees
    }).catch(() => {
      this.notification('error', '查询失败', '系统错误，地区数据获取失败，请稍后再试')
    })
  },
  mounted () {
    getInfo().then(res => {
      this.form.pharmacist = res.loginName
    })
  },
  computed: {
    BMI () {
      const { height, weight } = this.form
      return {
        height,
        weight
      }
    }
  },
  watch: {
    BMI (val) {
      this.calBMI(val.weight, val.height)
    }
  },
  methods: {
    moment,
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    toggle () {
      this.visible = !this.visible
      this.$emit('onChangeCardContentWidth', this.visible)
    },
    resetForm () {
      this.$refs[ 'patientBasicInfoForm' ].resetFields()
      this.form.hospitalizationNum = ''
    },
    calBMI (weight, height) {
      console.log(weight === '')
      if (weight && height) {
        this.form.bmi = Number((Number(weight) / ((Number(height) / 100) * (Number(height) / 100))).toFixed(2))
      } else {
        this.form.bmi = 0
      }
      // if (weight === '') {
      //   this.form.bmi = 0
      // }
      // if (height === '') {
      //   this.form.bmi = 0
      // }
    },
    handleSearchPatient (value) {
      getPatientListByPhone({ phone: value }).then(res => {
        if (res.code === 200) {
          this.patientInfo = res.data
        } else {
          this.notification('error', '查询失败', '系统错误，获取患者信息失败，请稍后再试')
        }
      }).catch(() => {
        this.notification('error', '查询失败', '系统错误，获取患者信息失败，请稍后再试')
      })
    },
    handleSelectPatient (value) {
      if (value) {
        getPatientInfoByPhone(value).then(res => {
          if (res.code === 200) {
            if (res.data !== null) {
              this.patientId = res.data.patientId
              this.$emit('patient-id', this.patientId)
              Object.assign(this.form, res.data)
              if (res.data.downtownAddress != null) {
                res.data.downtownAddress.split(',').forEach(v => {
                  this.form.downtownAddressArr.push(Number(v))
                })
              }
              this.getAssessmentListByPatientId(res.data.patientId)
            }
          } else {
            this.notification('error', '查询失败', '系统错误，获取患者信息失败，请稍后再试')
          }
        }).catch(() => {
          this.notification('error', '查询失败', '系统错误，获取患者信息失败，请稍后再试')
        })
      }
    },
    handleSubmit () {
      console.log('click!!!')
      this.$refs[ 'patientBasicInfoForm' ].validate((valid) => {
          const values = this.form
          if (valid) {
            console.log('Received values of form: ', values)
            this.confirmLoading = true
            if (this.patientId === 0) {
              savePatientInfo(values).then(res => {
                if (res.code === 200) {
                  this.patientId = res.data.patientId
                  this.notification('success', '保存成功', '患者基本信息保存成功')
                  this.$store.dispatch('SET_INFO',
                    { patientName: this.form.patientName, patientId: this.patientId, phone: this.form.phone })
                } else {
                  this.notification('error', '保存失败', res.msg)
                }
              }).catch(() => {
                this.notification('error', '保存失败', '系统错误，请稍后再试')
              }).finally(() => {
                this.confirmLoading = false
                this.$emit('patient-id', this.patientId)
              })
            } else {
              updatePatientInfo(this.patientId, values).then(res => {
                if (res.code === 200) {
                  this.notification('success', '修改成功', '患者基本信息修改成功')
                  this.$store.dispatch('SET_INFO',
                    { patientName: this.form.patientName, patientId: this.patientId, phone: this.form.phone })
                } else {
                  this.notification('error', '修改失败', res.msg)
                }
              }).catch(() => {
                this.notification('error', '修改失败', '系统错误，请稍后再试')
              }).finally(() => {
                this.confirmLoading = false
                this.$emit('patient-id', this.patientId)
              })
            }
          }
        }
      )
    },
    notification (type, message, description) {
      this.$notification[ type ]({
        message: message,
        description: description
      })
    },
    getAssessmentListByPatientId (patientId) {
      getAssessmentListByPatientId({ patientId: patientId }).then(res => {
        if (res.code === 200) {
          this.assessmentRecording = res.data
        }
      }).catch(() => {
        this.notification('error', '查询失败', '系统错误，获取评估记录失败，请稍后再试')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.setting-drawer-index-handle {
  position: absolute;
  top: 45%;
  left: -14px;
  background: #1890ff;
  width: 15px;
  height: 50px;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;
  text-align: center;
  font-size: 16px;
  border-radius: 4px 0 0 4px;
  transform: perspective(2em) rotateY(-50deg);

  i {
    color: rgb(255, 255, 255);
    font-size: 15px;
  }
}

.ant-form-item {
  margin-bottom: 0;
}

.ant-radio-button-wrapper {
  border-left: 0.5px solid #d9d9d9;
  margin-bottom: 4px;
  margin-right: 5px;
}

.ant-radio-button-wrapper:not(:first-child)::before {
  width: 0;
}
</style>

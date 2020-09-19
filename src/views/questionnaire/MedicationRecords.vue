<template>
  <div>
    <div class="medicationRecords-page">
      <div class="top-table">
        <div class="table_header">
          用药记录
        </div>
        <div class="baseInfo-item">
          <div><span>姓名：</span>
            <span>{{ patientName }}</span>
          </div>
          <div><span>性别：</span>
            <span>{{ gender }}</span>
          </div>
          <div><span>年龄:</span>
            <span>{{ age }}</span>
          </div>
          <div><span>电话：</span>
            {{ phone }}
          </div>
          <div><span>过敏药物：</span>
            {{ allergy }}
          </div>
        </div>
      </div>
      <div class="btn-box">
        <div class="table-addbtn-box flex-bettween">
          <a-button type="primary"
                    class="addHistoryBtn"
                    @click="pushData()">
            添加用药记录
          </a-button>
        </div>
      </div>
      <a-table :data-source="data"
               class="mr_table"
               :pagination="false"
               bordered>

        <a-table-column key="useStartTime"
                        title="开始时间"
                        data-index="useStartTime">
          <template slot-scope="text, record">
            <a-date-picker v-model="record.useStartTime"
                           :valueFormat="'YYYY/MM/DD'"
                           :format="'YYYY/MM/DD'" />
          </template>
        </a-table-column>
        <a-table-column key="useEndTime"
                        title="结束时间"
                        data-index="useEndTime">
          <template slot-scope="text, record">
            <a-date-picker v-model="record.useEndTime"
                           :valueFormat="'YYYY/MM/DD'"
                           :format="'YYYY/MM/DD'" />
          </template>
        </a-table-column>
        <a-table-column key="medName"
                        title="药品名称"
                        data-index="medName">
          <template slot-scope="text, record">
            <a-auto-complete v-model="record.medName"
                             :data-source="medicFilterData"
                             @change="changeMedicData"
                             placeholder="药品名称" />
          </template>
        </a-table-column>
        <a-table-column key="indication"
                        title="适应症"
                        data-index="indication">
          <template slot-scope="text, record">
            <a-input v-model="record.indication" />
          </template>
        </a-table-column>
        <a-table-column key="usage"
                        title="用法"
                        data-index="usage">
          <template slot-scope="text, record">
            <a-input v-model="record.usage" />
          </template>
        </a-table-column>
        <a-table-column key="dosageMonthly"
                        title="月用药量（盒）"
                        data-index="dosageMonthly">
          <template slot-scope="text, record">
            <a-input v-model="record.dosageMonthly" />
          </template>
        </a-table-column>
        <a-table-column key="remark"
                        title="备注（新增/停用）"
                        data-index="remark">
          <template slot-scope="text, record">
            <a-input v-model="record.remark" />
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
                        @click="confirmData(record)">
                保存
              </a-button>
            </div>
            <div v-else>已保存</div>
          </template>
        </a-table-column>
        <div slot="footer">
          <div class="desc">
            <div class="title">
              提示：
            </div>
            <p>1、请随身携带这个记录，并在就诊时交给医生、药师和其他医疗服务提供者，可作为调整用药的参考；</p>
            <p>2、任何情况下，病人（或其他使用者）不可以完全依靠此表或其中的信息作为服药的依据。</p>
          </div>
        </div>
      </a-table>
    </div>
    <!-- confirm -->
    <!-- <div class="footer-btn-box">
      <a-button type="primary"
                :disabled="!patientId"
                @click="confirmData">
        保存
      </a-button>
    </div> -->
  </div>
</template>

<script>
import { getAge } from '@/utils/commonFtn.js'
import {
  getPatientInfoById,
  // getPatientInfoByPhone,
  getMedicationSideEffectList,
  getUseMedRecordList,
  saveUseMedRecord,
  getAllMed
} from '@/api/mtms'
export default {
  name: 'MedicationRecords',
  props: {
    patientId: {
      type: Number,
      default: null
    },
    assessmentId: {}
  },
  data () {
    return {
      // patientId: '',
      patientName: '',
      age: '',
      gender: '',
      phone: '',
      medicData: [],
      medicFilterData: [],
      data: []
    }
  },
  mounted () {
    this.getMedList()
    if (this.patientId) {
      this.getBaseInfo()
      this.getUseMedRecordList()
      this.getMedicationSideEffectList()
    }
  },
  methods: {
    // 药物列表
    getMedList () {
      getAllMed().then(res => {
        if (res.data) {
          this.medicData = res.data
        }
      })
    },
    changeMedicData (searchText) {
      const _data = this.medicData.filter(item => { return item.medName.includes(searchText) })
      const _arr = []
      _data.forEach(item => {
        _arr.push(item.medName)
      })
      this.medicFilterData = _arr
    },
    async getBaseInfo () {
      if (this.patientId) {
        getPatientInfoById(this.patientId).then(res => {
          console.log(res.data)
          if (res.data) {
            const { birthday, patientName, gender, phone } = res.data
            birthday ? this.age = getAge(birthday) : this.age = '-'
            gender === 1 ? this.gender = '男' : gender === 2 ? this.gender = '女' : this.gender = '未知'
            this.patientName = patientName
            this.phone = phone
          }
        })
      }
    },
    // 家族史既往史
    getMedicationSideEffectList () {
      getMedicationSideEffectList({ patientId: this.patientId }).then(res => {
        console.log('家族史既往史:', res)
        let { data } = res
        let _allergy = []
        data && data.map(item => {
          _allergy.push(item.medName)
        })
        this.allergy = _allergy.join(',')
      })
    },
    // 用药记录
    getUseMedRecordList () {
      console.log('用药记录 running')
      getUseMedRecordList({ patientId: this.patientId }).then(res => {
        let { rows } = res
        console.log('用药记录：', rows);
        if (rows) {
          rows.map(item => {
            item.saved = true
            // this.data.push(item)
          })
          this.data = rows
        }
        console.log(this.data)
      })
    },
    pushData () {
      this.data.unshift({
        useStartTime: '',
        useEndTime: '',
        medName: '',
        indication: '',
        usage: '',
        dosageMonthly: '',
        remark: '',
        patientId: this.patientId,
        assessmentId: this.assessmentId,
        saved: false
      })
    },
    deleteData (index) {
      this.data.splice(index, 1)
    },
    confirmData (record) {
      saveUseMedRecord({ ...record }).then(res => {
        const { success } = res
        if (success) {
          this.data.map(item => {
            if (item.medName === record.medName) {
              item.saved = true
            }
          })
          this.$message.success('新增成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
        console.log(res)
      })
    }
  },
  watch: {
    patientId: {
      handler (v) {
        if (v) {
          this.getBaseInfo()
          this.getUseMedRecordList()
          this.getMedicationSideEffectList()
        }
      },
      immediate: true,
      deep: true
    },
    data: {
      handler (v) {
        console.log(v)
      },
      deep: true
    }
  }
}
</script>

<style lang="less">
.medicationRecords-page {
  .top-table {
    .table_header {
      width: 100%;
      padding: 16px;
      border: 1px solid #e8e8e8;
      background: #fafafa;
    }
    .baseInfo-item {
      padding: 16px;
      border-left: 1px solid #e8e8e8;
      border-right: 1px solid #e8e8e8;
      > div {
        display: inline-block;
        margin-right: 15px;
      }
    }
  }
  .top-table + .btn-box {
    border: 1px solid #e8e8e8;
    border-top: 0;
    padding: 10px;
  }
}
</style>

<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col
            :md="8"
            :sm="24"
          >
            <a-form-item label="患者姓名">
              <a-input
                v-model="queryParam.patientName"
                placeholder="请输入患者姓名"
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="8"
            :sm="24"
          >
            <a-form-item label="患者联系方式">
              <a-input
                v-model="queryParam.phone"
                placeholder="请输入患者手机号"
              />
            </a-form-item>
          </a-col>
          <a-col
            :md="8"
            :sm="24"
          >
            <a-form-item label="患者身份证号">
              <a-input
                v-model="queryParam.idCardNum"
                placeholder="请输入患者手机号"
              />
            </a-form-item>
          </a-col>
          <template v-if="advanced">
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="评估时间">
                <a-range-picker
                  v-model="searchDate"
                  @change="queryFillDate"
                  allow-clear="true"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="诊断病种">
                <a-select
                  mode="multiple"
                  :default-value="[]"
                  placeholder="请选择病种"
                  v-model="queryParam.diseaseIds"
                  allowClear="true"
                >
                  <a-select-option
                    v-for="d in diseases"
                    :key="d.diseaseId"
                  >
                    {{ d.diseaseName }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
          </template>
          <a-col
            :md="8"
            :sm="24"
          >
            <span
              class="table-page-search-submitButtons"
              :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
            >
              <a-button
                type="primary"
                @click="$refs.table.refresh(true)"
              >查询</a-button>
              <a-button
                style="margin-left: 8px"
                @click="clearSearchContent"
              >重置</a-button>
              <a
                @click="toggleAdvanced"
                style="margin-left: 8px"
              >
                {{ advanced ? '收起' : '展开' }}
                <a-icon :type="advanced ? 'up' : 'down'" />
              </a>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="table-operator">
      <a-button
        type="primary"
        icon="plus"
        @click="linkPatientAssessment"
      >新建
      </a-button>
    </div>
    <s-table
      size="default"
      ref="table"
      rowKey="assessmentId"
      :columns="columns"
      :data="loadData"
    >
      <template
        slot="gender"
        slot-scope="gender"
      >
        {{ gender === 1 ? '男' : gender === 2 ? '女' : '/' }}
      </template>
      <template
        slot="diseases"
        slot-scope="disease"
      >
        <a-tag
          v-for="d in disease"
          :key="d"
          color="blue"
        >{{ d.diseaseName }}
        </a-tag>
      </template>
      <span
        slot="actions"
        slot-scope="text, record"
      >
        <a @click="goDetail(record)">
          <a-tooltip title="详情">
            <a-icon type="eye" />
          </a-tooltip>
        </a>
        <a-divider type="vertical" />
        <a-popconfirm title="确认删除该条评估记录？" @confirm="delConfirm([record.assessmentId])">
          <a-icon slot="icon" type="question-circle-o" style="color: red" />
          <a>
            <a-tooltip title="删除">
              <a-icon type="delete" />
            </a-tooltip>
          </a>
        </a-popconfirm>
      </span>
    </s-table>
  </a-card>
</template>
<script>
import { STable } from '@/components'
import { getAllDiseaseList, getAssessmentList, delAssessment } from '@/api/mtms'

export default {
  name: 'TableList',
  components: {
    STable
  },
  data () {
    return {
      form: this.$form.createForm(this),
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [
        {
          title: '患者姓名',
          dataIndex: 'patientInfoVO.patientName'
        },
        {
          title: '性别',
          dataIndex: 'patientInfoVO.gender',
          scopedSlots: { customRender: 'gender' }
        },
        {
          title: '年龄',
          dataIndex: 'patientInfoVO.age'
        },
        {
          title: '联系方式',
          dataIndex: 'patientInfoVO.phone'
        },
        {
          title: '诊断结果',
          dataIndex: 'diseaseVOS',
          scopedSlots: { customRender: 'diseases' },
          width: '25%'
        },
        {
          title: '记录人',
          dataIndex: 'userName'
        },
        {
          title: '评估时间',
          dataIndex: 'fillDate'
        },
        {
          title: '操作',
          dataIndex: 'assessmentId',
          scopedSlots: { customRender: 'actions' }
        }
      ],
      searchDate: [],
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getAssessmentList(Object.assign(parameter, this.queryParam))
      },
      diseases: []
    }
  },
  filters: {},
  created () {
    getAllDiseaseList().then(res => {
      if (res.code === 0) {
        this.diseases = res.data
      } else {
        this.$message.error(res.msg)
      }
    })
  },
  methods: {
    handleOk () {
      this.$refs.table.refresh(true)
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    queryFillDate (date, dateString) {
      this.searchDate = date
      this.queryParam.fillDateStart = dateString[ 0 ]
      this.queryParam.fillDateEnd = dateString[ 1 ]
    },
    clearSearchContent () {
      this.queryParam = {}
      this.searchDate = []
    },
    linkPatientAssessment () {
      this.$router.push({ name: 'PatientAssessment' })
    },
    delConfirm (ids) {
      delAssessment(ids).then(res => {
        if (res.code === 200) {
          this.$message.success(`删除成功`)
          this.handleOk()
        } else {
          this.$message.error(res.msg)
        }
      })
    },
    goDetail (data) {
      console.log(data)
      let { assessmentId, patientInfoVO } = data
      if (patientInfoVO) {
        let { patientId } = patientInfoVO
        this.$router.push({
          name: 'PatientAssessment',
          query: {
            assessmentId: assessmentId,
            patientId: patientId,
            type: 'detail'
          }
        })
      }
    }
  },
  watch: {}
}
</script>

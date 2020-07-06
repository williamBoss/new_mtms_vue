<template>
  <a-card :bordered="false">
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="48">
          <a-col :md="8" :sm="15">
            <a-form-item label="疾病名称">
              <a-input placeholder="请输入" v-model="queryParam.diseaseName" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :sm="24">
            <span class="table-page-search-submitButtons">
              <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
              <a-button style="margin-left: 8px" @click="() => queryParam = {}">重置</a-button>
            </span>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <div class="table-operator">
      <a-button type="primary" icon="plus" @click="$refs.modal.add()">新建</a-button>
    </div>
    <s-table
      size="default"
      ref="table"
      rowKey="diseaseId"
      :columns="columns"
      :data="loadData"
    >
      <span slot="action" slot-scope="text, record">
        <a @click="handleEdit(record)">编辑</a>
        <a-divider type="vertical" />
        <a @click="delByIds(record.diseaseId)">删除</a>
      </span>
    </s-table>
    <disease-modal ref="modal" @ok="handleOk" />
  </a-card>
</template>
<script>
  import { delDisease, getDiseaseList } from '@/api/mtms'
  import { STable } from '@/components'
  import DiseaseModal from '@/views/disease/DiseaseModal'

  export default {
    name: 'DiseaseList',
    components: {
      DiseaseModal,
      STable
    },
    data () {
      return {
        form: null,
        // 高级搜索 展开/关闭
        advanced: false,
        // 查询参数
        queryParam: {},
        // 表头
        columns: [
          {
            title: '疾病名称',
            dataIndex: 'diseaseName'
          },
          {
            title: '疾病编码',
            dataIndex: 'diseaseKey'
          },
          {
            title: '操作',
            width: '150px',
            dataIndex: 'action',
            scopedSlots: { customRender: 'action' }
          }
        ],
        loadData: parameter => {
          return getDiseaseList(Object.assign(parameter, this.queryParam))
        }
      }
    },
    created () {
    },
    methods: {
      handleOk () {
        this.$refs.table.refresh(true)
      },
      handleEdit (record) {
        this.$refs.modal.edit(record)
      },
      delByIds (id) {
        delDisease(id).then(res => {
          if (res.code === 200) {
            this.$message.success(`删除成功`)
            this.handleOk()
          } else {
            this.$message.error(res.msg)
          }
        })
      }
    }
  }
</script>
<style scoped>
</style>

<template>
  <a-modal
    title="操作"
    style="top: 20px;"
    :width="800"
    v-model="visible"
    :confirmLoading="confirmLoading"
    @ok="handleSubmit"
  >
    <a-form :form="form">
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="疾病名称"
      >
        <a-input placeholder="疾病名称" v-decorator="['diseaseName', {rules: [{ required: true, message: '请输入疾病名称' }]}]" />
      </a-form-item>
      <a-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label="疾病编码"
      >
        <a-input placeholder="疾病编码" v-decorator="['diseaseKey']" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
  import pick from 'lodash.pick'
  import { saveDisease, updateDisease } from '@/api/mtms'

  export default {
    name: 'DiseaseModal',
    components: {},
    data () {
      return {
        visible: false,
        labelCol: {
          xs: { span: 24 },
          sm: { span: 5 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        },
        confirmLoading: false,
        mdl: {},
        form: this.$form.createForm(this),
        diseaseId: 0
      }
    },
    beforeCreate () {
    },
    created () {},
    methods: {
      add () {
        this.form.resetFields()
        this.edit({ diseaseId: 0 })
      },
      edit (record) {
        this.mdl = Object.assign(record)
        this.diseaseId = record.diseaseId
        this.visible = true
        if (record.diseaseId !== 0) {
          this.$nextTick(() => {
            this.form.setFieldsValue(pick(this.mdl, 'diseaseName', 'diseaseKey'))
          })
        }
      },
      handleSubmit (e) {
        e.preventDefault()
        this.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values)
              this.confirmLoading = true
              if (this.diseaseId === 0) {
                saveDisease(values).then(res => {
                  this.resp(res)
                }).catch(() => {
                  this.$message.error('系统错误，请稍后再试')
                }).finally(() => {
                  this.confirmLoading = false
                })
              } else {
                updateDisease(this.diseaseId, values).then(res => {
                  this.resp(res)
                }).catch(() => {
                  this.$message.error('系统错误，请稍后再试')
                }).finally(() => {
                  this.confirmLoading = false
                })
              }
            }
          }
        )
      },
      resp (res) {
        if (res.code === 200) {
          this.$emit('ok')
          this.visible = false
          this.$message.success('修改成功')
        } else {
          this.$message.warning(res.msg)
        }
      }
    },
    watch: {}
  }
</script>

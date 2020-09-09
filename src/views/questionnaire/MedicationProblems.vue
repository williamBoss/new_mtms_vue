<template>
  <div>
    <a-table :data-source="data"
             class="mr_table"
             :pagination="false"
             bordered>
      <a-table-column-group>
        <a-table-column key="index"
                        title="序号"
                        data-index="index">
        </a-table-column>
        <a-table-column key="sick"
                        title="相关疾病"
                        data-index="sick">
          <template slot-scope="index">
            <a-input @change="onchange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="medicine"
                        title="相关药物"
                        data-index="medicine">
          <template slot-scope="index">
            <a-input @change="onchange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="question"
                        title="问题类型"
                        data-index="question">
          <template slot-scope="index">
            <a-cascader :options="questionOptions"
                        @change="onChangeQuestionType(index)" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="具体问题"
                        data-index="detail">
          <template slot-scope="index">
            <a-input @change="onchange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="处理建议"
                        data-index="detail">
          <template slot-scope="index">
            <a-input @change="onchange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="是否解决"
                        data-index="detail">
          <template slot-scope="index">
            <a-radio-group @change="onchange(index)">
              <a-radio :value="1"> 本次就诊解决 </a-radio>
              <a-radio :value="2"> 未解决 </a-radio>
              <a-radio :value="3"> 待解决 </a-radio>
            </a-radio-group>
          </template>
        </a-table-column>
        <a-table-column key="improve"
                        title="改善详情"
                        data-index="improve">
          <template slot-scope="index">
            <a-input @change="onchange(index)" />
          </template>
        </a-table-column>
      </a-table-column-group>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'MedicationProblems',
  data () {
    return {
      questionOptions: [],
      data: [{}]
    }
  }
}
</script>

<style scoped>
</style>

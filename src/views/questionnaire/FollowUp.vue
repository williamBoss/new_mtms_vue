<template>
  <div>
    <a-table :data-source="data"
             class="mr_table"
             :pagination="false"
             bordered>
      <a-table-column-group>
        <a-table-column key="date"
                        title="随访/复诊日期"
                        data-index="date">
          <template slot-scope="index">
            <a-date-picker @change="onChange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="上次提出几条建议"
                        data-index="detail">
          <template slot-scope="index">
            <a-input @change="onChange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="complate"
                        title="已完成几条建议"
                        data-index="complate">
          <template slot-scope="index">
            <a-input @change="onChange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="wait"
                        title="待完成几条建议"
                        data-index="wait">
          <template slot-scope="index">
            <a-input @change="onChange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="患者转归情况"
                        data-index="detail">
          <template slot-scope="index">
            <!-- <a-input /> -->
            <a-radio-group @change="onChange(index)">
              <a-radio :value="1"> 无变化 </a-radio>
              <a-radio :value="2"> 好转 </a-radio>
              <a-radio :value="3"> 痊愈 </a-radio>
            </a-radio-group>
          </template>
        </a-table-column>
        <a-table-column key="detail"
                        title="未解决的问题"
                        data-index="detail">
          <template slot-scope="index">
            <a-input @change="onChange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="nextDate"
                        title="下次随访/复诊时间"
                        data-index="nextDate">
          <template slot-scope="index">
            <a-date-picker @change="onChange(index)" />
          </template>
        </a-table-column>
        <a-table-column key="people"
                        title="本次随访/复诊人员"
                        data-index="people">
          <template slot-scope="index">
            <a-input @change="onChange(index)" />
          </template>
        </a-table-column>
      </a-table-column-group>
    </a-table>
  </div>
</template>

<script>
export default {
  name: 'FollowUp',
  data () {
    return {
      data: [{ date: '' }]
    }
  }
}
</script>

<style scoped>
</style>

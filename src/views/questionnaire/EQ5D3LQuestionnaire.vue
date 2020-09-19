<template>
  <a-form-model
    ref="eq5d3lForm"
    :model="eq5d3lForm"
    :layout="layout"
  >
    <a-form-model-item label="1.行动能力" prop="actionQ">
      <a-radio-group v-model="eq5d3lForm.actionQ">
        <a-radio value="0">
          我可以四处走动, 没有任何困难。
        </a-radio>
        <a-radio value="1">
          我四处走动有些不方便。
        </a-radio>
        <a-radio value="2">
          我不能下床活动。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="2.自己照顾自己" prop="lookAfterSelfQ">
      <a-radio-group v-model="eq5d3lForm.lookAfterSelfQ">
        <a-radio value="0">
          我能自己照顾自己, 没有任何困难。
        </a-radio>
        <a-radio value="1">
          我在洗脸、刷牙、洗澡或穿衣方面有些困难。
        </a-radio>
        <a-radio value="2">
          我无法自己洗脸、刷牙、洗澡或穿衣。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="3.日常活动（如工作, 学习, 家务事, 家庭或休闲活动）" prop="dailyActQ">
      <a-radio-group v-model="eq5d3lForm.dailyActQ">
        <a-radio value="0">
          我能进行日常活动, 没有任何困难。
        </a-radio>
        <a-radio value="1">
          我在进行日常活动方面有些困难。
        </a-radio>
        <a-radio value="2">
          我无法进行日常活动。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="4.疼痛 / 不舒服" prop="painQ">
      <a-radio-group v-model="eq5d3lForm.painQ">
        <a-radio value="0">
          我没有任何疼痛或不舒服。
        </a-radio>
        <a-radio value="1">
          我觉得中度疼痛或不舒服。
        </a-radio>
        <a-radio value="2">
          我觉得极度疼痛或不舒服。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="5.焦虑 (如紧张、担心、不安等等) / 抑郁 (如做事情缺乏兴趣、没乐趣、提不起精神等等)" prop="anxietyQ">
      <a-radio-group v-model="eq5d3lForm.anxietyQ">
        <a-radio value="0">
          我不觉得焦虑或抑郁。
        </a-radio>
        <a-radio value="1">
          我觉得中度焦虑或抑郁。
        </a-radio>
        <a-radio value="2">
          我觉得极度焦虑或抑郁。
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  name: 'EQ5D3LQuestionnaire',
  data () {
    return {
      layout: 'vertical',
      eq5d3lForm: {}
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>

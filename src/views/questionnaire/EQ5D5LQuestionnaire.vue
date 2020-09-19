<template>
  <a-form-model
    ref="eq5d5lForm"
    :model="eq5d5lForm"
    :layout="layout"
  >
    <a-form-model-item label="1.行动能力——我四处活动" prop="actionQ">
      <a-radio-group v-model="eq5d5lForm.actionQ">
        <a-radio value="1">
          没有困难
        </a-radio>
        <a-radio value="2">
          有一点困难
        </a-radio>
        <a-radio value="3">
          有中度困难
        </a-radio>
        <a-radio value="4">
          有严重困难
        </a-radio>
        <a-radio value="5">
          我无法四处活动
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="2.自我照顾——我自己洗澡或穿衣" prop="lookAfterSelfQ">
      <a-radio-group v-model="eq5d5lForm.lookAfterSelfQ">
        <a-radio value="1">
          没有困难
        </a-radio>
        <a-radio value="2">
          有一点困难
        </a-radio>
        <a-radio value="3">
          有中度困难
        </a-radio>
        <a-radio value="4">
          有严重困难
        </a-radio>
        <a-radio value="5">
          我无法照顾自己
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="3.日常活动（如工作、学习、家务、家庭或休闲活动）" prop="dailyActQ">
      <a-radio-group v-model="eq5d5lForm.dailyActQ">
        <a-radio value="1">
          没有困难
        </a-radio>
        <a-radio value="2">
          有一点困难
        </a-radio>
        <a-radio value="3">
          有中度困难
        </a-radio>
        <a-radio value="4">
          有严重困难
        </a-radio>
        <a-radio value="5">
          我无法进行日常活动
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="4.疼痛或不舒服" prop="painQ">
      <a-radio-group v-model="eq5d5lForm.painQ">
        <a-radio value="1">
          没有疼痛或不舒服
        </a-radio>
        <a-radio value="2">
          有一点疼痛或不舒服
        </a-radio>
        <a-radio value="3">
          有中度疼痛或不舒服
        </a-radio>
        <a-radio value="4">
          有严重疼痛或不舒服
        </a-radio>
        <a-radio value="5">
          有非常严重的疼痛或不舒服
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="5.焦虑或沮丧" prop="anxietyQ">
      <a-radio-group v-model="eq5d5lForm.anxietyQ">
        <a-radio value="1">
          没有焦虑或沮丧
        </a-radio>
        <a-radio value="2">
          有一点焦虑或沮丧
        </a-radio>
        <a-radio value="3">
          有中度焦虑或沮丧
        </a-radio>
        <a-radio value="4">
          有严重的焦虑或沮丧
        </a-radio>
        <a-radio value="5">
          有非常严重的焦虑或沮丧
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  name: 'EQ5D5LQuestionnaire',
  data () {
    return {
      layout: 'vertical',
      eq5d5lForm: {}
    }
  },
  methods: {}
}
</script>
<style scoped>
</style>

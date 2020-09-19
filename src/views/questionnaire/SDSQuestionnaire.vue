<template>
  <a-form-model
    ref="sdsForm"
    :model="sdsForm"
    :layout="layout"
  >
    <a-form-model-item label="1.我感到情绪沮丧，郁闷？" prop="sdsQ8">
      <a-radio-group v-model="sdsForm.sdsQ8">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="2.我感到早晨心情最好？" prop="sdsQ2">
      <a-radio-group v-model="sdsForm.sdsQ2">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="3.我要哭或想哭？" prop="sdsQ3">
      <a-radio-group v-model="sdsForm.sdsQ3">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="4.我晚上睡眠不好？" prop="sdsQ4">
      <a-radio-group v-model="sdsForm.sdsQ4">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="5.我吃得和平时一样多？" prop="sdsQ5">
      <a-radio-group v-model="sdsForm.sdsQ5">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="6.异性接触时和以往一样感到愉快？" prop="sdsQ6">
      <a-radio-group v-model="sdsForm.sdsQ6">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="7.我感到体重减轻？" prop="sdsQ7">
      <a-radio-group v-model="sdsForm.sdsQ7">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="8.我有便秘的苦恼？" prop="sdsQ8">
      <a-radio-group v-model="sdsForm.sdsQ8">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="9.我的心跳比平时快？" prop="sdsQ9">
      <a-radio-group v-model="sdsForm.sdsQ9">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="10.我无故感到疲劳？" prop="sdsQ10">
      <a-radio-group v-model="sdsForm.sdsQ10">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="11.我的头脑象往常一样清楚？" prop="sdsQ11">
      <a-radio-group v-model="sdsForm.sdsQ11">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="12.我做事情象平时一样不感到困难？" prop="sdsQ12">
      <a-radio-group v-model="sdsForm.sdsQ12">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="13.我坐卧不安,难以保持平静？" prop="sdsQ13">
      <a-radio-group v-model="sdsForm.sdsQ13">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="14.我对未来感到有希望？" prop="sdsQ14">
      <a-radio-group v-model="sdsForm.sdsQ14">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="15.我比平时更容易激怒？" prop="sdsQ15">
      <a-radio-group v-model="sdsForm.sdsQ15">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="16.我觉得决定什么事很容易？" prop="sdsQ16">
      <a-radio-group v-model="sdsForm.sdsQ16">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="17.感到自己是有用的和不可缺少的人？" prop="sdsQ17">
      <a-radio-group v-model="sdsForm.sdsQ17">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="18.我的生活很有意义？" prop="sdsQ18">
      <a-radio-group v-model="sdsForm.sdsQ18">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="19.假若我死了别人会过得更好？" prop="sdsQ19">
      <a-radio-group v-model="sdsForm.sdsQ19">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="20.我仍旧喜爱自己平时喜爱的东西？" prop="sdsQ20">
      <a-radio-group v-model="sdsForm.sdsQ20">
        <a-radio value="1">
          很少
        </a-radio>
        <a-radio value="2">
          有时
        </a-radio>
        <a-radio value="3">
          经常
        </a-radio>
        <a-radio value="4">
          持续
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item>
      总分：
    </a-form-model-item>
  </a-form-model>
</template>
<script>
export default {
  name: 'SDSQuestionnaire',
  data () {
    return {
      layout: 'vertical',
      sdsForm: {}
    }
  }
}
</script>
<style scoped>
</style>

<template>
  <a-form-model ref="sf36Form"
                :model="sf36Form"
                layout="vertical"
                :label-col="{ span: 14 }"
                :wrapper-col="{ span: 14 }">
    <a-form-model-item label="1、总体来讲，您的健康状况是："
                       prop="sf361">
      <a-radio-group v-model="sf36Form.sf361">
        <a-radio :value="1">
          非常好
        </a-radio>
        <a-radio :value="2">
          很好
        </a-radio>
        <a-radio :value="3">
          好
        </a-radio>
        <a-radio :value="4">
          一般
        </a-radio>
        <a-radio :value="5">
          差
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="2、跟1年以前比您觉得自己的健康状况是："
                       prop="sf362">
      <a-radio-group v-model="sf36Form.sf362">
        <a-radio :value="1">
          比1年前好多了
        </a-radio>
        <a-radio :value="2">
          比1年前好一些
        </a-radio>
        <a-radio :value="3">
          跟1年前差不多
        </a-radio>
        <a-radio :value="4">
          比1年前差一些
        </a-radio>
        <a-radio :value="5">
          比1年前差多了
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <h3>健康和日常活动</h3>
    <p>3、以下这些问题都和日常活动有关。请您想一想，您的健康状况是否限制了这些活动？如果有限制，程度如何？</p>
    <a-form-model-item label="（1）重体力活动。如跑步举重、参加剧烈运动等："
                       prop="sf3631">
      <a-radio-group v-model="sf36Form.sf3631">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（2）适度的活动。如移动一张桌子、扫地、打太极拳、做简单体操等："
                       prop="sf3632">
      <a-radio-group v-model="sf36Form.sf3632">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（3）手提日用品。如买菜、购物等："
                       prop="sf3633">
      <a-radio-group v-model="sf36Form.sf3633">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（4）上几层楼梯："
                       prop="sf3634">
      <a-radio-group v-model="sf36Form.sf3634">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（5）上一层楼梯："
                       prop="sf3635">
      <a-radio-group v-model="sf36Form.sf3635">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（6）弯腰、屈膝、下蹲："
                       prop="sf3636">
      <a-radio-group v-model="sf36Form.sf3636">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（7）步行1500米以上的路程："
                       prop="sf3637">
      <a-radio-group v-model="sf36Form.sf3637">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（8）步行1000米的路程："
                       prop="sf3638">
      <a-radio-group v-model="sf36Form.sf3638">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（9）步行100米的路程："
                       prop="sf3639">
      <a-radio-group v-model="sf36Form.sf3639">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（10）自己洗澡、穿衣："
                       prop="sf36310">
      <a-radio-group v-model="sf36Form.sf36310">
        <a-radio :value="1">
          限制很大
        </a-radio>
        <a-radio :value="2">
          有些限制
        </a-radio>
        <a-radio :value="3">
          毫无限制
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <p>4、在过去4个星期里，您的工作和日常活动有无因为身体健康的原因而出现以下这些问题？</p>
    <a-form-model-item label="（1）减少了工作或其他活动时间："
                       prop="sf3641">
      <a-radio-group v-model="sf36Form.sf3641">
        <a-radio :value="1">
          是
        </a-radio>
        <a-radio :value="2">
          不是
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（2）本来想要做的事情只能完成一部分："
                       prop="sf3642">
      <a-radio-group v-model="sf36Form.sf3642">
        <a-radio :value="1">
          是
        </a-radio>
        <a-radio :value="2">
          不是
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（3）想要干的工作或活动种类受到限制："
                       prop="sf3643">
      <a-radio-group v-model="sf36Form.sf3643">
        <a-radio :value="1">
          是
        </a-radio>
        <a-radio :value="2">
          不是
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（4）完成工作或其他活动困难增多（比如需要额外的努力）："
                       prop="sf3644">
      <a-radio-group v-model="sf36Form.sf3644">
        <a-radio :value="1">
          是
        </a-radio>
        <a-radio :value="2">
          不是
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <p>5、在过去4个星期里，您的工作和日常活动有无因为情绪的原因（如压抑或忧虑）而出现以下这些问题？</p>
    <a-form-model-item label="（1）减少了工作或活动时间："
                       prop="sf3651">
      <a-radio-group v-model="sf36Form.sf3651">
        <a-radio :value="1">
          是
        </a-radio>
        <a-radio :value="2">
          不是
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（2）本来想要做的事情只能完成一部分："
                       prop="sf3652">
      <a-radio-group v-model="sf36Form.sf3652">
        <a-radio :value="1">
          是
        </a-radio>
        <a-radio :value="2">
          不是
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（3）干事情不如平时仔细："
                       prop="sf3653">
      <a-radio-group v-model="sf36Form.sf3653">
        <a-radio :value="1">
          是
        </a-radio>
        <a-radio :value="2">
          不是
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="6、在过去4个星期里，您的健康或情绪不好在多大程度上影响了您与家人、朋友、邻居或集体的正常社会交往？"
                       prop="sf366">
      <a-radio-group v-model="sf36Form.sf366">
        <a-radio :value="1">
          完全没有影响
        </a-radio>
        <a-radio :value="2">
          有一点影响
        </a-radio>
        <a-radio :value="3">
          中等影响
        </a-radio>
        <a-radio :value="4">
          影响很大
        </a-radio>
        <a-radio :value="5">
          影响非常大
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="7、在过去4个星期里，您有身体疼痛吗？"
                       prop="sf367">
      <a-radio-group v-model="sf36Form.sf367">
        <a-radio :value="1">
          完全没有疼痛
        </a-radio>
        <a-radio :value="2">
          有一点疼痛
        </a-radio>
        <a-radio :value="3">
          中等疼痛
        </a-radio>
        <a-radio :value="4">
          严重疼痛
        </a-radio>
        <a-radio :value="5">
          很严重疼痛
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="8、在过去4个星期里，您的身体疼痛影响了您的工作和家务吗？"
                       prop="sf368">
      <a-radio-group v-model="sf36Form.sf368">
        <a-radio :value="1">
          完全没有影响
        </a-radio>
        <a-radio :value="2">
          有一点影响
        </a-radio>
        <a-radio :value="3">
          中等影响
        </a-radio>
        <a-radio :value="4">
          影响很大
        </a-radio>
        <a-radio :value="5">
          影响非常大
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <h3>您的感觉</h3>
    <p>9、以下这些问题是关于过去1个月里您自己的感觉，对每一条问题所说的事情，您的情况是什么样的？</p>
    <a-form-model-item label="（1）您觉得生活充实："
                       prop="sf3691">
      <a-radio-group v-model="sf36Form.sf3691">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（2）您是一个敏感的人："
                       prop="sf3692">
      <a-radio-group v-model="sf36Form.sf3692">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（3）您的情绪非常不好，什么事都不能使您高兴起来："
                       prop="sf3693">
      <a-radio-group v-model="sf36Form.sf3693">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（4）您的心理很平静："
                       prop="sf3694">
      <a-radio-group v-model="sf36Form.sf3694">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（5）您做事精力充沛："
                       prop="sf3695">
      <a-radio-group v-model="sf36Form.sf3695">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（6）您的情绪低落："
                       prop="sf3696">
      <a-radio-group v-model="sf36Form.sf3696">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（7）您觉得筋疲力尽："
                       prop="sf3697">
      <a-radio-group v-model="sf36Form.sf3697">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（8）您是个快乐的人："
                       prop="sf3698">
      <a-radio-group v-model="sf36Form.sf3698">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（9）您感觉厌烦："
                       prop="sf3699">
      <a-radio-group v-model="sf36Form.sf3699">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（10）不健康影响了您的社会活动（如走亲访友）："
                       prop="sf36910">
      <a-radio-group v-model="sf36Form.sf36910">
        <a-radio :value="1">
          所有的时间
        </a-radio>
        <a-radio :value="2">
          大部分时间
        </a-radio>
        <a-radio :value="3">
          比较多时间
        </a-radio>
        <a-radio :value="4">
          一部分时间
        </a-radio>
        <a-radio :value="5">
          小部分时间
        </a-radio>
        <a-radio :value="6">
          没有这种感觉
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <h3>总体健康情况</h3>
    <p>10、请看下列每一条问题，哪一种答案最符合您的情况？</p>
    <a-form-model-item label="（1）我好象比别人容易生病："
                       prop="sf36101">
      <a-radio-group v-model="sf36Form.sf36101">
        <a-radio :value="1">
          绝对正确
        </a-radio>
        <a-radio :value="2">
          大部分正确
        </a-radio>
        <a-radio :value="3">
          不能肯定
        </a-radio>
        <a-radio :value="4">
          大部分错误
        </a-radio>
        <a-radio :value="5">
          绝对错误
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（2）我跟周围人一样健康："
                       prop="sf36102">
      <a-radio-group v-model="sf36Form.sf36102">
        <a-radio :value="1">
          绝对正确
        </a-radio>
        <a-radio :value="2">
          大部分正确
        </a-radio>
        <a-radio :value="3">
          不能肯定
        </a-radio>
        <a-radio :value="4">
          大部分错误
        </a-radio>
        <a-radio :value="5">
          绝对错误
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（3）我认为我的健康状况在变坏："
                       prop="sf36103">
      <a-radio-group v-model="sf36Form.sf36103">
        <a-radio :value="1">
          绝对正确
        </a-radio>
        <a-radio :value="2">
          大部分正确
        </a-radio>
        <a-radio :value="3">
          不能肯定
        </a-radio>
        <a-radio :value="4">
          大部分错误
        </a-radio>
        <a-radio :value="5">
          绝对错误
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item label="（4）我的健康状况非常好："
                       prop="sf36104">
      <a-radio-group v-model="sf36Form.sf36104">
        <a-radio :value="1">
          绝对正确
        </a-radio>
        <a-radio :value="2">
          大部分正确
        </a-radio>
        <a-radio :value="3">
          不能肯定
        </a-radio>
        <a-radio :value="4">
          大部分错误
        </a-radio>
        <a-radio :value="5">
          绝对错误
        </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <div class="footer-btn-box">
      <a-button type="primary"
                @click="confirmData">
        保存
      </a-button>
    </div>
  </a-form-model>
</template>
<script>
import {
  saveSf36Info,
  getSf36Info
} from '@/api/mtms'

export default {
  name: 'Sf36Questionnaire',
  props: [ 'patientId', 'assessmentId' ],
  data () {
    return {
      layout: 'vertical',
      sf36Form: {
        'assessmentId': this.assessmentId,
        'patId': this.patientId,
        'sf361': '',
        'sf36101': '',
        'sf36102': '',
        'sf36103': '',
        'sf36104': '',
        'sf362': '',
        'sf3631': '',
        'sf36310': '',
        'sf3632': '',
        'sf3633': '',
        'sf3634': '',
        'sf3635': '',
        'sf3636': '',
        'sf3637': '',
        'sf3638': '',
        'sf3639': '',
        'sf3641': '',
        'sf3642': '',
        'sf3643': '',
        'sf3644': '',
        'sf3651': '',
        'sf3652': '',
        'sf3653': '',
        'sf366': '',
        'sf367': '',
        'sf368': '',
        'sf3691': '',
        'sf36910': '',
        'sf3692': '',
        'sf3693': '',
        'sf3694': '',
        'sf3695': '',
        'sf3696': '',
        'sf3697': '',
        'sf3698': '',
        'sf3699': ''
      }
    }
  },
  mounted () {
    this.getSf36Info()
  },
  methods: {
    getSf36Info () {
      getSf36Info({
        assessmentId: this.assessmentId,
        patientId: this.patientId
      }).then(res => {
        let { data } = res
        if (data) {
          this.sf36Form = data
        }
      })
    },
    confirmData () {
      console.log('保存！')
      saveSf36Info({ ...this.sf36Form }).then(res => {
        if (res.code === 200) {
          this.$message.success('保存成功')
        } else {
          this.$message.error('系统错误，获取患者信息失败，请稍后再试')
        }
      })
    }
  }
}
</script>
<style scoped>
</style>

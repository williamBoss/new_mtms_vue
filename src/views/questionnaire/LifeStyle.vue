<template>
  <div>
    <div class="lifeStyle-page">
      <a-collapse>
        <a-collapse-panel key="1"
                          header="生活方式">
          <div class="line-div flex">
            <div><span>身高: </span><span>{{ height }}</span></div>
            <div><span>体重: </span><span>{{ weight }}</span></div>
            <div><span>BMI: </span><span>{{ bmi }}</span></div>
          </div>
          <a-form-model-item class="user-set">
            <div class="title">
              过去一年的体重变化
            </div>
            <div class="content-box">
              <a-radio-group v-model="form.weightChangeType">
                <a-radio :value="2">
                  <div class="flex">
                    <div>减少</div>
                    <a-input-number v-if="form.weightChangeType===2"
                                    v-model="form.weightChangeValue"
                                    class="widget-input"
                                    :disabled="form.weightChangeType===1"
                                    :min="0" />
                    <div class="unit"
                         v-if="form.weightChangeType===2">kg
                    </div>
                  </div>
                </a-radio>
                <a-radio :value="1">
                  <div class="flex">
                    <span>增加</span>
                    <a-input-number v-if="form.weightChangeType===1"
                                    v-model="form.weightChangeValue"
                                    class="widget-input"
                                    :disabled="form.weightChangeType===2"
                                    :min="0" />
                    <span class="unit"
                          v-if="form.weightChangeType===1">kg</span>
                  </div>
                </a-radio>
              </a-radio-group>
            </div>
          </a-form-model-item>
        </a-collapse-panel>
        <!-- 2 -->
        <a-collapse-panel key="2"
                          header="饮食"
                          :disabled="false">
          <a-form-model-item class="user-set">
            <div class="title">您每日的主食量约是：</div>
            <div class="content-box">
              <div class="flex">
                <a-input-number v-model="form.dailyBasicFoodAmount"
                                :min="0" />
                <span class="unit">两</span>
              </div>
            </div>
          </a-form-model-item>
          <div class="flex">
            <div class="title">摄盐量</div>
            <a-radio-group v-model="form.dailySaltAmount">
              <a-radio :value="1">
                少
              </a-radio>
              <a-radio :value="2">
                中
              </a-radio>
              <a-radio :value="3">
                多
              </a-radio>
            </a-radio-group>
          </div>
          <div class="flex">
            <div class="title">吸烟</div>
            <a-radio-group v-model="form.isSmorker">
              <a-radio :value="1">
                是
              </a-radio>
              <a-radio :value="2">
                否
              </a-radio>
              <a-radio :value="3">
                已戒烟
              </a-radio>
            </a-radio-group>
          </div>
          <div class="flex"
               v-if="form.isSmorker === 1">
            <div class="title">吸烟量</div>
            <a-input-number v-model="form.smokingNum"
                            :min="0" />
            <span class="unit">支/天</span>
          </div>
          <div class="flex"
               v-if="form.isSmorker === 1">
            <div class="title">吸烟年限</div>
            <a-input-number v-model="form.smokingYear"
                            :min="0" />
            <span class="unit">年</span>
          </div>
          <div class="flex"
               v-if="form.isSmorker === 3">
            <div class="title">戒烟时间</div>
            <a-input-number v-model="form.quitSmokingTime"
                            :min="0" />
            <span class="unit">年</span>
          </div>
          <div class="flex">
            <div class="title">饮酒</div>
            <a-radio-group v-model="form.isDrinking">
              <a-radio :value="1">
                是
              </a-radio>
              <a-radio :value="2">
                否
              </a-radio>
            </a-radio-group>
          </div>
          <div class="flex"
               v-if="form.isDrinking === 1">
            <div class="title">饮酒量</div>
            <a-input-number v-model="form.drinkingNum"
                            :min="0" />
            <span class="unit">两/天</span>
          </div>
          <div class="flex"
               v-if="form.isDrinking === 1">
            <div class="title">饮酒年限</div>
            <a-input-number v-model="form.drinkingYear"
                            :min="0" />
            <span class="unit">年</span>
          </div>
          <div class="flex">
            <div class="title">油脂</div>
            <a-radio-group v-model="form.dailyFatAmount">
              <a-radio :value="1">
                少
              </a-radio>
              <a-radio :value="2">
                中
              </a-radio>
              <a-radio :value="3">
                多
              </a-radio>
            </a-radio-group>
          </div>
          <div class="flex">
            <div class="title">蔬菜水果</div>
            <a-radio-group v-model="form.dailyVegetableFruitAmount">
              <a-radio :value="1"> 少</a-radio>
              <a-radio :value="2"> 中</a-radio>
              <a-radio :value="3"> 多</a-radio>
            </a-radio-group>
          </div>
        </a-collapse-panel>
        <!-- 3 -->
        <a-collapse-panel key="3"
                          header="运动">
          <div class="flex">
            <div class="question">
              您通常的运动项目是？
            </div>
            <div class="input-div flex">
              <div class="input-item">
                <a-checkbox-group v-model="form.usualSports">
                  <a-checkbox value="跑步">
                    跑步
                  </a-checkbox>
                  <a-checkbox value="走路">
                    走路
                  </a-checkbox>
                  <a-checkbox value="跳舞">
                    跳舞
                  </a-checkbox>
                  <a-checkbox value="骑车">
                    骑车
                  </a-checkbox>
                  <a-checkbox value="爬山">
                    爬山
                  </a-checkbox>

                </a-checkbox-group>
                <div class="sport-div">
                  <div class=" input-div flex">
                    <div>其他</div>
                    <div class="input-item">
                      <a-input v-model="form.otherAction" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="flex">
            <div class="question">
              每次的运动时间大约有？
            </div>
            <div class="input-div flex">
              <div class="input-item">
                <a-input-number v-model="form.eachExerciseTime"
                                :min="0" />
              </div>
              <div class="unit">分钟</div>
            </div>
          </div>
          <div class="flex">
            <div class="question">
              每周的运动频率是？
            </div>
            <div class="input-div flex">
              <div class="input-item">
                <a-input-number v-model="form.weeklyExerciseFrequency"
                                :min="0" />
              </div>
              <div class="unit">次/周</div>
            </div>
          </div>
          <div class="flex">
            <div class="question">
              每周的运动时间是：
            </div>
            <div class="input-div flex">
              <div class="input-item">
                <a-input-number v-model="form.weeklyExerciseTime"
                                :min="0" />
              </div>
              <div class="unit">小时</div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 4 -->
        <a-collapse-panel key="4"
                          header="睡眠跌倒">
          <div class="flex">
            <div class="question">
              您有睡眠障碍吗？
            </div>
            <div class="input-div flex">
              <a-radio-group v-model="form.isSleepDisorder">
                <a-radio value="1">没有</a-radio>
                <a-radio value="2">入睡困难</a-radio>
                <a-radio value="3">早醒</a-radio>
                <a-radio value="4">多梦</a-radio>
              </a-radio-group>
            </div>
          </div>
          <div class="flex">
            <div class="question">
              您睡眠障碍发生的频率是？
            </div>
            <div class="input-div flex">
              <div class="input-item">
                <a-input-number v-model="form.sleepDisorderAmount"
                                :min="0" />
              </div>
              <div class="unit">次/周</div>
            </div>
          </div>
          <div class="flex">
            <div class="question">
              您有过跌倒吗？
            </div>
            <div class="input-div flex">
              <div class="input-item">
                <a-radio-group v-model="form.isFall">
                  <a-radio :value="0"> 否</a-radio>
                  <a-radio :value="1"> 是</a-radio>
                </a-radio-group>

              </div>
            </div>
          </div>
          <div class="flex">
            <div class="question">
              跌倒原因是什么？
            </div>
            <div class="input-div flex">
              <div class="input-item">
                <a-input v-model="form.fallReason"></a-input>
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 5 -->
        <a-collapse-panel key="5"
                          header="费用">
          <div class="expense-table">
            <div class="table-title">就诊前</div>
            <div class="flex">
              <div>每月医疗总花费(元)</div>
              <div>
                <a-input-number v-model="form.beforeTreatmentMonthlyTotal"
                                :min="0" />
              </div>
              <div>每月药费(元)</div>
              <div>
                <a-input-number v-model="form.beforeTreatmentMonthlyMedicalExpenses"
                                :min="0" />
              </div>
            </div>
            <div class="table-title">就诊3个月后</div>
            <div class="flex">
              <div>每月医疗总花费(元)</div>
              <div>
                <a-input-number v-model="form.afterThreeMonthsTreatmentMonthlyTotal"
                                :min="0" />
              </div>
              <div>每月药费(元)</div>
              <div>
                <a-input-number v-model="form.afterThreeMonthsTreatmentMonthlyMedicalExpenses"
                                :min="0" />
              </div>
            </div>
            <div class="table-title">就诊6个月后</div>
            <div class="flex">
              <div>每月医疗总花费(元)</div>
              <div>
                <a-input-number v-model="form.afterSixMonthsTreatmentMonthlyTotal"
                                :min="0" />
              </div>
              <div>每月药费(元)</div>
              <div>
                <a-input-number v-model="form.afterSixMonthsTreatmentMonthlyMedicalExpenses"
                                :min="0" />
              </div>
            </div>
            <div class="table-title">就诊12个月后</div>
            <div class="flex">
              <div>每月医疗总花费(元)</div>
              <div>
                <a-input-number v-model="form.afterTwelveMonthsTreatmentMonthlyTotal"
                                :min="0" />
              </div>
              <div>每月药费(元)</div>
              <div>
                <a-input-number v-model="form.afterTwelveMonthsTreatmentMonthlyMedicalExpenses"
                                :min="0" />
              </div>
            </div>
            <div class="flex" style="border-top: 1px solid #000000">
              <div>备注</div>
              <div style="width: 70%">
                <a-input v-model="form.treatmentTotalRemark" />
              </div>
            </div>
          </div>
        </a-collapse-panel>
        <!-- 6 -->
        <a-collapse-panel key="6"
                          header="总结">
          <a-textarea v-model="form.lifestyleSummary"></a-textarea>
        </a-collapse-panel>
      </a-collapse>
      <div class="footer-btn-box">
        <a-button type="primary"
                  :disabled="!patientId"
                  @click="confirmData">
          保存
        </a-button>
      </div>
    </div>
  </div>

</template>

<script>
import {
  saveLifestyle,
  getPatientInfoById
} from '@/api/mtms'

export default {
  name: 'LifeStyle',
  props: {
    patientId: {
      type: Number,
      default: null
    },
    assessmentId: {}
  },
  data () {
    return {
      height: '',
      weight: '',
      bmi: '',
      otherAction: '',
      form: {
        dailyBasicFoodAmount: '',
        dailySaltAmount: '',
        dailyFatAmount: '',
        dailyVegetableFruitAmount: '',
        isSmorker: '',
        smokingNum: '',
        smokingYear: '',
        quitSmokingTime: '',
        isDrinking: '',
        drinkingNum: '',
        drinkingYear: '',
        weightChangeValue: '',
        weightChangeType: '',
        weeklyExerciseFrequency: '',
        weeklyExerciseTime: '',
        eachExerciseTime: '',
        isSleepDisorder: '',
        sleepDisorderAmount: '',
        isFall: '',
        fallReason: '',
        beforeTreatmentMonthlyTotal: '',
        beforeTreatmentMonthlyMedicalExpenses: '',
        afterThreeMonthsTreatmentMonthlyTotal: '',
        afterThreeMonthsTreatmentMonthlyMedicalExpenses: '',
        afterSixMonthsTreatmentMonthlyTotal: '',
        afterSixMonthsTreatmentMonthlyMedicalExpenses: '',
        afterTwelveMonthsTreatmentMonthlyTotal: '',
        afterTwelveMonthsTreatmentMonthlyMedicalExpenses: '',
        lifestyleSummary: ''
      }
    }
  },
  mounted () {
    console.log('LifeStyle Page')
    this.getPatientInfoById()
  },
  methods: {
    getPatientInfoById () {
      if (!this.patientId) return
      getPatientInfoById(this.patientId).then(res => {
        console.log(res)
        if (res.code === 200) {
          const { data } = res
          this.height = data.height
          this.weight = data.weight
          this.bmi = data.bmi
        }
      })
    },
    calWeeklyExerciseTime (eachExerciseTime, weeklyExerciseFrequency) {
      if (eachExerciseTime && weeklyExerciseFrequency) {
        this.form.weeklyExerciseTime = Number(
          (Number(eachExerciseTime) * Number(weeklyExerciseFrequency) / 60).toFixed(2))
      } else {
        this.form.weeklyExerciseTime = 0
      }
    },
    async confirmData () {
      let _usualSports = ''
      if (this.form.otherAction) {
        // const _arr = JSON.parse(JSON.stringify(this.form.usualSports)).split(',').push(this.otherAction)
        _usualSports = [ this.form.usualSports.join(','), this.form.otherAction ].join(',')
        // _usualSports = _arr.join(',')
      } else if (this.form.usualSports) {
        _usualSports = this.form.usualSports.join(',')
      }
      saveLifestyle(
        { ...this.form, usualSports: _usualSports, patientId: this.patientId, assessmentId: this.assessmentId }).
        then(res => {
          const { success } = res
          if (success) {
            this.$message.success('生活方式保存成功')
          } else {
            this.$message.error('系统错误，请稍后再试')
          }
        }).
        catch(() => {
          this.$message.error('系统错误，请稍后再试')
        })
    }
  },
  computed: {
    weeklyExerciseTime: function () {
      const { eachExerciseTime, weeklyExerciseFrequency } = this.form
      return {
        eachExerciseTime,
        weeklyExerciseFrequency
      }
    }
  },
  watch: {
    patientId: function (v) {
      if (v) {
        this.getPatientInfoById()
      }
    },
    weeklyExerciseTime: function (val) {
      console.log(val)
      this.calWeeklyExerciseTime(val.eachExerciseTime, val.weeklyExerciseFrequency)
    }
  }
}
</script>

<style lang="less">
.lifeStyle-page {
  .line-div {
    > div {
      margin-right: 10px;
    }
  }

  // .line-div {
  //   display: flex;
  //   .ant-form-item {
  //     // display: inline-block;
  //     display: flex;
  //     .ant-form-item-control {
  //       width: 100px;
  //     }
  //   }
  // }
  .ant-radio-wrapper > span:last-child {
    display: inline-block;
  }

  .widget-input {
  }

  .sport-div {
    display: inline-block;
  }

  .expense-table {
    width: 600px;
    border: 1px solid #666;

    > div {
      height: 30px;
      line-height: 30px;
    }

    .table-title {
      text-align: center;
      color: #fff;
      background: #ccc;
    }

    .flex {
      > div {
        overflow: hidden;
      }

      > div:not(:last-child) {
        border-right: 1px solid #666;
      }

      > div:nth-child(2n) {
        width: 20%;
      }

      > div:nth-child(2n-1) {
        padding: 0 10px;
        width: 30%;
      }

      .ant-input-number {
        width: 100%;

        input {
          border: none;
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <a-collapse>
      <!-- 血压 -->
      <a-collapse-panel key="1"
                        header="血压">
        <div class="table flex">
          <div class="column">
            <div class="title">血压</div>
            <div>早</div>
            <div>中</div>
            <div>晚</div>
          </div>
          <div class="column">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 心率 -->
      <a-collapse-panel key="2"
                        header="心率">
        <div class="table flex">
          <div class="column">
            <div class="title">心率</div>
            <div>早</div>
            <div>中</div>
            <div>晚</div>
          </div>
          <div class="column">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 血脂记录 -->
      <a-collapse-panel key="3"
                        header="血脂记录">
        <div class="table flex">
          <div class="column middle">
            <div class="title">血脂记录</div>
            <div>总胆固醇TC(mmol/L)</div>
            <div>低密度脂蛋白LDL-C(mmol/L)</div>
            <div>甘油三酯TG(mmol/L)</div>
            <div>脂蛋白LP-A</div>
            <div>高密度脂蛋白HDL-C（mmol/L）</div>
            <div>低密度脂蛋白胆固醇</div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 血糖记录 -->
      <a-collapse-panel key="4"
                        header="血糖记录">
        <div class="table flex">
          <div class="column middle">
            <div class="title">血糖记录</div>
            <div>空腹血糖(mmol/L)</div>
            <div>糖化血红蛋白(%)</div>
            <div>餐后2小时血糖（mmol/L）</div>
            <div>尿微量白蛋白（mg/L）</div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 同型半胱氨酸 -->
      <a-collapse-panel key="5"
                        header="同型半胱氨酸">
        <div class="table flex">
          <div class="column middle">
            <div class="title">同型半胱氨酸</div>
            <div>同型半胱氨酸（umol/L）</div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 血尿酸 -->
      <a-collapse-panel key="6"
                        header="血尿酸">
        <div class="table flex">
          <div class="column middle">
            <div class="title">血尿酸</div>
            <div>血尿酸（mmol/L）</div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 肝功能 -->
      <a-collapse-panel key="6"
                        header="肝功能">
        <div class="table flex">
          <div class="column middle">
            <div class="title">肝功能</div>
            <div>谷丙转氨酶 ALT（U/L）</div>
            <div>谷草转氨酶 AST（U/L）</div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 肾功能 -->
      <a-collapse-panel key="7"
                        header="肾功能">
        <div class="table flex">
          <div class="column middle">
            <div class="title">肾功能</div>
            <div>血肌酐Cr（umol/L）</div>
            <div>24h尿蛋白（mg）</div>
            <div>肾小球滤过率（GFR）</div>
            <div>肌酐清除率（ml/min）</div>
            <div>肌酸激酶CK</div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 电解质 -->
      <a-collapse-panel key="8"
                        header="电解质">
        <div class="table flex">
          <div class="column middle">
            <div class="title">电解质</div>
            <div>钙</div>
            <div>磷</div>
            <div>25-OH-维生素D（25-OH-Vitd）</div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
      <!-- 其他 -->
      <a-collapse-panel key="9"
                        header="其他">
        <div class="table flex">
          <div class="column middle">
            <div class="title">
              <a-input placeholder="名称" />
            </div>
            <div>
              <a-input placeholder="内容" />
            </div>
          </div>
          <div class="column middle">
            <div class="">
              <a-input placeholder="日期" />
            </div>
            <div>
              <a-input />
            </div>
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: 'InspectionAndInspection'
}
</script>

<style scoped>
.flex {
  display: flex;
}
.table .column {
  width: 100px;
}
.table > .column:last-child > div {
  border-right: 1px solid #eee;
}
.column > div {
  border: 1px solid #eee;
  height: 30px;
  line-height: 20px;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: none;
  border-right: none;
}
.column.middle {
  width: 140px;
}
.column.middle > div {
  height: 50px;
  line-height: 16px;
}
.column > div:last-child {
  border-bottom: 1px solid #eee;
}
.column > div input {
  height: 20px;
  border: none;
}
.column .title {
  background-color: #00b050;
  color: #fff;
}
</style>

<template>
  <el-container>



      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-card>
              <div>今日未支付订单</div>
              <div>￥1234</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div>今日支付订单</div>
              <div>￥210</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div>本月已支付订单</div>
              <div>￥1234</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card>
              <div>本月未支付订单</div>
              <div>￥210</div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="charts-row">
          <el-col :span="12">
            <el-card>
              <div class="chart-container" id="line-chart"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card>
              <div class="chart-container" id="bar-chart"></div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card>
              <div class="chart-container" id="pie-chart"></div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

</template>

<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts'
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option1 = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
var option2 = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
var option3 = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};
var option4 = {
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};


const initCharts = () => {
  initLineChart()
  initBarChart()
  initPieChart()
}

const initLineChart = () => {
  const chart = echarts.init(document.getElementById('line-chart'))
  const option = {
    // 配置线性图表的选项
  }
  chart.setOption(option)
}

const initBarChart = () => {
  const chart = echarts.init(document.getElementById('bar-chart'))
  const option = {
    // 配置柱状图表的选项
  }
  chart.setOption(option)
}

const initPieChart = () => {
  const chart = echarts.init(document.getElementById('pie-chart'))
  const option = {
    // 配置饼状图表的选项
  }
  chart.setOption(option)
}

onMounted(() => {
  initCharts()
})
</script>

<style scoped>

.el-container {
  height: 88vh;
}
.user-info {
  text-align: center;
  margin-top: 20px;
}
.charts-row {
  margin-top: 20px;
  margin-bottom: 20px;
}
.chart-container {

  height: 250px;
}
</style>

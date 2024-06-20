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
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'line',
      symbol: 'triangle',
      symbolSize: 20,
      lineStyle: {
        color: '#5470C6',
        width: 4,
        type: 'dashed'
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
};
var option2 = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
};
var option3 = {
  title: {
    text: 'Funnel'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    feature: {
      dataView: { readOnly: false },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
  },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 60,
      bottom: 60,
      width: '80%',
      min: 0,
      max: 100,
      minSize: '0%',
      maxSize: '100%',
      sort: 'descending',
      gap: 2,
      label: {
        show: true,
        position: 'inside'
      },
      labelLine: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      itemStyle: {
        borderColor: '#fff',
        borderWidth: 1
      },
      emphasis: {
        label: {
          fontSize: 20
        }
      },
      data: [
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' },
        { value: 80, name: 'Click' },
        { value: 100, name: 'Show' }
      ]
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

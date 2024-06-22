<template>
  <el-container>
    
      <el-main >
        <el-row justify="space-between">
          <el-col :span="6">
            <el-card :style="{ backgroundImage: 'url(/img/a.png)',backgroundSize:'cover',color:'white' }">
              <div>已支付总订单</div>
              <div>￥{{paidPrice}}</div>
            </el-card>
          </el-col>
          <el-col :span="5">
            <el-card :style="{ backgroundImage: 'url(/img/b.png)',backgroundSize:'cover',color:'white' }">
              <div>未支付总订单</div>
              <div>￥{{unpaidPrice}}</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :style="{ backgroundImage: 'url(/img/c.png)',backgroundSize:'cover',color:'white' }">
              <div>已取消总订单</div>
              <div>￥{{refundPrice}}</div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :style="{ backgroundImage: 'url(/img/d.png)',backgroundSize:'cover',color:'white' }"> 
              <div>交易总金额</div>
              <div>￥{{totalPrice}}</div>
            </el-card>
          </el-col>
        </el-row>
        <div class="charts-row" style="display:flex;justify-content: space-between; ">
          
            <el-card>
              <div class="chart-container" id="line-chart"></div>
            </el-card>
         
         
            <el-card>
              <div class="chart-container" id="bar-chart"></div>
            </el-card>
         
          </div>
          <div class="" style="display:flex;justify-content: space-between; ">
          
          <el-card>
            <div class="chart-container" id="pie-chart"></div>
          </el-card>
       
       
          <el-card>
            <div class="chart-container" id="both-chart"></div>
          </el-card>
       
        </div>

      </el-main>
    </el-container>

</template>

<script setup>
import { onMounted , ref } from 'vue'
import * as echarts from 'echarts'
import axios from "axios";
import {useUserStore} from "@/stores/index"
import {ElMessage} from "element-plus";

const userStore = useUserStore();
const token = userStore.token
console.log('张培灵',token)
const TotalOrders = ref([]);
const paidPrice = ref(0);//已完成
const unpaidPrice = ref(0);//已取消
const refundPrice = ref(0);//已退款
const totalPrice = ref(0);//交易总订单

// 定义获取订单数据的函数
/*const getOrdersByStatus = async () => {
  try {
    const response = await axios.get('http://localhost:8080/order/getAllOrder', {
      headers: {
        Authorization: `${token}`,
      },
    }).then(response => {
      console.log('订单数据',response.data.data)
      return response.data.data;
    }).catch(error => {
      console.error(error);
      const message = error.response ? error.response.data.message: '错误';
      ElMessage({
        message: message,
        type: 'error',
        duration: 30000
      });
    });
  } catch (error) {
    console.error(`Error fetching orders with status ${status}:`, error);
    return [];
  }
};*/
/* 获取所有类型的订单 */
const getOrders = async () => {
  try {
    const response = await axios.get('http://localhost:8080/order/getAllOrder', {
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log('订单数据',response.data)
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching orders with status:`, error);
    return [];
  }
};
/*const getOrdersByStatus = async (status) => {
  try {
    const response = await axios.get('http://localhost:8080/order/getOrderByStatus', {
      params: {
        page: 1,
        size: 10,
        status: status,
      },
      headers: {
        Authorization: `${token}`,
      },
    });
    console.log('订单状态数据',response.data)
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching orders with status ${status}:`, error);
    return [];
  }
};*/
// 获取金额数据函数
const fetchAndDisplayOrders = async () => {
  TotalOrders.value = await getOrders();
  // 分别获取各个分类的 totalPrice
  const totalPrices = TotalOrders.value.map(order => order.totalPrice);
  paidPrice.value = totalPrices[0];
  unpaidPrice.value = totalPrices[1];
  refundPrice.value = totalPrices[2];
  totalPrice.value = paidPrice.value + unpaidPrice.value + refundPrice.value;

};
// 近五日未支付订单数量
const fetchUnpaidOrders = async () => {
  const Orders = await getOrders();
  /*// 过滤出状态为'已取消'
  const cancelledOrders = Orders.value.filter(order => order.caters === '已取消');
  // 提取所有符合条件的allOrderVOS数组
  const result = cancelledOrders.map(order => order.allOrderVOS).flat();
  console.log("已取消订单：",result)*/
  // 获取当前日期并计算五日前的日期
  const now = new Date();
  const fiveDaysAgo = new Date(now);
  fiveDaysAgo.setDate(now.getDate() - 5);
  //存储每一天的订单数量
  const dailyOrderCounts = {};
  // 初始化最近五天的日期和订单数量
  for (let i = 0; i <= 5; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const dateString = date.toISOString().split('T')[0];
    dailyOrderCounts[dateString] = 0;
  }
  // 过滤出近五日的未支付订单
  const recentUnpaidOrders = Orders
      .filter(order => order.caters === '已取消')
      .flatMap(order => order.allOrderVOS)
      .filter(order => {
        const orderDate = new Date(order.date);
        return orderDate >= fiveDaysAgo && orderDate <= now;
      });
  console.log('过滤的数据',recentUnpaidOrders);

  // 统计每一天的订单数量
  recentUnpaidOrders.forEach(order => {
    const dateString = order.date.split('T')[0];
    if (dailyOrderCounts.hasOwnProperty(dateString)) {
      dailyOrderCounts[dateString]++;
    }
  });
  // 转换为指定的数据格式
  const result = Object.entries(dailyOrderCounts).map(([date, count]) => [date, count]);
  console.log('近五日每天的订单数量:', result);
  return result;
};
/* 更新option4的数据 */
const fetchUnpaidOrdersAndUpdateChart = async (chart) => {
  const result = await fetchUnpaidOrders();
  option4.series[0].data = result;

  // 更新图表数据
  chart.setOption(option4);
};

// 指定图表的配置项和数据
var option1 = {
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:"24%"
  },
 
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  title: {
    text: '用户每周支付订单数',
  
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
    top: 'bottom',
    show:false
  },
  title: {
    text: '用户每周各类订单占比'
  },

  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [20, 90],
      center: ['57%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: '已完成' },
        { value: 38, name: '已支付' },
        { value: 32, name: '未支付' },
        { value: 30, name: '已取消' },
        { value: 28, name: '已退款' },
      ]
    }
  ]
};
var option3 = {
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:"10%"
  },
  title: {
    text: '用户关注房源地区占比'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },

  legend: {
    data: ['大兴', '嘉定', '宝山', '浦东', '金水'],
    top:40,
    
  },
  series: [
    {
      name: 'Funnel',
      type: 'funnel',
      left: '10%',
      top: 90,
      bottom: 5,
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
        { value: 60, name: '大兴' },
        { value: 40, name: '嘉定' },
        { value: 20, name: '金水' },
        { value: 80, name: '宝山' },
        { value: 100, name: '浦东' }
      ]
    }
  ]
};

var option4 = {
  grid:{
    left:'10%',
    right:'10%',
    bottom:'10%',
    top:"19%"
  },
  xAxis: {
    type: 'category',
    boundaryGap: false
  },
  title:{
    text:'近5日未支付订单数量'
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%']
  },
  visualMap: {
    type: 'piecewise',
    show: false,
    dimension: 0,
    seriesIndex: 0,
    pieces: [
      {
        gt: 1,
        lt: 3,
        color: 'rgba(0, 0, 180, 0.4)'
      },
      {
        gt: 5,
        lt: 7,
        color: 'rgba(0, 0, 180, 0.4)'
      }
    ]
  },
  series: [
    {
      type: 'line',
      smooth: 0.6,

      symbol: 'none',
      lineStyle: {
        color: '#5470C6',
        width: 5
      },
      markLine: {
        symbol: ['none', 'none'],
        label: { show: false },
        data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
      },
      areaStyle: {},
      data: [] //初始化未空数组
    }
  ]
};




const initLineChart = () => {
  const chart = echarts.init(document.getElementById('line-chart'))
 
  chart.setOption(option1)
}

const initBarChart = () => {
  const chart = echarts.init(document.getElementById('bar-chart'))

  chart.setOption(option2)

}

const initBothChart = () => {
  const chart = echarts.init(document.getElementById('both-chart'))

  chart.setOption(option4)
  // 动态获取数据并更新图表
  fetchUnpaidOrdersAndUpdateChart(chart);
}

const initPieChart = () => {
  const chart = echarts.init(document.getElementById('pie-chart'))

  chart.setOption(option3)
}
const initCharts = () => {
  initLineChart()
  initBarChart()
  initPieChart()
  initBothChart()
}
onMounted(() => {
  initCharts()
  fetchAndDisplayOrders();
  fetchUnpaidOrders();
})
</script>

<style scoped>
*{
  padding: 0;
}
.el-container {
  height: 86vh;
  /*overflow: overlay;*/
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

  height: 207.3px;
  width: 550px;
}
</style>

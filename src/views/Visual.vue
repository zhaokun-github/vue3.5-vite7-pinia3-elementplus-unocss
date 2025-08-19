<!-- filepath: e:\cursor项目\vue-alien-signals-app\src\views\Visual.vue -->
<template>
  <div class="visual-container">
    <div class="left">
      <v-chart :option="lineOption" autoresize class="chart"></v-chart>
      <v-chart :option="barOption" autoresize class="chart"></v-chart>
      <v-chart :option="pieOption" autoresize class="chart"></v-chart>
    </div>
    <div class="center">
      <div class="map">
        <v-chart :option="mapOption" autoresize class="chart"></v-chart>
      </div>
      <div class="center-bar">
        <v-chart :option="centerBarOption" autoresize class="chart"></v-chart>
      </div>
    </div>
    <div class="right">
      <v-chart :option="radarOption" autoresize class="chart"></v-chart>
      <v-chart :option="funnelOption" autoresize class="chart"></v-chart>
      <v-chart :option="gaugeOption" autoresize class="chart"></v-chart>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { use } from "echarts/core";
import VChart from "vue-echarts";
import { CanvasRenderer } from "echarts/renderers";
import {
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  FunnelChart,
  GaugeChart,
  MapChart,
} from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
} from "echarts/components";

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  FunnelChart,
  GaugeChart,
  MapChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  VisualMapComponent,
]);

// 这里省略具体 option 配置，建议用简单模拟数据
const lineOption = ref({
  title: { text: "折线图" },
  xAxis: { data: ["A", "B", "C"] },
  yAxis: {},
  series: [{ type: "line", data: [5, 20, 36] }],
});
const barOption = ref({
  title: { text: "柱状图" },
  xAxis: { data: ["A", "B", "C"] },
  yAxis: {},
  series: [{ type: "bar", data: [10, 52, 200] }],
});
const pieOption = ref({
  title: { text: "饼图" },
  series: [
    {
      type: "pie",
      data: [
        { value: 40, name: "A" },
        { value: 60, name: "B" },
      ],
    },
  ],
});
const radarOption = ref({
  title: { text: "雷达图" },
  radar: { indicator: [{ name: "A" }, { name: "B" }, { name: "C" }] },
  series: [{ type: "radar", data: [{ value: [120, 118, 130], name: "得分" }] }],
});
const funnelOption = ref({
  title: { text: "漏斗图" },
  series: [
    {
      type: "funnel",
      data: [
        { value: 60, name: "访问" },
        { value: 40, name: "咨询" },
        { value: 20, name: "订单" },
      ],
    },
  ],
});
const gaugeOption = ref({
  title: { text: "仪表盘" },
  series: [
    {
      type: "gauge",
      progress: { show: true },
      detail: { valueAnimation: true, formatter: "{value}%" },
      data: [{ value: 70, name: "完成率" }],
    },
  ],
});
// 地图需要引入中国地图JSON，这里用空option占位
const mapOption = ref({
  title: { text: "中国地图" },
  series: [{ type: "map", map: "china" }],
});
const centerBarOption = ref({
  title: { text: "中间柱状图" },
  xAxis: { data: ["X", "Y", "Z"] },
  yAxis: {},
  series: [{ type: "bar", data: [30, 80, 45] }],
});
</script>

<style src="./Visual.css"></style>
<template>
  <LineChart
    height="150"
    type="line"
    :options="options"
    :series="series"
  ></LineChart>
</template>

<script>
import LineChart from "vue3-apexcharts";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ApexLine",
  components: {
    LineChart,
  },
  data() {
    return {
      options: {
        title: {
          text: "LineChart",
          align: "left",
        },
        chart: {
          id: "apex-line",
        },
        colors: ["blue", "green"],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [wilayah, admin],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 4],
        },
      ],
    };
  },
});
</script>

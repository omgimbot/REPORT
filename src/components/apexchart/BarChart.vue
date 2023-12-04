<template>
  <BarChart
    height="300"
    width="350"
    type="bar"
    :options="options"
    :series="series"
  ></BarChart>
</template>
<script>
import BarChart from "vue3-apexcharts";

export default {
  name: "ApexBar",
  components: {
    BarChart,
  },
  data() {
    return {
      options: {
        title: {
          text: "Data Instansi",
          align: "left",
          style: {
            color: "#322828",
          },
        },
        chart: {
          id: "apex-bar",
        },
        colors: ["#065036", "#26a69a", "#26a69a"],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
};
</script>

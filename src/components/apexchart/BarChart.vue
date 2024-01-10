<template>
  <BarChart
    height="300"
    width="320"
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
            color: "#fffff2",
          },
        },
        chart: {
          id: "apex-bar",
        },
        colors: ["#065036", "#065036", "#065036"],
        xaxis: {
          categories: [1991, 1992, 1993],
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
          data: [30, 40, 45],
        },
      ],
    };
  },
};
</script>

<template>
  <DonutChart  height="300" type="donut" :options="options" :series="series"></DonutChart>
</template>
<script>
import DonutChart from 'vue3-apexcharts'

export default {
  name: 'ApexDonut',
  components: {
    DonutChart
  },
  data() {
    return {
      options: {
        title: {
          text: 'ApexDonut',
          align: 'left'
        },
        colors: ['blue', 'brown', 'red'],
        markers: {
          size: 4,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [30, 40, 45, 50, 68, 10]
    }
  }
}
</script>
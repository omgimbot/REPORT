<template>
  <Chart height="300" width="350" type="line" :data="data"></Chart>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "ApexDonut",
  components: {
    Chart,
  },
  data() {
    return {
      mounted() {
        const labels = Utils.months({ count: 7 });
        const data = {
          labels: labels,
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        };
      },
    };
  },
};
</script>

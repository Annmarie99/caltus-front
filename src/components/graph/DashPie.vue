<template>
  <div id="chart">
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: "DashPie",
  data() {
    return {
      series: [44, 55],
      chartOptions: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
                colors: "#546E7A",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      fill: {
        color: ["#ffffff"],
      },
    };
  },
};
</script>

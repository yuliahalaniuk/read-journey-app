export const horBarOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
      min: 0,
      max: 30,
      beginAtZero: false,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
};

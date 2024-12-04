export const horBarOptions = {
  responsive: true,
  maintainAspectRatio: false, // Allow resizing based on container height
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
      display: false, // Hide x-axis
    },
    y: {
      display: false, // Hide y-axis
      min: 0, // Minimum value for y-axis
      max: 30, // Maximum value for y-axis (can be adjusted as needed)
      beginAtZero: true, // Ensure the y-axis starts from 0
    },
  },
  elements: {
    line: {
      borderWidth: 2, // Line border width
    },
  },
};

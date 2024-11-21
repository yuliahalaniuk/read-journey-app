import React from "react";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { centerTextPlugin } from "./plugins/centerTextPlugin";

const options = {
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

const DiaryGraph = () => {
  Chart.unregister(centerTextPlugin);
  Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Filler);

  const data = {
    labels: [10, 15], // Dummy data points (x-axis)
    datasets: [
      {
        data: [10, 15], // Slanting graph (y-axis values) from 25 to 10 (similar to your SVG)
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null; // Wait until layout is calculated
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(48, 185, 77, 0.4)");
          gradient.addColorStop(1, "rgba(48, 185, 77, 0.2)");

          return gradient;
        },
        borderColor: "#30B94D",
        fill: true,
        tension: 0.3,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div style={{ height: "50px", width: "100px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default DiaryGraph;

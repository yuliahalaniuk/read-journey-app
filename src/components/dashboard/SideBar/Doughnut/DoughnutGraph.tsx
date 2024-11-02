import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const backgroundColorPlugin = {
  id: "backgroundColor",
  beforeDraw: (chart: any) => {
    const ctx = chart.ctx;
    ctx.save();
    ctx.fillStyle = "#1F1F1F"; // Default background color
    ctx.beginPath();
    ctx.arc(
      chart.chartArea.x + chart.chartArea.width / 2,
      chart.chartArea.y + chart.chartArea.height / 2,
      (chart.chartArea.width / 2) * 0.9, // Adjust radius as needed
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.restore();
  },
};

const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart: any) {
    const { ctx, width, height } = chart;
    ctx.restore();
    ctx.font = "bold 20px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";

    const totalRead = chart.config.data.datasets[0].data[0];
    const pageCount = chart.config.data.datasets[0].data[1];
    const perc = ((totalRead * 100) / pageCount).toFixed(0);

    const text = `${perc}%`;
    const textX = width / 2;
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

Chart.register(ArcElement);
Chart.register(backgroundColorPlugin);
Chart.register(centerTextPlugin);

const DoughnutGraph = ({ data }: { data?: any }) => {
  return (
    <Doughnut
      data={data}
      options={{
        responsive: false,
        cutout: "80%",
        elements: {
          arc: {
            borderWidth: 1,
            offset: 10,
          },
        },
        plugins: {
          filler: centerTextPlugin as any,
          // backgroundColor: backgroundColorPlugin as any,
        },
      }}
      height={"190px"}
      width={"190px"}
    />
  );
};

export default DoughnutGraph;

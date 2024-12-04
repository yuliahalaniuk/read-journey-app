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
import { horBarOptions } from "./data/horBarOptions";
import { FlexBox } from "../../atoms/FlexBox";

const DiaryGraph = ({ gData }: { gData: [number, number] }) => {
  Chart.unregister(centerTextPlugin);
  Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Filler);

  const data = {
    labels: gData,
    datasets: [
      {
        data: gData,
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
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
    <FlexBox $maxWidth={"60px"} $height={"50px"}>
      <Line data={data} options={horBarOptions} />
    </FlexBox>
  );
};

export default DiaryGraph;

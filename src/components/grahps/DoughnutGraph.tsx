import { ArcElement, Chart, ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { centerTextPlugin } from "./plugins/centerTextPlugin";

const DoughnutGraph = ({ data }: { data: ChartData<"doughnut"> }) => {
  Chart.register(ArcElement, centerTextPlugin);
  return (
    <Doughnut
      data={data}
      options={{
        responsive: false,
        cutout: "80%",
        elements: {
          arc: {
            borderWidth: 0,
            offset: 0,
          },
        },
        plugins: {
          filler: centerTextPlugin as any,
        },
      }}
      height={"190px"}
      width={"190px"}
    />
  );
};

export default DoughnutGraph;

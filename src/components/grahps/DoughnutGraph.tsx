import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { centerTextPlugin } from "./plugins/centerTextPlugin";

const DoughnutGraph = ({ data }: { data?: any }) => {
  Chart.register(ArcElement, centerTextPlugin);
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
        },
      }}
      height={"190px"}
      width={"190px"}
    />
  );
};

export default DoughnutGraph;

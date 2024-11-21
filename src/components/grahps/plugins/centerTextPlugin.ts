export const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart: any) {
    const { ctx, width, height } = chart;
    ctx.restore();
    ctx.font = "bold 20px sans-serif";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = "#ffffff";

    // const totalRead = chart.config.data.datasets[0].data[0];
    // const pageCount = chart.config.data.datasets[0].data[1];
    // const perc = ((totalRead * 100) / pageCount).toFixed(0);

    const text = `100%`;
    const textX = width / 2;
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

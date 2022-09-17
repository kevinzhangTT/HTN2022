import HeatMap from "react-heatmap-grid";




function HeatMapT() {
  const xLabels = new Array(4).fill(" ");
  const yLabels = new Array(3).fill(" ");
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
  );

  \

  return (
    <div>
      <HeatMap xLabels={xLabels} yLabels={yLabels} data={data}
        yLabelWidth={0} yLabelTextAlign="center" height={150} xLabelsVisibility={[false]} background="#C23A22"/>
    </div>
  );
}

export default HeatMapT;
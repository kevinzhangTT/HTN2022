import HeatMap from "react-heatmap-grid";
import React, { useState, useEffect } from 'react';



function HeatMapT() {
  const [testData, setTestData] = useState([[],[]]);
  const xLabels = new Array(4).fill(" ");
  const yLabels = new Array(2).fill(" ");

  useEffect(() => {
    fetch('http://localhost:3005/getData')
      .then((response) => response.json())
      .then((data) => setTestData(data.data));
  }, [setTestData]);


  return (
    <div>
      <HeatMap xLabels={xLabels} yLabels={yLabels} data={testData}
        yLabelWidth={0} yLabelTextAlign="center" height={150} xLabelsVisibility={[false]} background="#C23A22" />
    </div>
  );
}

export default HeatMapT;
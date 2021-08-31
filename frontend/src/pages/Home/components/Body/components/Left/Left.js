import React from "react";

import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, AreaSeries} from 'react-vis';

const Left = () => (
  <XYPlot width={300} height={300}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <AreaSeries
      className="area-series-example"
      curve="curveNatural"
      data={[{x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15}]}
    />
  </XYPlot>
);

export default Left;

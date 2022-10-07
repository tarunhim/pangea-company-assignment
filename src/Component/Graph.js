import React from "react";
import { Line } from "react-chartjs-2";

function Graph({ data, filteredData }) {
  let acv, month, tcv;
  if (filteredData.length === 0) {
    acv = data.map((el) => el.acv);
    month = data.map((el) => el.month);
    tcv = data.map((el) => el.tcv);
  } else {
    acv = filteredData.map((el) => el.acv);
    tcv = filteredData.map((el) => el.tcv);
    month = filteredData.map((el) => el.month);
  }

  console.log(acv, month);
  return (
    <div style={{height: "550px", width:"100%"}}>
      <h1>Graph</h1>
      <Line
        datasetIdKey="id"
        data={{
          labels: month,
          datasets: [
            {
              id: 1,
              label: "ACV",
              backgroundColor: "blue",
              borderColor: "blue",
              data: acv,
            },
            {
              id: 2,
              label: "Month",
              backgroundColor: "yellow",
              borderColor: "green",

              data: month,
            },
          ],
        }}
      />
    </div>
  );
}

export default Graph;

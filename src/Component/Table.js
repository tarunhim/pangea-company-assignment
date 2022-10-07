import React from "react";
import TableData from "./TableData";

function Table({ data, filteredData }) {
  console.log(data.length);

  return (
    <div className="tableContainer">
      <h1>Table</h1>
      {filteredData.length === 0 ? (
        <table>
          <thead>
            <tr>
              <th>SR NO</th>
              <th>Line of Busininess</th>
              <th>Revenue Type</th>
              <th>Product</th>
              <th>Posting Period</th>
              <th>ACV</th>
              <th>TCV</th>
              <th>Revenue</th>
            </tr>
          </thead>
          {data &&
            data.map((el) => (
              <TableData
                key={el.srno}
                srno={el.S_no}
                acv={el.acv}
                lob={el.line_of_business}
                product={el.product}
                revenue={el.revenue}
                rt={el.revenue_type}
                tcv={el.tcv}
                year={el.year}
                month={el.month}
              />
            ))}
        </table>
      ) : (
        <table>
          <thead>
            <tr>
              <th>SR NO</th>
              <th>Line of Busininess</th>
              <th>Revenue Type</th>
              <th>Product</th>
              <th>Posting Period</th>
              <th>ACV</th>
              <th>TCV</th>
              <th>Revenue</th>
            </tr>
          </thead>
          {filteredData &&
            filteredData.map((el) => (
              <TableData
                key={el.srno}
                srno={el.S_no}
                acv={el.acv}
                lob={el.line_of_business}
                product={el.product}
                revenue={el.revenue}
                rt={el.revenue_type}
                tcv={el.tcv}
                year={el.year}
                month={el.month}
              />
            ))}
        </table>
      )}
    </div>
  );
}

export default Table;

import React from "react";

function TableData({ srno, acv, lob, product, revenue, rt, tcv, year, month }) {
  return (
    <tbody key={srno}>
      <tr key={srno}>
        <td>{srno}</td>
        <td>{lob}</td>
        <td>{rt}</td>
        <td>{product}</td>
        <td>
          {month}-{year}
        </td>
        <td>$ {acv} K</td>
        <td>$ {tcv} K</td>
        <td>$ {revenue} K</td>
      </tr>
    </tbody>
  );
}

export default TableData;

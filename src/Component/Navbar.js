import React, { useEffect, useState } from "react";

function Navbar({ data, setFilteredData, filteredData }) {
  const [change, setChange] = useState();
  const result = [];
  const map = new Map();
  for (const item of data) {
    if (!map.has(item.revenue_type)) {
      map.set(item.revenue_type, true);
      result.push(item.revenue_type);
    }
  }

  const HandleChange = (e) => {
    setChange(e.target.value);
    console.log(change);
  };

  console.log(change);

  useEffect(() => {
    if (change === "all") {
      setFilteredData("");
    } else {
      setFilteredData(data.filter((items) => items.revenue_type === change));
    }
  }, [change, data]);
  return (
    <div className="navbar">
      <select value={change} onChange={HandleChange}>
        <option value="all">default All</option>
        {result &&
          result.map((el) => (
            <option key={Math.random() * 500} value={el}>
              {el}
            </option>
          ))}
      </select>

      <h2>Hi Tarun kumar chourasiya</h2>
    </div>
  );
}

export default Navbar;

import React from "react";

function Pagination({ totalPost, postPerPage, pageChange }) {
  const page = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    page.push(i);
  }
  return (
    <ul className="page">
      {page &&
        page.map((el) => (
          <li key={el}>
            <a onClick={() => pageChange(el)} href="!#">
              {el}
            </a>
          </li>
        ))}
    </ul>
  );
}

export default Pagination;

import { useEffect, useState } from "react";
import Graph from "./Component/Graph";
import Navbar from "./Component/Navbar";
import Pagination from "./Component/Pagination";
import Table from "./Component/Table";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  //pagination
  const [postPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch("http://fetest.pangeatech.net/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  console.log(filteredData);

  //page

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  //page change

  const pageChange = (el) => setCurrentPage(el);
  return (
    <div className="App">
      <Navbar
        data={data}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
      <div className="container">
        <Graph data={data} filteredData={filteredData} />
        <Table data={currentPost} filteredData={filteredData} />
        {filteredData.length === 0 ? (
          <Pagination
            postPerPage={postPerPage}
            totalPost={data.length}
            pageChange={pageChange}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;

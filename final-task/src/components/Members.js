import { useEffect } from "react";
import { useState } from "react";

export const Members = (props) => {
  const [data, setData] = useState([]);
  const [searchData, setsearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Change this to adjust the number of items per page

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:3010/members`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const end = currentPage * pageSize;
  const start = end - pageSize;
  const currentItems = data
    .filter(
      (item) =>
        item.id.toString().toLowerCase().includes(searchData.toLowerCase()) ||
        item.name.toLowerCase().includes(searchData.toLowerCase()) ||
        item.dept.toLowerCase().includes(searchData.toLowerCase()) ||
        item.age.toString().toLowerCase().includes(searchData.toLowerCase())
    )
    .slice(start, end);

  const handleSearchChange = (event) => {
    setsearchData(event.target.value);
    setCurrentPage(1); // Reset to first page when search term changes
  };

  const handleSearch = () => {
    // You can perform search-related operations here if needed
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchData}
          onChange={handleSearchChange}
          id="keyword"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <table border="1" id="grid">
          <thead>
            <tr>
              <th>Id</th>
              <th>Dept</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.dept}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={nextPage} disabled={currentItems.length < pageSize}>
          Next
        </button>
      </div>
    </div>
  );
};

import { useState } from "react";

export const Grid = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const pagesize = 10;
  const start = (page - 1) * pagesize;
  const end = page * pagesize;
  let totalCount = data.length;
  let totalPage = Math.ceil(totalCount / pagesize);

  let a = [];
  for (let i = 0; i < totalPage; i++) {
    a.push(
      <a
        href="#!"
        onClick={() => {
          setPage(i + 1);
        }}
      >
        {i + 1}
      </a>
    );
  }

  const getData = () => {
    fetch(`http://localhost:3010/members`, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        let keyword = document.querySelector("#keyword").value;
        setPage(1);
        setData(
          result.filter((item) => {
            return (
              item.dept.indexOf(keyword) > -1 || item.name.indexOf(keyword) > -1
            );
          })
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSearch = () => {
    getData();
  };

  return (
    <div>
      <input type="text" id="keyword" />
      <button onClick={handleSearch}>Search</button>
      <table border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>Dept</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            if (index >= start && index < end)
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.dept}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              );
          })}
        </tbody>
      </table>
      <div>
        {page > 1 && (
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Prev
          </button>
        )}
        {a}
        {page < totalPage && (
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

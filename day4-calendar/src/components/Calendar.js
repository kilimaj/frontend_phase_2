import { useEffect, useState } from "react";

export const Calendar = () => {
  const [date, setDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [holidays, setHolidays] = useState([]);

  const getData = (year, month) => {
    fetch(`http://localhost:3010/holidays?year=${year}&month=${month}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setHolidays(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getHolidays = (year, month, date) => {
    const data = holidays.filter((item) => {
      return item.year == year && item.month == month && item.date == date;
    });
    if (data.length > 0) {
      return <div className="holiday">{data[0].name}</div>;
    }
  };

  // import { useEffect }  from "react"
  useEffect(() => {
    getData(date.getFullYear(), date.getMonth() + 1);
  }, [date]);

  let years = [];
  let months = [];
  let startYear = date.getFullYear() - 10;
  let endYear = date.getFullYear() + 10;

  const day = date.getDay();
  const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const tr = [];
  let start = false;
  let end = false;
  let n = 1;
  const today = new Date();

  for (let i = 0; i < 6; i++) {
    const td = [];
    for (let j = 0; j < 7; j++) {
      let className = j === 0 || j === 6 ? "weekend" : "";
      if (
        today.getFullYear() === date.getFullYear() &&
        today.getMonth() === date.getMonth() &&
        today.getDate() === n
      )
        className = "today";
      if (i === 0 && j === day) start = true;

      if (start)
        td.push(
          <td className={className}>
            {n++} {getHolidays(date.getFullYear(), date.getMonth() + 1, n - 1)}
          </td>
        );
      else td.push(<td className={className}></td>);
      if (start && n > endDay) {
        end = true;
        start = false;
      }
    }
    tr.push(<tr>{td}</tr>);
    if (end) break;
  }

  for (let i = startYear; i <= endYear; i++) {
    years.push(<option value={i}>{i}</option>);
  }
  for (let i = 0; i < 12; i++) {
    months.push(<option value={i}>{i + 1}</option>);
  }

  const handleYear = (e) => {
    const newDate = new Date(e.target.value, date.getMonth(), 1);
    setDate(newDate);
  };

  const handleMonth = (e) => {
    const newDate = new Date(date.getFullYear(), e.target.value, 1);
    setDate(newDate);
    //date.getFullYear()
    // do something after state change
  };
  const handleChange = (offset) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    setDate(newDate);
  };

  // http://localhost:3010/holidays?year=2024&month=3

  return (
    <div className="calendar-body">
      Year :
      <select onChange={handleYear} value={date.getFullYear()}>
        {years}
      </select>
      Month :
      <select onChange={handleMonth} value={date.getMonth()}>
        {months}
      </select>
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Next
      </button>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>{tr}</tbody>
        </table>
      </div>
    </div>
  );
};

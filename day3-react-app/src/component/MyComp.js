import { useState } from "react";

export const MyComponent = (props) => {
  const { param1, param2, param3 } = props;
  console.log(param1, param2, param3);
  let a = 1;
  const b = 2;

  let c = `<div>
    This is My Component.a=${a}, b=${b}</div>`;

  let d = <div> inner div</div>;
  let e = [
    <div>inner div 1</div>,
    <div>inner div 2</div>,
    <div>inner div 3</div>,
  ];

  return (
    <div>
      {" "}
      This is My Component.a={a}, b={b}, d={d}, e={e}, c={c}
      {param3}
    </div>
  );
};

export const MyComponent2 = (props) => {
  const { count } = props;

  let arr = [];
  for (let i = 0; i <= count; i++) {
    arr.push(<div>{i}</div>);
  }
  return arr;
};

export const MyComponent3 = (props) => {
  const { unit } = props;
  let arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push(
      <div>
        {unit} * {i} = {unit * i}
      </div>
    );
  }
  return arr;
};

const sum2 = (a, b) => {
  return a + b;
};

export const MyComponent4 = (props) => {
  const sum = (a, b) => {
    return a + b;
  };
  return (
    <div>
      {sum(1, 2)}
      {sum2(1, 2)}
    </div>
  );
};

export const MyComponent5 = (props) => {
  // class, style, event
  return (
    <div
      className="a"
      style={{ width: "100px", fontSize: "100px" }}
      onClick={() => {
        console.log("click");
      }}
    >
      111
    </div>
  );
};

export const MyComponent6 = (props) => {
  // state name, method of change state = useState(init value);
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(true);
  const data = [
    { no: 1, name: "Sam", age: 10 },
    { no: 2, name: "Ken", age: 20 },
    { no: 3, name: "John", age: 30 },
  ];

  const a = 1;
  let n = 1;
  return (
    <div>
      {/* {a === 1 && "a = 1"} <br />
      {a === 1 ? "a = 1" : "a != 1"} <br /> */}
      <button
        onClick={() => {
          setState(state + 1);
          setState2(!state2);
        }}
      >
        Add
      </button>
      [{state}]
      <br />
      {state2 && (
        <table border="1">
          {data.map((item) => {
            return (
              <tr>
                <td>{item.no}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};

export const MyComponent7 = (props) => {
  const [data, setData] = useState([]);

  return (
    <div>
      <input type="text" id="name" />
      <button
        onClick={() => {
          setData([...data, document.getElementById("name").value]);
        }}
      >
        Add
      </button>
      <ul>
        {data.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export const Calendar = () => {
  const [date, setDate] = useState(new Date());

  let years = [];
  let months = [];
  let startYear = date.getFullYear() - 10;
  let endYear = date.getFullYear() + 10;
  for (let i = startYear; i <= endYear; i++) {
    years.push(<option value={i}>{i}</option>);
  }
  for (let i = 1; i <= 12; i++) {
    months.push(<option value={i}>{i}</option>);
  }

  const handleYear = (e) => {
    const newDate = new Date(e.target.value, date.getMonth(), 1);
    setDate(newDate);
  };

  const handelMonth = (e) => {
    const newDate = new Date(date.getFullYear(), e.target.value, 1);
    setDate(newDate);
  };

  const handleChange = (offset) => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + offset, 1);
    setDate(newDate);
  };

  return (
    <div>
      Year :{" "}
      <select onChange={handleYear} value={date.getFullYear()}>
        {years}
      </select>
      Month :{" "}
      <select onChange={handelMonth} value={date.getMonth()}>
        {months}
      </select>{" "}
      <button
        onClick={() => {
          handleChange(-1);
        }}
      >
        Prev
      </button>{" "}
      <button
        onClick={() => {
          handleChange(1);
        }}
      >
        Next
      </button>
    </div>
  );
};

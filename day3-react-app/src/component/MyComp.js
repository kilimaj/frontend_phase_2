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
      onMouseOver={handleOver}
    >
      111
    </div>
  );
};

import React from "react";
import "./App.css";

function App() {
  const text = [
    { name: "helo" },
    {
      name: "bao",
      age: "20",
    },
    {
      name: "bao",
      age: "20",
    },
    {
      name: "bao",
      age: "20",
    },
    {
      name: "bao",
      age: "20",
    },
    {
      name: "bao",
      age: "20",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 text-center">
        {text.map((tester, index) => (
          <React.Fragment key={index}>
            <div>{index}</div>
            <div key={`name_${index}`}>{tester.name}</div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default App;

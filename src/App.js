import React from "react";
import "./App.css";
//import AccordianReact from './accordian'
import AccordianReact from "./accordianRedux";

//I have created Accordian without redux just switched the 'accordian'
function App() {
  let data = [
    {
      header: "First",
      item: "First Element GOes Here First Element GOes Here"
    },
    {
      header: "Second",
      item: "Second Element GOes Here Second Element GOes Here"
    },
    {
      header: "Third",
      item: "Third Element GOes Here Third Element GOes Here"
    },
    {
      header: "Fourth",
      item: "Fourth Element GOes Here Fourth Element GOes Here"
    }
  ];
  return (
    <div className="App">
      <AccordianReact
        item={data}
        style={{
          width: "300px",
          border: "1px solid #CCC",
          borderRadius: "3px"
        }}
      />
    </div>
  );
}

export default App;

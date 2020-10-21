import * as React from "react";
import "./styles.css";

import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";

export default function App() {
  return (
    <div className="App">
      <SingleDatePicker
        id="id"
        date={null}
        focused={false}
        onDateChange={() => console.log("supp")}
        onFocusChange={() => console.log("supp again")}
        renderMonthElement={() => {
          return <div>Hello</div>;
        }}
      />
    </div>
  );
}

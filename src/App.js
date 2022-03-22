import React from "react";
import { Button } from "antd";
import CounterPage from "./page/counter/counter";
import "./App.less";

function App() {
  return (
    <div className="App">
      <CounterPage></CounterPage>
      <Button type="primary">antd Button</Button>
    </div>
  );
}

export default App;

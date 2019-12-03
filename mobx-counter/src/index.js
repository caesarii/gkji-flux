import React from "react";
import { render } from "react-dom";

import Counter from "./components/Counter";
import CounterModel from "./models/CounterModel";

const store = new CounterModel();

render(
  <div>
    <Counter store={store} />
  </div>,
  document.getElementById("root")
);

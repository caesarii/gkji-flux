import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import Counter from "./components/Counter";
import CounterModel from "./models/CounterModel";

const store = new CounterModel();

render(
  <div>
    <DevTools />
    <Counter store={store} />
  </div>,
  document.getElementById("root")
);

store.increase(0);
store.increase(1);


setTimeout(() => {
  store.decrease(2);
}, 2000);

// playing around in the console
window.store = store;

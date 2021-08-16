import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(

//     <BrowserRouter>
//       <App />

//     </BrowserRouter>
// ,
//   document.getElementById('root')
// );

import { Provider } from "react-redux";
// import store from "./redux/store";
import store from "./Redux/store";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

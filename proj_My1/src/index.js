import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "redux/store";

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      
    </Provider>
  </BrowserRouter>
)
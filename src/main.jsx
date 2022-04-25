import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from './features/user' 
import themeReducer from './features/theme'
import { BrowserRouter } from "react-router-dom";

//store collect reducer
//reducer is current state
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

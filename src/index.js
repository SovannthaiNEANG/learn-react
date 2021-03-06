import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// alias
import { App as HomePage } from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
// npx create-react-app , SPA, we can use NextJS for multiple page application or use react-router-dom (client-side route)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

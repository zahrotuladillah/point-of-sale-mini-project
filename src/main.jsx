import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Router from './router';
import './index.css'
import { CheckoutProvider } from './context/checkoutContext';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <CheckoutProvider> */}
      <Provider store={store}>
        <Router/>
      </Provider>
      {/* </CheckoutProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App2 from './Page_2/App2';
import App3 from './Page_3/App3';
import App4 from './Page_4/App4';

import Login from './Login/Login';

import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
     path:"/",
     element:<Login/>,
  },
  {  
      path: "/logout",
      element: <Login/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path:"/NewSpot",
    element:<App3/>,
  },
  {
    path:"/AvailSpots",
    element: <App2/>,
  },
  {
    path:"/Surveillance",
    element:<App4/>,
  }

  
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

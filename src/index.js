import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1 style={{color:"red"}}> Error..... Page not found</h1>,
    children:[
      {path:"/",
      element:<h1>Home</h1>,
      index:true

    },{
      path:"shops",
      element:<h1>Shops</h1>
    },
      {
        path:"services",
        element:<h1>Services</h1>
      },
      {
        path:"about_us",
        element:<h1>About_us</h1>
      },

    ]
  },
]);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import EmporiumsContainer from './components/emporiums/EmporiumsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Emporiums from './components/emporiums/Emporiums';


export default function App() {

  const divStyle = {
    color: 'black',          // CSS property 'color': 'blue'
    backgroundColor: '#eee', // CSS property 'background-color': '#eee'
    fontSize: '16px',       // CSS property 'font-size': '16px'
    padding: '10px'         // CSS property 'padding': '10px'
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1 style={{ color: "red" }}> Error..... Page not found</h1>,
      children: [
        {
          path: "/",
          element: <h1>Home</h1>,
          index: true

        }, {
          path: "emporiums",
          element: <div style={divStyle}><EmporiumsContainer /></div>
        },
        , {
          path: "emporiums/:name",
          element: <Emporiums />
        },
        {
          path: "services",
          element: <h1>Services</h1>
        },
        {
          path: "about_us",
          element: <p>about_us</p>
        },

      ]
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  )
}

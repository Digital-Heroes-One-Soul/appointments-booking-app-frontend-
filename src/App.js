import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';




export default function App() {
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
          path: "shops",
          element: <h1>Emporiums</h1>
        },
        {
          path: "services",
          element: <h1>Services</h1>
        },
        {
          path: "about_us",
          element: <h1>About_us</h1>
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

import React from 'react'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

// I will consider the app as my shared layout.
export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>

    </div>
  )
}

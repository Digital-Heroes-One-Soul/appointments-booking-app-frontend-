import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

// I will consider the home as my main shared layout.
export default function Home() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

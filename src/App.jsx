import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import './App.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Home /></>
    },
    {
      path: "/home",
      element: <><Home /></>
    },
    {
      path: "/about",
      element: <><About /></>
    },
    {
      path: "/explore",
      element: <><Explore /></>
    },
    {
      path: "/profile",
      element: <><Profile /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
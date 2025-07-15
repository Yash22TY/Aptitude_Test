import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar'

const Simple = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<><Navbar/><Home/></>
        },
        {
            path:"/contact",
            element:<><Navbar/><Contact/></>
        },
        {
            path:"/about",
            element:<><Navbar/><About/></>
        },
        {
            path:"/feedback",
            element:<><Navbar/><Feedback/></>
        },
    ])
  return (
    <div>
      
      <RouterProvider router={router}/>
    </div>
  )
}

export default Simple

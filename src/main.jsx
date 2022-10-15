import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Router } from 'react-router-dom'
import App from './App'
import Themeprovider from './context/Themeprovider'

import './index.css'
const router = createBrowserRouter([
  {path:"/", element:<App/>},
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Themeprovider>
    <RouterProvider router={router} />
    </Themeprovider>
    </React.StrictMode>
)

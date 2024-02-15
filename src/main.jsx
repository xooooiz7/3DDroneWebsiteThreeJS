import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom'
import CustomPageMain from './pages/CustomPage.jsx'
import HomePageMain from './pages/MainPage.jsx'
const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePageMain/>
  },
  {
    path : "CustomPage",
    element : <CustomPageMain/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/Pages/Errorpage.jsx';
import Aboutpage from './components/Pages/Aboutpage.jsx';
import Login from './components/login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "*",
    element:<ErrorPage/>
  },
  {
    path: "about",
    element:<Aboutpage/>
  },
  {
    path: "login",
    element:<Login/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

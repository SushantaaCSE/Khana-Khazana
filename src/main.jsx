import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Recipes from './Components/Recipes/Recipes.jsx';
import GitHub from './Components/Github/Github.jsx';
const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
  {
    path:"about",
    element: <About/>
  },
{
  path: "github",
  element: <GitHub/>
},
{
  path:"/recipe",
  element: <Recipes/>
}]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

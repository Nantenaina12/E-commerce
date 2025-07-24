import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProduitCard from './composants/ProduitCard.jsx'
const route=createBrowserRouter([{
  path:"/",
  element:<App />
},
{
  path:"produits",
  element:<ProduitCard/>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'import 
import Filter from './component/Filter.jsx'
import SortFilter from './component/SortFilter.jsx'
import List from './component/List.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router= createBrowserRouter([
    {
        path:"/",
        element:<Filter/>
    },
    {
        path:"/Sort",
        element:<SortFilter/>
        
    },
    {
        path:"/L",
        element:<List/>
    }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import {RouterProvider, createBrowserRouter } from "react-router-dom"
// import Team_p from './pages/Team_page/Team_p.jsx';
// const router = createBrowserRouter([
//   {path:"/",element:<App />},
//   {path:"/Teams",element:<Team_p />}
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App /> 
    
  </StrictMode>,
)

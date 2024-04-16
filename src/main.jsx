import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
// import { BrowserRouter as RouterProvider } from 'react-router-dom';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <HelmetProvider>
  <AuthProvider> 
     <RouterProvider router={router}></RouterProvider> 
   </AuthProvider>
  </HelmetProvider>
  </React.StrictMode>,
)

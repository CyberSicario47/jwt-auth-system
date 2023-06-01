import React from 'react'
import ReactDOM from 'react-dom/client'
import {app} from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={app}/>
        </AuthProvider>
    </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import MainLayout from './layouts/MainLayout'
import Home from './routes/Home'
import CreateContact from './routes/CreateContact'
import UpdateContact from './routes/UpdateContact'
import Welcome from './routes/Welcome'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Welcome />,
            },
            {
                path: 'marks',
                element: <Home />,
            },
            {
                path: 'contact',
                element: <CreateContact />,
            },
            {
                path: 'contact/:contactId/edit',
                element: <UpdateContact />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

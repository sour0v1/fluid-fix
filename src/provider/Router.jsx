import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
            }
        ]

    }
])


export default router;
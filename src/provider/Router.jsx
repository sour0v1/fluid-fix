import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../dashboard/Dashboard';
import ProfileInfo from '../dashboard/seller/ProfileInfo';
import AddService from '../dashboard/seller/AddService';
import MyServices from '../dashboard/seller/MyServices';
import Booking from '../dashboard/seller/Booking';
import SellerHome from '../dashboard/seller/SellerHome';
import Earning from '../dashboard/seller/Earning';

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
                element : <Dashboard></Dashboard>,
                children : [
                    {
                        path : 'seller/profile-info',
                        element : <ProfileInfo></ProfileInfo>
                    },
                    {
                        path : 'seller/add-service',
                        element : <AddService></AddService>
                    },
                    {
                        path : 'seller/my-services',
                        element : <MyServices></MyServices>
                    },
                    {
                        path : 'seller/booking',
                        element : <Booking></Booking>
                    },
                    {
                        path : 'seller/home',
                        element : <SellerHome></SellerHome>
                    },
                    {
                        path : 'seller/earning',
                        element : <Earning></Earning>
                    }
                ]
            }
        ]

    }
])


export default router;
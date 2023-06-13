import {
    createBrowserRouter,
} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home/Home'
import Error from '../pages/error/error'
import Instructors from '../pages/Instructors/Instructors'
import Classes from '../pages/Classes/Classes'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../Layout/Dashboard'
import MyCart from '../pages/Dashboard/MyCart/MyCart'
import PrivateRoute from './PrivateRoute'
import ManageUsers from '../pages/Dashboard/ManageUsers/ManageUsers'
import AddClass from '../pages/AddClass/AddClass'
import InstructorRoute from './InstructorRoute'
import AdminRoute from './AdminRoute'
import ManageClasses from '../pages/ManageClasses/ManageClasses'
import Payment from '../pages/Dashboard/Payment/Payment'
import UserHome from '../pages/Dashboard/UserHome/UserHome'
import AdminHome from '../pages/Dashboard/AdminHome/AdminHome'
import MyClass from '../pages/Dashboard/MyClass/MyClass'
import PaymentHistory from '../pages/Dashboard/PaymentHistory/PaymentHistory'
import UserPaymentHistory from '../pages/Dashboard/UserPaymentHistory/UserPaymentHistory'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userhome',
                element: <UserHome></UserHome>
            },
            {
                path: 'mycart',
                element: <MyCart></MyCart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'userpaymenthistory',
                element: <UserPaymentHistory></UserPaymentHistory>
            },
            //admin routes
            {
                path: 'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            //instructor routes
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            }, 
            {
                path: 'myClasses',
                element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
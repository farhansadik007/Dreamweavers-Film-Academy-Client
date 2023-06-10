import {
    createBrowserRouter,
} from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../pages/Home/Home/Home'
import Error from '../pages/error/error'
import Instructors from '../pages/Instructors/Instructors'
import Classes from '../pages/Classes/Classes'

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
                path: '/instructors',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/loginpage/Login";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
]);
export default router;
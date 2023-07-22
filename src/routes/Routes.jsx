import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/loginpage/Login";
import Resister from "../pages/resisterpage/Resister";
import SingleDetails from "../pages/home/SingleDetails";
import Collages from "../pages/collages/Collages";
import PrivateRoute from "./PrivateRoute";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=> fetch('http://localhost:8000/getData')
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/resister',
                element:<Resister/>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute><SingleDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:8000/getData/${params.id}`)
            },
            {
                path:'/colleges',
                element:<Collages/>,
                loader:()=> fetch('http://localhost:8000/getData')
            },
            {
                path:'/profile',
                
            },
            
        ]
    }
]);
export default router;
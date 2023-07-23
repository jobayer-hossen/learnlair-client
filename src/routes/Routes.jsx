import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import ErrorPage from "../pages/errorpage/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/loginpage/Login";
import Resister from "../pages/resisterpage/Resister";
import SingleDetails from "../pages/home/SingleDetails";
import Collages from "../pages/collages/Collages";
import PrivateRoute from "./PrivateRoute";
import Admission from "../pages/admission/Admission";
import AdmissionForm from "../pages/admission/AdmissionForm";
import MyCollege from "../pages/mycollege/MyCollege";
import UserProfile from "../pages/profile/UserProfile";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader:()=> fetch('https://learn-lair-server-emonhasan007.vercel.app/getData')
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
                loader: ({params}) => fetch(`https://learn-lair-server-emonhasan007.vercel.app/getData/${params.id}`)
            },
            {
                path:'/colleges',
                element:<Collages/>,
                loader:()=> fetch('https://learn-lair-server-emonhasan007.vercel.app/getData')
            },
            {
                path:'/admission',
                element:<Admission/>,
                loader:()=> fetch('https://learn-lair-server-emonhasan007.vercel.app/getData')
            },
            {
                path:'/admission/:id',
                element:<AdmissionForm/>,
                loader: ({params}) => fetch(`https://learn-lair-server-emonhasan007.vercel.app/getData/${params.id}`)
            },
            {
                path:'/myCollege',
                element:<MyCollege/>
            },
            {
                path:'/profile',
                element:<UserProfile/>
            }
            
        ]
    }
]);
export default router;
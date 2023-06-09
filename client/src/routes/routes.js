import AdminLogin from "../pages/Admin/AdminLogin";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Contact from "../pages/Main/Contact/Contact";
import LoginUser from "../pages/Main/Entering/LoginUser";
import Register from "../pages/Main/Entering/Register";
import Home from "../pages/Main/Home";
import MainRoot from "../pages/Main/MainRoot";

export const ROUTES = [
    {
        path:'/',
        element:<MainRoot/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'login',
                element:<LoginUser/>
            },
            {
                path:'register',
                element:<Register/>
            }, 
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    },
    {
        path:'/admin',
        element:<AdminRoot/>,
        children:[
            {
                path:'',
                element:<Dashboard/>
            },
            {
                path:'login',
                element:<AdminLogin/>
            }
        ]
    }

]
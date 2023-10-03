import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Career from "../Components/Career/Career";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/career',
                element:<Career></Career>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
         
        ]
    }
])
export default Router
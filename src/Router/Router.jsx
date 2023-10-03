import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/Home/Home";
import Career from "../Components/Career/Career";

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
            }
         
        ]
    }
])
export default Router
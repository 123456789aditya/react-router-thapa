import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { AppLayout } from "./Ui/AppLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
export const App=()=>{
    const router=createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,
            children:[
                {
                    path:"/",
                    element:<Home/>,
                },
                {
                    path:"/about",
                    element:<About/>,

                },
                {
                    path:"/contact",
                    element:<Contact/>,
                },
                {
                    path:"/services",
                    element:<Services/>,
                },


            ],
        },
    ]);
    return <RouterProvider router={router}/>
}











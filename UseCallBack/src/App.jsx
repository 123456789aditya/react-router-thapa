import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider} from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { AppLayout } from "./UI/AppLayout";

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

            ]
        },
        
    ]);


}


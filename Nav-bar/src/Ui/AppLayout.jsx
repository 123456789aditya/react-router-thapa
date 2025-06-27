import {Outlet} from "react-router-dom"
import { Footer } from "../Common/Footer"
import { Header } from "../Common/Header"

export const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
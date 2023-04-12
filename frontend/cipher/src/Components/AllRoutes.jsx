import { Route, Routes } from "react-router-dom"

import { Home } from "../Home"
import { ModalRegister } from "./SignUp"
import { ModalLogin } from "./Login"



export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
          
        </Routes>
    )
}
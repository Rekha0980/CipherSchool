
import { Box, Button } from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom"
import { ModalRegister } from "./SignUp"
import { ModalLogin } from "./Login"

const links=[
    {
        path:"/",
        "title":"Home",
    },
    {
        path:"/register",
        "title":"SignUp",
    },
    {
        path:"/login",
        "title":"Login",
    }
    
]

export const Navbar=()=>{
    return(
        <div style={{background:"pink",padding:"10px",display:"flex",justifyContent:"space-between"}}>
            <Box> <Button>Home</Button></Box>
           <Box >
          <ModalRegister/>
          <ModalLogin/>
           </Box>
           
            {/* {links.map((link)=>(
                <NavLink key={link.path} to={link.path} style={{marginRight:"20px"}}>{link.title}</NavLink>
            ))} */}
        </div>
    )
}

import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, Button, Input,
  Text,
  useDisclosure,

} from '@chakra-ui/react'
import { ModalLogin } from "./Login"

export const ModalRegister = () => {


  const [fname, setName] = useState("")
  const [lname, setLname] = useState("")
  const [pass, setPass] = useState("")
  const [mob, setMob] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()
  const handlesubmit = (e) => {
    const payload = {
      fname,
      lname,
      pass,
      email, mob
    }
    if (fname == "" && lname == "") {
      alert("enter filleds")
  }
  else{
    //console.log(payload)
    fetch("http://localhost:8000/users/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) =>res.json())
     


      .catch(err => console.log(err))

  }
  setEmail("")
  setMob("")
  setLname("")
  setPass("")
  setName("")

}
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>SignUp</Button>

      <Modal isOpen={isOpen} onClose={onClose} p="10px" br="15px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"25px"} >SignUp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"} fontSize={"25px"} fontWeight={"bold"}>CipherSchools</Text>
            <Text textAlign={"center"}>Create New Account</Text>
            <Text textAlign={"center"} mb="20px">Please provide your valid informations to signup</Text>
            <form onSubmit={handlesubmit}>
            <Input type="text" placeholder="Enter First name" value={fname} onChange={(e) => setName(e.target.value)} mb="5px" br="10px" />
            <Input type="text" placeholder="Enter Last name" value={lname} onChange={(e) => setLname(e.target.value)} mb="5px" />
            <Input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} mb="5px" />
            <Input type="number" placeholder="Enter Number" value={mob} onChange={(e) => setMob(e.target.value)} mb="5px" />
            <Input type="password" placeholder="Enter password" value={pass} onChange={(e) => setPass(e.target.value)} mb="5px" />
            <Button colorScheme='blue' mr={3}>Submit</Button>
            </form>
          </ModalBody>

      <Text textAlign={"center"} fontSize={"15px"}>Already have an acoount</Text>
        </ModalContent>
      </Modal>
    </>
  )
}
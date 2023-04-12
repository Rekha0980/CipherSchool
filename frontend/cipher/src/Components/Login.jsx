import React, { useState } from "react"
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

export const ModalLogin = () => {

  const [pass, setPass] = useState("")

  const [email, setEmail] = useState("")
  const handlesubmit = () => {
    const payload = {
      pass,
      email
    }
    //console.log(payload)
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.token)
      }
      )
      .catch(err => console.log(err))
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Login</Button>

      <Modal isOpen={isOpen} onClose={onClose} p="10px" br="15px">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"25px"} >Signin</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={"center"} fontSize={"25px"} fontWeight={"bold"}>CipherSchools</Text>
            <Text textAlign={"center"}>Create New Account</Text>
            <Text textAlign={"center"} mb="20px">Please provide your email and password to signin</Text>

            <Input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} mb="5px" />
            <Input type="password" placeholder="Enter password" value={pass} onChange={(e) => setPass(e.target.value)} mb="5px" />
            <Button onClick={handlesubmit}>Submit</Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
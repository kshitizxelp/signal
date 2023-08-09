import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'
import {FaRegCheckCircle} from "react-icons/all"

export default function ChildVerification3() {
  
    const navigate = useNavigate();

    const navigateTo = () =>{
         navigate("/Mydashbord")
    }


  return (
    <Box bg="#F2F5F7" width="100%">
    <Flex direction="column" alignItems="center" position="relative" > 
      <Box
      // boxShadow="dark-lg"
      p="5"
      bg="white"
      // borderRadius="50px"
      borderTopRadius="200px"
      borderBottomRadius="200px"
      width={{base:"290px",md:"350px",lg:"500px"}}
      m="10px"
       >
      <Flex display={'flex'} justifyContent={'center'}>
      <Box  m="20px" >
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="150px" />
     </Box>
     </Flex>

    
    <Flex display={'flex'} justifyContent={'center'}>
    <Image src="src/assets/Mask Group 1@3x.png" alt="Dan Abramov" height="100px" width="100px" m="0px"/>
    <Text mt="6px" mr="2px">Avathar Added</Text>
    <Text fontSize="70px" color={'green'} > <FaRegCheckCircle /></Text>
    </Flex>
   
   


    
     <Flex display={'flex'} justifyContent={'center'}>
         <Box m="20px">
          <Text color="orange" as="b" >Yay!</Text>
          <Text as="b" mt="2px" >
            <br></br>
             We are excited to 
            <br></br>
            you onboard!
            <br></br>
            <br></br>
            have your child onboard!
          </Text>
          </Box>
          </Flex>
      
        <Flex display={'flex'} justifyContent={'center'} m="30px">
        <Box mt="12px">
        <Button colorScheme="blue"   m="40pxz"  size="lg" bg="#004570" width={{base:"250px",md:"290px",lg:"313px"}} borderRadius="20px"  onClick={navigateTo} >
          Let's get started
        </Button>
      </Box>
      </Flex>
     </Box>
    </Flex>
    </Box>
  )
}

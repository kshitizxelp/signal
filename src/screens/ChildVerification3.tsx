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
    <Box bg={'gray'} >
    <Flex direction="column" alignItems="center" position="relative" >
       <Box
      boxShadow="dark-lg"
      p="5"
      rounded=""
      bg="white"
      borderRadius={60}
    //   height="620px"
      width="500px"
      mt={5}
      mb={10}
    >
      <Flex display={'flex'} justifyContent={'center'}>
      <Box  mt={10} >
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={200} />
     </Box>
     </Flex>

    
    <Flex display={'flex'} justifyContent={'center'}>
    <Image src="src/assets/Mask Group 1@3x.png" alt="Dan Abramov" height={100} width={100} mr={5}/>
   <Text mt={6} mr={2}>Avathar Added</Text>
    <Text fontSize={70} color={'green'} > <FaRegCheckCircle /></Text>
    </Flex>
   
   


    
     <Flex display={'flex'} justifyContent={'center'}>
         <Box mt={10}>
          <Text color="orange" as="b" >Yay!</Text>
          <Text as="b" mt={2} >
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
      
        <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={12}>
        <Button colorScheme="blue" size="lg" bg="#004570" width="313px" borderRadius={20}  onClick={navigateTo} >
          Let's get started
        </Button>
      </Box>
      </Flex>
     </Box>
    </Flex>
    </Box>
  )
}

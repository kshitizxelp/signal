import { Box, Image, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'

import { VscDeviceCamera } from 'react-icons/all';
import { useNavigate } from 'react-router';

export default function ChildPhoto() {

  const navigate = useNavigate();

  const navigateTo = () =>{
    console.log("he;;;ppp")

        navigate("/ChildAvatar")
  }

  return (
    <Flex direction="column" alignItems="center"  position="relative" >
    <Box
   boxShadow="dark-lg"
   p="6"
   rounded=""
   bg="white"
   borderRadius={60}
   // height="620px"
   width="500px"
   alignItems="center"
   justifyContent="center"
 >
   <Box boxSize="184px" marginLeft="135px" mt={4} >
     <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
   </Box>
   <Box mt={4}>
       <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>

       <Text mt={4}>Please take a face closeup photo of the child</Text>
        </Box> 
    <Box mt={4} marginLeft="70px" textAlign="center" width="313px" height="280">
      <Image src="src/assets/Mask Group 1@3x.png"/>
       </Box>
   <Box mt={15} mb={15} marginLeft="210px">
    <VscDeviceCamera onClick={() => navigateTo()} size={30}/>
   </Box>
   </Box>
   </Flex>
  )
}

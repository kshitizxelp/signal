import { Box, Image, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'

import { VscDeviceCamera } from 'react-icons/all';
import { useNavigate } from 'react-router';

export default function ChildVerification1() {

  const navigate = useNavigate();

  const navigateTo = () =>{
    console.log("he;;;ppp")

        navigate("/ChildVerification2")
  }

  return (
    <Box bg={'gray'} width={'100%'} >
  <Flex direction="column" alignItems="center"  position="relative" pt={'100px'} pb={'200px'} >
    <Box
   boxShadow="dark-lg"
   p="0px"
   rounded=""
   bg="white"
   borderRadius={'50px'}
   // height="620px"
   width="400px"
   alignItems="center"
   justifyContent="center"
 >
      <Box>
      <Flex display={'flex'} justifyContent={'center'}>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'150px'}/>
      </Flex>
      </Box>
     
  
       <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={'4px'}>
         <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>

        <Text mt={'4px'}>Please take a face closeup photo of the child</Text>
        </Box> 
        </Flex>

      <Flex display={'flex'} justifyContent={'center'}>
       <Box mt={'4px'}>
       <Image src="src/assets/Mask Group 1@3x.png"  height="220px" width="223px"/>
       </Box>
       </Flex>
     
    <Flex display={'flex'} justifyContent={'center'}>
     <Box mt={'20px'} as="button" onClick={() => navigateTo()} mb={'20px'} >
     <VscDeviceCamera onClick={() => navigateTo()} size={30}/>
    </Box>
    </Flex>
   
    </Box>
    </Flex>
    </Box>
  )
}

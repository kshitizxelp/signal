import { Box, Image, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'

import { VscDeviceCamera } from 'react-icons/all';
import { useNavigate } from 'react-router';

export default function ChildVerification1() {

  const navigate = useNavigate();

  const navigateTo = () =>{
    

    navigate("/ChildVerification2")
  };

  return (
  <Box bg="#F2F5F7" width='100%' >
  <Flex justifyContent={'center'}>
  <Box
   boxShadow="dark-lg"
   bg="white"
  //  borderRadius='50px'
   borderTopRadius="200px"
   borderBottomRadius="200px"
   width={{base:"300px",md:"420px",lg:"450px"}}
   alignItems="center"
   justifyContent="center"
   m="20px"
 >
      <Box>
      <Flex display={'flex'} justifyContent={'center'} m="10px">
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height='150px'/>
      </Flex>
      </Box>
     
  
       <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={'4px'}>
         <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>

        <Text mt='4px'>Please take a face closeup photo of the child</Text>
        </Box> 
        </Flex>

      <Flex display={'flex'} justifyContent={'center'}>
       <Box m='10px'>
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

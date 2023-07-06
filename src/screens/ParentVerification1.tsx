import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"



export default function ParentVerification1() {
  const countNum = useSelector <any>((state)=>state?.counter)

    const location = useLocation();
    const params = location.state;
    const param1 = params.param1;

    console.log("params1",param1)

    const navigate = useNavigate();

    const navigateTo = () =>{
        navigate("/ParentVerification2",{  state : {param:param1}})
    }

  return (
    <Box bg={'gray'} >
    <Flex direction="column" alignItems="center" pt={'100px'} pb={'200px'}>
    <Box
   boxShadow="dark-lg"
   p="0"
   rounded=""
   bg="white"
   borderRadius={'50px'}
    mt={'5px'}
   
   width="450px"
   alignItems="center"
   justifyContent="center"
 >
      <Flex display={'flex'} justifyContent={'center'}>
       <Box mt={'4px'} >
       <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'150px'} />
       </Box>
       </Flex>
       {/* {countNum} */}
    <Flex display={'flex'} justifyContent={'center'}>
     <Box  mt={'10px'}>
      <Text fontSize="20px" as="b" color="#004570"  >Parent Verification</Text>
      <Text mt={'5px'} >{param1}</Text>
     </Box>
     </Flex>
        
         <Flex display={'flex'} justifyContent={'center'}>
          <Box>
          <Input
              type="text"
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="313px"
            />
           </Box>
           </Flex>
           
           <Flex display={'flex'} justifyContent={'center'}>
           <Box pt={'50px'} pb={'20px'}>
           <Button  colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={() => navigateTo()}>
             Generate OTP
           </Button>
           </Box>
           </Flex>

       
     </Box>
    </Flex>
    </Box>
  )
}

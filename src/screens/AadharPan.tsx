import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



export default function AadharPan() {
  
    const location = useLocation();
    const params = location.state;
    const param1 = params.param1;

    console.log("params1",param1)

    const navigate = useNavigate();

    const navigateTo = () =>{
        navigate("/EnterOtp",{  state : {param:param1}})
    }

  return (
    <Box bg={'gray'} pt={100}>
    <Flex direction="column" alignItems="center" >
    <Box
   boxShadow="dark-lg"
   p="0"
   rounded=""
   bg="white"
   borderRadius={60}
    mt={5}
    mb={100}
   width="600px"
   alignItems="center"
   justifyContent="center"
 >
      <Flex display={'flex'} justifyContent={'center'}>
       <Box mt={4} >
       <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={200} />
       </Box>
       </Flex>
    <Flex display={'flex'} justifyContent={'center'}>
     <Box  mt={10}>
      <Text fontSize="20px" as="b" color="#004570" ml={0} >Parent Verification</Text>
      <Text mt={5} >{param1}</Text>
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
           <Box pt={50} mb={10}>
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

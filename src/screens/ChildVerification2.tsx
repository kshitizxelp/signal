import { Box, Image, Flex, Text ,Button} from '@chakra-ui/react'
import React from 'react'

import { VscDeviceCamera } from 'react-icons/all';
import { useNavigate } from 'react-router'
export default function ChildVerification2() {
  const navigate = useNavigate()
  const Next =()=>{
    navigate("/ChildVerification3")
  }
    return (
      <Box bg="#F2F5F7" width="100%">
      <Flex direction="column" alignItems="center" position="relative" >
      <Box
       boxShadow="dark-lg"
       p="6"
       bg="white"
      //  borderRadius="50px"
      borderTopRadius="200px"
     borderBottomRadius="200px"
       width={{base:"290px",md:"350px",lg:"400px"}}
       alignItems="center"
       justifyContent="center"
       m="20px"
       
     >
      
      <Flex display={'flex'} justifyContent={'center'}>
       <Box>
         <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="120px" />
       </Box>
       </Flex>
    
          <Flex display={'flex'} justifyContent={'center'}>
           <Box mt="4px">
           <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>
    
           <Text mt="4px" fontSize="18px">Please take a face closeup photo of the child</Text>
            </Box>
            </Flex>
           
          <Flex display={'flex'} justifyContent={'center'}>
          <Box mt="2px" >
          <Image src="src/assets/Mask Group 1@3x.png" alt="Dan Abramov"  width="213px" height="180"/>
           </Box>
          </Flex>
        
        <Flex display={'flex'} justifyContent={'center'}> 
        <Box mt="2px">
        <Text p="5px" fontSize="15px">Child Avatar Preview Estimated Age : 5-8 years</Text>
        <Text></Text>
       </Box>
       </Flex>

    
        <Flex display={'flex'} justifyContent={'center'}>
        <Box>
        <VscDeviceCamera size="30px"/>
        </Box>
        </Flex>
        
        
      <Flex display={'flex'} justifyContent={'center'} m="30px">
       <Button colorScheme="blue" borderRadius="20px" mb="50px" mr="30px" size="sm" bg="#F5F5F5" width="100px" color="black"  >
        Retake
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="sm" bg="#004570" width="100px" onClick={Next} >
         Next
        </Button>
        </Flex>  
    
    
       </Box>
    
       
    
    
       </Flex>
       </Box>
      )
}

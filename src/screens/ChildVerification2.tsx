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
      <Box>
      <Flex direction="column" alignItems="center" position="relative" >
      <Box
       boxShadow="dark-lg"
       p="6"
       rounded=""
       bg="white"
       borderRadius={60}
       width="400px"
      
       alignItems="center"
       justifyContent="center"
       mt={20}
     >
      
      <Flex display={'flex'} justifyContent={'center'}>
       <Box>
         <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={120} />
       </Box>
       </Flex>
    
          <Flex display={'flex'} justifyContent={'center'}>
           <Box mt={4}>
           <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>
    
           <Text mt={4}>Please take a face closeup photo of the child</Text>
            </Box>
            </Flex>
           
          <Flex display={'flex'} justifyContent={'center'}>
          <Box mt={2} >
          <Image src="src/assets/Mask Group 1@3x.png" alt="Dan Abramov"  width="213px" height="180"/>
           </Box>
          </Flex>
        
        <Flex display={'flex'} justifyContent={'center'}> 
        <Box mt={1}>
        <Text p={5} noOfLines={[1,2,3]}>Child Avatar Preview Estimated Age : 5-8 years</Text>
        <Text></Text>
       </Box>
       </Flex>

    
        <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={0}  mb={0}>
        <VscDeviceCamera size={30}/>
        </Box>
        </Flex>
        
        
        <Flex display={'flex'} justifyContent={'center'}>
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="sm" bg="#F5F5F5" width="100px" color="black"  >
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

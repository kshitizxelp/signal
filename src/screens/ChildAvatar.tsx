import { Box, Image, Flex, Text } from '@chakra-ui/react'
import React from 'react'

import { VscDeviceCamera } from 'react-icons/all';
export default function ChildAvatar() {
    return (
        <Flex direction="column" alignItems="center" position="relative" >
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
      
      <Flex display={'flex'} justifyContent={'center'}>
       <Box>
         <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={200} />
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
          <Image src="src/assets/Mask Group 1@3x.png" alt="Dan Abramov"  width="313px" height="280"/>
           </Box>
          </Flex>
        
    
        
        <Box mt={20}  mb={20} marginLeft="210px">
        <VscDeviceCamera size={30}/>
        </Box>
    
    
       </Box>
    
       
    
    
       </Flex>
      )
}

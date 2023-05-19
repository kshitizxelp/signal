import { Box, Image, Flex, Text, Button } from '@chakra-ui/react'
import React from 'react'

import { VscDeviceCamera } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
export default function ChildAvatar() {
   
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/mydashbord")
  }

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
       <Box boxSize="184px" marginLeft="135px" mt={4} >
         <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
       </Box>
    
    
       <Box ml={4} mt={4} textAlign="center">
           <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>
        </Box>
           
        <Box mt={4} marginLeft="70px" textAlign="center" width="313px" height="280">
          <Image src="src/assets/Mask Group 2@3x.png" alt="Dan Abramov" />
           </Box>
         
        <Box mt={4} textAlign="center">
          <Text>Child Avatar Preview 
            <br></br>
            Estimated Age : 5-8 years
          </Text>
        </Box>
      

          
    <Flex flexDirection="row" mt={10} justifyContent="center">
     <Button colorScheme="blue" borderRadius="20px" mr={30} size="lg" bg="#F5F5F5" width="110px" color="black">
          Save
        </Button>
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
          Next
        </Button>
     </Flex>
    
       </Box>
    
       
    
    
       </Flex>
      )
}

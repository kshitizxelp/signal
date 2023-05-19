import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

export default function Verify() {
  
    const navigate = useNavigate();

    const navigateTo = () =>{
         navigate("/CreateChild")
    }


  return (
    <Flex direction="column" alignItems="center" position="relative" >
       <Box
      boxShadow="dark-lg"
      p="6"
      rounded=""
      bg="white"
      borderRadius={60}
      height="620px"
      width="500px"
    >
      <Box boxSize="185px" marginLeft="135px" mt={10} >
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
    </Box>
    
    <Box mt={10} textAlign="center">
        <Text color="red" as="b" >Yay!</Text>
        <Text as="b" mt={2} >
            <br></br>
            We are exited to have
            <br></br>
            you onboard!
            <br></br>
            <br></br>
            Let us onboard your child now.
        </Text>
    </Box>
      
    <Box mt={12} textAlign="center" >
     <Button colorScheme="blue" size="lg" bg="#004570" width="313px" onClick={() => navigateTo()} >
          Next
        </Button>
      </Box>
     </Box>
    </Flex>
  )
}

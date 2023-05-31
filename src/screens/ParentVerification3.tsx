import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

export default function ParentVerification3() {
  
    const navigate = useNavigate();

    const navigateTo = () =>{
         navigate("/CreateChild")
    }


  return (
    <Box bg={'gray'} >
    <Flex direction="column" alignItems="center" position="relative" >
       <Box
      boxShadow="dark-lg"
      p="5"
      rounded=""
      bg="white"
      borderRadius={60}
      height="620px"
      width="500px"
      mt={5}
      mb={10}
    >
      <Flex display={'flex'} justifyContent={'center'}>
      <Box  mt={10} >
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={200} />
     </Box>
     </Flex>
    
     <Flex display={'flex'} justifyContent={'center'}>
         <Box mt={10}>
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
          </Flex>
      
        <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={12}>
        <Button colorScheme="blue" size="lg" bg="#004570" width="313px" onClick={() => navigateTo()} >
          Next
        </Button>
      </Box>
      </Flex>
     </Box>
    </Flex>
    </Box>
  )
}

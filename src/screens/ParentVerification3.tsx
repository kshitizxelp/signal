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
      borderRadius="50px"
      height="520px"
      width={{base:"290px",md:"350px",lg:"450px"}}
      mt="5px"
      mb="10px"
    >
      <Flex display={'flex'} justifyContent={'center'}>
      <Box  mt="10px" >
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="200px" />
     </Box>
     </Flex>
    
     <Flex display={'flex'} justifyContent={'center'}>
         <Box mt="10px">
          <Text color="red" as="b" >Yay!</Text>
          <Text as="b" mt="2px" >
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
        <Box mt="12px">
        <Button colorScheme="blue" size="lg" bg="#004570" width={{base:"280px",md:"300px",lg:"312px"}} onClick={() => navigateTo()} >
          Next
        </Button>
      </Box>
      </Flex>
     </Box>
    </Flex>
    </Box>
  )
}

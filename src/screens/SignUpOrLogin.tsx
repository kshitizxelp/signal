import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



export default function SignUpOrLogin() {
  const navigate = useNavigate();

  const Login1 = () => {
    navigate('/Login'); 
  };

  const Login2 = () => {
    navigate('SignUp');
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
      
      <Flex display={'flex'} justifyContent={'center'}>
      <Box>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={200} />
      </Box>
      </Flex>
      
      <Flex display={'flex'} justifyContent={'center'}>
         <Box mt={81}>
         <Button colorScheme="blue"  size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login2}>
          Sign Up
        </Button>
        </Box>
        </Flex>
       
        <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={10}>
        <Button colorScheme="blue"   size="lg" variant="outline" borderColor="rgba(0, 69, 112, 1)" color="rgba(0, 69, 112, 1)" width="313px" onClick={Login1}>
          Login
        </Button>
        </Box>
        </Flex>

      </Box>
    </Flex>
  )
}

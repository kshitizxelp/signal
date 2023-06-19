import { Flex, Box, Image, Text, Button, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router';

export default function ParentVerification() {
   
    const navigate = useNavigate();
    const Login1 = () => {
        navigate('/ParentVerification1',{ state: { param1: 'Aadhaar NUmber' } }); 
      };

    const Login2 = () =>{
        navigate('/ParentVerification1',{ state: { param1: 'Pan Number' } }); 

    };
    

  return (
    <Box bg={'gray'}>
    <Flex direction="column" alignItems="center" pt={'40px'} pb={'50px'}>
       <Box
      boxShadow="dark-lg"
      p="0"
      rounded=""
      bg="white"
      borderRadius={'50px'}
      // height="620px"
      width="450px"
      alignItems="center"
      justifyContent="center"
      mt={'10px'}
    >
      <Flex display={'flex'} justifyContent={'center'}>
       <Box mt={4} >
        <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'150px'} />
       </Box>
       </Flex>
     
       <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={'4px'} textAlign="left">
        <Text fontSize="18px" as="b" color="#004570" m={'10px'}>Parent Verification</Text>
            <Text mt={'6px'} m={'10px'} fontSize={'16px'}>
            Please help us in nurturing a safe online environment for children. 
         <br></br>
         <br></br>

         We enforce authentication of every user registering with us. 
         <br></br>
         <br></br>

        Please choose one of the below methods for authentication</Text>
      </Box>
      </Flex>
     
      <Flex display={'flex'} justifyContent={'center'}>
      <Box pt={'50px'} mb={'30px'}>
      <Button mt={'12px'} colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login1}>
          Aadhaar Card
        </Button>
        
        </Box>
        </Flex>

      <Flex display={'flex'} justifyContent={'center'}>
      <Box mb={'10px'}>
        <Button mt={'4px'} colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login2} >
          Pan Card
        </Button>
        </Box>
        </Flex>
        
       

        {/* <Checkbox borderColor="black" borderRadius="50%"  >Hello</Checkbox> */}
      </Box>
   </Flex>
   </Box>
  )
}

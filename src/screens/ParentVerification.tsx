import { Flex, Box, Image, Text, Button, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router';

export default function ParentVerification() {
   
    const navigate = useNavigate();
    const Login1 = () => {
        navigate('/AadharPan',{ state: { param1: 'Aadhaar NUmber' } }); 
      };

    const Login2 = () =>{
        navigate('/AadharPan',{ state: { param1: 'Pan Number' } }); 

    };
    

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
      <Box mt={4} textAlign="left">
      <Text fontSize="20px" as="b" color="#004570">Parent Verification</Text>
            <Text mt={6}>
        Please help us in nurturing a safe online environment for children. 
         <br></br>
         <br></br>

        We enforce authentication of every user registering with us. 
         <br></br>
         <br></br>

        Please choose one of the below methods for authentication</Text>
      </Box>

      <Button mt={12} colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login1}>
          Aadhaar Card
        </Button>

        <Button mt={4} colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login2} >
          Pan Card
        </Button>

        {/* <Checkbox borderColor="black" borderRadius="50%"  >Hello</Checkbox> */}
      </Box>
   </Flex>
  )
}

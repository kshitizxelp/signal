import { Flex, Box, Image, Text, Button, Checkbox } from '@chakra-ui/react'
import React from 'react'

export default function ParentVerification() {
  return (
   <Flex flexDirection="column" alignItems="center" >
        
      <Box boxSize="184px">
        <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
      </Box>
      <Box mt={8}>
      <Text fontSize="20px" as="b" color="#004570">Parent Verification</Text>
      <Box mt={8} width="313px" height="167px">
      <Text>
        Please help us in nurturing a safe online environment for children. 
         <br></br>
         <br></br>

        We enforce authentication of every user registering with us. 
         <br></br>
         <br></br>

        Please choose one of the below methods for authentication</Text>
        </Box>
      </Box>

      <Button mt={12} colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px">
          Aadhaar Card
        </Button>

        <Button mt={4} colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px">
          Pan Card
        </Button>

        <Checkbox borderColor="black" borderRadius="50%" >Hello</Checkbox>
      
   </Flex>
  )
}

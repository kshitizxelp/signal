import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function ChildVerification() {
    return (
        <Flex direction="column" alignItems="center" position="relative" >
           <Box
          boxShadow="dark-lg"
          p="6"
          rounded=""
          bg="white"
          borderRadius={60}
          width="500px"
        >
          <Box boxSize="185px" marginLeft="135px" >
            <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
          </Box>

          <Box textAlign="left" mt={4}>
       <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>
        </Box>

        <Box textAlign="left" mt={2}>
            <Text>Online safety of children is top priority to us. 
                <br></br>
                <br></br>
                To keep your child's identity safe, we will create an online avatar of the child using the phone camera.
                <br></br>
                <br></br>
                 The images or videos captured in this process are saved locally on your device. Signal will use only the meta data captured to create the avatar. 
                 <br></br>
                 <br></br>
                 Our algorithms will also verify whether the user is really a child. </Text>

        </Box>
        <Flex flexDirection="row" mt={10} justifyContent="center">
     <Button colorScheme="blue" borderRadius="20px" mr={30} size="lg" bg="#F5F5F5" width="110px" color="black">
          Save
        </Button>
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px">
          Next
        </Button>
     </Flex>

          </Box>
          </Flex>
          )
}

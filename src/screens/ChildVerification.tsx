import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

import { VscDeviceCamera } from 'react-icons/all';


export default function ChildVerification() {

   const navigate = useNavigate();

   const navigateTo = () => {
    navigate("/ChildVerification1")
   }

    return (
      <Box bg="#F2F5F7" width={'100%'}>
        <Flex justifyContent={'center'}>
         <Box
          // boxShadow="dark-lg"
          p="6"
          rounded=""
          bg="white"
          mt="50px"
          // borderRadius="60px"
          borderTopRadius="200px"
          borderBottomRadius="200px"
          width={{base:"290px",md:"300px",lg:"390px"}}
        >
          <Flex display={'flex'} justifyContent={'center'}>
            <Box>
            <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="150px"/>
           </Box>
           </Flex>

           <Flex display={'flex'} justifyContent={'center'}>
          <Box >
           <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>
         </Box>
         </Flex>

        <Box textAlign="left" m="10px">
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
        <Flex flexDirection="row" m="20px" justifyContent="center">
        <Button colorScheme="blue" borderRadius="20px" mr="30px" size="lg" bg="#004570" width="110px" color="white">
          Save
        </Button>
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
          Next
        </Button>
     </Flex>

          </Box>
          </Flex>
          </Box>
          )
}

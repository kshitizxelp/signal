import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserNameSuccess() {
 
  const navigate = useNavigate()
  
  const navigateTo = () => {
         navigate("/ChildOverview/ChildTasks")
  }

  return (
    <Flex justifyContent="center"  flexDirection="column" alignItems="center" alignContent="center" height="100vh" >
     <Box marginBottom="50px">
      <Box marginBottom="50px" marginLeft="80px" >
       <Image src="src/assets/Group 3574@3x.png"  alt="Well Done" width="300px" height="300px" />
       </Box>
       <Box display="flex" flexDirection="column" justifyContent="center" alignSelf="center" alignItems="center" >
        <Text  fontSize="20px" alignSelf="center" color="#09BEF2">Great!</Text>
        <Text marginTop="20px" color="#023049" as="b" >The selected tasks has been successfully assigned to Vineet</Text>
        <Button marginTop="50px" colorScheme="blue"  size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={() => navigateTo()}>
           OK
        </Button>
       </Box>
       </Box>
    </Flex>

  )
}

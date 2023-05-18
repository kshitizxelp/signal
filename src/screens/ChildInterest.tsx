import { Box, Button, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import {BsPlusCircle} from "react-icons/all"
import { useNavigate } from 'react-router'

export default function ChildInterest() {
  
    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/ChildVerification")
    }

  return (
    <Flex direction="column">
    <Box
 boxShadow="dark-lg"
 p="6"
 rounded=""
 bg="white"
 borderRadius={60}
 width="500px"
 alignItems="center"
 justifyContent="center"
>
    <Box textAlign="left">
    <Text fontSize="20px" as="b" color="#004570">Add Child's Interests</Text>
    </Box>
    <Box
    bg="gray"
    borderRadius={2}
    width="345px"
    height="125px"
    textAlign="center"
    justifyContent="center"
    alignContent="center"
    >
    <Text textAlign="left" ml={4}> Outdoor Games</Text> 

  <Stack ml={4} spacing={4} direction='row' mt={4} justifyContent="space-between" >
       <Flex alignItems="center" direction="column">
            <Radio
                value="1"
              />
            <Text mt={2}>Cricket</Text>
       </Flex>
        <Flex alignItems="center" direction="column">
              <Radio
                value="2"
              />
            <Text mt={2}>FootBall</Text>
        </Flex>
            <Flex alignItems="center" direction="column">
              <Radio
                value="3"
              />
              <Text mt={2}>Badminton</Text>
            </Flex>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="red" />
            <Text mt={2} color="red" as="u" >Add New</Text>
            </Flex>
  </Stack>
    </Box>
    <Box
    bg="gray"
    borderRadius={2}
    width="345px"
    mt={6}
    height="125px"
    >
    <Text textAlign="left" ml={4}> Outdoor Games</Text> 

  <Stack ml={4} spacing={4} direction='row' mt={4} justifyContent="space-between" >
       <Flex alignItems="center" direction="column">
            <Radio
                value="1"
              />
            <Text mt={2}>Cricket</Text>
       </Flex>
        <Flex alignItems="center" direction="column">
              <Radio
                value="2"
              />
            <Text mt={2}>FootBall</Text>
        </Flex>
            <Flex alignItems="center" direction="column">
              <Radio
                value="3"
              />
              <Text mt={2}>Badminton</Text>
            </Flex>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="red" />
            <Text mt={2} color="red" as="u" >Add New</Text>
            </Flex>
  </Stack>
    </Box>
    <Box
    bg="gray"
    borderRadius={2}
    width="345px"
    mt={6}
    height="125px"
    >
    <Text textAlign="left" ml={4}> Outdoor Games</Text> 

  <Stack ml={4} spacing={4} direction='row' marginTop="32px" justifyContent="space-between" >
       <Flex alignItems="center" direction="column">
            <Radio
                value="1"
              />
            <Text mt={2}>Cricket</Text>
       </Flex>
        <Flex alignItems="center" direction="column">
              <Radio
                value="2"
              />
            <Text mt={2}>FootBall</Text>
        </Flex>
            <Flex alignItems="center" direction="column">
              <Radio
                value="3"
              />
              <Text mt={2}>Badminton</Text>
            </Flex>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="red" />
            <Text mt={2} color="red" as="u" >Add New</Text>
            </Flex>
  </Stack>
    </Box>
    
    <Flex flexDirection="row" mt={10} justifyContent="center">
     <Button colorScheme="blue" borderRadius="20px" mr={30} size="lg" bg="#F5F5F5" width="110px" color="black">
          Save
        </Button>
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
          Next
        </Button>
     </Flex>

    </Box>
    </Flex>
  )
}

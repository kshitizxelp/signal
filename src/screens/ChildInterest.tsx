import { Box, Button, Checkbox, Flex, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

import {BsPlusCircle} from "react-icons/all"
import { useNavigate } from 'react-router'

export default function ChildInterest() {
  
    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/ChildVerification")
    }

  return (
    <Flex direction="column" >
    <Box textAlign="center">
    <Text fontSize="20px" as="b" color="#004570">Add Child's Interests</Text>
    </Box>
    <Flex flexDirection="column" justifyContent="space-between" alignItems="center" padding="20px" >
    <Box
    bg="lightgray"
    opacity="100%"
    borderRadius={2}
    width="375px"
    mt={6}
    height="125px"
    paddingLeft="20px"
    paddingRight="20px"
    paddingTop="10px"
    >
    <Text textAlign="left" ml={2}> Outdoor Games</Text> 

  <Stack ml={4} spacing={4} direction='row' marginTop="30px" justifyContent="space-between" >
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
      bg="lightgray"
      opacity="100%"
    borderRadius={2}
    width="375px"
    mt={6}
    height="125px"
    paddingLeft="20px"
    paddingRight="20px"
    paddingTop="10px"
    >
    <Text textAlign="left" ml={2}>Indoor Activities</Text> 

  <Stack ml={4} spacing={4} direction='row' marginTop="30px" justifyContent="space-between" >
       <Flex alignItems="center" direction="column">
            <Radio
                value="1"
              />
            <Text mt={2}>Baking</Text>
       </Flex>
        <Flex alignItems="center" direction="column">
              <Radio
                value="2"
              />
            <Text mt={2}>Origami</Text>
        </Flex>
            <Flex alignItems="center" direction="column">
              <Radio
                value="3"
              />
              <Text mt={2}>Mechanics</Text>
            </Flex>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="red" />
            <Text mt={2} color="red" as="u" >Add New</Text>
            </Flex>
  </Stack>
    </Box>
    <Box
      bg="lightgray"
      opacity="100%"
    borderRadius={2}
    width="375px"
    mt={6}
    height="125px"
    paddingLeft="20px"
    paddingRight="20px"
    paddingTop="10px"
    >
    <Text textAlign="left" ml={2}>Board Games</Text> 

  <Stack ml={4} spacing={4} direction='row' marginTop="32px" justifyContent="space-between" >
       <Flex alignItems="center" direction="column">
            <Radio
                value="1"
              />
            <Text mt={2}>Chess</Text>
       </Flex>
        <Flex alignItems="center" direction="column">
              <Radio
                value="2"
              />
            <Text mt={2}>Scrabble</Text>
        </Flex>
            <Flex alignItems="center" direction="column">
              <Radio
                value="3"
              />
              <Text mt={2}>Lego</Text>
            </Flex>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="red" />
            <Text mt={2} color="red" as="u" >Add New</Text>
            </Flex>
  </Stack>
    </Box>
    <Box
      bg="lightgray"
      opacity="100%"
    borderRadius={2}
    width="375px"
    mt={6}
    height="125px"
    paddingLeft="20px"
    paddingRight="20px"
    paddingTop="10px"
    >
    <Text textAlign="left" ml={2}>Creative Arts</Text> 

  <Stack ml={4} spacing={4} direction='row' marginTop="32px" justifyContent="space-between" >
       <Flex alignItems="center" direction="column">
            <Radio
                value="1"
              />
            <Text mt={2}>Painting</Text>
       </Flex>
        <Flex alignItems="center" direction="column">
              <Radio
                value="2"
              />
            <Text mt={2}>Singing</Text>
        </Flex>
            <Flex alignItems="center" direction="column">
              <Radio
                value="3"
              />
              <Text mt={2}>Guitar</Text>
            </Flex>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="red" />
            <Text mt={2} color="red" as="u" >Add New</Text>
            </Flex>
  </Stack>
    </Box>
    </Flex>

    <Flex flexDirection="row" marginTop="20px" justifyContent="center">
      <Checkbox borderColor="black" marginBottom="48px" />
      <Text marginLeft="10px">By checking this box you confirm that you have the right to provide 
        <br></br>
        this information either as a parent or carer (for learners under 13 years old) 
        <br></br>
        or that you have consent to provide such information (13years and over).</Text>
    </Flex>
    <Flex flexDirection="row" mt={10} justifyContent="center">
     <Button colorScheme="blue" borderRadius="20px" mr={30} size="lg" bg="#F5F5F5" width="110px" color="black">
          Save
        </Button>
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
          Next
        </Button>
     </Flex>

    </Flex>
  )
}

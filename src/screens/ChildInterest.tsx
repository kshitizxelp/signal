import { Box, Button, Flex, Radio, RadioGroup, Stack, Text ,ChakraProvider,Image,Checkbox} from '@chakra-ui/react'
import React from 'react'

import {BsPlusCircle ,FaAngleUp} from "react-icons/all"
import { useNavigate } from 'react-router'

export default function ChildInterest() {
  
    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/ChildVerification")
    }

    const Login = () =>{
      navigate("/CreateChild")
  }

  const LoginTo =()=>{
    navigate("/addchildinterests")
  }

  

  return (

<Box bg={'gray.400'}>
  <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'white'}
           >
    <Text pl={10} color={'#004570'} fontWeight={'bold'}> Add Child's Interests</Text>
    <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={100} pr={10}/>
   </Box>
    <ChakraProvider>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} p={10}>
        {/* Card 1 */}
        <Flex
          bg="gray.100"
          p={4}
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height={200}
        >
          <Box bg={'gray.300'} 
               display={"flex"}
               flexDirection={"row"}
               justifyContent={"space-between"}
               alignItems={"center"}
           >
          <Text pl={5}>Outdoor Games</Text> 
          <Text fontSize={30}  pr={5} onClick={LoginTo}><FaAngleUp /></Text> 
          </Box>
          
          <Box mt={10}>
          <Flex display={'flex'} alignItems="center" direction="row" gap={2}>
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
            />
            <Text mt={0}>Cricket</Text>
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              />
            <Text mt={0}>FootBall</Text>
              <Radio
                value="3"
                borderColor={'black'}
                colorScheme='green'
              />
              <Text mt={0}>Badminton</Text>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt={2} color="#004570" as="u" >Add New</Text>
            </Flex>
            </Flex>
            </Box>
            </Flex>
            <Flex
          bg="gray.100"
          p={4}
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height={200}
        >
          
          <Box bg={'gray.300'}
           display={"flex"}
           flexDirection={"row"}
           justifyContent={"space-between"}
           alignItems={"center"}
           >
           <Text pl={5}>Board Games</Text> 
           <Text fontSize={30} pr={5} onClick={LoginTo}><FaAngleUp /></Text> 
          </Box>
          
          <Box mt={10}>
          <Flex display={'flex'} alignItems="center" direction="row" gap={2}>
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
              />
            <Text mt={0}>Chess</Text>
     
       
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              />
            <Text mt={0}>Scrabble</Text>
       
          
              <Radio
                value="3"
                borderColor={'black'}
                colorScheme='green'
              />
              <Text mt={0}>Lego</Text>
              
            
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt={2} color="#004570" as="u" >Add New</Text>
            </Flex>

            </Flex>
            </Box>
            </Flex>


            <Flex
          bg="gray.100"
          p={4}
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height={200}
        >
          
          <Box bg={'gray.300'}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          >
           <Text pl={5}>Creative Arts</Text> 
           <Text fontSize={30} pr={5} onClick={LoginTo}><FaAngleUp /></Text> 
          </Box>
          
          <Box mt={10}>
          <Flex display={'flex'} alignItems="center" direction="row" gap={2}>
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
              />
            <Text mt={0}>Painting</Text>
     
       
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              />
            <Text mt={0}>Singing</Text>
       
          
              <Radio
                value="3"
                borderColor={'black'}
                colorScheme='green'
              />
              <Text mt={0}>Guitar</Text>
              
            
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt={2} color="#004570" as="u" >Add New</Text>
            </Flex>
  
            </Flex>
            </Box>
            </Flex>


            <Flex
          bg="gray.100"
          p={4}
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height={200}
        >
          
          <Box bg={'gray.300'} 
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          >
           <Text pl={5}>Indoor Activities</Text> 
           <Text fontSize={30} pr={5} onClick={LoginTo}><FaAngleUp/></Text> 
          </Box>
          
          <Box mt={10}>
          <Flex display={'flex'} alignItems="center" direction="row" gap={2}>
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
              />
            <Text mt={0}>Baking</Text>
     
       
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              />
            <Text mt={0}>Origami</Text>
       
          
              <Radio
                value="3"
                borderColor={'black'}
                colorScheme='green'
              />
              <Text mt={0}>Mechanics</Text>
              
            
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt={2} color="#004570" as="u" >Add New</Text>
            </Flex>

            </Flex>
            </Box>
            </Flex>


          
        

          
        

          
        
        

        {/* Add more cards as needed */}
      </Box>
    </ChakraProvider>
    <Flex display={'flex'} justifyContent={'center'} m={20} mb={40}>
    <Checkbox colorScheme='green' defaultChecked>
    </Checkbox>
    <Text p={10} noOfLines={[1,2,3]}>By checking this box you confirm that you have the right to provide this information either as a parent or carer (for learners under 13 years old) or that you have consent to provide such information (13years and over).</Text>
    </Flex>
    {/* </Box> */}

       <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Login}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
         Next
         </Button>
         </Flex>

    </Box>
  )
}

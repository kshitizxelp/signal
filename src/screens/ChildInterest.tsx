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

 <Box bg={'gray.400'} width="100%">
  
  <Box  display={"flex"} 
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={'white'}
           >
    <Text pl="10px" color={'#004570'} fontWeight={'bold'}> Add Child's Interests</Text>
    <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="100px" pr="10px"/>
   </Box>
    
    <ChakraProvider>
      <Box display="grid" gridTemplateColumns={{base:"repeat(1, 1fr)" ,md:"repeat(2,1fr)",lg:"repeat(3,1fr)" }} gap="10px" m="10px">
        {/* Card 1 */}
        <Flex
          bg="gray.100"
          p="4px"
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height={{base:"150px",md:"180px",lg:"200px"}}
          width={{base:"300px",md:"380px",lg:"400px"}}
        >
          <Box bg={'gray.300'} 
               display={"flex"}
               flexDirection={"row"}
               justifyContent={"space-between"}
               alignItems={"center"}
           >
          <Text pl="5px">Outdoor Games</Text> 
          <Text fontSize="30px"  pr="5px" onClick={LoginTo}><FaAngleUp /></Text> 
          </Box>
          
          <Box mt="10px">
          <Flex display={'flex'} alignItems="center" direction="row" gap="2px">
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
            />
            <Text >Cricket</Text>
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              />
            <Text >FootBall</Text>
              <Radio
                value="3"
                borderColor={'black'}
                colorScheme='green'
              />
            <Text>Badminton</Text>
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt="2px" color="#004570" as="u" >Add New</Text>
            </Flex>
            </Flex>
            </Box>
            </Flex>
          
         <Flex
          bg="gray.100"
          p="4px"
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height={{base:"150px",md:"180px",lg:"200px"}}
          width={{base:"300px",md:"380px",lg:"400px"}}
        >
          
          <Box bg={'gray.300'}
           display={"flex"}
           flexDirection={"row"}
           justifyContent={"space-between"}
           alignItems={"center"}
           >
           <Text pl="5px">Board Games</Text> 
           <Text fontSize="30px" pr="5px" onClick={LoginTo}><FaAngleUp /></Text> 
          </Box>
          
          <Box mt="10px">
          <Flex display={'flex'} alignItems="center" direction="row" gap="2px">
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
              />
            <Text >Chess</Text>
     
       
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              />
            <Text>Scrabble</Text>
       
          
              <Radio
                value="3"
                borderColor={'black'}
                colorScheme='green'
              />
              <Text >Lego</Text>
              
            
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt="2px" color="#004570" as="u" >Add New</Text>
            </Flex>

            </Flex>
            </Box>
            </Flex>


          <Flex
          bg="gray.100"
          p="4px"
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height={{base:"150px",md:"180px",lg:"200px"}}
          width={{base:"300px",md:"380px",lg:"400px"}}
        >
          
          <Box bg={'gray.300'}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          >
           <Text pl="5px">Creative Arts</Text> 
           <Text fontSize="30px" pr="5px" onClick={LoginTo}><FaAngleUp /></Text> 
          </Box>
          
          <Box mt="10px">
          <Flex display={'flex'} alignItems="center" direction="row" gap="2px">
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
          height={{base:"150px",md:"180px",lg:"200px"}}
          width={{base:"300px",md:"380px",lg:"400px"}}
        >
          
          <Box bg={'gray.300'} 
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          >
           <Text pl="5px">Indoor Activities</Text> 
           <Text fontSize="30px" pr="5px" onClick={LoginTo}><FaAngleUp/></Text> 
          </Box>
          
          <Box mt="10px">
          <Flex display={'flex'} alignItems="center" direction="row" gap="2px">
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
              />
            <Text>Baking</Text>
     
       
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              />
            <Text>Origami</Text>
       
          
              <Radio
                value="3"
                borderColor={'black'}
                colorScheme='green'
              />
              <Text>Mechanics</Text>
              
            
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt="2px" color="#004570" as="u" >Add New</Text>
            </Flex>

            </Flex>
            </Box>
            </Flex>


          
        

          
        

          
        
        

        {/* Add more cards as needed */}
      </Box>
    </ChakraProvider>
    <Flex display={'flex'} justifyContent={'center'}>
    <Checkbox colorScheme='green' defaultChecked pl="10px">
    </Checkbox>
    <Text mt="150px">By checking this box you confirm that you have the right to provide this information either as a parent or carer (for learners under 13 years old) or that you have consent to provide such information (13years and over).</Text>
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

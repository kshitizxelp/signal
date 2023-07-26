import React from 'react'
import { Box, Button, Flex, Radio, RadioGroup, Stack, Text ,ChakraProvider,Image,Checkbox} from '@chakra-ui/react'
import {FaAngleDown} from "react-icons/all"
import { useNavigate } from 'react-router'
const Addchildinterest = () => {

    const object=[
        {
            text:"OUTDOOR GAMES",
            
        },
        {
            text:"BOARD GAMES",
            
        },
        {
            text:"CREATIVE ARTS",
        }, 
        {
            text:"INDOOR ACTIVITIES",
            
        }
    ];

    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/ChildInterest")
    }
    const Backpage = () =>{
        navigate("/CreateChild")
    }
    const Nextpage = () =>{
        navigate("/ChildInterest")
    }

  return (
   <Box bg={'gray.400'} width="100%" >
  
  <Box  display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={'white'}
        width="100%"
        >
    <Text pl="10px" color={'#004570'} fontWeight={'bold'}> Add Child's Interests</Text>
    <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="100px" pr="10px"/>
   </Box>
      
      <ChakraProvider>
      <Box display="grid" gridTemplateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap="10px" m="5px">
      {object.map((item: any) => (
       <Box bg={'white'} 
               display={"flex"}
               flexDirection={"row"}
               justifyContent={"space-between"}
               alignItems={"center"}
               height={{base:"90px",md:"90px",lg:"90px"}}
               borderRadius="10px"
           >
          <Text pl="5px">{item.text}</Text> 
          <Text fontSize="30px" pr="5px" onClick={navigateTo}><FaAngleDown/></Text> 
          </Box>
      ))}
          </Box>
          </ChakraProvider>

         
          <Flex display={'flex'} justifyContent={'center'} mt="20px" >
           <Checkbox colorScheme='green' defaultChecked mb="130px" pl="10px">
           </Checkbox>
           <Text mt="40px" >By checking this box you confirm that you have the right to provide this information either as a parent or carer (for learners under 13 years old) or that you have consent to provide such information (13years and over).</Text>
          </Flex>
      
          
        <Flex display={'flex'} justifyContent={'center'}>
       <Button colorScheme="blue" borderRadius="20px" mb="50px" mr="30px" size="lg" bg="#F5F5F5" width="110px" color="black"  onClick={Backpage}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Nextpage}>
         Next
        </Button>
        </Flex>  
        
    

   </Box>
  )
}

export default Addchildinterest
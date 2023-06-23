import { Box, Button, Flex, Radio, RadioGroup, Stack, Text ,ChakraProvider,Image,Checkbox} from '@chakra-ui/react'
import React from 'react'

import {BsPlusCircle ,FaAngleUp ,FaArrowLeft} from "react-icons/all"
import { useNavigate } from 'react-router'

export default function CreateNewTask() {
  
    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/CreateNewTask1")
    }

    const Back = () =>{
      navigate("/SelectedTaskAssign")
  }

  const LoginTo =()=>{
    navigate("")
  }
  const data=[
              {
                head:"GopiSunkara",
                itemone:"Light",
                itemtwo:"Sound",
                itemthree:"Water"

              },
              {
                head:"GopiSunkara",
                itemone:"Light",
                itemtwo:"Sound",
                itemthree:"Water"

              },
              {
                head:"GopiSunkara",
                itemone:"Light",
                itemtwo:"Sound",
                itemthree:"Water"

              },
              {
                head:"GopiSunkara",
                itemone:"Light",
                itemtwo:"Sound",
                itemthree:"Water"

              },
              
  ];
  const [value, setValue] = React.useState('1');
   console.log("hiii",value)

  return (

<Box bg={'gray.400'} width="100%" height="100%">
  
 
  <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'white'}
           width="100%"
          >
            <Box display={'flex'}>
            <Text pl={10} color={'#004570'} fontWeight={'bold'}>  <FaArrowLeft/></Text>
            <Text pl={2} color={'#004570'} fontWeight={'bold'}>GopiSunkara</Text>
            </Box>
    
          <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={100} pr={10}/>
          </Box>

         <Flex display={'flex'} justifyContent={'center'} mt={5}>
          <Box>
            <Text  color={'#004570'}  fontWeight={'bold'}>Create Custom Task for GopiSunkaraa</Text>
          </Box>
        </Flex>
    
    <ChakraProvider>
      <Box display="grid" gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}} gap={4} p={10}>
        {/* Card 1 */}
       {data.map((item)=>(
        <Flex
          bg="gray.100"
          p={4}
          borderRadius="md"
          boxShadow="md"
          flexDirection="column"
          height="95%"
          width="90%"
        >
          
          <Box bg={'gray.300'} 
               display={"flex"}
               flexDirection={"row"}
               justifyContent={"space-between"}
               alignItems={"center"}
              
         >
          <Text pl={5}>{item.head}</Text> 
          <Text fontSize={30}  pr={5} ><FaAngleUp /></Text> 
          </Box>
          
          <Box mt={10}>
          <Flex display={'flex'} alignItems="center" direction="row" gap={2}>
          
          <RadioGroup onChange={setValue} value={value} >
          <Stack direction='row'>
          <Radio value={item.itemone} borderColor={'red.200'}>{item.itemone}</Radio>
          <Radio value={item.itemtwo} borderColor={'red.200'}>{item.itemtwo}</Radio>
          <Radio value={item.itemthree} borderColor={'red.200'}>{item.itemthree}</Radio>
         </Stack>
         </RadioGroup>
           
            <Flex  alignItems="center" direction="column">
            <BsPlusCircle color="#004570" />
            <Text mt={2} color="#004570" as="u" >Add New</Text>
            </Flex>

            </Flex>
            </Box>
            </Flex>
            ))}

       
      </Box>
    </ChakraProvider>

    {/* <Box display={"flex"}
            flexDirection={"row"}
            p={20}
           
           
           > */}
    <Flex display={'flex'} justifyContent={'center'} m={5} >
    <Checkbox colorScheme='green' defaultChecked>
    </Checkbox>
    <Text p={1} >By checking this box you confirm that you have the right to provide this information either as a parent or carer (for learners under 13 years old) or that you have consent to provide such information (13years and over).</Text>
    </Flex>
    {/* </Box> */}

       <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
         Next
         </Button>
         </Flex>

    </Box>

  )
}

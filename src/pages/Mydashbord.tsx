import React from 'react'
import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    Select,
    Text,
    Link,
    Spacer,
    HStack,
    Avatar
  } from "@chakra-ui/react";
import Nav from './Nav';

function Mydashbord() {
    const dataObj = [
        {
          image: "src/assets/girl@3x.png" ,
          text: "Gopi",
        },
        {
            image: "src/assets/boy@3x.png" ,
            text: "GopiSunkara",
          },
          {
            image: "src/assets/girl@3x.png" ,
            text: "GopiSunkara",
          },
          {
            image: "src/assets/boy@3x.png" ,
            text: "GS",
          },
        
      ];
  return (
    <Box bg={'gray.300'}>
        <Nav/>
        <Box mt={10} pl={5}>
        <Text fontSize={16} fontWeight={'bold'}>My Dashboard</Text>
        </Box>
      
        {dataObj.map((item) => (
   <Flex display={'flex'} justifyContent={'center'}>
    <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={10} 
            borderRadius={50}
            width={500}
            height={100}
            bg={'white'}
            mb={10}>
    {/* <Image src={item.image} alt="Dan Abramov"  height={90} width={100} borderRadius={10}/> */}
    <Avatar name='Dan Abrahmov' size='xl' src={item.image} />
    <Text>{item.text}</Text>
    </Box>   
    </Flex>
   
        ))}
        <Flex display={'flex'} justifyContent={'center'}>
        <Box pt={30} mb={20}>
            <Button colorScheme="blue" size="sm" bg="rgba(0, 69, 112, 1)" width="413px">Add Child</Button>
        </Box>
        </Flex>
    </Box>
    
  )
}

export default Mydashbord
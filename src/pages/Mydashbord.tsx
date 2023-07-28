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
import Nav from '../component/Nav';
import { Outlet, useNavigate } from 'react-router-dom';

function Mydashbord() {

  const isChildTasksRoute = location.pathname   === "/Mydashbord"

   
  const navigate = useNavigate();

  const navigateTo = ( par:any ) => {
      navigate("/ChildOverview",{ state:{param1:par} })
  }

    const dataObj = [
        {
          image: "src/assets/girl@3x.png" ,
          text: "Gayathri",
        },
        {
            image: "src/assets/boy@3x.png" ,
            text: "Gopi",
          },
          {
            image: "src/assets/girl@3x.png" ,
            text: "Rani",
          },
          {
            image: "src/assets/boy@3x.png" ,
            text: "Vineet Agarwal",
          },
        
      ];
  return (
     <>
    <Nav/>
    { isChildTasksRoute && (
    <Box bg={'gray.300'}>
        <Box>
         
        <Box>
        
        <Text fontSize={16} fontWeight={'bold'} color={'#004570'} ml={30}>My Dashboard</Text>
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
            mb={10} 
            onClick={() => navigateTo(item.text)} cursor={"pointer"}>
    <Avatar name='Dan Abrahmov' size='xl' src={item.image} />
    <Text>{item.text}</Text>
    
    </Box>   
    </Flex>
   
        ))}
        <Flex display={'flex'} justifyContent={'center'}>
        <Box pt={30} mb={20}>
            <Button colorScheme="blue" size="sm" bg="rgba(0, 69, 112, 1)" width={{base:"270px",md:"350px",lg:"513px"}} height="50px">Add Child</Button>
        </Box>
        </Flex>
        </Box>
    </Box>
    )}
    <Outlet/>
    </>
  )
}

export default Mydashbord
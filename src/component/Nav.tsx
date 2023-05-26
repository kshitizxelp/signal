import { Box, Button, Flex,Image, Input, Select, Text ,Link, HStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiTwotoneBell, MdDashboardCustomize,GiWantedReward,AiFillMessage
} from 'react-icons/all';

export default function Nav() {

    const navigate = useNavigate();

    const Login = () =>{
        navigate('')
    }

   

  return (
       <Box bg="white"   >
     
       <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            >
       
       <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
       
       <HStack gap={"5"} pr={5}>
        <AiTwotoneBell/> 
        <MdDashboardCustomize/>
        <GiWantedReward/> 
<Text onClick={Login}><AiFillMessage /></Text>
      </HStack>
      </Box>
     
       </Box>
       
      
      
       
  

   
  )
}

import { Box, Button, Flex,Image, Input, Select, Text ,Link, HStack} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AiTwotoneBell, MdDashboardCustomize,GiWantedReward,AiFillMessage
} from 'react-icons/all';

export default function Nav() {


    const navigate = useNavigate();

    const navigateTo = () =>{
        navigate('')
    }
   
   const navigateTo1 = () => {
     navigate('/Mydashbord/more')
   }

   const navigateTo2 = () => {
     navigate("/Mydashbord/Notifications")
   }

   const navigateTo3 = () => {
     navigate("/Rewards")
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
        <AiTwotoneBell onClick={() => navigateTo2()} /> 
        <MdDashboardCustomize  onClick={() => navigateTo()}  />
        <GiWantedReward  onClick={() => navigateTo3()} /> 
     <AiFillMessage onClick={() => navigateTo1()} />
      </HStack>
      </Box>
       </Box>
  )
}

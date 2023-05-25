import { Box, Image,Text } from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const navigateTo = () =>{
        navigate("/ChildOverview")
    }

    const navigateTo1 = () => {
        navigate("/ChildOverview/ChildTasks")
    }

    const navigateTo2 = () => {
        navigate("/ChildOverview/ChildRewards")
    }
   
  return (
       <Box bg="white"   >
     
       <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            >
        <Text marginLeft="10px">Vineet</Text>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
      </Box>
 
      <Box display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}>
        <Text onClick={() => navigateTo() }>Overview</Text>
        <Text onClick={() => navigateTo1()}>Tasks</Text>
        <Text onClick={() => navigateTo2()}>Rewards</Text>
      </Box>
     
       </Box>
       
   
  )
}


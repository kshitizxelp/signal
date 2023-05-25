import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'

// import { TbCoins } from 'react-icons-all'

import { AiTwotoneBell, MdDashboardCustomize,TbCoins,AiFillMessage
} from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

export default function RewardNav() {

    const navigate = useNavigate()

 const navigateTo = () => {
      navigate("/Rewards")
 }
 const navigateTo1 = () => {
    navigate("/Rewards/RewardSetup")
}
const navigateTo2 = () => {
    navigate("")
}

  return (
    <Box bg="gray.300"   >
    <Box  display={"flex"}
         flexDirection={"row"}
        //  justifyContent={"space-between"}
         alignItems={"center"}
         >
    
    <Image src="src/assets/Group 780@3x.png" alt="Dan Abramov" margin="15px" height="60px" width="160px" />
   </Box>
   <Box height="220px" bg="orange.300" >
     <TbCoins  color="yellow" height="100px" />
   </Box>
   <Box display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'white'}
            >
        <Text pl={5} onClick={() => navigateTo() }>History</Text>
        <Text onClick={() => navigateTo1()}>Setup</Text>
        <Text pr={5} onClick={() => navigateTo2()}>Catelogue</Text>
      </Box>
    </Box>
  )
}

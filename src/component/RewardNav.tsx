import { Box, Text, Image ,Flex} from '@chakra-ui/react'
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

const navigateTo3 = () => {
  navigate("/TopUp")
}
  return (
    <Box bg="gray.300"   w="100%" >
    <Box  display={"flex"}
         flexDirection={"row"}
        //  justifyContent={"space-between"}
         alignItems={"center"}
         >
    
    <Image src="src/assets/Group 780@3x.png" alt="Dan Abramov" margin="15px" height="60px" width="160px" />
   </Box>
   <Box w="100%">
    <Flex justifyContent={'center'} >
    <Box height={{base:"150px",md:"180px",lg:"200px"}} bg="orange.300" width={{base:"350px",md:"400px",lg:"500px"}} mb="10px" borderRadius={5}>
     <Text fontWeight={'bold'} color={'white'} pl="30px">Reward points Balance</Text>

     <Flex justifyContent={'center'}>
     <Box  pt="50px">
     <Text fontWeight={'bold'} color={'white'} >23,000 pts</Text>
     <Text borderRadius={10} bg={'white'} width="100px" textAlign={'center'} onClick={navigateTo3}>Top Up</Text>
     </Box>
     </Flex>
   
     <Text pt="10px" pl="20px"><TbCoins  color="yellow" height="200px" /></Text>
     </Box>
     </Flex>
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

import React from 'react'
import { Box,Text,Flex,Image,Button } from '@chakra-ui/react'
import {  TbCoins ,} from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

const UserNameSuccessRewards = () => {

    const navigate =useNavigate()
    const Login =()=>{
        navigate("/Rewards")
    }
  return (
    <Box>
         <Flex justifyContent="center"  flexDirection="column" alignItems="center" alignContent="center" height="100vh" >
     <Box marginBottom="50px">
      <Box marginBottom="50px" marginLeft="80px" >
       <Image src="src/assets/Group 3574@3x.png"  alt="Well Done" width="300px" height="300px" />
       </Box>
       <Box display="flex" flexDirection="column" justifyContent="center" alignSelf="center" alignItems="center" >
        <Text  fontSize="20px" alignSelf="center" color="#09BEF2">Great!</Text>
        <Text marginTop="20px" color="#023049" as="b" p={"20px"}><TbCoins color="#FE9923" Size="50px"/>10,000 Reward points have been successfully added to your wallet.</Text>
        
        <Button marginTop="50px" colorScheme="blue"  size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login}>
           OK
        </Button>
       </Box>
       </Box>
    </Flex>
    </Box>
  )
}

export default UserNameSuccessRewards
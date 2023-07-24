import React from 'react'
import {Box,Text,Image,Flex ,HStack,Input, Button} from '@chakra-ui/react'
import { AiOutlineArrowLeft , TbCoins ,} from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
const TopUp = () => {

    const navigate = useNavigate()

    const Login =()=>{
        navigate("/UserNameSuccessRewards")
    }

    const inputs :any = [
        {
            name:"Enter amount in INR",
            label:"Amount",
            type:"number",
        },
        {
          name: "Autofill",
          label: "Signal points",
          type: "number",
        },
      
      ];
  return (
    <Box bg={'gray.300'} width="100%"  >
      <Box>
      <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'gray.200'}
           width="100%"
           >
       <HStack gap={"5"} pr={5}>
       <Text marginLeft="10px" color={'#004570'} ><AiOutlineArrowLeft/></Text>
       <Text marginLeft="10px" color={'#004570'} >Top Up</Text>
       </HStack>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height="100px"/>
      </Box> 
      </Box>

     <Box mt="5px" pb="2px">
      <Flex justifyContent={'center'}>
        <Box height={{base:"150px",md:"180px",lg:"200px"}} bg="orange.300" width={{base:"300px",md:"400px", lg:"450px"}}  mb="10px" borderRadius={5}>
       <Text fontWeight={'bold'} color={'white'} pl="30px">Reward points Balance</Text>

      <Flex justifyContent={'center'}>
       <Box  pt="80px">
       <Text fontWeight={'bold'} color={'white'} >23,000 pts</Text>
       </Box>
       </Flex>
   
     <Text pt="10px" pl="20px"><TbCoins  color="yellow" height="200px" /></Text>
       </Box>
       </Flex>
     </Box>

      <Flex justifyContent={'center'}>
     <Box >
        <Text color={'#004570'}>Top Up Signal Points</Text>
     </Box>
     </Flex>

     
     {
     inputs.map((item :any)=>(
        <Box>
     <Flex justifyContent={'center'}>
     <Box>
    <Text>{item.label}</Text>
    <Input placeholder={item.name}
             type={item.type}
              size='md' 
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="300px"
              mt="4px" />
         </Box>
         </Flex>
     </Box>
     ))}

<Flex display="flex" justifyContent="center">
   <Button width="120px" color="white" borderRadius="10px" bg="#004570" mt="10px" mb="5px" onClick={Login}>Pay</Button>
   </Flex>

    </Box>
  )
}

export default TopUp
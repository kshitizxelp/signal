import { Box, Text ,Input ,Select ,Flex ,Grid ,ChakraProvider,Link,Image} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../screens/Login'

export default function RewardSetup() {

  const navigate = useNavigate()

  const Login =()=>{
    navigate("/Rewards/RewardUpdate")
  }
  const obg=[
    
    { 
       
        image:"src/assets/Mask Group 1@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        link:"Add"
    },
    { 
       
        image:"src/assets/Mask Group 1@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        link:"Add"
    },
    { 
       
      image:"src/assets/Mask Group 1@3x.png",
      item:"Super Math Spy",
      itemvalue:"4000RP",
      link:"Add"
  },
  { 
       
    image:"src/assets/Mask Group 1@3x.png",
    item:"Super Math Spy",
    itemvalue:"4000RP",
    link:"Add"
},
  ]
  return (
   <Box bg="gray.300" width="100%">
    <Flex  justifyContent={'center'}>
      <form>
    <Box ml="20px">
     <Text>Reward Name</Text>
    <Input placeholder='medium size' size='md'  variant="outline"
              bgColor="white"
              borderColor="black"
              width={{base:"280px",md:"290px",lg:"313px"}}
              mt="4px" />
              <Text>Select Category</Text>
   <Select placeholder='Select'  width={{base:"280px",md:"290px",lg:"313px"}}   bgColor="white" borderColor="black"  mt="4px">
    <option value='Option1'>math</option>
    <option value='Option2'>maths</option>
   </Select>
   <Text>Target Points</Text>
   <Input placeholder='medium size' size='md'  variant="outline"
              bgColor="white"
              borderColor="black"
              width={{base:"280px",md:"290px",lg:"313px"}}  
              mt="4px"/>

    </Box>
    </form>
    </Flex>
    <Flex display={'flex'} justifyContent={'center'}>
    <Box mt="10px">
      <Text borderRadius="10px" textAlign={'center'} bg={'white'} width={{base:"280px",md:"290px",lg:"313px"}}>Add to catalogue</Text>
    </Box>
    </Flex>
    <Box borderBottom={'2px'} mt={'10px'} w="80%" ml="30px"></Box>
    <Flex display={'flex'} justifyContent={'center'}>
     
    <Box mt="10px">
      <Text color={'#004570'}> Reward Catalogue</Text>
    </Box>
    </Flex>

    <ChakraProvider>
        <Box display="grid" gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="50px" m="10px">
          
         {obg.map((item)=>(
        <Box bg={'white'} h="150px" w="150px" borderRadius="50%">
        <Flex display={'flex'} justifyContent={'center'}>  
        <Image src={item.image} alt="" w="100px"
          h="100px"
         mt="25px" onClick={Login}/>
        </Flex>
        <Flex justifyContent={'center'}>
        <Box mt="10px">
            <Text fontSize="14px">{item.item}</Text>
            <Text fontSize="14px" pl="15px">{item.itemvalue}</Text>
            <Link color={'orange.500'} pl="15px">{item.link}</Link>
        </Box>
        </Flex>
           
        </Box>
        ))}
        </Box>
        
        </ChakraProvider>

   </Box>
  )
}

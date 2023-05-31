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
    <Flex display={'flex'} justifyContent={'center'}>
      <form>
    <Box mt="10px">
     <Text>Reward Name</Text>
    <Input placeholder='medium size' size='md'  variant="outline"
              bgColor="white"
              borderColor="black"
              width="333px"
              mt="4px" />
              <Text>Select Category</Text>
   <Select placeholder='Select'  width="333px"   bgColor="white" borderColor="black"  mt="4px">
    <option value='Option1'>math</option>
    <option value='Option2'>maths</option>
   </Select>
   <Text>Target Points</Text>
   <Input placeholder='medium size' size='md'  variant="outline"
              bgColor="white"
              borderColor="black"
              width="333px"  mt="4px"/>

    </Box>
    </form>
    </Flex>
    <Flex display={'flex'} justifyContent={'center'}>
    <Box mt="10px">
      <Text borderRadius={10} textAlign={'center'} bg={'white'} width="300px">Add to catalogue</Text>
    </Box>
    </Flex>
    <Box borderBottom={'2px'} mt={'10px'} w="80%" ml="100px"></Box>
    <Flex display={'flex'} justifyContent={'center'}>
     
    <Box mt="20px">
      <Text color={'#004570'}> Reward Catalogue</Text>
    </Box>
    </Flex>

    <ChakraProvider>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={20} p={20}>
    
         {obg.map((item)=>(
        <Box bg={'white'} h="150px" w="150px" borderRadius="50%">
        <Flex display={'flex'} justifyContent={'center'}>  
        <Image src={item.image} alt="" w="100px"
          h="100px"
         mt="25px" onClick={Login}/>
        </Flex>
        <Flex justifyContent={'center'}>
        <Box mt="10px">
            <Text fontSize={14}>{item.item}</Text>
            <Text fontSize={14} pl="15px">{item.itemvalue}</Text>
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

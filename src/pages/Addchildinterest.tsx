import React from 'react'
import { Box, Button, Flex, Radio, RadioGroup, Stack, Text ,ChakraProvider,Image,Checkbox} from '@chakra-ui/react'
import {FaAngleDown} from "react-icons/all"
import { useNavigate } from 'react-router'
const Addchildinterest = () => {

    const object=[
        {
            text:"gopi sunkara",
            
        },
        {
            text:"gopi sunkara",
            
        },
        {
            text:"gopi sunkara",
        }, 
        {
            text:"gopi sunkara",
            
        }
    ];

    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/ChildInterest")
    }
    const Backpage = () =>{
        navigate("/CreateChild")
    }
    const Nextpage = () =>{
        navigate("/ChildInterest")
    }

  return (
   <Box bg={'gray.400'} width="100%">
  
  <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'white'}
            width="100%"
           >
    <Text pl={10} color={'#004570'} fontWeight={'bold'}> Add Child's Interests</Text>
    <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={100} pr={10}/>
   </Box>
      
      <ChakraProvider>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} p={10}>
      {object.map((item: any) => (
       <Box bg={'white'} 
               display={"flex"}
               flexDirection={"row"}
               justifyContent={"space-between"}
               alignItems={"center"}
               height={70}
               borderRadius={10}
           >
          <Text pl={5}>{item.text}</Text> 
          <Text fontSize={30} pr={5} onClick={navigateTo}><FaAngleDown/></Text> 
          </Box>
      ))}
          </Box>
          </ChakraProvider>

         
          <Flex display={'flex'} justifyContent={'center'} m={20} mb={40}>
           <Checkbox colorScheme='green' defaultChecked>
           </Checkbox>
           <Text p={10} noOfLines={[1,2,3]}>By checking this box you confirm that you have the right to provide this information either as a parent or carer (for learners under 13 years old) or that you have consent to provide such information (13years and over).</Text>
          </Flex>
      
          
        <Flex display={'flex'} justifyContent={'center'}>
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black"  onClick={Backpage}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Nextpage}>
         Next
        </Button>
        </Flex>  
        
    

   </Box>
  )
}

export default Addchildinterest
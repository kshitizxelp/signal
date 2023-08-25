import React from "react";
import {Box,Text,Image,Flex,Button,HStack} from "@chakra-ui/react"
import {  RiDeleteBinLine,FaArrowLeft } from "react-icons/all"
import { useNavigate } from "react-router-dom";


const CreateNewTask3 =()=>{
    const navigate = useNavigate();

    const backpage =()=>{
        navigate("/CreateNewTask2")
    };
     
    const nextpage =()=>{
        navigate("/TaskAddedSuccessfully")
    };


    const data= [
        {
          head:"Learning",
          taskname:"Light",
          points:"20",
        },
        {
            head:"Shadow Practice",
            taskname:"Critical Thinking",
            points:"10",
          },
          {
            head:"Interests",
            taskname:"Food",
            points:"30",
          },
          {
            head:"Better Me",
            taskname:"Hobits",
            points:"60",
          },
       ]
    return(
     
        <Box bg="#F2F5F7"  width="100%">
          
        <Box display={'flex'} justifyContent="space-between" alignItems={'center'} bg="white">
               
               <Box display="flex" justifyContent="space-evenly" alignItems={'center'}>
                <Text color="#004570" ml="10px" onClick={backpage}><FaArrowLeft size="20"/></Text>
                <Text ml="20px" color={'#004570'}>Gopi</Text>
               </Box>

           <Image src="src/assets/SIGNAL LOGO (2)@3x.png" height="100px"/>
       </Box>
          
          
          <Box>
          <Text fontSize="20px" fontWeight="bold" m="20px">Create custom task for Shreya</Text> 
          <Text m="20px">You have selected these 4 tasks for Gopi.</Text>
          </Box>

          <Box
                display="grid"
                gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
                gridGap="5px"
                marginTop="10px"
                >
         {data.map((item)=>(
       <Flex justifyContent={"center"}>
       <Box bg="gray.300" height="120px" width={{ base: '280px', md: '300px', lg: '400px' }} m='5px' >
          <Text bg={'green'} pt={'5px'} color={'white'} pl={'10px'}>{item.head}</Text>
          <HStack spacing="2px" marginLeft="8px" justifyContent="space-between" display="flex" mt='20px'>
          <Text>{item.taskname}</Text>
          <Text>{item.points}</Text>
          {/* <Text as="u"  style={{ cursor: 'pointer' }} color={'blue'} >Add Content</Text> */}
         <Text p="2px"><RiDeleteBinLine /></Text>
         </HStack>
         </Box>
       </Flex>
         ))}
     </Box>

                 <Flex flexDirection="row" justifyContent="center" mt="50px">
                    <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={backpage} >
                        Back
                    </Button>

                    <Button colorScheme="blue" borderRadius="20px" size="lg" bg="#004570" width="110px" onClick={nextpage} >
                        Save
                    </Button>
                   </Flex>

        </Box>

    )
}
export default CreateNewTask3;
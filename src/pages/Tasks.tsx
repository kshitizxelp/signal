import React from 'react'
import {
    Box,
    ChakraProvider,
    Button,
    Flex,
    Image,
    Input,
    Select,
    Text,
    Link,
    Spacer,
    HStack,
    Avatar,
    
  } from "@chakra-ui/react";
  import {GiTrophyCup ,FcCalendar ,FcAlarmClock } from 'react-icons/all';

const Tasks = () => {
    const dataObj = [
        {
          image: "src/assets/SIGNAL LOGO (2)@3x.png" ,
          innertitle: "Germination of Seeds",
          Outertitle:"Learning",
          contentone:"completion",
          contenttwo:"Average Score",
          contentthree:"Rewards",
          valeone:"20%",
          valuetwo:"68%",
          valuethree:"50pts"
        },
        {
            image: "src/assets/SIGNAL LOGO (2)@3x.png" ,
            innertitle: "Dress Independently",
            Outertitle:"Better Me",
            contentone:"completion",
            contenttwo:"Average Score",
            contentthree:"Rewards",
            valeone:"20%",
            valuetwo:"68%",
            valuethree:"50pts"
          },
          {
            image: "src/assets/SIGNAL LOGO (2)@3x.png" ,
            innertitle: "Germination of Seeds",
            Outertitle:"Hobbies",
            contentone:"completion",
            contenttwo:"Average Score",
            contentthree:"Rewards",
            valeone:"20%",
            valuetwo:"68%",
            valuethree:"50pts"
          },
         
        ];


const obj=[

         {
          insidetitle:"Division in Decimals(Math)",
          image:"src/assets/SIGNAL LOGO (2)@3x.png",
          date:"4 Dec 2023",
          time:"2m 14s",
          contentone:"Completion :",
          contenttwo:"Rewards :",
          valueone:"50%",
          valuetwo:"50pts"

         },
         {
            insidetitle:"Germination of Seeds(Biology)",
            image:"src/assets/SIGNAL LOGO (2)@3x.png",
            date:"4 Dec 2023",
            time:"2m 14s",
            contentone:"Completion :",
            contenttwo:"Rewards :",
            valueone:"50%",
            valuetwo:"50pts"
  
           },
           {
            insidetitle:"Division in Decimals(Math)",
            image:"src/assets/SIGNAL LOGO (2)@3x.png",
            date:"4 Dec 2023",
            time:"2m 14s",
            contentone:"Completion :",
            contenttwo:"Rewards :",
            valueone:"50%",
            valuetwo:"50pts"
  
           },
           {
            insidetitle:"Germination of Seeds(Biology)",
            image:"src/assets/SIGNAL LOGO (2)@3x.png",
            date:"4 Dec 2023",
            time:"2m 14s",
            contentone:"Completion :",
            contenttwo:"Rewards :",
            valueone:"50%",
            valuetwo:"50pts"
  
           },
  
  
  


];


  return (
    <Box bg={'gray.300'}>

     <ChakraProvider>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} p={10}>
       
       {dataObj.map((item)=>(
        <Box>
        <Text pl={5} color={'#004570'}>{item.Outertitle}</Text>
        
        <Box bg={'white'} borderRadius={10}>
        <Flex display={'flex'} justifyContent="space-between">
        
            <Box p={5}>
            <Avatar name='' size='xl' src={item.image} />
           </Box>
            
            
               <Box>
               
                <Text fontWeight={'bold'} color={'#004570'}>{item.innertitle}</Text>
               
                <Flex direction={'row'} justifyContent="space-between">
              
                <Box p={5}>
                    <Text>{item.contentone}</Text>
                    <Text>{item.contenttwo}</Text>
                    <Text>{item.contentthree}</Text>
                </Box>
                
                <Box p={5}>
                 <Flex display={'flex'} justifyContent="space-evenly"> 
                <Box mt={12}>
                <Text color={'yellow.900'}><GiTrophyCup/></Text>
                </Box>
                <Box pl={2}>
                 <Text>{item.valeone}</Text>
                 <Text>{item.valuetwo}</Text>
                 <Text>{item.valuethree}</Text>
                
                  </Box>
                </Flex> 
                </Box>
                </Flex>
             </Box>
            
           
        </Flex>
        </Box>
        </Box>
        ))}
      
      </Box>
      </ChakraProvider>
       
    <Flex display={'flex'} justifyContent={'center'}>
    <Box>
    <Text color={'#004570'} fontSize={16} fontWeight={'bold'}>Recently Completed Tasks</Text>
    </Box>
    </Flex>

      <ChakraProvider>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} p={10}>
       
      {
            obj.map((item)=>(
        <Box>
        {/* <Text pl={5} color={'#004570'}>Recently Completed Tasks</Text> */}
       
        <Box bg={'white'} borderRadius={10}>
        <Flex display={'flex'} justifyContent="space-between">
        
            <Box p={5}>
            <Avatar name='' size='xl' src={item.image}/>
           </Box>

             <Box >
               
                <Text fontWeight={'bold'} color={'#004570'}>{item.insidetitle}</Text>

                 <Box>
                    <Flex display={'flex'} justifyContent="space-evenly">
                    <Text p={2} color={'red'}><FcCalendar/></Text>
                    <Text p={2} fontSize={14}>{item.date}</Text>
                    <Text p={2}><FcAlarmClock/></Text>
                    <Text p={2}fontSize={14}>{item.time}</Text>
                    
                    </Flex>
                 </Box>
                 <Box>
                    <Flex display={'flex'} justifyContent="space-evenly" >
                    <Text  mr={10} fontSize={14}>{item.contentone}</Text>
                    <Text  mr={10}  fontSize={14}>{item.valueone}</Text>
                    </Flex>
                 </Box>
                 <Box>
                    <Flex display={'flex'} justifyContent="space-evenly" >
                    <Text fontSize={14} mr={5}>{item.contenttwo}</Text>
                    <Text color={'yellow.700'}><GiTrophyCup/></Text>
                    <Text mr={10}fontSize={14}>{item.valuetwo}</Text>
                    </Flex>
                 </Box>

                </Box>
               
              
           
        </Flex>
        </Box>
      
        </Box>
          ))
        }
      
      
      </Box>
      </ChakraProvider>
       


    </Box>
  )
}

export default Tasks
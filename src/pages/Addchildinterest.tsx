import React, { useState } from 'react'
import { Box, Button, Flex, Radio, RadioGroup, Stack, Text ,ChakraProvider,Image,Checkbox,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel} from '@chakra-ui/react'
import {FaAngleDown} from "react-icons/all"
import { useNavigate } from 'react-router'
const Addchildinterest = () => {

    const object=[
        {
            text:"OUTDOOR GAMES",
            optionOne:"Cricket",
            optionTwo:"FootBall",
            optionThree:"Batminton",
            index:0,
            payloadKey:"outdoor_games"
        },
        {
            text:"BOARD GAMES",
            optionOne:"Chess",
            optionTwo:"Scrabble",
            optionThree:"Lego",
            index:1,
            payloadKey:"board_games"

        },
        {
            text:"CREATIVE ARTS",
            optionOne:"Painting",
            optionTwo:"Singing",
            optionThree:"Guitar",
            index:2,
            payloadKey:"creative_arts"

        }, 
        {
            text:"INDOOR ACTIVITIES",
            optionOne:"Baking",
            optionTwo:"Origami",
            optionThree:"Mechanics",
            index:3,
            payloadKey:"indoor_activities"

            
        }
    ];
    const [addchildinterests ,setAddchildinterests] = useState({
       
    });
   
    const handleChange=(e:any)=>{
    console.log(e.target.name,e.target.value)
    setAddchildinterests({...addchildinterests,[e.target.name]:e.target.value})
    };
   
    console.log(addchildinterests)
  

    const navigate = useNavigate();
     
    


    const Backpage = () =>{
        navigate("/CreateChild")
    };
    const Nextpage = () =>{
        navigate("/ChildVerification")
    };

  return (
   <Box bg={'gray.400'} width="100%" >
  
  <Box  display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={'white'}
        width="100%"
        >
    <Text pl="10px" color={'#004570'} fontWeight={'bold'}> Add Child's Interests</Text>
    <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="100px" pr="10px"/>
   </Box>
      
      <ChakraProvider>
      <Box display="grid" gridTemplateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap="10px" m="5px">
      {object.map((item: any) => (
         <Accordion defaultIndex={[0]} allowMultiple width="290px"  ml="10px" bg={'white'} mt="50px">
          <AccordionItem>
   
         <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
          <Text color="green">{item.text}</Text> 
          </Box>
          <AccordionIcon />
          </AccordionButton>
    
         <AccordionPanel pb="20px" mt="0px" bg="white">
          <Box mt="20px">
         
          <RadioGroup >
          <Stack direction='row'>
          <Radio value={item.optionOne} name={item.payloadKey} onChange={handleChange} >{item.optionOne}</Radio>
          <Radio value={item.optionTwo} name={item.payloadKey} onChange={handleChange}  >{item.optionTwo}</Radio>
          <Radio value={item.optionThree} name={item.payloadKey} onChange={handleChange} >{item.optionThree}</Radio>
           </Stack>
         </RadioGroup>

          </Box>
        </AccordionPanel>
     </AccordionItem>
    </Accordion>
      
      ))}
          </Box>
          </ChakraProvider>

          {/* <Accordion defaultIndex={[0]} allowMultiple width="280px" ml="20px" bg={'white'}>
          <AccordionItem>
   
         <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
          <Text color="green">Section 1 title</Text> 
          </Box>
          <AccordionIcon />
          </AccordionButton>
    
         <AccordionPanel pb={4}>
          <Box>
         
          <RadioGroup>
          <Stack direction='row'>
          <Radio value='1'>First</Radio>
          <Radio value='2'>Second</Radio>
          <Radio value='3'>Third</Radio>
         </Stack>
         </RadioGroup>

          </Box>
        </AccordionPanel>
     </AccordionItem>
    </Accordion> */}
         
          <Flex display={'flex'} justifyContent={'center'} mt="20px" >
           <Checkbox colorScheme='green' defaultChecked mb="130px" pl="10px">
           </Checkbox>
           <Text mt="40px" >By checking this box you confirm that you have the right to provide this information either as a parent or carer (for learners under 13 years old) or that you have consent to provide such information (13years and over).</Text>
          </Flex>
      
     
          
        <Flex display={'flex'} justifyContent={'center'}>
       <Button colorScheme="blue" borderRadius="20px" mb="50px" mr="30px" size="lg" bg="#F5F5F5" width="110px" color="black"  onClick={Backpage}>
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
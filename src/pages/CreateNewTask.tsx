import { Box, Button, Flex, Radio, RadioGroup, Stack, Text ,ChakraProvider,Image,Checkbox,Accordion,AccordionItem,AccordionButton,AccordionIcon,AccordionPanel} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

import {BsPlusCircle ,FaAngleUp ,FaArrowLeft} from "react-icons/all"
import { useNavigate } from 'react-router'

export default function CreateNewTask() {
  
    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/CreateNewTask1")
    }

    const Back = () =>{
      navigate("/SelectedTaskAssign")
  }

  const LoginTo =()=>{
    navigate("")
  }
  const data=[
              {
                head:"Learning",
                itemone:"Light",
                itemtwo:"Sound",
                itemthree:"Water",
                index:0,
                payload:"Learning"

              },
              {
                head:"Shadow Practice",
                itemone:"Communi-cation",
                itemtwo:"Self Retication",
                itemthree:"Critical Thinking",
                index:1,
                payload:"Shadow Practice"

              },
              {
                head:"Interests",
                itemone:"Art & Craft",
                itemtwo:"Food",
                itemthree:"Nature",
                index:2,
                payload:"Interests"

              },
              {
                head:"BetterMe",
                itemone:"Productivity",
                itemtwo:"Values",
                itemthree:"Habits",
                index:3,
                payload:"BetterMe"
                

              },
           ];
  const [newtaskvalue, setNewtaskValue] = useState({
          
  });
  const [show,setShow] = useState(false) ;
  

  const handledata = (e: any) => {
  
    setNewtaskValue((prevTaskValue) => ({ ...prevTaskValue, [e.target.name]:e.target.value }));
  };
  console.log(newtaskvalue);
  

  const handleClick =()=>{
    
    setShow(!show)
    
  };
  
  // useEffect(() => {
  //   console.log(newtaskvalue);
  // }, [newtaskvalue]);

  //   const handledata=(e:any)=>{
  //   console.log(e.target.name, e.target.value)
  //   setNewtaskValue({...newtaskvalue,[e.target.name]:e.target.value});
  //   console.log(newtaskvalue);
  // };

  return (

  <Box bg="#F2F5F7" width="100%">
  
 
  <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg="#F2F5F7"
            width="100%"
            >
            <Box display={'flex'}>
            <Text pl="10px" color={'#004570'} fontWeight={'bold'}>  <FaArrowLeft/></Text>
            {/* <Text pl="2x" color={'#004570'} fontWeight={'bold'}>GopiSunkara</Text> */}
            </Box>
    
          <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="100px" pr="10px"/>
          </Box>

         <Flex display={'flex'} justifyContent={'center'} mt="5px">
          <Box>
            <Text  color={'#004570'}  fontWeight={'bold'}>Create Custom Task for GopiSunkaraa</Text>
          </Box>
        </Flex>
    
    <ChakraProvider>
      <Box display="grid" gridTemplateColumns={{base:'repeat(1,1fr)',md:'repeat(2,1fr)',lg:'repeat(3,1fr)'}} gap="5px" m="5px">
       
       {data.map((item:any)=>(  
       <Accordion defaultIndex={[0]} allowMultiple width={{base:"290px",md:"290px",lg:"310px"}}   bg={'white'} mt="50px" >
       <AccordionItem>

      <AccordionButton  onClick={handleClick}>
       <Box as="span" flex='1' textAlign='left'>
       <Text color="green">{item.head}</Text> 
       </Box>
       <AccordionIcon />
       </AccordionButton>
       {
        show ? 
   
      <AccordionPanel pb="20px" mt="0px" bg="white">
       
       <Box mt="20px">
      
       <RadioGroup  >
       <Stack direction='row'>
       <Radio value={item.itemone}    name={item.payload} size='sm'  onChange={handledata}>{item.itemone}</Radio>
       <Radio value={item.itemtwo}    name={item.payload} size='sm'  onChange={handledata}>{item.itemtwo}</Radio>
       <Radio value={item.itemthree}  name={item.payload} size='sm'  onChange={handledata}>{item.itemthree}</Radio>
        </Stack>
      </RadioGroup>
            
             <Box mt="10px" display={'flex'} >
             <Text color="blue" fontSize="12px" mt="3px"><BsPlusCircle/></Text>
             <Text color="blue"fontSize="12px">AddNew</Text>
             </Box>
       </Box>
   
     </AccordionPanel>
     :null
       }
    
  </AccordionItem>
 </Accordion>
   
   ))};

       
      </Box>
    </ChakraProvider>

    {/* <Box display={"flex"}
            flexDirection={"row"}
            p={20}
           
           
           > */}
    <Flex display={'flex'} justifyContent={'center'} m={5} >
    <Checkbox colorScheme='green' defaultChecked>
    </Checkbox>
    <Text p={1} >By checking this box you confirm that you have the right to provide this information either as a parent or carer (for learners under 13 years old) or that you have consent to provide such information (13years and over).</Text>
    </Flex>
    {/* </Box> */}

       <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
         Next
         </Button>
         </Flex>

    </Box>

  )
}

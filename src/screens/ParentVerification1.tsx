import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"



export default function ParentVerification1() {
  // const countNum = useSelector <any>((state)=>state?.counter)

  const [dataone ,setDataone] = useState({
           number:"",
  });

    const location = useLocation();
    const params = location.state;
    const param1 = params.param1;

    console.log("params1",param1)

    const navigate = useNavigate();

    const navigateTo = () =>{
        navigate("/ParentVerification2",{  state : {param:param1}})
    };

   
    const handlechange =(e:any)=>{
    setDataone({...dataone,[e.target.name]:e.target.value})
    };
    console.log(dataone);

  return (
  <Box bg="#F2F5F7" width="100%" >
  <Flex direction="column" alignItems="center" pt='100px' pb='200px'>
  <Box
  //  boxShadow="dark-lg"
   bg="white"
   //  borderRadius={'50px'}
   borderBottomRadius="200px"
   borderTopRadius="200px"
   mt={'5px'}
   width={{base:"280px",md:"320px",lg:"340px"}}
   alignItems="center"
   justifyContent="center"
  >
      <Flex display={'flex'} justifyContent={'center'} mt="20px">
       <Box mt='4px' >
       <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'150px'} />
       </Box>
       </Flex>
       {/* {countNum} */}
     <Flex display={'flex'} justifyContent={'center'}>
     <Box  mt='10px'>
      <Text fontSize="20px" as="b" color="#004570"  >Parent Verification </Text>
      <Text mt={'5px'} >{param1}</Text>
     </Box>
     </Flex>
        
         <Flex display={'flex'} justifyContent={'center'}>
          <Box>
           <Input
              type="number"
              name="number"
              variant="outline"
              bgColor="white"
              borderColor="black"
              width={{base:"220px",md:"250px",lg:"312"}}
              onChange={handlechange}
              mt="20px"
            />
           </Box>
           </Flex>
           
           <Flex display={'flex'} justifyContent={'center'}>
           <Box >
           <Button  mb="80px" mt="40px" colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width={{base:"200px",md:"220px",lg:"250px"}} onClick={() => navigateTo()}>
             Generate OTP 
           </Button>
           </Box>
           </Flex>

       
     </Box>
    </Flex>
    </Box>
  )
}

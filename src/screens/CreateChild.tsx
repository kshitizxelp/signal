import { Box, Flex, Image, Input, Text, Radio, Button,RadioGroup,Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setCreatechildData } from '../Slice';

export default function CreateChild() {

    const navigate = useNavigate();

   
 
    const inputs :any = [
        {
           name:"name",
           label:"Full Name",
           type:"text"
        },
        {
            name: "username",
            label: "Username",
            type: "text",
        },
        {
            name:"email",
            label:"Email address (Optional)",
            type:"text",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
        },
        {
            name: "confirmpassword",
            label: "Confirm Password",
            type: "password",
        },
        {
            name:"dateofbirth",
            label: "Date of Birth",
            type:"date"
        }
      ];

      const dispatch = useDispatch();
     
      const [addchailddata ,setAddchailddata] = useState({

        name:"",
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
        dateofbirth:"",
        gender:"",

      });

       const handleChange =(e:any)=>{

        setAddchailddata({...addchailddata,[e.target.name]:e.target.value});
        dispatch(setCreatechildData(addchailddata));
        };

        
       console.log(addchailddata);
       
     
       const navigateTo = () =>{
        navigate("/addchildinterests");
       
       };
  
  return (
  <Box bg="#F2F5F7" width="100%">
  <Flex direction="column"  alignItems={'center'}>
  <Box
  //  boxShadow="dark-lg"
   p="6"
   bg="white"
  //  borderRadius="50px"
   borderTopRadius="200px"
   borderBottomRadius="200px"
   width={{base:"300px",md:"400px",lg:"500px"}}
   alignItems="center"
   justifyContent="center"
   mt="50px"
   mb="15px"
 >
     <Flex display={'flex'} justifyContent={'center'}>
       <Box  mt="10px">
       <Text fontSize="20px" as="b" color="#004570" >Create Child Account</Text>
        </Box>
        </Flex>
        <Flex display={'flex'} justifyContent={'center'}>
        <Box mt="8px">
     {inputs.map((input: any) => (
          <Box key={input.name} mb={4} textAlign="left" >
            <Text mb="2px" size="2px" >{input.label}</Text>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              variant="outline"
              bgColor="white"
              borderColor="black"
              width={{base:"250px",md:"280px",lg:"313px"}}
              onChange={handleChange}
            />
            </Box>
        ))}
         <Text>Gender</Text>
            <RadioGroup name='gender' >
            <Stack direction='row'onChange={handleChange}>
             <Radio value='Boy'>Boy</Radio>
             <Radio value='Girl'>Girl</Radio>
             {/* <Radio value='3'>Third</Radio> */}
            </Stack>
            </RadioGroup>
     </Box>
     </Flex>

    
     
    
     
     <Flex flexDirection="row" m="20px" justifyContent="center">
     <Button colorScheme="blue" borderRadius="20px" mr="30px" size="lg" bg="#F5F5F5" width="110px" color="black">
          Save
        </Button>
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
          Next
        </Button>
     </Flex>
        </Box>  
    </Flex>
    </Box>
  )
}

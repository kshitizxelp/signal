import { Box, Button, Flex, Icon, IconButton, Image, Input,Text, InputGroup, InputLeftElement,Divider,AbsoluteCenter} from '@chakra-ui/react'
import { useState } from 'react';
import { SiGoogle, SiMicrosoftoffice, AiOutlineMobile } from 'react-icons/all';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function SIgnUp() {

  const navigate = useNavigate();

  const Login = () =>{
    navigate('/BasicInfoNumber')
  }

    const [formData, setFormData] = useState<any>({
        email:"",
        username: "",
        password: ""
      });

      const inputs :any = [
       
        {
          name: "username",
          label: "Username",
          type: "text",
        },
        {
          name:"email",
          label:"Email address",
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
        }
      ];
      
      const [data, setData] = useState({
        email: "",
        username: "",
        password:"",
        confirmpassword:"",
       
      });
     
    
      console.log("ssssss", data)
    
        const changeHandler = (e:any) => {
        console.log(e.target.value,e.target.name,"from mhandle changeeeeeeeeeeee")
        setData({ ...data, [e.target.name]: e.target.value });
        
      };
     
     


  return (
    <Box bg={'#F2F5F7'} width="100%">
    <Flex  justifyContent={'center'} >
      <Box
      // boxShadow="dark-lg"
      mt="10px"
     
      bg="white"
      borderTopRadius="200px"
      borderBottomRadius="200px"
      width={{base:"290px",md:"400px",lg:"500px"}}
      alignItems="center"
      justifyContent="center"
    >
     <Flex display={'flex'} justifyContent={'center'}>
      <Box>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={"100px"}/>
      </Box>
      </Flex>

    <Flex display={'flex'} justifyContent={'center'}>
     <Box mt='10px'>
     {inputs.map((input: any) => (
         <Box key={input.name} pb={'4px'} alignItems="flex-start">
            <Text mb={'1px'}  >{input.label}</Text>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              variant="outline"
              bgColor="white"
              borderColor="black"
              width={{base:"200px",md:"250px",lg:"313"}}
              onChange={changeHandler}
            />
             
          </Box>
         ))}
     </Box>
      </Flex>
     
      <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={'5px'}>
        <Button  colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width={{base:"280px",md:"300px",lg:"380px"}} onClick={Login}>
          Sign Up
        </Button>
        </Box>
        </Flex>
       
        <Box position='relative' padding='20px' >
        <Divider  />
        <AbsoluteCenter bg='white' px='2px' >
         Or
        </AbsoluteCenter>
       </Box>
       

             <Flex display={'flex'} justifyContent={'center'}>
               <Box mt='4px'>
               <Text mt='2px'>Signup using</Text>
              </Box>
              </Flex>
      
    
    <Box display={"flex"}
           flexDirection={"row"}
           justifyContent={"space-evenly"}
           mb="70px"
           >  
     
     
      <Button
      leftIcon={<SiGoogle color="#DB4437" />}
      variant="solid"
      size="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
      ml="30px"
      
    >
      <Flex alignItems="center" >
        <Text mt={'1px'} fontSize="12px">Google</Text>
      </Flex>
    </Button>
    <Button
      leftIcon={<SiMicrosoftoffice color="red" />}
      variant="solid"
      size="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
      ml="10px"
     >
      <Flex alignItems="center">
      <Text fontSize="12px">Office 365</Text>
      </Flex>
    </Button>
    <Button
      leftIcon={<AiOutlineMobile color="rgba(0, 69, 112, 1)"/>}
      variant="solid"
      size="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
      // mr="20px"
      mr="30px"
      >
      <Flex alignItems="center">
        <Text mt='1px' fontSize="12px">Mobile</Text>
      </Flex>
    </Button>
   
    </Box>
    </Box>
    </Flex>
    
    
    </Box>
  )
}

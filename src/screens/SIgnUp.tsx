import { Box, Button, Flex, Icon, IconButton, Image, Input,Text, InputGroup, InputLeftElement} from '@chakra-ui/react'
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
            name:"email",
            label:"Email address",
            type:"text",
        },
        {
          name: "username",
          label: "Username",
          type: "text",
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
      console.log('data',data)


  return (
    <Box bg={'gray'} pt={'50px'} pb={'70px'}>
    <Flex direction="column" alignItems="center" position="relative" >
      <Box
      boxShadow="dark-lg"
      p="1"
      rounded=""
      bg="white"
      borderRadius={'40px'}
      
      width="500px"
      alignItems="center"
      justifyContent="center"
    >
     <Flex display={'flex'} justifyContent={'center'}>
      <Box>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={"100px"}/>
      </Box>
      </Flex>

    <Flex display={'flex'} justifyContent={'center'}>
     <Box mt={'10px'}>
     {inputs.map((input: any) => (
         <Box key={input.name} pb={'4px'} alignItems="flex-start">
            <Text mb={'1px'}  >{input.label}</Text>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              // value={inputs.[input.name]}
              name={input.name}
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="313px"
              onChange={changeHandler}
            />
             {/* <Input
              type={inputs.type}
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="373px"
              marginBottom="10px"
              name={inputs.name}
              placeholder={input.placeholder}
              onChange={changeHandler}
            /> */}
          </Box>
         ))}
     </Box>
      </Flex>
     
      <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={'5px'}>
        <Button colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login}>
          Sign Up
        </Button>
        </Box>
        </Flex>

             <Flex display={'flex'} justifyContent={'center'}>
             <Box mt={'4px'}>
              <Text>or</Text>
               <Text mt={'2px'}>Signup using</Text>
              </Box>
           </Flex>
      
    
      <Box display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}>  
      <Button
      leftIcon={<SiGoogle color="#DB4437" />}
      variant="solid"
      size="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
      mr={'8px'}
      
    >
      <Flex alignItems="center" >
        <Text mt={'1px'}>Google</Text>
      </Flex>
    </Button>
    <Button
      leftIcon={<SiMicrosoftoffice color="red" />}
      variant="solid"
      size="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
      mr={'8px'}
    >
      <Flex alignItems="center">
        <Text mt={'1px'}>Office 365</Text>
      </Flex>
    </Button>
    <Button
      leftIcon={<AiOutlineMobile color="rgba(0, 69, 112, 1)"/>}
      variant="solid"
      size="lg"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
    >
      <Flex alignItems="center">
        <Text mt={'1px'}>Mobile</Text>
      </Flex>
    </Button>
   
    </Box>
    </Box>
    </Flex>
    
    
    </Box>
  )
}

import { Box, Button, Flex, Icon, IconButton, Image, Input,Text, InputGroup, InputLeftElement} from '@chakra-ui/react'
import React, { useState ,} from 'react'
import { SiGoogle, SiMicrosoftoffice, AiOutlineMobile } from 'react-icons/all';
import { useNavigate, useNavigation } from "react-router-dom";





export default function Login() {

  const navigate = useNavigate();

  const Login = () => {
    navigate("/welcomeback");
  };

  const navigateTo = () =>{
    navigate("/LoginMobileOtp");
  }
    
    const [formData, setFormData] = useState<any>({
        username: "",
        password: ""
      });

      const inputs :any = [
        {
          name: "username",
          label: "Username or email",
          type: "text",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          forgot:"Forgot Password?"
        }
      ];

  return (
    <Flex direction="column" alignItems="center" mt={0}> 
      <Box boxSize="184px">
        <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
      </Box>
     <Box mt={8}>
     {inputs.map((input: any) => (
          <Box key={input.name} mb={4}>
            <Flex flexDirection="row" justifyContent="space-between">
            <Text mb={1}>{input.label}</Text>
            { input.forgot && (
                <Text color="rgba(0, 69, 112, 1)" as="u">{input.forgot}</Text>
            )}
            </Flex >
           
            <Input
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name]}
              name={input.name}
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="313px"
            />
           
          </Box>
        ))}
     </Box>
     <Box mt={8}>
     <Button colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login}>
          Login
       </Button>
      </Box>
      <Box mt={8}>
      <Text>or</Text>
      <Text mt={2}>Login Using</Text>
      </Box>
      <Flex direction="row"  justifyContent="space-between"  mt={5} >
      <Button
      leftIcon={<SiGoogle color="#DB4437" />}
      variant="solid"
      size="lg"
      display="flex"
      // alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
      mr={8}
      
    >
      <Flex alignItems="center" >
        <Text mt={1}>Google</Text>
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
      mr={8}
    >
      <Flex alignItems="center">
        <Text mt={1}>Office 365</Text>
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
      <Box alignItems="center" onClick={() => navigateTo()}>
        <Text mt={1}>Mobile</Text>
      </Box>
    </Button>
    </Flex>
    <Box mt={4}>
        <Text>If u don't have an account.Sign Up</Text>
    </Box>
    </Flex>
  )
}

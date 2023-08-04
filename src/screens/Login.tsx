import { Box, Button, Flex, Icon, IconButton, Image, Input,Text, InputGroup, InputLeftElement, Link} from '@chakra-ui/react'
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
    <Box style={{backgroundColor: "#F2F5F7"}} width="100%">
    <Flex direction="column" alignItems="center" > 
    <Box
      // boxShadow="dark-lg"
      p="6"
      bg="white"
      borderRadius="350px"
      width={{base:"290px",md:"350px",lg:"400px"}}
      px="20px"
      >
     
      <Box>
      <Flex display={'flex'} justifyContent={'center'}>
        <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt=""  height='150px'/>
        </Flex>
      </Box>
     
     <Flex display={'flex'} justifyContent={'center'}>
     <Box mt={'5px'}>
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
              width={{base:"280px",md:"290px",lg:"313px"}}
            />
           
          </Box>
        ))}
     </Box>
     </Flex>
    
    <Flex display={'flex'} justifyContent={'center'}>
     <Box mt={'5px'}>
     <Button colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width={{base:"270px",md:"290px",lg:"313px"}} onClick={Login}>
          Login
       </Button>
      </Box>
      </Flex>

     <Flex display={'flex'} justifyContent={'center'}>
      <Box mt={'5px'}>
      <Text>or</Text>
      <Text mt={'2px'}>Login Using</Text>
      </Box>
      </Flex> 

      <Flex direction="row"  justifyContent="space-between"  mt='5px' >
      <Button
      leftIcon={<SiGoogle color="#DB4437" />}
      variant="solid"
      size="lg"
      display="flex"
      // alignItems="center"
      justifyContent="center"
      borderColor="rgba(40, 40, 40, 0.3)"
      bg="white"
      mr='50px'
      
    >
      <Flex alignItems="center" >
        <Text mt="2px" fontSize="12px">Google</Text>
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
      mr='30px'
    >
      <Flex alignItems="center">
        <Text mt="2px" fontSize="12px">Office365</Text>
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
        <Text mt='1px' fontSize="12px">Mobile</Text>
      </Box>
    </Button>
    </Flex>
    <Box mt='5px'>
        <Link color={'blue'}>If u don't have an account.Sign Up</Link>
    </Box>
    </Box>
    </Flex>
    </Box>
  )
}

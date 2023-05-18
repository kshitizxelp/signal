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
            name: "password",
            label: "Confirm Password",
            type: "password",
        }
      ];

  return (
    <Flex direction="column" alignItems="center" position="relative" >
       <Box
      boxShadow="dark-lg"
      p="6"
      rounded=""
      bg="white"
      borderRadius={60}
      // height="620px"
      width="500px"
      alignItems="center"
      justifyContent="center"
    >
      <Box boxSize="184px" marginLeft="135px" mt={4} >
        <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
      </Box>
     <Box mt={8}>
     {inputs.map((input: any) => (
          <Box key={input.name} mb={4} alignItems="flex-start">
            <Text mb={1}  >{input.label}</Text>
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
          Sign Up
        </Button>
      </Box>
      <Box mt={4}>
           <Text>or</Text>
            <Text mt={2}>Signup using</Text>
        </Box>
        <Flex direction="row"  justifyContent="space-between"  mt={5} >
      <Button
      leftIcon={<SiGoogle color="#DB4437" />}
      variant="solid"
      size="lg"
      display="flex"
      alignItems="center"
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
      <Flex alignItems="center">
        <Text mt={1}>Mobile</Text>
      </Flex>
    </Button>
    </Flex>
    </Box>
    </Flex>
  )
}

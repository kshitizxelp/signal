import { Box, Button, Flex,Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BasicInfoNumber() {
    
    const navigate = useNavigate();

    const Login = () =>{
        navigate('/ParentVerification')
    }

    const [formData, setFormData] = useState<any>({
        username: "",
        password: ""
      });

      const inputs :any = [
        {
            name:"name",
            label:"Name",
            type:"text",
        },
        {
          name: "mobile",
          label: "Mobile Number",
          type: "text",
        },
        {
            name:"gender",
            label:"Gender",
            type:"text",
        }
      ];

  return (
    <Flex direction="column" alignItems="center" mt={0}> 
    <Box boxSize="184px">
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" />
    </Box>
    <Flex flexDirection="row">
    <Box>
        <Text fontSize="22px" mr={35} color="rgba(0, 69, 112, 1)">Enter Basic Information</Text>
    </Box>
    </Flex>
    <Box mt={8}>
     {inputs.map((input: any) => (
          <Box key={input.name} mb={4}>
            <Flex flexDirection="row" justifyContent="space-between">
            <Text mb={1}>{input.label}</Text>
            </Flex>
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
          Save
        </Button>
      </Box>
    </Flex>
  )
}

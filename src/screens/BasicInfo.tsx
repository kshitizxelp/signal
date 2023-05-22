import { Box, Button, Flex,Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BasicInfo() {

    const navigate = useNavigate();

    const Login = () =>{
        navigate('/BasicInfoNumber')
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
            name: "confirm password",
            label: "Confirm Password",
            type: "password",
        },
        {
            name:"email",
            label:"Email id",
            type:"text",
        },
        {
            name:"gender",
            label:"Gender",
            type:"text",
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
          <Box key={input.name} mb={4}>
            <Text justifyContent="center" alignSelf="center" marginLeft="40px" mb={1}>{input.label}</Text>
            {input.name === "gender" ? ( 
                <Select placeholder='Select' width="313px" borderColor="#282828">
                <option value='Option1'>Male</option>
                <option value='Option2'>Female</option>
              </Select>
            ):(
            <Input
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name]}
              name={input.name}
              variant="outline"
              bgColor=""
              borderColor="#282828"
              width="313px"
            />
       )}
          </Box>
        ))}
     </Box>
     <Box mt={8}>
     <Button colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login}>
          Sign up
        </Button>
      </Box>
      </Box>
    </Flex>
  )
}

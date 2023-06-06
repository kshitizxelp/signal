import { Box, Button, Flex,Image, Input, Select, Text } from '@chakra-ui/react'
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
    <Box bg={'gray'}>
  <Flex direction="column" alignItems="center" position="relative" pt={'60px'} pb={'100px'}>
  <Box
   boxShadow="dark-lg"
   p="6"
   rounded=""
   bg="white"
   borderRadius={'50px'}
   
   width="450px"
   alignItems="center"
   justifyContent="center"
   mt={'4px'}
 >
  <Flex display={'flex'} justifyContent={'center'}>
      <Box>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'150px'}/>
      </Box>
      </Flex>
    
    <Flex flexDirection="row">
    <Box justifyContent="center" textAlign="left" alignItems="center" marginLeft="110px" mt={'4px'} >
        <Text fontSize="22px"  textAlign={'center'} color="rgba(0, 69, 112, 1)">Enter Basic Information</Text>
    </Box>
    </Flex>
   
    <Flex display={'flex'} justifyContent={'center'}>
    <Box mt={'4px'}>
     {inputs.map((input: any) => (
          <Box key={input.name} mb={'4px'}>
                        <Text mb={'1px'}>{input.label}</Text>
            {input.name === "gender" ? ( 
                <Select placeholder='Select' width="313px"  borderColor="#282828">
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
              bgColor="white"
              borderColor="black"
              width="313px"
            />
            )}
          </Box>
        ))}
     </Box>
     </Flex>
     
     <Flex display={'flex'} justifyContent={'center'}>
     <Box mt={'8px'}>
        <Button colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login}>
          Save
        </Button>
      </Box>
      </Flex>
     
      </Box>
    </Flex>
    </Box>
  )
}

import { Box, Flex, Image, Input, Text, Radio, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router';

export default function CreateChild() {

    const navigate = useNavigate();

    const navigateTo = () =>{
        navigate("/ChildInterest")
    }
 
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
            name: "password",
            label: "Confirm Password",
            type: "password",
        },
        {
            name:"DOB",
            label: "Date of Birth",
            type:"number"
        }
      ];


  return (
    <Flex direction="column">
      <Box
   boxShadow="dark-lg"
   p="6"
   rounded=""
   bg="white"
   borderRadius={60}
   width="500px"
   alignItems="center"
   justifyContent="center"
 >
       <Box textAlign="left" mt={4}>
       <Text fontSize="20px" as="b" color="#004570" >Create Child Account</Text>
        </Box>
        <Box mt={8}>
     {inputs.map((input: any) => (
          <Box key={input.name} mb={4} textAlign="left" >
            <Text mb={1} size="2px" >{input.label}</Text>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="313px"
            />
          </Box>
        ))}
     </Box>
     <Box textAlign="left">
        <Text>Gender</Text>
     </Box>
     <Flex mt={2} flexDirection="row">
     <Radio ml={4} mr={4} borderColor="black" colorScheme='green' value='1'>
      Boy
    </Radio>
    <Radio mr={4} borderColor="black" colorScheme='green' value='2'>
      Girl
    </Radio>
    <Radio borderColor="black" colorScheme='green' value='3'>
      Prefer not to disclose
    </Radio>
     </Flex>
     <Flex flexDirection="row" mt={10} justifyContent="center">
     <Button colorScheme="blue" borderRadius="20px" mr={30} size="lg" bg="#F5F5F5" width="110px" color="black">
          Save
        </Button>
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()}>
          Next
        </Button>
     </Flex>
        </Box>  
    </Flex>
  )
}

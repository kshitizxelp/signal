import { Box, Button, Image, Input, Text, InputGroup, Center,Flex, FormControl, FormLabel,Link,Select } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function LoginMobileOtp() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/LoginMobileOtp1");
  };
  return (
    <Box bg="#F2F5F7" width="100%"> 
      <Flex display={'flex'} justifyContent={'center'} pt={'150px'} pb={'200px'}>
      <Box
        // boxShadow="dark-lg"
        p="1"
        rounded=""
        bg="white"
        borderRadius="90px"
        width={{base:"290px",md:"350px",lg:"400px"}}
        px="20px"
        mb="20px"
        mt='10px'
      >
      {/* <Flex justifyContent={"center"} > */}

        <Box display="flex" justifyContent="center" >
          <Image
            src=" src/assets/SIGNAL LOGO (2)@3x.png"
            alt="Dan Abramov"
            height='150px'
            mt='10px'
          />
        </Box>
        <Box >
        
        <Flex display={'flex'} justifyContent={'center'} >
        <form> 

        
      <FormControl id="" isRequired m="50px">
        <FormLabel> Enter Mobile number</FormLabel>
        
          <InputGroup>
           <Select placeholder='Select option' width="70px" borderColor={'blackAlpha.200'} mr="20px">
            <option value='option1'> 91</option>
            <option value='option2'>92</option>
            <option value='option3'>93</option>
           </Select>
           <Input placeholder='medium size' size='md' width="250px" type="number" pl="10px"/>
           </InputGroup>
      </FormControl>
      
     <Flex display={'flex'} justifyContent={'center'}>
     <Button type="submit" colorScheme="blue" mt="4px" onClick={Login}>
        Send OTP
      </Button>
     </Flex>
      

    </form>
    </Flex>
    
        </Box>
        

       

      </Box>
      </Flex>
    </Box>
  );
}

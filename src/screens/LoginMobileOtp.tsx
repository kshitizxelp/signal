import { Box, Button, Image, Input, Text, InputGroup, Center,Flex, FormControl, FormLabel,Link } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function LoginMobileOtp() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/LoginMobileOtp1");
  };
  return (
    <Box bg={'gray.300'}> 
      <Flex display={'flex'} justifyContent={'center'}>
      <Box
        boxShadow="dark-lg"
        p="1"
        rounded=""
        bg="white"
        borderRadius={90}
        height="600px"
        width={500}
        mt={10}
      >
      {/* <Flex justifyContent={"center"} > */}

        <Box display="flex" justifyContent="center" >
          <Image
            src=" src/assets/SIGNAL LOGO (2)@3x.png"
            alt="Dan Abramov"
            height={150}
            mt={20}
          />
        </Box>
        <Box >
        
        <Flex display={'flex'} justifyContent={'center'} mt={40}>
        <form> 

        
      <FormControl id="" isRequired>
        <FormLabel> Enter Mobile number</FormLabel>
        
          <InputGroup>
            <Input

              type="text"
              placeholder=""
              height="30px"
              width="30px"
              borderRadius="10px"
              borderColor="black"
              ml={3}
             
            />
            <Input
              type="text"
              placeholder=""
              height="30px"
              width="260px"
              borderRadius="10px"
              borderColor="black"
              ml={3}
              
            />
          </InputGroup>
      </FormControl>
      
     <Flex display={'flex'} justifyContent={'center'}>
     <Button type="submit" colorScheme="blue" mt={4} onClick={Login}>
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

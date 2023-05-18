import { Box, Button, Image, Input, Text, InputGroup, Center,Flex, FormControl, FormLabel,Link } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Genarateotp() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/enterOtp");
  };
  return (
    <Box>
      <Box
        boxShadow="dark-lg"
        p="6"
        rounded=""
        bg="white"
        borderRadius={90}
        height="600px"
        width={500}
      >
      {/* <Flex justifyContent={"center"} > */}

        <Box   display="flex" justifyContent="center">
          <Image
            src=" src/assets/SIGNAL LOGO (2)@3x.png"
            alt="Dan Abramov"
            height={150}
          />
        </Box>
        <Box display="flex" justifyContent="center">
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
              ml={3}
              // name={item?.name}
              // value={inputs.mobileNumber}
              // onChange={handleChange}
            />
            <Input
              type="text"
              placeholder=""
              height="30px"
              width="260px"
              borderRadius="10px"
              ml={3}
              // onChange={(e) => setNumber(e.target.value)}
            />
          </InputGroup>
      </FormControl>
     

      <Button type="submit" colorScheme="blue" mt={4} onClick={Login}>
        Genarete OTP
      </Button>
    </form>
        </Box>
        

       

      </Box>
    </Box>
  );
}

import { Box, Button, Image, Input, Text, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

export default function EnterOtp() {
  const [formData, setFormData] = useState<any>({
    number: "",
    phoneno: "",
  });

  
  return (
    <Box
      boxShadow="dark-lg"
      p="6"
      rounded=""
      bg="white"
      borderRadius={60}
      height="700px"
      width="500px"
    >
      <Box display="flex" justifyContent="center">
        <Image
          src=" src/assets/SIGNAL LOGO (2)@3x.png"
          alt="Dan Abramov"
          height={150}
        />
      </Box>

      <Box mr={40} mt={10}>
        <Text>Enter Mobile Number</Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <form>
          <Box display="flex" justifyContent="center" >
            <InputGroup>
              <Input
                type="number"
                placeholder="+91"
                height="30px"
                width="80px"
                borderRadius="10px"
                ml={5}
              />
              <Input
                type="text"
                placeholder="9999999999"
                height="30px"
                width="260px"
                borderRadius="10px"
                ml={2}
              />
              
            </InputGroup>
          </Box>
          <Box display="flex" justifyContent="center" mt={10}>
          <Input
            type="text"
            placeholder="Ganarate OTP"
            height="30px"
            width="260px"
            borderRadius="10px"
            pl={10}
           
          />
          </Box>
         
          <Box mr={60} mt={10}>
            <Text>Enter OTP</Text>
          </Box>
          <Box display="flex" justifyContent="center" mt={10}>
            <Input
              type="text"
              placeholder=""
              height="30px"
              width="260px"
              borderRadius="10px"
              ml={3}
            />
          </Box>

          <Box mt={10}>
            <Button
              colorScheme="blue"
              size="lg"
              bg="rgba(0, 69, 112, 1)"
              width="333px"
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

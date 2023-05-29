import { Box, Button, Image, Input, Text, InputGroup ,Link, Flex} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginMobileOtp1() {

  const navigate = useNavigate()

  const navigateTo = () => {
    navigate("/Welcomeback")
  }

  const [formData, setFormData] = useState<any>({
    number: "",
    phoneno: "",
  });

  
  return (
    <Box bg={'gray.300'}>
      <Flex display={'flex'} justifyContent={'center'}>
    <Box
      boxShadow="dark-lg"
      p="6"
      rounded=""
      bg="white"
      borderRadius={60}
      height="600px"
      width="500px"
      mt={10}
    >
      <Box display="flex" justifyContent="center">
        <Image
          src=" src/assets/SIGNAL LOGO (2)@3x.png"
          alt="Dan Abramov"
          height={150}
        />
      </Box>

      <Box pl={20}>
        <Text>Enter Mobile Number</Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <form>
          <Box>
            <Flex display={'flex'} justifyContent={'center'}>
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
            </Flex>
          </Box>
          <Box pl={200} color={'blue'}>
          <Link>Edit mobile number</Link>
          </Box>

          <Flex display={'flex'} justifyContent={'center'}>
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
          </Flex>
          <Box pl={220} color={'blue'}>
          <Link>Resend OTP</Link>
          </Box>
         
          <Box ml={50} mt={10} color={'blue'}>
            <Text>Enter OTP</Text>
          </Box>
          
          <Flex display={'flex'} justifyContent={'center'}>
          <Box  mt={10}>
            <Input
              type="text"
              placeholder=""
              height="30px"
              width="260px"
              borderRadius="10px"
              borderColor={'black'}
              ml={3}
            />
          </Box>
          </Flex>
      <Flex display={'flex'} justifyContent={'center'}>
          <Box mt={10}>
            <Button
              colorScheme="blue"
              size="lg"
              bg="rgba(0, 69, 112, 1)"
              width="333px"
              onClick={() => navigateTo()}
            >
              Next
            </Button>
          </Box>
          </Flex>
        </form>
      </Box>
    </Box>
    </Flex>
    </Box>
  );
}

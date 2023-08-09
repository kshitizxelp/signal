import { Box, Button, Image, Input, Text, InputGroup ,Link, Flex,HStack,PinInput,PinInputField,} from "@chakra-ui/react";
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
  const { number ,phoneno} = formData ;

  const changeHandler = (e:any) => {
    const val = e.target.value;
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };
  console.log(setFormData)
  return (
    <Box bg="#F2F5F7" width="100%">
      <Flex display={'flex'} justifyContent={'center'} pt={'100px'} pb={'200px'}>
    <Box
      // boxShadow="dark-lg"
      p="5px"
      rounded=""
      bg="white"
      borderRadius='130px'
      width="400px"
      mt='10px'   
    >
      <Box display="flex" justifyContent="center">
        <Image
          src=" src/assets/SIGNAL LOGO (2)@3x.png"
          alt="Dan Abramov"
          height='150px'
        />
      </Box>

      <Box pl='20px'>
        <Text>Enter Mobile Number</Text>
      </Box>
      <Box display="flex" justifyContent="center">
        <form>
          <Box>
            <Flex display={'flex'} justifyContent={'center'}>
              <Text border="2px" borderColor="blackAlpha.600" width="40px" borderRadius="10px" m="10px" textAlign={'center'}>91</Text>
            {/* <InputGroup>
              <Input
                type="number"
                placeholder="21"
                height="30px"
                width="50px"
                borderRadius="5px"
                ml='5px'
                name="number"
                // value="number"
                onChange={changeHandler}
              /> */}
              {/* <Input
                type="text"
                placeholder="9999999999"
                height="30px"
                width="260px"
                borderRadius="10px"
                ml={'2px'}
                name="number"
                // value="number"
                onChange={changeHandler}
              />
               */}
               <Text border="2px" borderColor={'gray.200'} width="250px"  borderRadius="10px" m="10px" textAlign={'center'}>999555865</Text>
            {/* </InputGroup> */}
            </Flex>
          </Box>
          <Box pl='200px' color={'blue'}>
          <Link>Edit mobile number</Link>
          </Box>

          <Flex display={'flex'} justifyContent={'center'}>
          <Box display="flex" justifyContent="center" mt={'10px'}>
          {/* <Input
            type="text"
            placeholder="Ganarate OTP"
            height="30px"
            width="260px"
            borderRadius="10px" 
            pl='10px'
           
          /> */}
          <Text borderRadius="10px" borderColor={'gray.200'} border="2px" width="313px" textAlign={'center'}>Ganarate OTP</Text>
          </Box> 
          </Flex>
          <Box pl={'200px'} color={'blue'}>
          <Link>Resend OTP</Link>
          </Box>
         
          <Box ml={'50px'} mt={'10px'} color={'blue'}>
            <Text>Enter OTP</Text>
          </Box>
          
          <Flex display={'flex'} justifyContent={'center'}>
          <Box  mt={'10px'}>
          <HStack>
           <PinInput otp >
           <PinInputField borderColor={'black'}/>
           <PinInputField borderColor={'black'}/>
           <PinInputField borderColor={'black'}/>
           <PinInputField borderColor={'black'} />
           </PinInput>
          </HStack>
          </Box>
          </Flex>
      <Flex display={'flex'} justifyContent={'center'}>
          <Box mt='10px' mb="20px">
            <Button
              colorScheme="blue"
              size="lg"
              bg="rgba(0, 69, 112, 1)"
              width="300px"
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

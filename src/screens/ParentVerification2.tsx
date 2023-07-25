import { Box, Button, Image, Input, Text, InputGroup, Flex,HStack, PinInput,PinInputField,} from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function ParentVerification2() {
 
  const location = useLocation();
  const params = location.state;
  
  const parm1 = params.param

  const navigate = useNavigate();

  const navigateTo = () =>{
    navigate("/ParentVerification3")
  }


  const [formData, setFormData] = useState<any>({
    numone: "",
    numtwo: "",
    numthree:"",
    numfoure:"",
    numfive:"",
    numsix:"",

  });
  

 const handlechange =(e:any)=>{

  setFormData({...formData,[e.target.name]: e.target.value })

 };
 console.log(formData);

  
  return (
    <Box bg={'gray'} pt={50} >
    <Flex direction="column" alignItems="center">
    <Box
      boxShadow="dark-lg"
      p="5"
      rounded=""
      bg="white"
      borderRadius={60}
      // height="700px"
      width="500px"
      mt={2}
      mb={50}
      
    >
        <Flex display={'flex'} justifyContent={'center'}>
        <Box display="flex" justifyContent="center">
        <Image
          src=" src/assets/SIGNAL LOGO (2)@3x.png"
          alt="Dan Abramov"
          height={150}
        />
      </Box>
      </Flex>
    <Flex display={'flex'} justifyContent={'center'}>
      <Box mr={40} mt={10}>
        <Text>{parm1}</Text>
      </Box>
      </Flex>
      
      <Box display="flex" justifyContent="center">
        <form>
          
          
          <Flex display={'flex'} justifyContent={'center'}>
          <Box  >
              {/* <Input
                type="text"
                placeholder="9546 7895 4512"
                height="30px"
                width="260px"
                borderRadius="10px"
                ml={2}
                borderColor="black"
              /> */}
               <Text border="1px"  width="260px"  borderRadius="5px"  borderColor="black" textAlign={'center'}>774557556874</Text>
                
                </Box>
            </Flex>
          
       <Flex display={'flex'} justifyContent={'center'}>   
          <Box  mt={10}>
          {/* <Input
            type="text"
            placeholder="Generate OTP"
            height="30px"
            width="260px"
            borderRadius="10px"
            borderColor="black"
            
            /> */}
            <Text border="1px"  width="260px"  borderRadius="5px"  borderColor="black" textAlign={'center'}> Genarate OTP</Text>
          </Box>
          </Flex>
         
           <Flex display={'flex'} justifyContent={'center'}>
            <Box  pt={20}>
             <Text>Enter OTP</Text>
            </Box>
            </Flex>
          
          <Box display="flex" justifyContent="center" mt={10}>
            {/* <Input
              type="text"
              placeholder=""
              height="30px"
              width="260px"
              borderRadius="10px"
              borderColor="black"
              ml={3}
            /> */}
            <HStack>
          <PinInput otp>
          <PinInputField borderColor={'green.900'} name="numone"  onChange={handlechange} />
          <PinInputField borderColor={'green.900'} name="numtwo"   onChange={handlechange}/>
          <PinInputField borderColor={'green.900'} name="numthree" onChange={handlechange}/>
          <PinInputField borderColor={'green.900'} name="numfoure" onChange={handlechange}/>
          <PinInputField borderColor={'green.900'} name="numfive"  onChange={handlechange} />
          <PinInputField borderColor={'green.900'} name="numsix"   onChange={handlechange}/>
          </PinInput>
           </HStack>
          </Box>

          <Flex display={'flex'} justifyContent={'center'}>
          <Box mt={10}>
            <Button
              colorScheme="blue"
              size="lg"
              bg="rgba(0, 69, 112, 1)"
              width="333px"
              onClick={() => navigateTo()}
            >
              Verify
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

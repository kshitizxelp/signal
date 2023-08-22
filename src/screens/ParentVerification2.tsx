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
    <Box bg="#F2F5F7" width="100%" >
    <Flex direction="column" alignItems="center">
    <Box
      // boxShadow="dark-lg"
      p="5"
      bg="white"
      // borderRadius="50px"
      borderTopRadius="200px"
      borderBottomRadius="200px" 
      width={{base:"260px",md:"300px",lg:"350px"}}
      mt="2px"
      mb="50px"
      
    >
        <Flex display={'flex'} justifyContent={'center'}>
        <Box display="flex" justifyContent="center">
        <Image
          src=" src/assets/SIGNAL LOGO (2)@3x.png"
          alt="Dan Abramov"
          height="150px"
        />
      </Box>
      </Flex>
    <Flex display={'flex'} justifyContent={'center'}>
      <Box mr="40px" mt="10px">
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
               <Text border="1px"  width="240px"  borderRadius="5px"  borderColor="black" textAlign={'center'} mt="20px">774557556874</Text>
                
                </Box>
            </Flex>
          
       <Flex display={'flex'} justifyContent={'center'}>   
          <Box  mt="10px">
          {/* <Input
            type="text"
            placeholder="Generate OTP"
            height="30px"
            width="260px"
            borderRadius="10px"
            borderColor="black"
            
            /> */}
            <Text border="1px"  width="240px"  borderRadius="5px"  borderColor="black" textAlign={'center'} mt="30px"> Genarate OTP</Text>
          </Box>
          </Flex>
         
           <Flex display={'flex'} justifyContent={'center'}>
            <Box  pt="50px">
             <Text>Enter OTP</Text>
            </Box>
            </Flex>
          
          <Box display="flex" justifyContent="center" mb="20px">
            {/* <Input
              type="text"
              placeholder=""
              height="30px"
              width="260px"
              borderRadius="10px"
              borderColor="black"
              ml={3}
            /> */}
            <HStack >
          <PinInput otp size='sm'>
          <PinInputField borderColor={'green.900'} name="numone"  onChange={handlechange}  />
          <PinInputField borderColor={'green.900'} name="numtwo"   onChange={handlechange}/>
          <PinInputField borderColor={'green.900'} name="numthree" onChange={handlechange}/>
          <PinInputField borderColor={'green.900'} name="numfoure" onChange={handlechange}/>
          <PinInputField borderColor={'green.900'} name="numfive"  onChange={handlechange} />
          <PinInputField borderColor={'green.900'} name="numsix"   onChange={handlechange}/>
          </PinInput>
           </HStack>
          </Box>

          <Flex display={'flex'} justifyContent={'center'}>
          <Box >
            <Button
              colorScheme="blue"
              size="lg"
              mt="30px"
              mb="50px"
              bg="rgba(0, 69, 112, 1)"
              width={{base:"220px",md:"260px",lg:"280px"}}
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

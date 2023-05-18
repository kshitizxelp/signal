import { Box, Button, Image, Input, Text, InputGroup, Center,Flex, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function GanarateOtp() {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/enterotp");
  };

  // const [formData, setFormData] = useState<any>({
  //   number: "",
  //   phoneno: "",
  // });

  // const inputs: any = [
  //   {
  //     phoneno: "username",
  //     label: "enter phone no",
  //     type: "number",
  //   },
  // ];

  const [number, setNumber] = useState("");

  // const handleChange = (event) => {
  //   setInputs({
  //     ...inputs,
  //     [event.target.name]: event.target.value,
  //   });
  // };
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

              type="number"
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
        

        {/* <Box mr={80} mt={200}>
          <Text>Enter Mobile Number</Text>
        </Box>

        <Box>
          <InputGroup>
            <Input
              type="tel"
              placeholder=""
              height="30px"
              width="30px"
              borderRadius="10px"
              ml={3}
            />
            <Input
              type="text"
              placeholder=""
              height="30px"
              width="260px"
              borderRadius="10px"
              ml={3}
            />
          </InputGroup>
        </Box>

        <Box mt={10}>
          <Button
            colorScheme="blue"
            size="lg"
            bg="rgba(0, 69, 112, 1)"
            width="313px"
            onClick={Login}
          >
            Generate OTP
          </Button>
        </Box> */}
      {/* </Flex> */}

      </Box>
    </Box>
  );
}

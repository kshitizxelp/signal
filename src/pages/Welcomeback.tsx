import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
  Link,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import Nav from "../component/Nav";
import { useNavigate, useNavigation } from "react-router-dom";


export default function Welcomeback() {
  const dataObj = [
    {
      text: "Kate has submitted 3 completed tasks.",
      btnName: "view",
    },
    {
      text: "Riya has requested for a new task.",
      btnName: "view",
    },
    {
      text: "You have an unfinished content creation.",
      btnName: "view",
    },
    {
        text: "Kate as just encashed her reward points.",
        btnName: "view",
      },
  ];

  const navigate = useNavigate();

  const Login = () => {
    navigate("/Mydashbord");
  };
  return (
    <>
    <Box bg={"blackAlpha.800"} width={"100%"}>
        <Nav />
        
      <Box display="flex" justifyContent="center">
        <Text fontSize={16} fontWeight={'bold'} color={'white'}>Welcome back Abhi!</Text>
        </Box>
     
      <Box display="flex" justifyContent="center">
      <Text fontSize={16}  color={'white'}>Take a look at these Notifications:</Text>
      </Box>
     
      <Box  mt={50}>
       
        {dataObj.map((item) => (
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text color={"white"} textAlign={'center'} pl={5} fontSize={15} >{item.text}</Text>
            <Button mt={2} bg={'yellow.800'} width={200} color={'white'} borderRadius={30} mr={5}>{item.btnName}</Button>
          </Box>
        ))}
        <Box display="flex" justifyContent="center">
            <Button width={300} borderRadius={30} mt={200} mb={20}  bg={'yellow.800'} color={'white'} onClick={Login}>I'll do this later</Button>
        </Box>
      </Box>
    </Box>
    </>
  );
}

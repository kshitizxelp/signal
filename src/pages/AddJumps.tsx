import React, { useRef, useState } from "react";
import {
  Box,
  Text,
  HStack,
  Image,
  Link,
  Flex,
  Button,
  ChakraProvider,
  Avatar,
  Progress,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
} from "@chakra-ui/react";
import {
  AiOutlineArrowLeft,
  RxCross2
} from "react-icons/all";
import ReactPlayer from "react-player";
import { useLocation, useNavigate } from "react-router-dom";

const AddJumps = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log("statefromjump", state?.data);
  const Back = () => {
    navigate(-1);
  };
  const next = ()=>{
    navigate("/jump",{
      state:{
        next:state?.data
      }
    })
  }
 data:state.data
  
  const [inputValues, setInputValues] = useState({});
  const [enterValues, setEnterValues] = useState([]);

  const handleClick = () => {
    
    setEnterValues((prevState)=> [...prevState,inputValues])
  };
  console.log("enterValues",enterValues)

  const handleOnChange = (e:any) => {
    setInputValues(e.target.value)
  };

  console.log("inputValues",inputValues)

  const handleRemove = (index:any) => {
    setEnterValues((prevValues) => prevValues.filter((_, i) => i !== index));
  };
  
  
  

 
 
 

 

  const reactPlayerRef = useRef<any>(null);
    const [played, setPlayed] = useState(0);

    const handleProgress = (progress :any) => {
      setPlayed(progress.played);
      const time = reactPlayerRef.current.getCurrentTime()
    };
    console.log(played,"played")
    
    const handleSeek = (value :any) => {
      setPlayed(value);
      reactPlayerRef.current.seekTo(value);
    };

  return (
    <Box>
      <Box bg={"gray.300"} width="100%">
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          bg={"gray.200"}
          width="100%"
        >
          <HStack gap={"5"} pr={5}>
            <Text marginLeft="10px" color={"#004570"} onClick={Back}>
              <AiOutlineArrowLeft />
            </Text>
            <Box>
              <Text marginLeft="10px" color={"#004570"} mb="2px" fontSize={12}>
                Add English Content for{" "}
              </Text>
              <Text marginLeft="10px" color={"#004570"} mb="3px">
                GopiSunkara{" "}
              </Text>
            </Box>
          </HStack>
          <Image
            marginRight="10px"
            src="src/assets/SIGNAL LOGO (2)@3x.png"
            alt="Dan Abramov"
            height={100}
          />
        </Box>
      </Box>

      <Box mt={"100px"}>
        <Flex display={"flex"} justifyContent={"center"}>
          <ReactPlayer
           ref={reactPlayerRef}
            url={state?.data}
            controls
            onProgress={handleProgress}
            width="50%"
            height="250px"
          />
        </Flex>
        <Flex display={"flex"} justifyContent={"center"}>
          <Slider
            value={played}
            min={0}
            max={1}
            step={0.01}
            onChange={handleSeek}
            colorScheme="blue"
            aria-label="Video progress"
            mt={4}
            width="50%"
          >
            <SliderTrack bg="gray.200">
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Flex>
      </Box>
      {enterValues.map((value,index) =>
      <Box ml={"200px"} key={index} display={'flex'} justifyContent="space-evenly">
       
        <Text>{value} </Text>
        <Text mt={'5px'}><RxCross2 onClick={()=>{handleRemove(index)}}/></Text>
        
      </Box>
       )}

      <Flex display={"flex"} justifyContent={"center"}>
        <Box>
          <Text>Add Anecdote</Text>
          <Input
            type="text"
            variant="outline"
            bgColor="white"
            borderColor="black"
            width="373px"
            marginBottom="10px"
            name="message"
            onChange={handleOnChange}
          />
          <br />

          <Button onClick={handleClick} bg={"blue"} color={"white"}>
            insert
          </Button>
        </Box>
      </Flex>
      <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={next}  >
         next
         </Button>
         </Flex>
    </Box>
  );
};

export default AddJumps;
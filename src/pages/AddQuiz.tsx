import React, { useRef, useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Input,Select,Slider,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine ,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const AddQuiz = () => {

    const navigate = useNavigate()
     const Back =()=>{
        navigate("/AddAnecdote")
     }
     const Next =()=>{
        navigate("/FinalContent")
     }


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

    const [show ,setShow]=useState(false);
    const clicked =()=>{
        setShow(!show)

    }

    return (

      <Box bg={'gray.300'} width="100%">

     <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'gray.200'}
            width="100%">
       <HStack gap={"5"} pr={5}>
       <Text marginLeft="10px" color={'#004570'} ><AiOutlineArrowLeft/></Text>
       <Box>
       <Text marginLeft="10px" color={'#004570'} mb="2px" fontSize={12}>Add English Content for </Text>
       <Text marginLeft="10px" color={'#004570'}mb="3px" >GopiSunkara </Text>
       </Box>
       </HStack>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
      </Box> 
     
      <Box ml="50px">
            <Text color={'#004570'} fontWeight={'bold'}>AddQuiz</Text>
            <Text fontSize="14px" p="20px">Pause the video where you would like a quiz to be inserted and hit the 'Add Quiz' button.</Text>
        </Box>

        <Box mt={"100px"}>
       <Flex  display={'flex'} justifyContent={'center'}>
        <ReactPlayer
        ref={reactPlayerRef}
        url="https://www.youtube.com/watch?v=OP1yvauwAys"
        controls
        onProgress={handleProgress}
        width="50%"
        height="250px"
      />
        </Flex>
        <Flex  display={'flex'} justifyContent={'center'}> 
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
        <SliderTrack bg="gray.200" >
          <SliderFilledTrack bg="blue.500" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
      </Flex>
      </Box>
      <Flex display={'flex'} justifyContent={'center'} mt={'20px'}>
        <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black" onClick={clicked}>
        AddQuiz
       </Button>
       </Flex>


       {
       show ?
       <Box mt="10px">
       <Flex display={'flex'} justifyContent={'center'}>
       <Box width="500px" height="300px" bg={'gray'} borderRadius="5px">
            <Box display={'flex'} justifyContent="space-between">
              <Text padding="5px">Quation 1</Text>
              <Text padding="5px" color={'red'} ><RiDeleteBinLine/></Text>
             </Box>
            <Text borderBottom={'1px'}></Text>
            
            <Box display={'flex'} mt="10px" ml="10px">
              <Text>Quqtion Timestamp:</Text>
              <Text bg={'white'} borderRadius="5px" width="100px">00:01:22</Text>
            </Box>
            <Text ml="10px">Edit you Quation</Text>
            
            <Box ml="10px">
              <Text bg={'white'} borderRadius="5px" width="400px">The ………………. of the Elm Street Kids Club were not.</Text>
            </Box>
         
           <Box >
            <Box display={'flex'} padding="10px">
              <input type="radio" value="" name=""  />
              <Text pl="10px" bg={'white'} borderRadius="5px" width="300px">rebuild</Text>
            </Box>
            <Box display={'flex'} padding="10px">
              <input type="radio" value="" name="" />
              <Text pl="10px" bg={'white'} borderRadius="5px" width="300px">Members</Text>
            </Box>
            <Box display={'flex'} padding="10px" >
              <input type="radio" value="" name=""  />
              <Text pl="10px" bg={'white'} borderRadius="5px" width="300px">Twitch</Text>
            </Box>
          </Box>

       </Box> 
       </Flex>

       </Box>:null

       }


     <Box mt={'50px'}>
     <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Next} >
         Next
         </Button>
         </Flex>
         </Box>

      </Box>


        )
    }
    
    export default AddQuiz
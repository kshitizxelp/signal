
import React, { useRef, useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Stack,Select,Slider,SliderTrack,SliderFilledTrack,SliderThumb ,Radio, RadioGroup,Input} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import VideoPlayer from '../component/VideoPlayer';

const AddSpeed = () => {

const reactPlayerRef = useRef<any>(null);
const [played, setPlayed] = useState(0);
const [speed, setSpeed] = useState('1')
const [des, setDes] = useState('')

const handleProgress = (progress :any) => {
  setPlayed(progress.played);
  const time = reactPlayerRef.current.getCurrentTime()
  };
console.log(played,"played")

const handleSeek = (value :any) => {
 setPlayed(value);
 reactPlayerRef.current.seekTo(value);
 
};

const [text,SetText]=useState('Addspeed')
const handleClick = ()=>{
    if(text === 'Add Speed'){
        SetText('Stop Speed');
    }
    else{
        SetText('Add Speed');
    }
};

const [inputValues, setInputValues] = useState({
    name:"",
    value:"",
   
});

console.log("speed",{speed})

const finalPayload = {
    speed,des
}

console.log("finalPayload",finalPayload)

  const navigate = useNavigate()
  const next=()=>{
    navigate("/AddAnecdote")
  }
  const Back=()=>{
    navigate("/Jump")
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
       <Text marginLeft="10px" color={'#004570'}mb="3px">GopiSunkara </Text>
       </Box>
       </HStack>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
      </Box> 

          <Box ml="50px">
            <Text color={'#004570'} fontWeight={'bold'}>Add Speed</Text>
            <Text fontSize="14px" p="30px">Would you like to change the speed for certain sections of the Video? Play or drag the slider to reach a timestamp and hit 'Start Speed' to specify the start/end timestamps for the portion of the video that needs to be played at a different speed.</Text>
          </Box>

          <Box>
            {/* <VideoPlayer/> */}

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
     </Box>

     <Box mt="20px">
        <Flex display={'flex'} justifyContent={'center'} >
        <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black" onClick={handleClick}>
        {text}
       </Button>
       </Flex>
        </Box>

{ 
text === 'Stop Speed'?
        <Flex display={'flex'} justifyContent={'center'}>
    <Box width="500px" height="200px" bg={'gray'} borderRadius="5px">
         <Box display={'flex'} justifyContent="space-between">
           <Text padding="5px">Anecdote 1</Text>
           <Text padding="5px" color={'red'} ><RiDeleteBinLine/></Text>
          </Box>
         <Text borderBottom={'1px'}></Text>
      
      <Box display={'flex'} justifyContent="space-around">
           <Box display={'flex'} m="5px">
           <Text>Start Time:</Text>
           <Text bg={'white'} borderRadius={'5px'}>02:00:12</Text>
          </Box>
          <Box display={'flex'} m="5px" >
           <Text>End Time:</Text>
           <Text bg={'white'} borderRadius={'5px'}>02:00:12</Text>
          </Box>
          </Box>
         
          <Box mt={'10px'}>
          <Flex display={'flex'} alignItems="center" direction="row" gap={2} ml={'100px'}>
         
          <RadioGroup onChange={setSpeed} value={speed}>
      <Stack direction='row'>
        <Radio value='1.5'>1.5x</Radio>
        <Radio value='2.5'>2.5x</Radio>
        <Radio value='3'>3x</Radio>
        <Radio value='4'>4x</Radio>
      </Stack>
    </RadioGroup>
            </Flex>
            </Box>

          <Flex display={'flex'} justifyContent={'center'}>
          <Box>
           <Text>Reason to Speed</Text>
           <Input bg={'white'} borderRadius={'5px'} height={'50px'} width={'400px'}
            onChange={(e)=>setDes(e.target.value)}
           ></Input>
          </Box>
          </Flex>
        
           
    </Box> 
    </Flex> :null
    }

{
    text ==='Stop Speed'?
<Box mt={'100px'}>
 <Flex flexDirection="row" justifyContent="center">
 <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
  Back
 </Button>

 <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={next}  >
   Next
   </Button>
   </Flex>
 </Box>:null
}


{
    text ==='Add Speed'?
<Box>
<Flex flexDirection="row" justifyContent="center">
 <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
  Back
 </Button>

 <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={next}  >
   Skip
   </Button>
   </Flex>

</Box>:null
}

    </Box>
  )
}

export default AddSpeed
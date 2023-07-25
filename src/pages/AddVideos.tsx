import { Box, Text ,Image, Input, Flex, Button,Slider,SliderTrack,SliderFilledTrack,SliderThumb } from '@chakra-ui/react'
import ReactPlayer from 'react-player';



import {FiUpload  } from 'react-icons/all';

import React, { useRef, useState } from 'react'
import VideoPlayer from '../component/VideoPlayer';
import { useNavigate } from 'react-router-dom';

export default function AddVideos() {

  // const videoUrl = 'https://youtu.be/Y9i3OIMitRQ';
  // const thumbnailUrl = 'src/assets/Mask Group 5@3x.png';
  const reactPlayerRef = useRef<any>(null);

  const navigate = useNavigate()
  const next = ()=>{
    navigate("/AddJumps",{
      state: {
        data:data?.text
      }
    })
  }

  const back = ()=>{
    navigate("/CreateNewTask1")
  }

  const [data, setData] = useState({
    videoname: "",
    text: "https://www.youtube.com/watch?v=OP1yvauwAys",
   
  });
  // const {videoname,text} = data;

  console.log("videname", data)

  const changeHandler = (e:any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log('data')
  };


const [played, setPlayed] = useState(0);

const handleProgress = (progress :any) => {
  setPlayed(progress.played);
  const time = reactPlayerRef.current.getCurrentTime()
  
   
};
console.log(played,"played")

const handleSeek = (value :any) => {
  setPlayed(value);
  reactPlayerRef.current?.seekTo(value);
  reactPlayerRef.current?.getInternalPlayer()?.playVideo();
 
 
};

  return (
    <Box display="flex" flexDirection="column" >
    <Box bg="gray" width="100%" >
     
    <Box  display={"flex"}
         flexDirection={"row"}
         justifyContent={"space-between"}
         alignItems={"center"}
         bg={'gray.200'}
         width="100%"
         >
    <Box display={"flex"}
         flexDirection={"column"} >
            <Text marginLeft="20px" color={'#004570'}> Add English Content for </Text>
    <Text marginLeft="20px" color={'#004570'} as="b" >Gopi Sunkara</Text>
    </Box>
    <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
   </Box>
   </Box>
  
      <Flex flexDirection="column" justifyContent="center" alignSelf="center" >
        <Box marginRight="100px" >
          <Text color={'#004570'} as="b" marginBottom="10px" fontSize="15px">Add new Video</Text>
          <Text  marginBottom="10px">Name of the Video</Text>
          <Input
              type="text"
              name="videoname"
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="373px"
              marginBottom="10px"
              onChange={changeHandler}
            /> <br/>
          <Text> Video Url</Text>
            <Input
              type="text"
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="373px"
              marginBottom="10px"
              name="text"
              onChange={changeHandler}
            />
            <Text color="#282828" fontSize="9px">Add Video</Text>
            </Box>
            {/* <Box bg="gray.100" width="300px" marginBottom="10px" marginRight="80px" display="flex" flexDirection="row" alignSelf="center" >
            <FiUpload  />
            <Text marginTop="-6px" marginLeft="10px" fontSize="20px" as="b" >Upload Video</Text>
           </Box> */}
           {/* <Box>
           <Text marginBottom="10px" as="u" color={'#004570'} >Or add video by URL</Text>
           </Box> */}
           <Text as="b" color={'#004570'} >Preview</Text>

           </Flex>
           {/* <Box alignSelf="center" marginLeft="120px" > 
              <VideoPlayer videoUrl={videoUrl} thumbnailUrl={thumbnailUrl}  />
           </Box> */}

<Flex  display={'flex'} justifyContent={'center'}>
      <ReactPlayer
        ref={reactPlayerRef}
        url={data?.text}
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
      
           <Flex flexDirection="row" justifyContent="center"  >
              <Button variant="ghost" marginRight="60px" onClick={back} >Back</Button>
              <Button colorScheme="blue" onClick={next}> Next</Button>
           </Flex>


    
   </Box>
  )
}

import { Box, Text ,Image, Input, Flex, Button } from '@chakra-ui/react'


import {FiUpload  } from 'react-icons/all';

import React from 'react'
import VideoPlayer from '../component/VideoPlayer';
import { useNavigate } from 'react-router-dom';

export default function AddVideos() {

  const videoUrl = 'https://youtu.be/Y9i3OIMitRQ';
  const thumbnailUrl = 'src/assets/Mask Group 5@3x.png';

  const navigate = useNavigate()
  const next = ()=>{
    navigate("/AddJumps")
  }

  const back = ()=>{
    navigate("/CreateNewTask1")
  }
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
    <Text marginLeft="20px" color={'#004570'} as="b" >Vineet</Text>
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
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="373px"
              marginBottom="10px"
            /> <br/>
          <Text> Video Url</Text>
            <Input
              type="text"
              variant="outline"
              bgColor="white"
              borderColor="black"
              width="373px"
              marginBottom="10px"
            />
            <Text color="#282828" fontSize="9px">Add Video</Text>
            </Box>
            <Box bg="gray.100" width="300px" marginBottom="10px" marginRight="80px" display="flex" flexDirection="row" alignSelf="center" >
            <FiUpload  />
            <Text marginTop="-6px" marginLeft="10px" fontSize="20px" as="b" >Upload Video</Text>
           </Box>
           <Box>
           <Text marginBottom="10px" as="u" color={'#004570'} >Or add video by URL</Text>
           </Box>
           <Text as="b" color={'#004570'} >Preview</Text>

           </Flex>
           <Box alignSelf="center" marginLeft="120px" > 
              <VideoPlayer videoUrl={videoUrl} thumbnailUrl={thumbnailUrl}  />
           </Box>
           <Flex flexDirection="row" justifyContent="center"  >
              <Button variant="ghost" marginRight="60px" onClick={back} >Back</Button>
              <Button colorScheme="blue" onClick={next}> Next</Button>
           </Flex>


    
   </Box>
  )
}

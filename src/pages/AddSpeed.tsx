
import React, { useRef, useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Avatar,Select,Slider,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const AddSpeed = () => {
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
            
          </Box>

    </Box>
  )
}

export default AddSpeed
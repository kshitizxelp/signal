import React, { useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Avatar,Select} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';




const ContentSelection30 = () => {
    const videoUrl = 'https://youtu.be/Y9i3OIMitRQ';
    const thumbnailUrl = 'src/assets/Mask Group 5@3x.png';
    
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
    const handlePlay = () => {
      setIsVideoPlaying(true);
    };

const navigate = useNavigate()
const Back = ()=>{
    navigate("/ContentSelection")
}
const next = ()=>{
    navigate("/ContentSelection33")
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
            <Text color={'#004570'} fontWeight={'bold'}>Add Jumps</Text>
            <Text fontSize="14px" p="30px">Would you like to add Jumps to the Video? Play the video or drag the slider to reach a timestamp and hit 'Stop Jump' to specify the start/end timestamps for the portion of the video that needs to be skipped.</Text>
        </Box>
           <Flex display={'flex'} justifyContent={'center'}>
            <Box>
            <Text color="#004570">Preview</Text>
           </Box>
           </Flex>

        <Box ml="100px">
            <Flex display={'flex'} justifyContent={'center'}>

        <Box position="relative" height="400px" width="800px" >
        {!isVideoPlaying && (
          <Box position="relative">
            <Image src={thumbnailUrl} alt="Thumbnail" width="80%" height="auto" />
            <Image
            src="src/assets/play@3x.png"
            alt="Play Button"
            position="absolute"
            top="50%"
            left="40%"
            transform="translate(-50%, -50%)"
            width={70} 
            height={70} 
            onClick={handlePlay}
          />
          </Box>
        )}
        {isVideoPlaying && (
          <ReactPlayer
            url={videoUrl}
            controls
            playing
            onEnded={() => setIsVideoPlaying(false)}
          />
        )}
      </Box>
      </Flex>

        </Box>


        
            
         
         

        <Box mt="20px">
        <Flex display={'flex'} justifyContent={'center'}>
        <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black">
        StartJump
       </Button>
       </Flex>
        </Box>

          
             

          

        <Box mt={'100px'}>

        <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={next} >
         Skip
         </Button>
         </Flex>

          </Box>

   </Box>
  )
}

export default ContentSelection30
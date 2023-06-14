import React, { useRef, useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Avatar,Progress ,Slider ,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,IoIosAddCircleOutline,BiEdit ,RiSurveyLine ,RiMedalLine} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';


const AddJumps = () => {

  const navigate = useNavigate()
  const {state} = useLocation()

  console.log("statefromjump",state?.data)
  const Back = ()=>{
    navigate("/AddVideos")
  }

 

//     const videoUrl = 'https://youtu.be/Y9i3OIMitRQ';
//     const thumbnailUrl = 'src/assets/Mask Group 5@3x.png';
    
//     const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    // const videoRef = useRef(null);
    // const [progress, setProgress] = useState(0);
    // const [isSeeking, setIsSeeking] = useState(false);
  
    // const handleTimeUpdate = () => {
    //   const { currentTime, duration } = videoRef.current;
    //   const progressPercent = (currentTime / duration) * 100;
    //   if (!isSeeking) {
    //     setProgress(progressPercent);
    //   }
    // };
  
    // const handleSeek = (event:any) => {
    //   const { duration } = videoRef.current;
    //   const clickedTime = (event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * duration;
    //   videoRef.current.currentTime = clickedTime;
    //   setProgress((clickedTime / duration) * 100);
    //   setIsSeeking(true);
    // };
  
    // const handleSeekEnd = () => {
    //   setIsSeeking(false);
    // };



  
//     const handlePlay = () => {
//       setIsVideoPlaying(true);
//     };

// const navigate = useNavigate()
// const Back = ()=>{
//     navigate("/")
// }

// const nextscreen =()=>{
//     navigate("/")
// }  

const [played, setPlayed] = useState(0);


const handleProgress = (progress :any) => {
  setPlayed(progress.played);
};

const handleSeek = (value :any) => {
  setPlayed(value);
};


  return (
  //  <Box bg={'gray.300'} width="100%">
  //    <Box  display={"flex"}
  //           flexDirection={"row"}
  //           justifyContent={"space-between"}
  //           alignItems={"center"}
  //           bg={'gray.200'}
  //           width="100%">
  //      <HStack gap={"5"} pr={5}>
  //      <Text marginLeft="10px" color={'#004570'} ><AiOutlineArrowLeft/></Text>
  //      <Box>
  //      <Text marginLeft="10px" color={'#004570'} mb="2px" fontSize={12}>Add English Content for </Text>
  //      <Text marginLeft="10px" color={'#004570'}mb="3px" >GopiSunkara </Text>
  //      </Box>
  //      </HStack>
  //      <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
  //     </Box> 

      
  //       <Box ml="50px">
  //           <Text color={'#004570'} fontWeight={'bold'}>Add Jumps</Text>
  //           <Text fontSize="14px" p="20px">Would you like to add Jumps to the Video? Play or drag the slider to reach a timestamp and hit 'Start Jump' to specify the start/end timestamps for the portion of the video that needs to be skipped.</Text>
  //       </Box>

  //       <Box ml="50px">
  //           <Flex display={'flex'} justifyContent={'center'}>

  //       <Box position="relative" height="400px" width="800px" >
  //       {!isVideoPlaying && (
  //         <Box position="relative">
  //           <Image src={thumbnailUrl} alt="Thumbnail" width="80%" height="auto" />
  //           <Image
  //           src="src/assets/play@3x.png"
  //           alt="Play Button"
  //           position="absolute"
  //           top="50%"
  //           left="40%"
  //           transform="translate(-50%, -50%)"
  //           width={'70px'} 
  //           height={'70px'} 
  //           onClick={handlePlay}
  //         />
  //         </Box>
  //       )}
  //       {isVideoPlaying && (
  //         <ReactPlayer
  //           url={videoUrl}
  //           controls
  //           playing
  //           onEnded={() => setIsVideoPlaying(false)}
  //           onplaying={()=>onVideoPlaying()}
          
            
  //         />
          
  //       )}
  //       <Box mt={'10px'} ml={'5px'}>
  //       <Progress 
  //        size="sm"
  //         colorScheme="blue" 
  //          bg={'orange.600'}
       
  //       position={'absolute'}
  //          bottom={0} left={0} right={0} width={'600px'}/>
  //       </Box>
  //     </Box>
  //     </Flex>

  //       </Box>

  //      <Flex display={'flex'} justifyContent={'center'} mt={'10px'}> 
  //       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="110px" color="black" >
  //       Start Jump
  //      </Button>
  //      </Flex>

           

  //     <Box>
  //     <Flex flexDirection="row" justifyContent="center">
  //      <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
  //       Back
  //      </Button>

  //      <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" >
  //        Skip
  //        </Button>
  //        </Flex>

  //         </Box>

  //  </Box>

  <Box>
     <Box bg={'gray.300'} width="100%" >
     <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'gray.200'}
            width="100%">
       <HStack gap={"5"} pr={5}>
       <Text marginLeft="10px" color={'#004570'} onClick={Back}><AiOutlineArrowLeft/></Text>
       <Box>
       <Text marginLeft="10px" color={'#004570'} mb="2px" fontSize={12}>Add English Content for </Text>
       <Text marginLeft="10px" color={'#004570'}mb="3px" >GopiSunkara </Text>
       </Box>
       </HStack>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
      </Box> 
      </Box>

  
 
  <Box mt={'100px'} >
    <Flex  display={'flex'} justifyContent={'center'}>
      <ReactPlayer
     
        url={state?.data}
        controls
        onProgress={handleProgress}
       
        width="50%"
        height="auto"
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
    
  )
}

export default AddJumps
import React, { useState,useRef } from 'react';
import ReactPlayer from 'react-player';
import { Box, Image, IconButton,Flex ,Slider,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react';

export default function VideoPlayer () {
    // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
    // const handlePlay = () => {
    //   setIsVideoPlaying(true);
    // };

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
      // <Box position="relative" height="400px" width="800px" >
      //   {!isVideoPlaying && (
      //     <Box position="relative">
      //       <Image src={thumbnailUrl} alt="Thumbnail" width="80%" height="auto" />
      //       <Image
      //       src="src/assets/play@3x.png"
      //       alt="Play Button"
      //       position="absolute"
      //       top="50%"
      //       left="40%"
      //       transform="translate(-50%, -50%)"
      //       width={70} 
      //       height={70} 
      //       onClick={handlePlay}
      //     />
      //     </Box>
      //   )}
      //   {isVideoPlaying && (
      //     <ReactPlayer
      //       url={videoUrl}
      //       controls
      //       playing
      //       onEnded={() => setIsVideoPlaying(false)}
      //     />
      //   )}
      // </Box>
      <Box>
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
      
           {/* <Flex flexDirection="row" justifyContent="center"  >
              <Button variant="ghost" marginRight="60px" onClick={back} >Back</Button>
              <Button colorScheme="blue" onClick={next}> Next</Button>
           </Flex> */}

      </Box>
    );
  };
  
  
  

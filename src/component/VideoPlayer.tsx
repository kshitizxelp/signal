import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Box, Image, IconButton } from '@chakra-ui/react';

export default function VideoPlayer ({ videoUrl, thumbnailUrl }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
    const handlePlay = () => {
      setIsVideoPlaying(true);
    };
  
    return (
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
    );
  };
  
  
  

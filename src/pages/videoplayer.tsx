// // import React, { useState, useRef } from 'react';
// // import { Box, Progress } from '@chakra-ui/react';

// // const VideoPlayer2 = () => {
// //   const videoRef = useRef("https://youtu.be/7xFDpwjqeJU");
// //   const [progress, setProgress] = useState(0);

// //   const handleTimeUpdate = () => {
// //     const { currentTime, duration } = videoRef.current;
// //     const progressPercent = (currentTime / duration) * 100;
// //     setProgress(progressPercent);
// //   };

// //   const handleSeek = (event) => {
// //     const { duration } = videoRef.current;
// //     const clickedTime = (event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * duration;
// //     videoRef.current.currentTime = clickedTime;
// //   };

// //   return (
// //     <Box position="relative">
// //       <video
// //         ref={videoRef}
// //         src="path_to_your_video"
// //         controls
// //         onTimeUpdate={handleTimeUpdate}
// //         style={{ width: '100%' }}
// //       ></video>
// //       <Progress value={progress} size="sm" colorScheme="blue" onClick={handleSeek} position="absolute" bottom={0} left={0} right={0} />
// //     </Box>
// //   );
// // };

// // export default VideoPlayer2;


// import React, { useState, useRef } from 'react';
// import { Box, Progress } from '@chakra-ui/react';

// const VideoPlayer2 = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [progress, setProgress] = useState(0);

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       const { currentTime, duration } = videoRef.current;
//       const progressPercent = (currentTime / duration) * 100;
//       setProgress(progressPercent);
//     }
//   };

//   const handleSeek = (event: React.MouseEvent<HTMLDivElement>) => {
//     if (videoRef.current) {
//       const { duration } = videoRef.current;
//       const clickedTime = (event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * duration;
//       videoRef.current.currentTime = clickedTime;
//       setProgress((clickedTime / duration) * 100);
//     }
//   };

//   return (
//     <Box position="relative">
//       <video
//         ref={videoRef}
//         src="https://youtu.be/7xFDpwjqeJU"
//         controls
//         onTimeUpdate={handleTimeUpdate}
//         style={{ width: '100%' }}
//       ></video>
//       <Progress
//         value={progress}
//         size="sm"
//         colorScheme="blue"
//         onClick={handleSeek}
//         position="absolute"
//         bottom={0}
//         left={0}
//         right={0}
//       />
//     </Box>
//   );
// };

// export default VideoPlayer2;



import React, { useEffect, useRef, useState } from 'react';
import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react';


type YouTubeVideoPlayer2Props = {
    videoId: any;
  };
  
  const YouTubeVideoPlayer2: React.FC<YouTubeVideoPlayer2Props> = ({ videoId }) => {
    const [currentTime, setCurrentTime] = useState(0);
    const videoRef = useRef<any | null>(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (videoRef.current) {
          const time = videoRef.current.getCurrentTime();
          setCurrentTime(time);
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
  
    const handleSliderChange = (value: number) => {
      if (videoRef.current) {
        videoRef.current.seekTo(value, true);
        setCurrentTime(value);
      }
    };
  
    return (
      <Box>
        <iframe
          ref={videoRef}
          src={"https://youtu.be/7xFDpwjqeJU"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Player"
        ></iframe>
        <Slider min={0} max={currentTime} value={currentTime} onChange={handleSliderChange}>
          <SliderTrack bg="gray.200">
            <SliderFilledTrack bg="blue.500" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </Box>
    );
  };
  
  export default YouTubeVideoPlayer2;
  
import React, { useRef, useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Avatar,Select,Slider,SliderTrack,SliderFilledTrack,SliderThumb,Input} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { setJumpData } from '../Slice';




const Jump = () => {
   

const navigate = useNavigate()

const dispatch = useDispatch()

const reactPlayerRef = useRef<any>(null);
   
const [played, setPlayed] = useState(0);
const [playedduration, setPlayedDuration] = useState(0);
const [show,setShow] = useState(false);

const [jumpstartnn, setJumpStartnn] = useState({
  
    currentTime:"",
    endTime:''
   
});
const Back = ()=>{
    navigate(-1)
}
const next = ()=>{
  dispatch(setJumpData(jumpstartnn))
    navigate("/AddSpeed",{
        state:{
            nexsa:state?.next
        }
    })
}


// const [texts, setTexts] = useState([]);
  
// const handleClick = () => {
 
//   const randomText = generateRandomText();

  
//   setTexts([...texts , randomText]);
// };

// const generateRandomText = () => {
 
//   return Math.random().toString(36).substr(2, 9);
// };




// const { state } = useLocation();

//   console.log("statefromjump", state?.data);









// const handleProgress = (progress :any) => {
//   setPlayed(progress.played);
//   const time = reactPlayerRef.current.getCurrentTime()
//   console.log(time,"ggggggggggggggggg")

  
   
// };
const handleProgress = (progress:any) => {
    setPlayed(progress.played);
    const { playedSeconds } = progress;
    setPlayedDuration(playedSeconds);
  };
  
console.log(playedduration,"played>>>>>>>>>>.")


const handleSeek = (value :any) => {
  setPlayed(value);
  reactPlayerRef.current?.seekTo(value);
  reactPlayerRef.current?.getInternalPlayer()?.playVideo();
};


    const [text, setText] = useState('jumpstart');
    // const handleClick = (progress:any) => {
    // //     if 
    // //    (text === 'jumpstart') {
         
          
    // //       setText('jumpStop');
         
    // //     } 
    // //     else {
    // //       setText('jumpstart');
          
    // //     }
    // setPlayed(progress.played);
    // const currentTime = reactPlayerRef.current.getCurrentTime();
    // setJumpStartnn(currentTime);

    //   };

    const handleClick = (e:any) => {
        const currentTime = reactPlayerRef.current.getCurrentTime();
        // setJumpStartnn(currentTime);
       console.log(playedduration,"inside hanbdle clicjk"); 
       if 
       (text == 'jumpstart') { 
        setText('jumpStop');
        setJumpStartnn((prevState:any)=>({
            ...prevState,
            currentTime:playedduration 
           }));
        // setJumpStartnn((e:any)=>({
        //     ...e,
        //     endTime:playedduration 
        //    }));
       }
       else {
        setText('jumpstart');
        setJumpStartnn((e:any)=>({
            ...e,
            endTime:playedduration 
           }));
          //  setJumpStartnn((prevState:any)=>({
          //   ...prevState,
          //   currentTime:playedduration 
          //  }));
       }

    //    setJumpStartnn((prevState:any)=>({
    //     ...prevState,
    //     currentTime:playedduration 
    //    }));
       
       
       
      
      };

      console.log("jumpstarttt",jumpstartnn)

      const{state} = useLocation();
      console.log("url",state?.next) 

      const handle =()=>{
         setShow(!show)
      };

      
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
            <Text color={'#004570'} fontWeight={'bold'}>Add Jump</Text>
            <Text fontSize="14px" p="30px">Would you like to add Jumps to the Video? Play the video or drag the slider to reach a timestamp and hit 'Stop Jump' to specify the start/end timestamps for the portion of the video that needs to be skipped.</Text>
        </Box>
           <Flex display={'flex'} justifyContent={'center'}>
            <Box>
            <Text color="#004570">Preview</Text>
           </Box>
           </Flex>

           <Box mt={"100px"}>
           <Flex  display={'flex'} justifyContent={'center'}>
      <ReactPlayer
        ref={reactPlayerRef}
        url={state?.next}
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
        

        
       

            
         
         

        <Box mt="20px">
        <Flex display={'flex'} justifyContent={'center'} >
        {/* <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black" onClick={handleClick}>
        {text}
       </Button> */}
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black" onClick={handle}>
        Click to start
       </Button>
       </Flex>
        </Box>

{
    show ?<Flex display={'flex'} justifyContent={'center'}>
      
    <Box width="500px" height="200px" bg={'gray'} borderRadius="5px">
         <Box display={'flex'} justifyContent="space-between">
           <Text padding="5px">Anecdote 1</Text>
           <Text padding="5px" color={'red'} ><RiDeleteBinLine/></Text>
          </Box>
         <Text borderBottom={'1px'}></Text>
      
      <Box display={'flex'} justifyContent="space-around">
           <Box display={'flex'} m="5px">
           <Text>Start Time:</Text>
           <Text bg={'white'} borderRadius={'5px'}>{jumpstartnn?.currentTime}</Text>
          </Box>
          <Box display={'flex'} m="5px" >
           <Text>End Time:</Text>
           <Text bg={'white'} borderRadius={'5px'}>{jumpstartnn?.endTime}</Text>
          </Box>
          </Box>

          <Flex display={'flex'} justifyContent={'center'}>
          <Box>
           <Text>Reason to Speed</Text>
           {/* <Text bg={'white'} borderRadius={'5px'} height={'50px'} width={'400px'}>(optional)</Text> */}
           <Input placeholder='medium size' size='md' type="text" name=""/>
          </Box>
         </Flex>
         <Flex display={'flex'} justifyContent={'center'} mt="10px">
         <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black" onClick={handleClick}>
           {text}
          </Button>
          </Flex>
           
    </Box> 
    </Flex> :null
}

       


          
             

          

        <Box mt={'100px'}>

      
      <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={next}  >
         Save
         </Button>
         </Flex>

          </Box>

   </Box>




   
  
   
    //   <Box>
    //     <button onClick={handleClick}>Add Text</button>
    //     {texts.map((text, index) => (
          
    //     ))}
    //   </Box>






  )
}

export default Jump;
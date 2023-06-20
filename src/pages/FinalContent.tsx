import React, { useRef, useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Input,Select,Slider,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,  RiMedalLine, } from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const FinalContent = () => {

    const navigate = useNavigate()
     const Back =()=>{
        navigate("/AddQuiz")
     }
     const Next =()=>{
        navigate("")
     }
     const RelatedRewards =()=>{
        navigate("/SelectedRewards")
      }


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
            <Text color={'#004570'} fontWeight={'bold'}></Text>
            <Text fontSize="14px" p="20px">Great going Ann: Here is your final content preview for Shreya</Text>
        </Box>

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
     
     <Flex display={'flex'} justifyContent={'center'} mt={'50px'}>
     <Box>
      <Text>Task due date</Text>
     <Input placeholder='medium size' size='md' type='date' borderColor={'black'} width={'320px'}/>
     </Box>
     </Flex>

     <Flex display={'flex'} justifyContent={'center'} mt={'50px'}>
     <Box display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
         >
        <Text p={'20px'} >Add Task Reward Points</Text>
        <Text p={'20px'} bg={'white'} borderRadius={'10px'} >320pts</Text>
     </Box>
     </Flex>
       
     
     <Box display={'flex'} justifyContent={'center'} mr={'100px'}>
      <Box>
      <Text pt={'6px'} ml={'20px'} color={'#F45D01'}><RiMedalLine /></Text> 
      </Box>
     <Box>
     <Text><Link color={'#F45D01'} onClick={RelatedRewards}> View Related Rewards</Link> </Text>
     </Box>
     </Box>
     


     <Box mt={'50px'}>
     <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px"  >
         Save
         </Button>
         </Flex>
         </Box>

      </Box>


        )
    }
    
    export default FinalContent
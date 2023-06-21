import React, { useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Avatar} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,IoIosAddCircleOutline,BiEdit ,RiSurveyLine ,RiMedalLine} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';


const ContentSelection = () => {
    const videoUrl = 'https://youtu.be/Y9i3OIMitRQ';
    const thumbnailUrl = 'src/assets/Mask Group 5@3x.png';
    
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
    const handlePlay = () => {
      setIsVideoPlaying(true);
    };

const navigate = useNavigate()
const Back = ()=>{
    navigate("/ExploreLibrary")
}

const nextscreen =()=>{
    navigate("/FinalContent")
}

const videoedit =()=>{
  navigate("/ContentSelection30")
}
const Quize =()=>{
  navigate("/ContentSelection37")
}
const RelatedRewards =()=>{
  navigate("/ContentSelection2")
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
            <Text color={'#004570'} fontWeight={'bold'}>English Vocabulary (Level 1)</Text>
            <Text fontSize="14px" p="20px">You can add an anecdotes to this video. You can also edit the content to skip certain parts or change the playback speed.</Text>
        </Box>

        <Box ml="50px">
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

            {/* <Box display={'flex'} ml="50px">
             <Text color={'#F45D01'} p="10px"><GrAddCircle /></Text>
             <Link color={'#F45D01'} p="10px"> Add Anecdote</Link>
             </Box>
             <Box display={'flex'} ml="50px">
             <Text color={'#F45D01'} p="10px"><GrAddCircle /></Text>
              <Link color={'#F45D01'}> Edit Video Content</Link>
             
             </Box> */}
             

             <Box display={'flex'} ml="50px">
                <Box p="20px">
                  <Text pt={'6px'} ml={'20px'} color={'#F45D01'}><IoIosAddCircleOutline /></Text> 
                  <Text pt={'6px'} ml={'20px'} color={'#F45D01'}><BiEdit/></Text>
                  <Text pt={'6px'} ml={'20px'} color={'#F45D01'}><RiSurveyLine /></Text> 
                  <Text pt={'6px'} ml={'20px'} color={'#F45D01'}><RiMedalLine /></Text> 
                 </Box>

                <Box p="20px">
                <Text> <Link color={'#F45D01'} onClick={nextscreen}> Add Anecdote</Link></Text>
                <Text> <Link color={'#F45D01'} onClick={videoedit}> Edit Video Content</Link></Text>
                <Text> <Link color={'#F45D01'} onClick={Quize}> View Quiz</Link></Text>
                <Text><Link color={'#F45D01'} onClick={RelatedRewards}> View Related Rewards</Link> </Text>
               </Box>
        </Box>

          <Box>

        <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={nextscreen} >
         Next
         </Button>
         </Flex>

          </Box>

   </Box>
  )
}

export default ContentSelection
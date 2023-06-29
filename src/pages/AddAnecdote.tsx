import React, { useRef, useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Input,Select,Slider,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine ,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useLocation, useNavigate } from 'react-router-dom';




const AddAnecdote = () => {
   

const navigate = useNavigate()
const Back = ()=>{
    navigate(-1)
}

const Save = ()=>{
    navigate("/AddQuiz",{
        state:{
            audi:state?.benz
        }
    })
}

const [uploadShow,setuploadShow] = useState('')

 const handleChange = (e :any)=>{
    console.log("e",e.target.value)

    setuploadShow(e.target.value)
                
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
 reactPlayerRef.current?.seekTo(value);
 reactPlayerRef.current?.getInternalPlayer()?.playVideo();
 
};

const [text,SetText]= useState('AddAnecode')
const handleClick =()=>{
    if(text === 'AddAnecode'){
        SetText('AddAnecodes') ;
    }
    else{ 
        SetText('AddAnecode') ;
       
    }
}

const {state}= useLocation();
 console.log("data",state?.benz)
 
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
            <Text color={'#004570'} fontWeight={'bold'}>Add Anecdote</Text>
            <Text fontSize="14px" p="20px">Pause the video where you would like to add an anecdote</Text>
        </Box>

        <Box mt={"100px"}>
       <Flex  display={'flex'} justifyContent={'center'}>
        <ReactPlayer
        ref={reactPlayerRef}
        url={state?.benz}
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
        <Flex display={'flex'} justifyContent={'center'}>
        <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black" onClick={handleClick}>
        Add Anecdote
       </Button>
       </Flex>
        </Box>


        {
        text==='AddAnecodes'? 
         <Box>
         <Flex display={'flex'} justifyContent={'center'}>
           
         <Box width="500px" height="200px" bg={'gray'} borderRadius="5px">
              <Box display={'flex'} justifyContent="space-between">
                <Text padding="5px">Anecdote 1</Text>
                <Text padding="5px" color={'red'} ><RiDeleteBinLine/></Text>
               </Box>
              <Text borderBottom={'1px'}></Text>

              <Box mt={'5px'} display={'flex'} justifyContent="space-between">
                <Text m="10px">Anecdote Timestamp:</Text>
                <Text  m="10px"bg={'white'} borderRadius="2px" width="100px" textAlign={'center'} marginRight="200px">00:22:22</Text>
              </Box>
              <Box >
                <Text ml="20px">Select Anecdote Type:</Text>
                <Flex display={'flex'} justifyContent={'center'} >
                <Select placeholder='Select option' width="350px" cursor={"pointer"}  onChange={handleChange}>
                 <option value='Video' >Video</option>
                 <option value='Image'  >Image</option>
                 <option value='Text'>Text</option>
                </Select>
                </Flex>
              </Box>
                
         </Box> 
         
         </Flex>

         </Box>
      :null
      } 
    


{
    uploadShow === "Video" ? 
    
    (<Box>
    <Box mt="50px">
    <Flex display={'flex'} justifyContent={'center'}>
    <Box bg="white" width="400px" height="50px" marginBottom="10px"  display="flex" flexDirection="row" justifyContent={'center'} alignItems={'center'} >
      <FiUpload  />
      <Input
         placeholder="Select Date and Time"
         type="file"
          size="md"
          width="200px"
         />
      <Text marginTop="-6px" marginLeft="10px" fontSize="20px" as="b" >Upload Video</Text>
     </Box>
     </Flex>
     </Box>
    
    <Box mt="20px">
        <Flex display={'flex'} justifyContent={'center'}>
        <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black">
        Add Anecdote
       </Button>
       </Flex>
        </Box>

        <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Save} >
         Save
         </Button>
         </Flex>
        
        </Box>
 

      ): 
    (
<>
{
    uploadShow === "Image" ? (
        
        <Box>
        <Box mt="50px">
        <Flex display={'flex'} justifyContent={'center'}>
          <Box bg="white" width="400px" height="50px" marginBottom="10px"  display="flex" flexDirection="row" justifyContent={'center'} alignItems={'center'} >
         <Text> <FiUpload  /> </Text>
         <Input
         placeholder="Select Date and Time"
         type="file"
          size="md"
          width="200px"
           />
          <Text marginTop="-6px" marginLeft="10px" fontSize="20px" as="b" >Upload Image</Text>
         </Box>
         </Flex>
         </Box>
        
        <Box mt="20px">
            <Flex display={'flex'} justifyContent={'center'}>
            <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black">
            Add Anecdote
           </Button>
           </Flex>
            </Box>
            <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Save} >
         Save
         </Button>
         </Flex>
            </Box>
    )
    : (
        <>
        {
             uploadShow === "Text" ? 
             (
                <Box>
        <Box mt="50px">
        <Flex display={'flex'} justifyContent={'center'}>
        <Input
         placeholder="Select Date and Time"
          size="md"
          type="text"
          width="500px"
           />
         </Flex>
         </Box>
        
        <Box mt="20px">
            <Flex display={'flex'} justifyContent={'center'}>
            <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F45D01" width="150px" color="black">
            Add Anecdote
           </Button>
           </Flex>
            </Box>
            {/* <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Save} >
         Save
         </Button>
         </Flex> */}
            </Box>
             ) :
             (
                ""
             )
        }
        </>
    )
}
</>

    )
}



         

          
             

          

        <Box mt={'100px'}>

        <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Save} >
         Next
         </Button>
         </Flex>

          </Box>

   </Box>
  )
}

export default AddAnecdote

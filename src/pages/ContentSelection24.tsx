import React, { useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Input,Select} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine ,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';




const ContentSelection24 = () => {
    const videoUrl = 'https://youtu.be/Y9i3OIMitRQ';
    const thumbnailUrl = 'src/assets/Mask Group 5@3x.png';
    
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
    const handlePlay = () => {
      setIsVideoPlaying(true);
    };

const navigate = useNavigate()
const Back = ()=>{
    navigate("/ContentSelection23")
}

const Save = ()=>{
    navigate("/ContentSelection")
}

const [uploadShow,setuploadShow] = useState('')

 const handleChange = (e :any)=>{
    console.log("e",e.target.value)

    setuploadShow(e.target.value)
                
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
            <Text color={'#004570'} fontWeight={'bold'}>Add Anecdote</Text>
            <Text fontSize="14px" p="20px">Pause the video where you would like to add an anecdote</Text>
        </Box>

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
              <Box>
                <Text ml="20px">Select Anecdote Type:</Text>
                <Flex display={'flex'} justifyContent={'center'}>
                <Select placeholder='Select option' width="350px" onChange={handleChange} >
                 <option value='Video' >Video</option>
                 <option value='Image'>Image</option>
                 <option value='Text'>Text</option>
                </Select>
                </Flex>
              </Box>
                
         </Box> 
         </Flex>

         </Box>

{
    uploadShow === "Video" ? 
    
    (<Box>
    <Box mt="50px">
    <Flex display={'flex'} justifyContent={'center'}>
    <Box bg="white" width="400px" height="50px" marginBottom="10px"  display="flex" flexDirection="row" justifyContent={'center'} alignItems={'center'} >
      <FiUpload  />
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
            <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Save} >
         Save
         </Button>
         </Flex>
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

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#00450" width="110px" >
         Next
         </Button>
         </Flex>

          </Box>

   </Box>
  )
}

export default ContentSelection24
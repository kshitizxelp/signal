import React, { useState } from 'react'
import { Box, Text,HStack,Image,Link, Flex,Button,ChakraProvider,Avatar,Select} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,RiDeleteBinLine,FiUpload} from 'react-icons/all';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';




const ContentSelection2 = () => {


    const [text, setText] = useState('Add');
    const [color, setColor] = useState('black');
    // const [textIndex, setTextIndex] = useState(0);
    // const textOptions = ['Text 1', 'Text 2', 'Text 3'];
  
    const handleClick = () => {
      if 
     (text === 'Add') {
        // setTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length)
        
        setText('Added');
        setColor('green');
      } else {
        setText('Add');
        setColor('black');
      }
    };


const navigate = useNavigate()
const Back = ()=>{
    navigate("/ContentSelection")
};

const obg=[
    
    { 
       
        image:"src/assets/Mask Group 1@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
       
    },
    { 
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
       
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
       
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        
    },
]



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
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height="100"/>
      </Box> 

      
        <Box ml="50px">
            <Text color={'#004570'} fontWeight={'bold'}>Select Rewards for Shreya</Text>
            <Text fontSize="14px" p="20px"  noOfLines={[1, 2, 3]}>We have some amazing, specially curated reward products related to this task for Shreya in our e-store. Take a look and assign them to Shreya's reward catalogue.</Text>
        </Box>

        <Box>

        <ChakraProvider>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={20} p={20}>
    
         {obg.map((item)=>(
        <Box bg={'white'} h="150px" w="150px" borderRadius="50%">
        <Flex display={'flex'} justifyContent={'center'}>  
        <Image src={item.image} alt="" w="100px"
          h="100px"
         mt={5}/>
        </Flex>
        <Flex justifyContent={'center'}>
        <Box mt={6}>
            <Text fontSize={14}>{item.item}</Text>
            <Text fontSize={14} textAlign={'center'}>{item.itemvalue}</Text>
            <Link ml="30px"  onClick={handleClick} style={{ color: color }}>{text}</Link>
        </Box>
        </Flex>
           
        </Box>
        ))}
        
        </Box>
            </ChakraProvider>
            

        </Box>


      
        <Box mt={'100px'}>

        <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" >
        Back
       </Button>

      < Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={Back} >
         Save
         </Button>
         </Flex>

          </Box>

   </Box>
  )
}

export default ContentSelection2
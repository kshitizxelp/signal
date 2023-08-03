import { Box, Button, Flex,  Text ,ChakraProvider,Image,Avatar, Link} from '@chakra-ui/react'
import React from 'react'

import {FaArrowLeft,RiDeleteBinLine,BiEdit} from "react-icons/all"
import { useNavigate } from 'react-router'

export default function Settings() {
  
    const navigate = useNavigate()

    const navigateTo = () =>{
        navigate("/")
    }
const back =()=>{
  navigate("/Mydashbord/more")
}

    const dataObj = [
        {
          image: "src/assets/girl@3x.png" ,
          text: "Rani",
        },
        {
            image: "src/assets/boy@3x.png" ,
            text: "Gopi",
          },
          {
            image: "src/assets/girl@3x.png" ,
            text: "Bindhu",
          },
          {
            image: "src/assets/boy@3x.png" ,
            text: "Nithish",
          },
        
      ];

    
 

  return (

<Box bg={'gray.400'} width="100%" >
  
 
  <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'white'}
            width="100%"
          >
            <Box display={'flex'}>
            <Text pl="10px" color={'#004570'} fontWeight={'bold'} onClick={back}>  <FaArrowLeft/></Text>
            <Text pl="2px" color={'#004570'} fontWeight={'bold'}>Settings</Text>
            </Box>
    
          <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="100px" />
          </Box>

        
          <Box ml='10px'>
          <Text p="2px" color={'#004570'} fontWeight={'bold'}>How to use Signal?</Text>
          <Text p="2px" >1.If using the same device, you will need to sign out of your parent/guardian account first</Text>
          <Text p="2px" >2.Go to app.signal.in</Text>
          <Text p="2px" >3.Sign in using the learner's username and password.</Text>
          </Box>
        
    
    {/* <ChakraProvider>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} p={10}>
       */}

     <Flex display={'flex'} justifyContent={'center'}>
       <Box>
        <Box mt='40px'>
        <Text color={'#004570'} fontWeight={'bold'}> Children</Text>
        </Box>
       {dataObj.map((item)=>(
      <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={'10px'} 
            borderRadius={'5px'}
            width={{base:"280px",md:"400px",lg:"500px"}}
            height='100px'
            bg={'white'}
            mb='10px' 
           >
    <Box>      
    <Avatar name='Dan Abrahmov' size='xl' src={item.image} />
   
    </Box>
    <Box>
    <Text textAlign={'center'} color={'#004570'} fontWeight={'bold'}>{item.text}</Text>
    </Box>
    <Box>
        <Box display={'flex'}>
            <Link pl='10px'>Delete</Link>
            <Text pl='10px' color={'red.700'} fontSize={'2xl'}><RiDeleteBinLine/></Text>
        </Box>
        <Box display={'flex'} mt='10px'>
            <Link pl='18px'>Edit</Link>
            <Text pl='18px' color={'#004570'} fontSize={'2xl'}><BiEdit/></Text>
        </Box>
    </Box>
    </Box>   
    ))}
<Flex display={'flex'} justifyContent={'center'}>
<Button bg={'#004570'} width={{base:"270px",md:"300px",lg:"400px"}}>
ADD Child
</Button>
</Flex>

</Box>
</Flex>
       
       <Box ml='10px'>
       <Text color={'#004570'} fontWeight={'bold'}> My Subsciption</Text>
       <Text p="2px" >You are using Signal UNLIMITED Family Plan.</Text>
       <Text p="2px" >You have unlimited access to all Signal content for upto two learners. You can change your plan at any time.</Text>
       </Box>


       <Box mt={'50px'} pb={'20px'}>
     <Flex display={'flex'} justifyContent={'center'}>
       <Button bg={'#004570'} width={{base:"270px",md:"300px",lg:"400px"}}>
        Change Plan
       </Button>
       </Flex>
       </Box>
          
        
        

      
      {/* </Box>
    </ChakraProvider> */}


       {/* <Flex flexDirection="row" justifyContent="center" mt={'40px'}>
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black">
        Back
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" >
         Next
         </Button>
         </Flex> */}

    </Box>

  )
}

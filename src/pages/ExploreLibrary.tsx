import React, { useState } from 'react'
import { Box, Text,HStack,Image,Input,InputGroup ,InputRightElement,IconButton, Flex,Button,ChakraProvider,Avatar} from '@chakra-ui/react'
import { AiOutlineArrowLeft ,CiSearch ,GiTrophyCup} from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import Login from '../screens/Login';


export default function ExploreLibrary() {

  // const [searchValue, setSearchValue] = useState('');

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();
   
  //   console.log('Searching for:', searchValue);

  const obj=[
    {
      innerbox:"Age 8"
    },
    {
        innerbox:"Age 9"
      },
      {
        innerbox:"Age 10"
      },
      {
        innerbox:"Age 11"
      },
      {
        innerbox:"Age 12"
      },
      {
        innerbox:"Age 13"
      },
      {
        innerbox:"Age 12"
      },
      
      
];

const data=[
  {
   
    innerbox:"All"
  },
  {
   
    innerbox:"Task Videos"
  },
  {
   
    innerbox:"Related Movies"
  },
  {
   
    innerbox:"Related Podcasts"
  },
  {
   
    innerbox:"Related Games"
  },
  {
   
    innerbox:"Related Books"
  },
  {
   
    innerbox:"Related Pdfs"
  },
];

const card=[
     {
      image:"src/assets/SIGNAL LOGO (2)@3x.png",
      head:"English Vocabulary (Level 1)",
      textone:"Subject",
      texttwo:"Content Type",
      textthree:"Rewards",
      contentone:"English",
      contenttwo:"PDF",
      contentthree:"150 pts",

     },
     {
      image:"src/assets/SIGNAL LOGO (2)@3x.png",
      head:"The Wolf and the Crane (Story)",
      textone:"Subject",
      texttwo:"Content Type",
      textthree:"Rewards",
      contentone:"English",
      contenttwo:"Video",
      contentthree:"300 pts",

     },
     {
      image:"src/assets/SIGNAL LOGO (2)@3x.png",
      head:"The Lion and The Mouse (Story)",
      textone:"Subject",
      texttwo:"Content Type",
      textthree:"Rewards",
      contentone:"English",
      contenttwo:"Video",
      contentthree:"300 pts",

     },
     {
      image:"src/assets/SIGNAL LOGO (2)@3x.png",
      head:"The Lion and The Mouse (Story)",
      textone:"Subject",
      texttwo:"Content Type",
      textthree:"Rewards",
      contentone:"English",
      contenttwo:"Video",
      contentthree:"300 pts",

     },
     
];

const navigate = useNavigate()
const  login = ()=>{
  navigate("/ContentSelection")
}



  return (
    <Box bg={'gray.300'} width="100%">
     <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'gray.200'}
            >
       <HStack gap={"5"} pr={5}>
       <Text marginLeft="10px" color={'#004570'} ><AiOutlineArrowLeft/></Text>
       <Box>
       <Text marginLeft="10px" color={'#004570'} mb="2px" fontSize={12}>Add English Content for </Text>
       <Text marginLeft="10px" color={'#004570'}mb="3px" >GopiSunkara </Text>
       </Box>
       </HStack>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
      </Box> 

      <Box mt="10px" width="100%">
      <Flex display={'flex'} justifyContent={'center'}>
      <form>
      <InputGroup width="500px" bg={'white'}>
        <Input
          type="text"
          placeholder="Search..."
          // value={searchValue}
          // onChange={handleSearchChange}
        />
        <InputRightElement>
          <IconButton
            type="submit"
            aria-label="Search"
            icon={<CiSearch/>}
            colorScheme="teal"
          />
        </InputRightElement>
      </InputGroup>
    </form>
    </Flex>
      </Box>

      <Box>
      <Box bg={'gray'} mt={20}  >
        <Box ml={5}>
        <Text color={'#004570'}>Select the age below</Text>
        </Box>
          
         
             <Box style={{overflowX:"scroll",width: '100vw',  whiteSpace: 'nowrap' }} >
            <Box style={{ width: '200vw' }}>
            <Flex display={'flex'} gap={10} pt={10} pb={10}    pl={2}>
             {
                obj.map((item)=>(
           
            <Button borderEndRadius="10px" width="200px"  >{item.innerbox}</Button>
             ))
            }
             </Flex>
              </Box>
            
             </Box>
             
             </Box>

        <Box bg={'gray'} mt="5px" >
        <Box ml={5}>
        <Text color={'#004570'}>Select the age below</Text>
        </Box>
          
         
             <Box style={{overflowX:"scroll",width: '100vw',  whiteSpace: 'nowrap' }} >
            <Box style={{ width: '200vw' }}>
            <Flex display={'flex'} gap={10} pt={10} pb={10}    pl={2}>
             {
                data.map((item)=>(
           
            <Button borderEndRadius="10px" width="200px"  >{item.innerbox}</Button>
             ))
            }
             </Flex>
              </Box>
            
             </Box>
             
             </Box>

      </Box>
      <Box width="100%">
      <ChakraProvider>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4} p={10}>
        
        {card.map((item)=>(
        <Box bg={'white'} borderRadius="10px" width="400px" height="150px">
        
        <Flex display={'flex'} justifyContent="space-between" >
        
            <Box  p={5}>
            <Avatar name='' size='xl' src={item.image} />
           </Box>
            
               <Box>
               
                <Text fontWeight={'bold'} color={'#004570'} onClick={login}>{item.head}</Text>
               
                <Flex direction={'row'} justifyContent="space-between">
              
                <Box p={5}>
                    <Text>{item.textone}</Text>
                    <Text>{item.texttwo}</Text>
                    <Text>{item.textthree}</Text>
                </Box>
                
                <Box p={5}>
                 <Flex display={'flex'} justifyContent="space-evenly"> 
                <Box mt={12}>
                <Text color={'yellow.900'}><GiTrophyCup/></Text>
                </Box>
                <Box pl={2}>
                 <Text>{item.contentone}</Text>
                 <Text>{item.contenttwo}</Text>
                 <Text>{item.contentthree}</Text>
                
                  </Box>
                </Flex> 
                </Box>
                </Flex>
             </Box>
           
            
           
        </Flex>
        </Box>
          ))}
       
       
      
      </Box>
      </ChakraProvider>
      </Box>

 </Box>
  )
}

import React from 'react'
import {
    Box,
    ChakraProvider,
    Button,
    Flex,
    Image,
    Input,
    Select,
    Text,
    Link,
    Spacer,
    HStack,
    Avatar,
    
  } from "@chakra-ui/react";
  import {GiTrophyCup  } from 'react-icons/all';

const Rewards = () => {

const data=[

    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"2500RP"
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"2500RP"
    },
    { 
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"2500RP"
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"2500RP"
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"2500RP"
    },
];

const obg=[

    { 
       
        image:"src/assets/Mask Group 1@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        link:"Require 1500 RP"
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        link:"Require 1500 RP"
    },
    { 
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        link:"Require 1500 RP"
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        link:"Require 1500 RP"
    },
    { 
       
        image:"src/assets/SIGNAL LOGO (2)@3x.png",
        item:"Super Math Spy",
        itemvalue:"4000RP",
        link:"Require 1500 RP"
    },
]


  return (
   <Box bg={'gray.300'} w="100%">
   <Flex display={'flex'} justifyContent="flex-end" pr={10}>
    <Box pt={10} display="flex">
         <Text color={'yellow.500'}><GiTrophyCup/></Text>
         <Text fontSize={14}>Available :</Text>
         <Text fontSize={14}>2800RP</Text>
    </Box>
    </Flex>
    <Box pl={5}>
        <Text>Claimed rewards</Text>
    </Box>
   
    <ChakraProvider>
    <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={20} p={10} >

     {data.map((item)=>(
    <Box bg={'white'} h="150px" w="150px" borderRadius="50%">
    <Flex display={'flex'} justifyContent={'center'}>  
    <Image src={item.image} alt="" w="100px"
      h="140px"
      />
    </Flex>
    <Flex justifyContent={'center'}>
    <Box mt={6}>
        <Text fontSize={14}>{item.item}</Text>
        <Text fontSize={14}>{item.itemvalue}</Text>
    </Box>
    </Flex>
       
    </Box>
    ))}
    </Box>
        </ChakraProvider>



<Box mt={20} pl={5}>
<Text>Available rewards</Text>
</Box>
   
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
        <Text fontSize={14}>{item.itemvalue}</Text>
        <Link>{item.link}</Link>
    </Box>
    </Flex>
       
    </Box>
    ))}
    
    </Box>
        </ChakraProvider>
       



   </Box>
  )
}

export default Rewards
// import { Box, Text } from '@chakra-ui/react'
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

export default function ChildRewards() {
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
       <Box bg={'gray.300'} width="100%" >
       <Flex display={'flex'} justifyContent="flex-end" >
        <Box pt="10px" display="flex">
             <Text color={'yellow.500'}><GiTrophyCup/></Text>
             <Text fontSize="14px">Available :</Text>
             <Text fontSize="14px">2800RP</Text>
        </Box>
        </Flex>
        <Box pl="5px">
            <Text color={'#004570'}>Claimed rewards</Text>
        </Box>
       
        <Box>
        <ChakraProvider>
        <Box display="grid" gridTemplateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}} gap="40px" p="10px" >
    
         {data.map((item)=>(
        <Box bg={'white'} h="150px" w="150px" borderRadius="50%">
        <Flex display={'flex'} justifyContent={'center'}>  
        <Image src={item.image} alt="" w="100px"
          h="140px"
          />
        </Flex>
        <Flex justifyContent={'center'}>
        <Box mt="6px">
            <Text fontSize="12px">{item.item}</Text>
            <Text fontSize="12px">{item.itemvalue}</Text>
        </Box>
        </Flex>
           
        </Box>
        ))}
        </Box>
            </ChakraProvider>
          </Box>
    
    <Box mt="20px" pl="5px">
    <Text color={'#004570'}>Available rewards</Text>
    </Box>
       
       
       <Box>
        <ChakraProvider>
        <Box display="grid" gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="30px" p="10px">
    
         {obg.map((item)=>(
        <Box bg={'white'} h="120px" w="120px" borderRadius="50%">
        <Flex display={'flex'} justifyContent={'center'}>  
        <Image src={item.image} alt="" w="100px"
        h="100px"
        mt="5px"/>
        </Flex>
        <Flex justifyContent={'center'}>
        <Box m="10px" >
            <Text fontSize="12px" >{item.item}</Text>
            <Text fontSize="12px">{item.itemvalue}</Text>
            <Link fontSize="12px">{item.link}</Link>
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


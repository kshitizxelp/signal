import React, { useState } from 'react'
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
    Checkbox,
    Radio,
    VStack
   
    

    
  } from "@chakra-ui/react";
  
  import { AiOutlineArrowLeft ,GiTrophyCup ,SlNote } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
  

const SelectedTaskAssign = () => {


  
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
            innerbox:"Age 14"
          },
          {
            innerbox:"Age 14"
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
            innerbox:"Age 14"
          },
          {
            innerbox:"Age 14"
          },
          
          
    ];


    const data=[
        {
          outerhead:"Learning",
          innerheadfirst:"Primary-Multiplication Tables",
          innerheadsecond:"Primary-Multiplication Tables",
          imageone:"src/assets/boy@3x.png",
          imagetwo:"src/assets/boy@3x.png",
          rewardvaluefirst:"50pts",
          rewardvaluesecond:"50pts",
        },
        {
            outerhead:"Better Me",
            innerheadfirst:"Primary-Multiplication Tables",
            innerheadsecond:"Primary-Multiplication Tables",
            imageone:"src/assets/boy@3x.png",
            imagetwo:"src/assets/boy@3x.png",
            rewardvaluefirst:"50pts",
            rewardvaluesecond:"50pts",
          },
          {
            outerhead:"Interests",
            innerheadfirst:"Primary-Multiplication Tables",
            innerheadsecond:"Primary-Multiplication Tables",
            imageone:"src/assets/boy@3x.png",
            imagetwo:"src/assets/boy@3x.png",
            rewardvaluefirst:"50pts",
            rewardvaluesecond:"50pts",
          },
          {
            outerhead:"Shadow Practice",
            innerheadfirst:"Primary-Multiplication Tables",
            innerheadsecond:"Primary-Multiplication Tables",
            imageone:"src/assets/boy@3x.png",
            imagetwo:"src/assets/boy@3x.png",
            rewardvaluefirst:"50pts",
            rewardvaluesecond:"50pts",
          },
          {
            outerhead:"Learning",
            innerheadfirst:"Primary-Multiplication Tables",
            innerheadsecond:"Primary-Multiplication Tables",
            imageone:"src/assets/boy@3x.png",
            imagetwo:"src/assets/boy@3x.png",
            rewardvaluefirst:"50pts",
            rewardvaluesecond:"50pts",
          },
    ]

    const [btnColor, setBtnColor] = useState("gray")

    // const [buttonColors, setButtonColors] = useState([]);
    // const [isActive, setIsActive] = useState(false);

    // const handleButtonClick = (index:any) => {
    //   setButtonColors((prevColors) => {
    //     const newColors = [...prevColors];
    //     newColors[index] = newColors[index] === 'red' ? 'blue' : 'red';
    //     return newColors;
    //   });
    // };

    // const renderButtons = () => {
    //   return buttonColors.map((color, index) => (
    //     <Button
    //       key={index}
    //       colorScheme={color}
    //       onClick={() => handleButtonClick(index)}
    //     >
    //       Button {index}
    //     </Button>
    //   ));
    // };

    // return <VStack spacing={4}>{renderButtons()}</VStack>;
  



    const navigate = useNavigate()
    const navigateTo = () =>{
        navigate("/UserNameSuccess")
    }

   
  


  return (
    <Box bg={'gray.300'} width="100%" height="100%">
     <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'gray.200'}
           width="100%"
           >
           
       <HStack gap={"5"} pr={5}>
       <Text marginLeft="10px" color={'#004570'} ><AiOutlineArrowLeft/></Text>
       <Text marginLeft="10px" color={'#004570'} >GopiSunkara (select Task)</Text>
       </HStack>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height="100px"/>
      </Box> 

        <Box mt={5}>
         <Text p={2} noOfLines={[1, 2, 3]}>We have the following recommended tasks for Shreya. Please select or create additional tasks as needed.</Text>
       </Box>

    <Box bg={'gray'} mt={20}  >
        <Box ml={5}>
        <Text color={'#004570'}>Select the age below</Text>
        </Box>
     
          
          <Box style={{overflowX:"scroll",width: '100vw',  whiteSpace: 'nowrap' }} >
            <Box style={{ width: '200vw' }}>
            <Flex display={'flex'} gap={10} pt={10} pb={10}    pl={2}>
             {
                obj.map((item)=>(
           
            <Button borderEndRadius="10px" width="200px" colorScheme={btnColor} onClick={()=>{setBtnColor("green")}} >{item.innerbox}</Button>
             ))
            }
             </Flex>
              </Box>
            
             </Box>
             
             </Box>

             <Box marginTop="20px">
                <Checkbox pl={10} color={'black'}> Select</Checkbox>
             </Box>


     <ChakraProvider>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={10} p={10}> 
          
    {data.map((item)=>(
 <Box bg={'gray.100'}  width={370}height={200} >
     <Text pl={10} color={'#004570'}>{item.outerhead}</Text>
      
 <Box  bg={'gray-100'} pl={2}  >
        
        <Box bg={'white'} borderRadius={5} width={'350px'}  >    
            <Box ml={20}>
               <Flex display={'flex'} justifyContent="space-evenly">
                <Text>{item.innerheadfirst}</Text>
                <Text color={'blue'}><SlNote/></Text>
                </Flex>
             </Box>

              <Box>
                <Flex display={'flex'} justifyContent="space-evenly">
                <Radio value='1'></Radio>
                <Avatar name='Dan Abrahmov' size='md' src={item.imageone} />
                <Text pt={5}>Rewards:</Text>
                <Text pt={5}>{item.rewardvaluefirst}</Text>
                <Text pt={5} color={'yellow.500'}><GiTrophyCup/></Text>
                </Flex>
             </Box>
             </Box>

        <Box bg={'white'} borderRadius={2} mt={4} width={'350px'}>    
            <Box ml={20}>
               <Flex display={'flex'} justifyContent="space-evenly">
                <Text>{item.innerheadsecond}</Text>
                <Text color={'blue'}><SlNote/></Text>
                </Flex>
             </Box>

              <Box>
                <Flex display={'flex'} justifyContent="space-evenly">
                <Radio value='1'></Radio>
                <Avatar name='Dan Abrahmov' size='md' src={item.imagetwo} />
                <Text pt={5}>Rewards:</Text>
                <Text pt={5}>{item.rewardvaluesecond}</Text>
                <Text pt={5} color={'yellow.500'}><GiTrophyCup/></Text>
                </Flex>
             </Box>
             </Box>
             </Box>

                    
              
               {/* </Flex> */}
             </Box>
             ))}
        
             </Box>
             </ChakraProvider>
             <Flex flexDirection="row" justifyContent="center">
       <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" >
        Cancel
       </Button>

       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={navigateTo} >
         Assign
         </Button>
         </Flex>

    </Box>
  )
}

export default SelectedTaskAssign
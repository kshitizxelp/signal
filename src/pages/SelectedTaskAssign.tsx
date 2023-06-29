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
    Tabs,
    TabList,
    Tab
  } from "@chakra-ui/react";
  import { AiOutlineArrowLeft ,GiTrophyCup ,SlNote } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
  

const SelectedTaskAssign = () => {
 
  const navigate = useNavigate()

  const [selectedRadio, setSelectedRadio] = useState([]);

  const [ischeckboxChecked,setIsCheckboxSelected] = useState<any>(false);

  const handleCheckboxChange = () => {
    setIsCheckboxSelected(!ischeckboxChecked);
    setSelectedRadio([]);
  };


  const handleRadioChange = (value:any) => {
    let updatedRadios = [...selectedRadio];
    if (updatedRadios.includes(value)) {
      updatedRadios = updatedRadios.filter((item) => item !== value);
    } else {
      updatedRadios.push(value);
    }
    setSelectedRadio(updatedRadios);
    setIsCheckboxSelected(updatedRadios.length > 0);
  };
  
  const navigateTo = () => {
    navigate("/UserNameSuccess")
  }

  const navigateTo1 = () => {
    navigate("/CreateNewTask")
  }

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
  return (
    <Box bg={'gray.300'} width={'100%'}>
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
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
      </Box> 

        <Box mt={5}>
         <Text p={5} >We have the following recommended tasks for Shreya. Please select or create additional tasks as needed.</Text>
       </Box>

    <Box bg={'gray'} mt={20}  >
        <Box ml={5}>
        <Text color={'#004570'}>Select the age below</Text>
        </Box>
          
         
             <Box style={{overflowX:"scroll",width: '100vw',  whiteSpace: 'nowrap' }} >
            <Box style={{ width: '200vw' }}>
            <Flex display={'flex'} gap={'10px'} pt={'10px'} pb={'10px'}    pl={'2px'}>
             {
                obj.map((item)=>(
           
            <Button borderEndRadius="10px" width="200px">{item.innerbox}</Button>
            
            
             ))
            }

         {/* <Tabs variant='unstyled'>
         <TabList>
          <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
          <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
        </TabList> */}
             </Flex>
              </Box>
            
             </Box>
             
             </Box>

             <Box marginTop="20px">
                <Checkbox pl={10} color={'black'}  isChecked={ischeckboxChecked}  onChange={handleCheckboxChange} > Select</Checkbox>
             </Box>


     <ChakraProvider>
      <Box display="grid" gridTemplateColumns={{ base:'repeat(1,1fr)',md:'repeat(2,1fr)', lg: 'repeat(3, 1fr)'}} gap={'5px'} p={'10px'}> 
          
    {data.map((item)=>(
 <Box bg={'gray.100'}  width={'310px'}height={'200px'} >
     <Text pl={'10px'} color={'#004570'}>{item.outerhead}</Text>
      
 <Box  bg={'gray-100'} pl={'2px'}  >
        
        <Box bg={'white'} borderRadius={'5px'} width={'280px'}  ml={'10px'}>    
            <Box ml={'10px'}>
               <Flex display={'flex'} justifyContent="space-evenly">
                <Text>{item.innerheadfirst}</Text>
                <Text color={'blue'}><SlNote/></Text>
                </Flex>
             </Box>

              <Box>
                <Flex display={'flex'} justifyContent="space-evenly">
                <Radio value="1"
          // isChecked={selectedRadio === '1' || (ischeckboxChecked && selectedRadio !== null)}
          isChecked={selectedRadio.includes('1')}

          onChange={() => handleRadioChange('1')}
                  
                ></Radio>
                <Avatar name='Dan Abrahmov' size='md' src={item.imageone} />
                <Text pt={'5px'}>Rewards:</Text>
                <Text pt={'5px'}>{item.rewardvaluefirst}</Text>
                <Text pt={'5px'} color={'yellow.500'}><GiTrophyCup/></Text>
                </Flex>
             </Box>
             </Box>

        <Box bg={'white'} borderRadius={'2px'} mt={'4px'} width={'280px'} ml={'10px'}>    
            <Box ml={'10px'}>
               <Flex display={'flex'} justifyContent="space-evenly">
                <Text>{item.innerheadsecond}</Text>
                <Text color={'blue'}><SlNote/></Text>
                </Flex>
             </Box>

              <Box>
                <Flex display={'flex'} justifyContent="space-evenly">
                <Radio  value="2"
          // isChecked={selectedRadio === '2' || (ischeckboxChecked && selectedRadio !== null)}
          isChecked={selectedRadio.includes('2')}

          onChange={() => handleRadioChange('2')}
                  
                ></Radio>
                <Avatar name='Dan Abrahmov' size='md' src={item.imagetwo} />
                <Text pt={'5px'}>Rewards:</Text>
                <Text pt={'5px'}>{item.rewardvaluesecond}</Text>
                <Text pt={'5px'} color={'yellow.500'}><GiTrophyCup/></Text>
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
       {ischeckboxChecked ? (
       <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo()} >
        Assign
         </Button>
       ) :(
        <Button colorScheme="blue" borderRadius="20px"  size="lg" bg="#004570" width="110px" onClick={() => navigateTo1()} >
          Add New
         </Button>
       )}
         </Flex>

    </Box>
  )
}

export default SelectedTaskAssign

import React, { useState } from "react";
import{Box,Text,Image,Flex,Button,Input} from "@chakra-ui/react";
import {FaArrowLeft,RiDeleteBinLine,AiOutlineCaretRight} from "react-icons/all";
import { useNavigate } from 'react-router-dom';

const CreateNewTask2 =()=>{
    const data =[
        {
         hobies:"Wear T Shirt",
         points:"10 pts"
        },
          {
            hobies:"Wear Shorts",
            points:"10 pts"
           },
           {
            hobies:"Wear Shoes",
            points:"10 pts"
           },
           {
            hobies:"Wear Mask",
            points:"30 pts"
           },
      ];
   
      const navigate = useNavigate();

      const backpage =()=>{
        navigate("/CreateNewTask1")
      };
      const next =()=>{
        navigate("/CreateNewTask3")
      }
      

        //   const [displayText, setDisplayText] = useState('');

        //    const handleButtonClick = (text:any) => {
        //      setDisplayText(text);
        //     };
    
    return(

        <Box bg="#F2F5F7" width="100%">
            <Box display={"flex"} justifyContent="space-between" bg={"white"} alignItems={'center'} width="100%">
              
               <Box display="flex" justifyContent="space-evenly" alignItems={'center'}>
                <Text color="#004570" onClick={backpage}><FaArrowLeft size="20"/></Text>
                <Text ml="20px" color={'#004570'}>Gopi</Text>
               </Box>
               
               <Image src="src/assets/SIGNAL LOGO (2)@3x.png" height="100px"/>
            </Box>
            <Box>
               <Text fontSize="20px" fontWeight="bold" m="20px">Create custom task for Gopi</Text> 
               <Text m="20px">Help Gopi with exact activities she needs to do to be rewarded for this task.</Text>
            </Box>
             
             <Flex justifyContent={'center'}>
              <Box display="flex" justifyContent="space-between" alignItems={'center'} bg="green" width={{base:"300px",md:"400px",lg:"600px"}}>
                <Text m="20px" color="white">Hobies</Text>
                <Box m="20px" display="flex" justifyContent="space-evenly">
                <Text mr="30px" bg="white" width="100px"  textAlign="center" >60 pts</Text>
                <Text><RiDeleteBinLine size="20px"/></Text>
                </Box>
              </Box>
              </Flex>

              <Flex justifyContent={'center'} mt="10px">
              <Box>
              <Input placeholder='Enter Task Name' size='md' type="text"  width="300px"/>
              </Box>
              </Flex>
              
              <Box
                display="grid"
                gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
                gridGap="5px"
                marginTop="10px"
                >
                    {data.map((item)=>(
                    <Flex justifyContent={"center"}>
                    <Box display="flex" justifyContent="space-between" width={{base:"280px",md:"320px",lg:"400px"}} bg={'green.50'}>
                      
                      <Box display="flex" justifyContent="space-evenly">
                        <Text m="10px" color="green"><AiOutlineCaretRight size="20px"/></Text>
                        <Text m="10px">{item.hobies}</Text>
                      </Box>
                     
                      <Box display="flex" justifyContent="space-evenly">
                        <Text m="10px">{item.points}</Text>
                        <Text m="10px"><RiDeleteBinLine size="20px"/></Text>
                      </Box>

                 </Box>
                 </Flex>
                 ))}
            </Box>


            <Flex flexDirection="row" justifyContent="center" mt="50px">
                    <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={backpage} >
                        Back
                    </Button>

                    <Button colorScheme="blue" borderRadius="20px" size="lg" bg="#004570" width="110px" onClick={next} >
                        Save
                    </Button>
                   </Flex>

                {/* <Box>
                <Button onClick={() => handleButtonClick("point 1")}>Button 1</Button>
                <Button onClick={() => handleButtonClick("point 2")}>Button 2</Button>
                <Button onClick={() => handleButtonClick("point 3")}>Button 3</Button>
                </Box>
                <Text>{displayText}</Text> */}
        </Box>

    )
}
export default CreateNewTask2;
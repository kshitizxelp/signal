import { Box, Image, Flex, Text, Button,Input } from '@chakra-ui/react'
import React, { useState } from 'react'

import { VscDeviceCamera } from 'react-icons/all';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setUpload } from '../Slice';

export default function ChildVerification1() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateTo = () =>{
    

    navigate("/ChildVerification2")
  };
  // const[uploadimage,setUploadimage] = useState(null);
  const uploadImg = useSelector<any>((state)=>state?.auth?.upload)
  console.log("uploadImg",uploadImg)
  const handleChange=(e:any)=>{
    dispatch(setUpload(URL.createObjectURL(e.target.files[0])))
  //  setUploadimage(URL.createObjectURL(e.target.files[0]));
   
  };
  
  // console.log(uploadimage,"imageeeeeee")

  return (
  <Box bg="#F2F5F7" width='100%' >
  <Flex justifyContent={'center'}>
  <Box
   boxShadow="dark-lg"
   bg="white"
  //  borderRadius='50px'
   borderTopRadius="200px"
   borderBottomRadius="200px"
   width={{base:"290px",md:"320px",lg:"400px"}}
   alignItems="center"
   justifyContent="center"
   m="20px"
 >
      <Box>
      <Flex display={'flex'} justifyContent={'center'} m="10px">
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height='150px'/>
      </Flex>
      </Box>
     
  
       <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={'4px'}>
         <Text fontSize="20px" as="b" color="#004570" >Child Verification</Text>

        <Text mt='4px'>Please take a face closeup photo of the child</Text>
        </Box> 
        </Flex>

      <Flex  justifyContent={'center'} >
       <Box m='10px'>
       <Image src={uploadImg}  height="220px" width="223px"/>
       </Box>
       </Flex>
      
       <Flex justifyContent={'center'}   >
       <Box width="200px" >
       <Input type="file" bg="green" name="image" onChange={(e)=>{handleChange(e)}}/>
       </Box>
      </Flex>
   
    <Flex display={'flex'} justifyContent={'center'}>
     <Box mt={'20px'} as="button" onClick={() => navigateTo()} mb={'20px'} >
     <VscDeviceCamera onClick={() => navigateTo()} size={30}/>
    </Box>
    </Flex>
   
    </Box>
    </Flex>
    </Box>
  )
}

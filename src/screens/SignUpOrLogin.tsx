import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { increment } from '../Slice';



export default function SignUpOrLogin() {
  const navigate = useNavigate();
// const dispatch = useDispatch()
// const countNum = useSelector((state)=>state?.counter)
// console.log("countNum",countNum)
// const onClickBtn = () =>{
//   dispatch(increment())
// }
  const Login1 = () => {
    // onClickBtn()
    navigate('/Login'); 
  };

  const Login2 = () => {
    navigate('SignUp');
  }
  return (
    <Box bg={'gray.400'}>
    <Flex direction="column" alignItems="center" position="relative" pt={'120px'} pb={'200px'}>
       <Box
      boxShadow="dark-lg"
      p="1"
      rounded=""
      bg="white"
      borderRadius={'50px'}
     
      width="450px"
    >
      
      <Flex display={'flex'} justifyContent={'center'}>
      <Box>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'150px'} />
      </Box>
      </Flex>

      {/* {countNum} */}
      
      <Flex display={'flex'} justifyContent={'center'}>
         <Box mt={'40px'}>
         <Button colorScheme="blue"  size="lg" bg="rgba(0, 69, 112, 1)" width="313px" onClick={Login2}>
          Sign Up
        </Button>
        </Box>
        </Flex>
       
        <Flex display={'flex'} justifyContent={'center'}>
        <Box mt={'10px'}>
        <Button colorScheme="blue"   size="lg" variant="outline" borderColor="rgba(0, 69, 112, 1)" color="rgba(0, 69, 112, 1)" width="313px" onClick={Login1}>
          Login
        </Button>
        </Box>
        </Flex>

      </Box>
    </Flex>
    </Box>
  )
}

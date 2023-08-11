import React from 'react'
import { Box, Flex, Image ,UnorderedList,ListItem} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { getPagesApi } from '../Slice';
// import { getPosts } from '../Slice';



export default function SignUpOrLogin() {
 
  const countNum=useSelector<any>((state)=>state?.auth?.GetPagesList);
  console.log(countNum,"api>>>>>>>>>>>>>>>>>>>>>");
  const dispatch = useDispatch()
  
  const navigate = useNavigate();




const onClickBtn = () =>{
  
}
  const Login1 = () => {
    onClickBtn()
    navigate('/Login'); 
  };

  const Login2 = () => {
    dispatch(getPagesApi())
    navigate('SignUp');
  }
  return (
    <Box bg="#F2F5F7" width="100%">
    <Flex direction="column" alignItems="center" position="relative" pt={'120px'} pb={'200px'}>
       <Box
      boxShadow="dark-lg"
      p="1"
      rounded=""
      bg="white"
      // borderRadius='50px'
      borderTopRadius="200px"
      borderBottomRadius="200px"
      width={{base:"290px",md:"350px",lg:"450px"}}
    >
      
      <Flex display={'flex'} justifyContent={'center'}  m="50px">
      <Box>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'150px'} />
      </Box>
      </Flex>
      
      {/* {countNum?.map((each: any) => (

<Box key={each.id}>
  {each?.title}
</Box>


      ))};
     */}

      <Flex display={'flex'} justifyContent={'center'} m="30px">
         <Box mt='50px'>
         <Button colorScheme="blue"  size="lg" bg="rgba(0, 69, 112, 1)" width={{base:"280px",md:"290px",lg:"313px"}} onClick={Login2}>
          Sign Up
        </Button>
        </Box>
        </Flex>
        <Box>
        <UnorderedList  ml="200px">
        <ListItem>Only for Parent</ListItem>
        </UnorderedList>
        </Box>
       
        <Flex display={'flex'} justifyContent={'center'} m="60px">
        <Box mb="50px">
        <Button colorScheme="blue"   size="lg" variant="outline" borderColor="rgba(0, 69, 112, 1)" color="rgba(0, 69, 112, 1)" width={{base:"280px",md:"290px",lg:"313px"}} onClick={Login1}>
          Login
        </Button>
        </Box>
        </Flex>

      </Box>
    </Flex>
    </Box>
  )
}

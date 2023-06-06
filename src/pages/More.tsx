import React from 'react'
import { Box, Image, Flex, Text ,Button} from '@chakra-ui/react'
import {FaRegSun ,FaRegUser ,FaRegQuestionCircle,VscSignOut ,GiChainLightning ,MdBookOnline} from "react-icons/all"
import { useNavigate } from 'react-router-dom'

const More = () => {
  
  const navigate = useNavigate();

  const settings = () => {
    navigate("/Settings")
  }
  const signout= () => {
    navigate("/")
  }


  return (
   <Box bg={'gray.300'}>
    <Box display="grid" gridTemplateColumns="repeat( 1fr)" gap={4} p={10}>
      
 <Box 
      display={"flex"}
      flexDirection={"row"}
      bg={'white'}
      width="90%"
      height={50}
      borderRadius={10}
      ml={1}
      alignItems={'center'}
      >
        <Text pl={5}><FaRegUser/></Text>
        <Text ml={10}>My Profile</Text>
    </Box>

      <Box 
      display={"flex"}
      flexDirection={"row"}
      bg={'white'}
      width="90%"
      height={50}
      borderRadius={10}
      ml={1}
      alignItems={'center'}
      >
        <Text pl={5}><GiChainLightning/></Text>
        <Text ml={10}>My Network</Text>
      </Box>

      <Box 
      display={"flex"}
      flexDirection={"row"}
      bg={'white'}
      width="90%"
      height={50}
      borderRadius={10}
      ml={1}
      alignItems={'center'}
      >
        <Text pl={5}><MdBookOnline/></Text>
        <Text ml={10}>My Events </Text>
      </Box>

      <Box 
      display={"flex"}
      flexDirection={"row"}
      bg={'white'}
      width="90%"
      height={50}
      borderRadius={10}
      ml={1}
      alignItems={'center'}
      >
        <Text pl={5}><MdBookOnline/></Text> 
        <Text ml={10}>E Store</Text>
      </Box>

      <Box 
      display={"flex"}
      flexDirection={"row"}
      bg={'white'}
      width="90%"
      height={50}
      borderRadius={10}
      ml={1}
      alignItems={'center'}
      onClick={settings}
      >
        <Text pl={5}><FaRegSun/></Text>
        <Text ml={10}>Settings</Text>
      </Box>

      <Box 
      display={"flex"}
      flexDirection={"row"}
      bg={'white'}
      width="90%"
      height={50}
      borderRadius={10}
      ml={1}
      alignItems={'center'}
      >
        <Text pl={5}><FaRegQuestionCircle/></Text>
        <Text ml={10}>Help</Text>
      </Box>

      <Box 
      display={"flex"}
      flexDirection={"row"}
      bg={'white'}
      width="90%"
      height={50}
      borderRadius={10}
      ml={1}
      alignItems={'center'}
     onClick={signout}
      >
        <Text pl={5}><VscSignOut/></Text>
        <Text ml={10}>Sign Out</Text>
      </Box>
      
      </Box>

   </Box>
  )
}

export default More
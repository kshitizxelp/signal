import { Box, Text ,Image} from '@chakra-ui/react'
import { FaArrowLeft ,GoPrimitiveDot ,BsThreeDotsVertical} from 'react-icons/all';
import React from 'react'

export default function Notifications() {
  return (
   <Box bg={'gray.300'} width="100%" >

    <Box >
   <Box bg={'gray'} width="100%" display={'flex'} justifyContent="space-between" alignItems={'center'} height="100px" >
            <Box display={'flex'}>
            <Text pl={10} color={'#004570'} fontWeight={'bold'}>  <FaArrowLeft/></Text>
            <Text pl={2} color={'#004570'} fontWeight={'bold'}>GopiSunkara</Text>
            </Box>
    
          <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height="100px" pr="10px"/>
    </Box>

   <Box bg={'blue.200'}>
  
   <Box display={'flex'} justifyContent="space-evenly" mt="2px">
    <Box p="10px">
    <Text color={'blue'}><GoPrimitiveDot/></Text>
     </Box>
     
     <Box p="10px" m="10px">
      <Text fontWeight={'bold'}>3 Completed Tasks</Text>
      <Text>Shreya has submitted 3 completed tasks</Text>
      <Text borderRadius="10px" bg={'white'} textAlign={'center'}>Go to tasks</Text>
      <Text fontSize="10px">Tue at 13:30</Text>
     </Box>
 
   <Box p="10px">
  <Text><BsThreeDotsVertical/></Text>
 </Box>
 </Box>


 
 
 <Box display={'flex'} justifyContent="space-evenly" mt="2px">
 
 <Box m="30px">
  <Text color={'blue'}><GoPrimitiveDot/></Text>
  </Box>
  <Box p="10px" m="30px">
  <Text fontWeight={'bold'} >Request for new Task</Text>
  <Text>Riya has requested for a new task</Text>
  {/* <Text borderRadius={10} bg={'white'} textAlign={'center'}>dddddd</Text> */}
  <Text fontSize="12px">Tue at 13:30</Text>
</Box>
 
 <Box m="30px">
  <Text><BsThreeDotsVertical/></Text>
 </Box>
 </Box>


 <Box display={'flex'} justifyContent="space-between" mt="2px">
 
  <Box m="30px">
  <Text color={'blue'}><GoPrimitiveDot/></Text>
  </Box>
<Box m="30px">
  <Text fontWeight={'bold'} >Kate has just enchashed her reward points</Text>
  {/* <Text>dddddd</Text> */}
  {/* <Text borderRadius={10} bg={'white'} textAlign={'center'}>dddddd</Text> */}
  <Text fontSize="12px">Tue at 13:30</Text>
</Box>
 
 <Box m="30px">
  <Text><BsThreeDotsVertical/></Text>
 </Box>
 </Box>

 </Box>

 
 
 
 <Box display={'flex'} justifyContent="space-between" bg={'white-200'}mt="2px">
    <Box m="30px">
    <Text color={'blue'}><GoPrimitiveDot/></Text>
     </Box>
     
     <Box m="30px">
      <Text fontWeight={'bold'}>3 Completed Tasks</Text>
      <Text noOfLines={[1, 2, 3]}>Shreya has submitted 3 completed tasks </Text>
      <Text borderRadius="10px" bg={'white'} textAlign={'center'}>Go to tasks</Text>
      <Text fontSize="10px">Tue at 13:30</Text>
  </Box>
 
   <Box m="30px">
  <Text><BsThreeDotsVertical/></Text>
 </Box>
 </Box>


 
  
</Box>
   </Box>
  )
}

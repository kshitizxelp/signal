import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import RewardNav from '../component/RewardNav'
import { Outlet, useLocation } from 'react-router-dom'
import { useSelector,useDispatch  } from "react-redux";


export default function Rewards() {

  const location = useLocation();

  const isChildTasksRoute = location.pathname   === '/Rewards'
  const finaldataofreward= useSelector<any>((state)=>state?.auth?.finaldataofreward);

  console.log(finaldataofreward,"ggg")

  const data=[
    
           {
            today:"29 May, 2023",
            yesterday:"28 May,2023",
            daybefore:"27 May,2023",
            twodaysbefore:"26 May,2023",

            head:"Child",
            head1:"Top Up",
            head2:"Friend1 :",
            typefriend:"Referral",
            childname:"GopiSunkara",
            pts:"-1234 pts",
            pts1:"-280 pts",
            pts2:"-1170 pts",
            topupPts:"+24988 pts",
            referaralPts:"+1000 pts"
           

           },


           
  ]


  return (
    <Box>
    <RewardNav/>
    { isChildTasksRoute && (
    <Box bg="gray.300" width="100%">
      {data.map((item)=>(
   <Box pt="20px" pb="20px" mt="2px">
   
    <Text pl="50px">{finaldataofreward.date}</Text>
    <Box display={'flex'} justifyContent="space-between" bg={'white'} borderRadius="5px"  w="90%" ml="15px" pb={3}>
      <Box display={'flex'} pl="10px" >
       <Text pl={2}>{item.head}</Text>
       <Text  pl={2}>{item.childname}</Text>
      </Box>
      <Text pr="40px">{finaldataofreward.rewardpoints}</Text>
     
    </Box>

    <Text pl="50px">{item.yesterday}</Text>
    <Box display={'flex'} justifyContent="space-between" bg={'white'} borderRadius="5"  w="90%" ml="15px" pb={3}>
      <Box display={'flex'} pl="10px" >
       <Text pl={2}>{item.head}</Text>
       <Text  pl={2}>{item.childname}</Text>
      </Box>
      <Text pr="40px">{item.pts1}</Text>
     
    </Box>

    <Text pl="50px">{item.daybefore}</Text>
    <Box display={'flex'} justifyContent="space-between" bg={'white'} borderRadius="5"  w="90%" ml="15px" pb={3}>
      <Box display={'flex'} pl="10px" >
       <Text pl={2}>{item.head}</Text>
       <Text  pl={2}>{item.childname}</Text>
      </Box>
      <Text pr="40px">{item.pts2}</Text>
     
    </Box>

    <Text pl="50px">{item.daybefore}</Text>
    <Box display={'flex'} justifyContent="space-between" bg={'white'} borderRadius="5"  w="90%" ml="15px" pb={3}>
      <Box display={'flex'} pl="10px" >
       <Text pl={2}>{item.head1}</Text>
      </Box>
      <Text pr="40px" color={'green.700'}>{item.topupPts}</Text>
     
    </Box>
    <Text pl="50px">{item.twodaysbefore}</Text>
    <Box display={'flex'} justifyContent="space-between" bg={'white'} borderRadius="5"  w="90%" ml="5px" pb={3}>
      <Box display={'flex'} pl="10px" >
       <Text pl={2}>{item.head2}</Text>
       <Text pl={2}>{item.typefriend}</Text>
      </Box>
      <Text pr="40px" color={'green.700'}>{item.referaralPts}</Text>
     
    </Box>



    







    

   </Box>
   ))}
   </Box>
    )}
   <Outlet/>
   </Box>

  )
}

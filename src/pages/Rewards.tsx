import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import RewardNav from '../component/RewardNav'
import { Outlet, useLocation } from 'react-router-dom'


export default function Rewards() {

  const location = useLocation();

  const isChildTasksRoute = location.pathname   === '/Rewards'


  return (
    <>
    <RewardNav/>
    { isChildTasksRoute && (
    <Box bg="gray.300">
    <Text>
        helloo in History
    </Text>
   </Box>
    )}
   <Outlet/>
   </>

  )
}

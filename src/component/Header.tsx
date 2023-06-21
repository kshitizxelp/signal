// import { Box, Image,Text } from '@chakra-ui/react';
// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function Header() {

//     const navigate = useNavigate();

//     const navigateTo = () =>{
//         navigate("/ChildOverview")
//     }

//     const navigateTo1 = () => {
//         navigate("/ChildOverview/ChildTasks")
//     }

//     const navigateTo2 = () => {
//         navigate("/ChildOverview/ChildRewards")
//     }
   
//   return (
//        <Box bg="white"   >
     
//        <Box  display={"flex"}
//             flexDirection={"row"}
//             justifyContent={"space-between"}
//             alignItems={"center"}
//             >
//         <Text marginLeft="10px">Vineet</Text>
//        <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
//       </Box>
 
//       <Box display={"flex"}
//             flexDirection={"row"}
//             justifyContent={"space-between"}
//             alignItems={"center"}>
//         <Text onClick={() => navigateTo() }>Overview</Text>
//         <Text onClick={() => navigateTo1()}>Tasks</Text>
//         <Text onClick={() => navigateTo2()}>Rewards</Text>
//       </Box>
     
//        </Box>
       
   
//   )
// }


import { Box, Image,Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {

  const location = useLocation();
  const params = location.state;
//   let param1
  
//   if(params)
//   {
//   param1 = params?.param1;

//   console.log("====>pppp",param1)
//   }

const [param1, setParam1] = useState('');

useEffect(() => {
  if (params && params.param1) {
    setParam1(params.param1);
  }
}, [params]);

    const navigate = useNavigate();

    const navigateTo = () =>{
        navigate("/ChildOverview")
    }

    const navigateTo1 = () => {
        navigate("/ChildOverview/ChildTasks")
    }

    const navigateTo2 = () => {
        navigate("/ChildOverview/ChildRewards")
    }
   
  return (
       <Box bg="gray"   >
     
       <Box  display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'gray.200'}
            >
       <Text marginLeft="20px" color={'#004570'} as="b" >{param1}</Text>
       <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
      </Box>
 
      <Box display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            bg={'white'}
            cursor={'pointer'} >
        <Text pl={5} onClick={() => navigateTo() }>Overview</Text>
        <Text onClick={() => navigateTo1()}>Tasks</Text>
        <Text pr={5} onClick={() => navigateTo2()}>Rewards</Text>
      </Box>
     
       </Box>
       
   
  )
}

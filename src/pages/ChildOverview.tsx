import { Box, Flex, Text } from '@chakra-ui/react'
// import React, { useEffect } from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
import Header from '../component/Header';

// import faker from 'faker';


import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    LinearScale,
    CategoryScale,
    Title
  } from "chart.js";
  import { Radar, Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    RadialLinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend
  );
  

export default function ChildOverview() {

    // console.log("====>pppp",param1)
  
    const navigate = useNavigate();

    const isChildTasksRoute = location.pathname   === '/ChildOverview'


    const options1 = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
      elements: {
        line: {
          tension: 0.4, // Set the curve tension for rounded lines
          borderRadius: 10, // Set the border radius for rounded lines
        },
      },
    };
    
    const labels1 = ['2', '3', '4', '5', '6', '7', '8'];
    
    const data1 = {
      labels:labels1,
      // datasets: [
      //   {
      //     fill: true,
      //     label: 'Dataset 2',
      //     // data: labels1.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //     data: [100, 200, 300, 400, 500, 600, 700], // Update the data values here

      //     borderColor: 'rgb(53, 162, 235)',
      //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //   },
      // ],
      datasets: [
        {
          fill: true,
          label: 'Dataset 1',
          data: [2/20, 4/40, 3/30, 5/50, 2/20, 5/50, 6/60], // Update the data values for Dataset 1
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
          fill: true,
          label: 'Dataset 2',
          data: [3/30, 2/20, 3/30, 7/70, 2/20, 5/40, 7/70], // Update the data values for Dataset 2
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ]
    };
  

    const data = {
        labels: ["Curiosity and Interest", "Creativity", "Wednesday", "Higher Order Thinking Skills",  "Integrated Learning", "Self Regulation","Learning Strategies", ],
        datasets: [
          {
            label: "How to learn Profile",
            data: [5, 30, 25, 10, 30, 35,15],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            color : "#000",
          }
        ]
      };

      const radarOptions = {

        elements: {
            point: {
              radius: 2, // Hide the default points
            },
          },
        scales: {
          r: {
            pointLabels: {
              color: "#004570",
              
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#004570",
            },
          },
        },
      };


  return (
      <Box bg={'gray.300'}>
          <Header />
          {isChildTasksRoute && (
         
            <>
   <Flex justifyContent="center" alignItems="center" bg={'gray.300'} w="100%" flexDirection="column" >
  
  <Box height={{base:"290px",md:"450px",lg:"600px"}} width={{base:"290px",md:"450px",lg:"600px"}} boxShadow="dark-lg"
   p="0"
   rounded=""
   bg="white"
   roundedTopLeft="210px"
   roundedTopRight="210px"
   mt="5px"
   mb="100px"
   alignItems="center"
   justifyContent="center">
    <Flex justifyContent={'center'}>
    <Box>
    <Radar data={data} options={radarOptions}  />
    </Box>
    </Flex>
    </Box>
    

   <Box height={{base:"290px",md:"450px",lg:"600px"}} width={{base:"290px",md:"450px",lg:"600px"}} boxShadow="dark-lg"
   p="0"
   rounded=""
   bg="white"
   roundedTopLeft="220px"
   roundedTopRight="220px"
//    border ={60}
    mt={5}
    mb={100}
   alignItems="center"
   justifyContent="center">
    <Box marginTop="20px">
             <Line  data={data1} options={options1} />
            
             </Box>
          </Box>
          </Flex>
          </>
          )}
        
          <Outlet />
         
      </Box>
  )
}

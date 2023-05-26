import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from '../component/Header';

import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  } from "chart.js";
  import { Radar } from "react-chartjs-2";
  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  

export default function ChildOverview() {
  
    const navigate = useNavigate();
    const location = useLocation();

    const isChildTasksRoute = location.pathname   === '/ChildOverview'

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
          <Box>
            in Overview
          </Box>
          <Box height="400px" width="400px">
             <Radar  data={data} options={radarOptions} />
          </Box>
          </>
          )}
        
          <Outlet />
         
      </Box>
  )
}

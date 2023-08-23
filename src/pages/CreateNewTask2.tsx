import React from "react";
import{Box,Text,Image} from "@chakra-ui/react";
import {BsPlusCircle ,FaAngleUp ,FaArrowLeft} from "react-icons/all"

const CreateNewTask2 =()=>{
    return(

        <Box bg="#F2F5F7" width="100%">
            <Box display={"flex"} justifyContent="space-between" bg={"gray.300"} alignItems={'center'} width="100%">
              
               <Box display="flex" justifyContent="space-evenly" alignItems={'center'}>
                <Text color="#004570" ><FaArrowLeft size="20"/></Text>
                <Text ml="20px" color={'#004570'}>Gopi</Text>
               </Box>
               
               <Image src="src/assets/SIGNAL LOGO (2)@3x.png" height="100px"/>
            </Box>
            <Text>welcome to the  create new task 2</Text>
        </Box>

    )
}
export default CreateNewTask2
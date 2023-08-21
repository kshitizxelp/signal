import { Box, Button, Flex,Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BasicInfoNumber() {
    
    const navigate = useNavigate();

    const Login = () =>{
        navigate('/ParentVerification')
    }

    const [formData, setFormData] = useState<any>({
        username: "",
        mobile: "",
        gender:"",
      });
      console.log(formData)

      const handlechange =(e:any)=>{

        setFormData({...formData,[e.target.name]:e.target.value})
      }


      const inputs :any = [
        {
            name:"username",
            label:"Name",
            type:"text",
        },
        {
          name: "mobile",
          label: "Mobile Number",
          type: "text",
        },
        {
            name:"gender",
            label:"Gender",
            type:"text",
        }
      ];

  return (
  <Box bg={"#F2F5F7"} width="100%">
  <Flex direction="column" alignItems="center" position="relative" pt={'60px'} pb={'100px'}>
  <Box
   boxShadow="dark-lg"
   p="6"
   rounded=""
   bg="white"
  //  borderRadius={'50px'}
  borderBottomRadius="200px"
  borderTopRadius="200px"
   width={{base:"300px",md:"320px",lg:"350px"}}
   alignItems="center"
   justifyContent="center"
   mt='4px'
 >
  <Flex display={'flex'} justifyContent={'center'}>
      <Box>
      <Image src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height='150px'/>
      </Box>
      </Flex>
    
    <Flex flexDirection="row">
    <Box justifyContent="center" textAlign="left" alignItems="center" marginLeft="110px" mt={'4px'} >
        <Text fontSize="12px"  textAlign={'center'} color="rgba(0, 69, 112, 1)">Enter Basic Information</Text>
    </Box>
    </Flex>
   
    <Flex display={'flex'} justifyContent={'center'}>
    <Box mt='4px' mb="20px">
     {inputs.map((input: any) => (
          <Box key={input.name} mb='4px'>
            <Text mb={'1px'}>{input.label}</Text>
            {input.name === "gender" ? ( 
                <Select placeholder='Select' width={{base:"250px",md:"280px",lg:"313px"}}  borderColor="#282828" onChange={handlechange} >
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </Select>
            ):(
              <Flex justifyContent={'center'}>
            <Input
              type={input.type}
              placeholder={input.placeholder}
              value={formData[input.name]}
              name={input.name}
              variant="outline"
              bgColor="white"
              borderColor="black"
              width={{base:"250px",md:"280px",lg:"313px"}}
              onChange={handlechange}
            />
            </Flex>
            )}
          </Box>
        ))}
     </Box>
     </Flex>
     
     <Flex display={'flex'} justifyContent={'center'}>
      
     <Box mb="70px">
        <Button colorScheme="blue" size="lg" bg="rgba(0, 69, 112, 1)" width={{base:"250px",md:"280px",lg:"313px"}} onClick={Login}>
          Save
        </Button>
      </Box>
      </Flex>
     
      </Box>
    </Flex>
    </Box>
  )
}

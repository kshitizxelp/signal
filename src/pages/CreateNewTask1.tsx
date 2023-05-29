import { Box , HStack, Image, Text, Modal, ModalOverlay, ModalContent,Flex, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button, Radio } from '@chakra-ui/react'
import React, { useState } from 'react'
import {BsPlusCircle ,CiMenuKebab} from "react-icons/all"
import { useNavigate } from 'react-router-dom';


export default function CreateNewTask1() {

    const navigate = useNavigate()

    const navigateTo = () => {

        if (selectedRadio === '1') {
            navigate("/ExploreLibrary");
        } else if (selectedRadio === '2') {
            navigate("/AddVideos");
        }
     }

    const [isOpen, setIsOpen] = useState(false); // State to control the modal visibility

    const [selectedRadio, setSelectedRadio] = useState(''); // State to store the selected radio option

    
    const handleRadioChange = (event:any) => {
        setSelectedRadio(event.target.value);
    }

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }

  
    const data=[

        { 
            title:"Light",
            itemvalue:"2500RP"
        },
        { 
            title:"Critical Thinking",
            itemvalue:"2500RP"
        },
        { 
            title:"Critical Thinking",
            itemvalue:"2500RP"
        },
        { 
            title:"Critical Thinking",
            itemvalue:"2500RP"
        },
    ]


  return (
    <Box display="flex" flexDirection="column" >
    <Box bg="gray"   >
     
    <Box  display={"flex"}
         flexDirection={"row"}
         justifyContent={"space-between"}
         alignItems={"center"}
         bg={'gray.200'}
         >
    <Text marginLeft="20px" color={'#004570'} as="b" >Vineet</Text>
    <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov"  height={100}/>
   </Box>

   </Box>
   <Box marginLeft="30px" marginTop="20px" >
    <Text as="b" >Create Custom task for Vineet</Text>
    <Text marginTop="5px" color="#282828" >u have collected these 4 tasks for Vineet</Text>
   </Box>

   <Box
        display="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        gridGap="10px"
        // marginTop="10px"
        margin="80px"
      >
        {data.map((item, index) => (
          <Box key={index} bg="gray.300" height="120px" justifyContent="space-between" width="500px" display="flex" flexDirection="row" marginBottom="30px">
            <HStack spacing="40px" marginLeft="20px">
            <Text as="b">{item.title}</Text>
            <Text>{item.itemvalue}</Text>
            <BsPlusCircle onClick={handleOpenModal} style={{ cursor: 'pointer' }} />
            <Text as="u"  onClick={handleOpenModal} style={{ cursor: 'pointer' }} >Add Content</Text>
            <CiMenuKebab/>
            </HStack>
          </Box>
        ))}
      </Box>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Select the source of content</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {/* Place your content for adding new content here */}
                            {/* <Text>Content goes here...</Text> */}
                            <Flex direction="column" gap={4} justifyContent="center">
                            <Flex  display={'flex'} alignItems="center" direction="row" gap={2}>
            <Radio
             value="1"
             borderColor={'black'}
             colorScheme='green'
             onChange={handleRadioChange}

             isChecked={selectedRadio === '1'}

            />
            <Text mt={0}>Explore Signal Library</Text>
            </Flex>
            <Flex display={'flex'} alignItems="center" direction="row" gap={2}>
              <Radio
              value="2"
              borderColor={'black'}
              colorScheme='green'
              onChange={handleRadioChange}

              isChecked={selectedRadio === '2'}
              />
            <Text mt={0}>Add your own videos</Text>
            </Flex>
            </Flex>
                        </ModalBody>
                        <ModalFooter>
                        <Button variant="ghost" onClick={handleCloseModal}>Back</Button>

                            <Button colorScheme="blue" mr={3} onClick={() => navigateTo()} >
                                Next
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>


   </Box>
  )
}

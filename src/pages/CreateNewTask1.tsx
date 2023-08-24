import { Box, HStack, Image, Text, Modal, ModalOverlay, ModalContent, Flex, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button, Radio } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsPlusCircle, CiMenuKebab, RiDeleteBinLine } from "react-icons/all"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function CreateNewTask1() {

    const navigate = useNavigate();
    const taskdata = useSelector<any>((state) => state?.auth?.createNewTaskdata);
    console.log(taskdata, "dataaaaaafrom redux");


    const navigateTo = () => {

        if (selectedRadio === '1') {
            navigate("/ExploreLibrary");
        } else if (selectedRadio === '2') {
            navigate("/AddVideos");
        }
    };

    const createtask2 =()=>{
        navigate("/CreateNewTask2")
    }

    const [isOpen, setIsOpen] = useState(false); // State to control the modal visibility

    const [selectedRadio, setSelectedRadio] = useState(''); // State to store the selected radio option


    const handleRadioChange = (event: any) => {
        setSelectedRadio(event.target.value);
    }

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const handleCloseModal = () => {
        setIsOpen(false);
    }


    const data = [

        {
            head: "Learning",

            title: "Light",
            itemvalue: "0 Pts"
        },
        {

            head: "Shadow Practice",
            title: "Critical Thinking",
            itemvalue: "0 Pts"
        },
        {
            head: "Interests",
            title: "Food",
            itemvalue: "0 Pts"
        },
        {
            head: "Better Me",
            title: "Habits",
            itemvalue: "0 Pts"
        },
    ]

    const Back = () => {
        navigate("/CreateNewTask")
    }


    return (
        <Box display="flex" flexDirection="column" bg="#F2F5F7" >
            <Box width="100%" >

                <Box display={"flex"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    bg={'white'}

                >
                    <Text marginLeft="20px" color={'#004570'} as="b" >Gopi Sunkara</Text>
                    <Image marginRight="10px" src="src/assets/SIGNAL LOGO (2)@3x.png" alt="Dan Abramov" height={'100px'} />
                </Box>

            </Box>
            <Box marginLeft="30px" marginTop="20px" >
                <Text as="b" >Create Custom task for Vineet</Text>
                <Text marginTop="5px" color="#282828" >u have collected these 4 tasks for Vineet</Text>
            </Box>

            <Box
                display="grid"
                gridTemplateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(3,1fr)' }}
                gridGap="10px"
                marginTop="10px"
            >
                {/* {data.map((item, index) => (

                    <Box key={index} bg="gray.300" height="120px" width={{ base: '300px', md: '300px', lg: '400px' }} m='5px' >
                        <Text bg={'green'} pt={'5px'} color={'white'} pl={'10px'}>{item.head}</Text>

                        <HStack spacing="2px" marginLeft="8px" justifyContent="space-between" display="flex" mt='20px'>

                            <Text as="b" fontSize="14px">{item.title}</Text>
                            <Text>{item.itemvalue}</Text>
                            <BsPlusCircle onClick={handleOpenModal} style={{ cursor: 'pointer' }} p="2px" />
                            <Text as="u" onClick={handleOpenModal} style={{ cursor: 'pointer' }} color={'blue'} >Add Content</Text>
                            <Text p="2px"><RiDeleteBinLine /></Text>
                        </HStack>
                    </Box>
                ))} */}

                {Object.keys(taskdata).map(key => (
                    <>
                        {/* <div key={key}>
                        <h3>{key}</h3>
                        <p>{taskdata[key]}</p>
                    </div> */}
                        <Box bg="gray.300" height="120px" width={{ base: '300px', md: '300px', lg: '400px' }} m='5px' >
                            <Text bg={'green'} pt={'5px'} color={'white'} pl={'10px'}>{key}</Text>
                            <HStack spacing="2px" marginLeft="8px" justifyContent="space-between" display="flex" mt='20px'>
                                <Text>{taskdata[key]}</Text>
                                <Text>0 pts</Text>
                                <BsPlusCircle onClick={handleOpenModal} style={{ cursor: 'pointer' }} p="2px" />


                                {
                                    key === "Learning" ? (
                                        <Text as="u" onClick={handleOpenModal} style={{ cursor: 'pointer' }} color={'blue'} >Add Content</Text>
                                    ) : (
                                        <>
                                            <Text as="u" onClick={createtask2} style={{ cursor: 'pointer' }} color={'blue'} >Add Content</Text>

                                        </>
                                    )
                                }
                                <Text p="2px"><RiDeleteBinLine /></Text>
                            </HStack>
                        </Box>

                    </>
                ))}




            </Box>

            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Select the source of content</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Flex direction="column" gap="4px" justifyContent="center">
                            <Flex display={'flex'} alignItems="center" direction="row" gap="2px">
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


            <Box>
                <Flex flexDirection="row" justifyContent="center">
                    <Button colorScheme="blue" borderRadius="20px" mb={50} mr={30} size="lg" bg="#F5F5F5" width="110px" color="black" onClick={Back}>
                        Back
                    </Button>

                    <Button colorScheme="blue" borderRadius="20px" size="lg" bg="#004570" width="110px" >
                        Next
                    </Button>
                </Flex>

            </Box>


        </Box>
    )
}

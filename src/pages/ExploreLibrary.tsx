import React, { useState } from "react";
import {
  Box,
  Text,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Flex,
  Button,
  ChakraProvider,
  Avatar,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft, CiSearch, GiTrophyCup } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import Login from "../screens/Login";

export default function ExploreLibrary() {
  // const [searchValue, setSearchValue] = useState('');

  // const handleSearchChange = (event) => {
  //   setSearchValue(event.target.value);
  // };

  // const handleSearchSubmit = (event) => {
  //   event.preventDefault();

  //   console.log('Searching for:', searchValue);

  const data = [
    {
      innerbox: "All",
    },
    {
      innerbox: "Task Videos",
    },
    {
      innerbox: "Related Movies",
    },
    {
      innerbox: "Related Podcasts",
    },
    {
      innerbox: "Related Games",
    },
    {
      innerbox: "Related Books",
    },
    {
      innerbox: "Related Pdfs",
    },
  ];

  const card = [
    {
      image: "src/assets/SIGNAL LOGO (2)@3x.png",
      head: "English Vocabulary (Level 1)",
      textone: "Subject",
      texttwo: "Content Type",
      textthree: "Rewards",
      contentone: "English",
      contenttwo: "PDF",
      contentthree: "150 pts",
    },
    {
      image: "src/assets/SIGNAL LOGO (2)@3x.png",
      head: "The Wolf and the Crane (Story)",
      textone: "Subject",
      texttwo: "Content Type",
      textthree: "Rewards",
      contentone: "English",
      contenttwo: "Video",
      contentthree: "300 pts",
    },
    {
      image: "src/assets/SIGNAL LOGO (2)@3x.png",
      head: "The Lion and The Mouse (Story)",
      textone: "Subject",
      texttwo: "Content Type",
      textthree: "Rewards",
      contentone: "English",
      contenttwo: "Video",
      contentthree: "300 pts",
    },
    {
      image: "src/assets/SIGNAL LOGO (2)@3x.png",
      head: "The Lion and The Mouse (Story)",
      textone: "Subject",
      texttwo: "Content Type",
      textthree: "Rewards",
      contentone: "English",
      contenttwo: "Video",
      contentthree: "300 pts",
    },
  ];

  const navigate = useNavigate();
  const login = () => {
    navigate("/ContentSelection");
  };
  const Back = () => {
    navigate("/CreateNewTask1");
  };

  return (
    <Box bg={"gray.300"} width="100%" height="100%">
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        // alignItems={"center"}
        bg={"gray.200"}
      >
        <HStack gap={"5"} pr={"5px"}>
          <Text marginLeft="10px" color={"#004570"}>
            <AiOutlineArrowLeft onClick={Back} />
          </Text>
          <Box>
            <Text marginLeft="10px" color={"#004570"} mb="2px" fontSize="12px">
              Add English Content for{" "}
            </Text>
            <Text marginLeft="10px" color={"#004570"} mb="3px">
              GopiSunkara{" "}
            </Text>
          </Box>
        </HStack>
        <Image
          marginRight="10px"
          src="src/assets/SIGNAL LOGO (2)@3x.png"
          alt="Dan Abramov"
          height={"100px"}
        />
      </Box>

      <Box mt="10px">
        <Flex display={"flex"} justifyContent={"center"}>
          <form>
            <InputGroup
              width={{ base: "260px", md: "280px", lg: "313px" }}
              bg={"white"}
            >
              <Input
                type="text"
                placeholder="Search..."
                // value={searchValue}
                // onChange={handleSearchChange}
              />
              <InputRightElement>
                <IconButton
                  type="submit"
                  aria-label="Search"
                  icon={<CiSearch />}
                  colorScheme="teal"
                />
              </InputRightElement>
            </InputGroup>
          </form>
        </Flex>
      </Box>

      <Box>
        <Box bg={"gray"} mt="20px"  >
          <Box ml={"5px"}>
            <Text color={"#004570"}>Select the age below</Text>
          </Box>

          <Box >
            <Box
              style={{
                overflowX: "scroll",
                width: "90vw",
                whiteSpace: "nowrap",
              }}
             
            >
              <Box style={{ width: "200vw" }} >
                <Tabs justifyContent="space-evenly">
                  <TabList>
                    <Tab
                      _selected={{ color: "white", bg: "blue" }}
                      borderRadius="10px"
                      width={{ base: "120px", md: "130px", lg: "150px" }}
                      ml="40px"
                      bg={"white"}
                      mb="10px"
                    >
                      Age 8
                    </Tab>
                    <Tab
                      _selected={{ color: "white", bg: "blue" }}
                      borderRadius="10px"
                      width={{ base: "120px", md: "130px", lg: "150px" }}
                      ml="40px"
                      bg={"white"}
                      mb="10px"
                    >
                      Age 9
                    </Tab>
                    <Tab
                      _selected={{ color: "white", bg: "blue" }}
                      borderRadius="10px"
                      width={{ base: "120px", md: "130px", lg: "150px" }}
                      ml="40px"
                      bg={"white"}
                      mb="10px"
                    >
                      Age 10
                    </Tab>
                    <Tab
                      _selected={{ color: "white", bg: "blue" }}
                      borderRadius="10px"
                      width={{ base: "120px", md: "130px", lg: "150px" }}
                      ml="40px"
                      bg={"white"}
                      mb="10px"
                    >
                      Age 11
                    </Tab>
                    <Tab
                      _selected={{ color: "white", bg: "blue" }}
                      borderRadius="10px"
                      width={{ base: "120px", md: "130px", lg: "150px" }}
                      ml="40px"
                      bg={"white"}
                      mb="10px"
                    >
                      Age 12
                    </Tab>
                    <Tab
                      _selected={{ color: "white", bg: "blue" }}
                      borderRadius="10px"
                      width={{ base: "120px", md: "130px", lg: "150px" }}
                      ml="40px"
                      bg={"white"}
                      mb="10px"
                    >
                      Age 13
                    </Tab>
                    <Tab
                      _selected={{ color: "white", bg: "blue" }}
                      borderRadius="10px"
                      width={{ base: "120px", md: "130px", lg: "150px" }}
                      ml="40px"
                      bg={"white"}
                      mb="10px"
                    >
                      Age 14
                    </Tab>
                  </TabList>
                </Tabs>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box bg={"gray"} mt="5px" width="100%">
          <Box ml="5px">
            <Text color={"#004570"}>Select the tasks below</Text>
          </Box>

          {/* <Box style={{overflowX:"scroll",width: '100vw',  whiteSpace: 'nowrap' }} >
            <Box style={{ width: '200vw' }}>
            <Flex display={'flex'} gap={'10px'} pt={'10px'} pb={'10px'}    pl={'2px'}>
             {
                data.map((item)=>(
           
            <Button borderEndRadius="10px" width="200px" fontSize={'11px'} >{item.innerbox}</Button>
             ))
            }
             </Flex>
              </Box>
            
             </Box>
              */}
          <Box
            style={{ overflowX: "scroll", width: "90vw", whiteSpace: "nowrap" }}
          >
            <Box style={{ width: "200vw" }}>
              <Tabs justifyContent="space-evenly">
                <TabList>
                  <Tab
                    _selected={{ color: "white", bg: "green.900" }}
                    borderRadius="10px"
                    width={{ base: "120px", md: "130px", lg: "150px" }}
                    ml="40px"
                    bg={"white"}
                    mb="10px"
                  >
                    All
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "green.900" }}
                    borderRadius="10px"
                    width={{ base: "120px", md: "130px", lg: "150px" }}
                    ml="40px"
                    bg={"white"}
                    mb="10px"
                  >
                    Task Videos
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "green.900" }}
                    borderRadius="10px"
                    width="150px"
                    ml="40px"
                    bg={"white"}
                    mb="10px"
                  >
                    Related Podcasts
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "green.900" }}
                    borderRadius="10px"
                    width={{ base: "120px", md: "130px", lg: "150px" }}
                    ml="40px"
                    bg={"white"}
                    mb="10px"
                  >
                    Related Games
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "green.900" }}
                    borderRadius="10px"
                    width={{ base: "120px", md: "130px", lg: "150px" }}
                    ml="40px"
                    bg={"white"}
                    mb="10px"
                  >
                    Related Books
                  </Tab>
                  <Tab
                    _selected={{ color: "white", bg: "green.900" }}
                    borderRadius="10px"
                    width={{ base: "120px", md: "130px", lg: "150px" }}
                    ml="40px"
                    bg={"white"}
                    mb="10px"
                  >
                    Related Pdfs
                  </Tab>
                </TabList>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <ChakraProvider>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap="5px"
            m="5px"
          >
            {card.map((item) => (
              <Box>
              <Box
                bg={"white"}
                borderRadius="10px"
                width={{ base: "290px", md: "300px", lg: "350px" }}
              >
                <Flex justifyContent="center">
                  <Box p="2px">
                    <Avatar name="" size="xl" src={item.image} />
                  </Box>

                  <Box>
                    <Text fontWeight={"bold"} color={"#004570"} onClick={login}>
                      {item.head}
                    </Text>

                    <Flex direction={"row"} justifyContent="space-between">
                      <Box p="2px">
                        <Text>{item.textone}</Text>
                        <Text>{item.texttwo}</Text>
                        <Text>{item.textthree}</Text>
                      </Box>

                      <Box p="2px">
                        <Flex display={"flex"} justifyContent="space-evenly">
                          <Box mt="12px">
                            <Text color={"yellow.900"}>
                              <GiTrophyCup />
                            </Text>
                          </Box>
                          <Box pl={"2px"}>
                            <Text>{item.contentone}</Text>
                            <Text>{item.contenttwo}</Text>
                            <Text>{item.contentthree}</Text>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              </Box>
            ))}
          </Box>
        </ChakraProvider>
      </Box>
    </Box>
  );
}

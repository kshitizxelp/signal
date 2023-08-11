import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  HStack,
  Image,
  Link,
  Flex,
  Button,
  ChakraProvider,
  Input,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import { AiOutlineArrowLeft, RiMedalLine } from "react-icons/all";
import ReactPlayer from "react-player";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector,useDispatch  } from "react-redux";
import Swal from 'sweetalert2'
import { setfinaldataofreward } from "../Slice";






const FinalContent = () => {
  const navigate = useNavigate();
 
  const dispatch = useDispatch();
  const jumpdata = useSelector<any>((state) => state?.auth?.jumpData);
  const addjump = useSelector<any>((state) => state?.auth?.addjump);
  const insertclicktime = useSelector<any>((state) => state?.auth?.insertclicktime);
  const AddSpeed = useSelector<any>((state)=>state?.auth?.speedofAdd);
  const AddspeedValue= useSelector<any>((state)=>state?.auth?.speedofValue);
 
  console.log("jumpdata", jumpdata);
  console.log(addjump, "jjsjkjjjjjjs..");
  console.log(insertclicktime, "clicktimee..");
  console.log(AddSpeed,"speed time ");
  console.log(AddspeedValue,"add speed valuesss")
  

  const reactPlayerRef = useRef<any>(null);
  const [finaldata,setFinaldata]=useState({
      date:"",
      rewardpoints:"",
    });

  const [played, setPlayed] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [selectplay,setSelectplay] = useState<any>({
    playing:true
  });
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const {playing}=selectplay
  // const [onplay,setOnplay] = useState<any>(true);
  // const [alertDismissed, setAlertDismissed] = useState(false);





//   const successAlert = () => {
//     Swal.fire({  
//         title: 'Welcome',  
//         text: 'You clicked the button.',
//         icon: 'success',
        
//       }).then(() => {
//         setAlertDismissed(true);
//         setSelectplay(true);
//       });
     
     
// }

const handleChange =(e:any)=>{
  setFinaldata({ ...finaldata, [e.target.name]: e.target.value })
}
console.log(finaldata,">>>>>>>>>>>>>>>")





  const handlePuase = () => {
    // // setAlertDismissed(true);
    // if (!selectplay) {
    //   setSelectplay(true);
     
    //   console.log('Video started playing for the first time');
    // }
    setSelectplay((prevState :any) => ({
      ...prevState,
      playing: !prevState.playing
    }))
     
  };
  // const handleonplay = ()=>{
  //   setOnplay(true);
  // }

 
  let num2  = insertclicktime.clicktime 
  console.log(num2, "typpppppppppp");
  let formatNum2 = Math.floor(num2);
  console.log("formatted number for jump ", formatNum2);


 
  let num = seconds;
  let playerTime = Math.floor(num);
  console.log("formatted number for every second finalscreen data", playerTime);

 

   let jumpstartTime= jumpdata.currentTime
   console.log(jumpstartTime,"jumpstartTime");
   let jumpstartTimeOnlySec = Math.floor(jumpstartTime)
   console.log(" jump start time in seconds",jumpstartTimeOnlySec);
   
  let jumpendTime = jumpdata.endTime
  console.log(jumpendTime,"jumpendTime");
  let jumpendTimeOnlySec = Math.floor(jumpendTime)
  console.log("jump of end time in seconds",jumpendTimeOnlySec);

  let speedtime = AddSpeed.currentTime
  console.log(speedtime,"add speed current");
  let AddSpeedstartTimeOnlySec = Math.floor(speedtime)
  console.log("AddSpeed Start time only Seconds",AddSpeedstartTimeOnlySec);
  
  let speedendtime =AddSpeed.endTime
  console.log(speedendtime,"Add speed end time");
  let AddSpeedendTimeOnlySec =Math.floor(speedendtime)
   console.log("AddSpeed End time only Seconds",AddSpeedendTimeOnlySec);

   let speedofSpeed = AddspeedValue.speed
   console.log(speedofSpeed,">>>>>>>>>>>>>>>>>>>>>>SssSSSsss")





  


    useEffect(() => {
 
    if (playerTime === formatNum2) {

      setSelectplay((prevState:any) => ({
        ...prevState,
        playing : false
      }))



      Swal.fire(`${addjump?.[0]}`)
      .then((result) => {
  
       
        setSelectplay((prevState:any) => ({
          ...prevState,
          playing: true
        }))
  
  
      })



    }


  }, [playerTime]);


  console.log(selectplay, "selectplayselectplayselectplay");

if(playerTime===jumpstartTimeOnlySec){
  reactPlayerRef.current?.seekTo(jumpendTimeOnlySec);
};









let a = AddSpeedstartTimeOnlySec;
console.log(a,"Adataaaa");
console.log(typeof(a))

let b= parseInt(speedofSpeed)
console.log(typeof(b),"typeee offff bbb")

   // const handleProgress = (progress :any) => {
  //   setPlayed(progress.played);
  //   const time = reactPlayerRef.current.getCurrentTime()
  //   };
  // console.log(played,"played")

  const handleProgress = (progress: any) => {
    setPlayed(progress.played);
    const { playedSeconds } = progress;
    setSeconds(playedSeconds);
    

    // AddSpeedstartTimeOnlySec and speedofSpeed should be defined with appropriate values
    const AddSpeedstartTimeOnlySec = a; // Replace with your value
    const speedofSpeed = b; // Replace with your value
    console.log("end time==================>",AddSpeedendTimeOnlySec);
    console.log("current time=======================>",playerTime)
   
    if (playerTime === AddSpeedstartTimeOnlySec) {
      // Update the playback rate
      setPlaybackRate(playbackRate + speedofSpeed);
    
     
    }
   
    else if(playerTime === AddSpeedendTimeOnlySec||playerTime==AddSpeedendTimeOnlySec+1||playerTime==AddSpeedendTimeOnlySec-1){
      setPlaybackRate(1.0);
  
      };
    
  
  
  //  }
    // var data =AddSpeedstartTimeOnlySec;
    // var speed= speedofSpeed
    // console.log(data,"dataaaaaaaaaaaaaaa")
    // console.log(speed,"Speed")
    // if(playerTime === data){
    //   setPlaybackRate(playbackRate + speed)
    // }
  };


  console.log(seconds, ">>>>>>>>>>>>>>>");
  console.log(played, "played"); 
  

  


//  main handleprogress start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  // const handleProgress = (progress: any) => {
  //   setPlayed(progress.played);
  //    const { playedSeconds } = progress;
  //    setSeconds(playedSeconds);
  //  };
 
  //  console.log(seconds, ">>>>>>>>>>>>>>>");
  //  console.log(played, "played");
 
//  main handleprogress start>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



  //  console.log(typeof (seconds),"typppppppppppssss");

  // const handleSeek = (value :any) => {
  //  setPlayed(value);
  //  reactPlayerRef.current?.seekTo(value);
  //  reactPlayerRef.current?.getInternalPlayer()?.playVideo();

  // };
  const handleSeek = (value: any) => {
    setPlayed(value);
    reactPlayerRef.current?.seekTo(value);
    reactPlayerRef.current?.getInternalPlayer()?.playVideo();
  };

  const { state } = useLocation();
  console.log("goooooo", state?.add);


 
  const Back = () => {
    navigate(-1);
  };
  const Save = () => {
    dispatch(setfinaldataofreward(finaldata));
    
    navigate("/VideoSuccessfullySaved");
  };
  const RelatedRewards = () => {
    navigate("/SelectedRewards");
  };

  
  return (
    <Box bg={"gray.300"} width="100%">
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"gray.200"}
        width="100%"
      >
        <HStack gap={"5"} pr={5}>
          <Text marginLeft="10px" color={"#004570"}>
            <AiOutlineArrowLeft />
          </Text>
          <Box>
            <Text marginLeft="10px" color={"#004570"} mb="2px" fontSize={12}>
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
          height={100}
        />
      </Box>

      <Box ml="50px">
        <Text color={"#004570"} fontWeight={"bold"}></Text>
        <Text fontSize="14px" p="20px">
          Great going Ann: Here is your final content preview for Shreya
        </Text>
      </Box>

    

      <Box mt={"200px"} position={'relative'}>
      {/* <Flex  justifyContent={"center"}>
      {formatNum === formatNum2 ?
       <Box width="50%" height="250px" bg="white" position={'absolute'} >
         <Text color="green.700">welcome signelfghghgjhjh</Text>
      </Box> :null
       }
       </Flex> */}
       <Flex  justifyContent={"center"} mb="20px">
       <Box>
        <Text color="#004570" fontWeight={'bold'} fontSize="26px">Preview</Text>
       </Box>
       </Flex>
       
       
        <Flex  justifyContent={"center"}>
          
        
          <ReactPlayer
            ref={reactPlayerRef}
            url={state?.add}
            controls
            onProgress={handleProgress}
            width="50%"
            height="250px"
            playing={playing}
           playbackRate={playbackRate}
           // onPause	={ handlePuase}
          
           
          />
          
        </Flex>

        <Flex display={"flex"} justifyContent={"center"}>
          <Slider
            value={played}
            min={0}
            max={1}
            step={0.01}
            onChange={handleSeek}
            colorScheme="blue"
            aria-label="Video progress"
            mt={4}
            width="50%"
          >
            <SliderTrack bg="gray.200">
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Flex>
      </Box>

      <Flex display={"flex"} justifyContent={"center"} mt={"50px"}>
        <Box>
          <Text>Task due date</Text>
          <Input
            placeholder="medium size"
            size="md"
            type="date"
            name="date"
            borderColor={"black"}
            width={"320px"}
            onChange={handleChange}
          />
        </Box>
      </Flex>

      <Flex display={"flex"} justifyContent={"center"} mt={"50px"}>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Text p={"20px"}>Add Task Reward Points</Text>
          {/* <Input htmlSize={4} width="auto" type="text" borderColor={"black"}  /> */}
          <Input
            placeholder="medium size"
            size="md"
            type="number"
            name="rewardpoints"
            borderColor={"black"}
            width={"220px"}
            onChange={handleChange}
          />
        </Box>
      </Flex>

      <Box display={"flex"} justifyContent={"center"} mr={"100px"}>
        <Box>
          <Text pt={"6px"} ml={"20px"} color={"#F45D01"}>
            <RiMedalLine />
          </Text>
        </Box>
        <Box>
          <Text>
            <Link color={"#F45D01"} onClick={RelatedRewards}>
              {" "}
              View Related Rewards
            </Link>{" "}
          </Text>
        </Box>
      </Box>

      <Box mt={"50px"}>
        <Flex flexDirection="row" justifyContent="center">
          <Button
            colorScheme="blue"
            borderRadius="20px"
            mb={50}
            mr={30}
            size="lg"
            bg="#F5F5F5"
            width="110px"
            color="black"
            onClick={Back}
          >
            Back
          </Button>

          <Button
            colorScheme="blue"
            borderRadius="20px"
            size="lg"
            bg="#004570"
            width="110px"
            onClick={Save}
          >
            Save
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default FinalContent;

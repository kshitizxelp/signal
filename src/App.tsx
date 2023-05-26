
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import SignUpOrLogin from './screens/SignUpOrLogin'
import Login from './screens/Login'
import SIgnUp from './screens/SIgnUp'
import BasicInfo from "./screens/BasicInfo";
import BasicInfoNumber from "./screens/BasicInfoNumber";
import ParentVerification from "./screens/ParentVerification";
import AadharPan from "./screens/AadharPan";
import EnterOtp from "./screens/EnteOtp";
import Verify from "./screens/Verify";
import CreateChild from "./screens/CreateChild";
import ChildInterest from "./screens/ChildInterest";
import ChildVerification from "./screens/ChildVerification";
import ChildPhoto from "./screens/ChildPhoto";
import ChildAvatar from "./screens/ChildAvatar";

// import Nav from "./pages/Nav";
import Welcomeback from "./pages/Welcomeback";
import Mydashbord from "./pages/Mydashbord";
import Addchildinterest from "./pages/Addchildinterest";
import Addedavathar from "./screens/Addedavathar";
import More from "./pages/More";
import ChildOverview from "./pages/ChildOverview";
import ChildTasks from "./pages/ChildTasks";
import ChildRewards from "./pages/ChildRewards";
import Notifications from "./pages/Notifications";
import Rewards from "./pages/Rewards";
import RewardSetup from "./pages/RewardSetup";
import CreateNewTask1 from "./pages/CreateNewTask1";
import ExploreLibrary from "./pages/ExploreLibrary";
import AddVideos from "./pages/AddVideos";
import SelectedTaskAssign from "./pages/SelectedTaskAssign";
import UserNameSuccess from "./screens/UserNameSuccess";
import CreateNewTask from "./pages/CreateNewTask";


function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignUpOrLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SIgnUp />}/>
        <Route path="/BasicInfo" element={<BasicInfo />}/>
        <Route path="/BasicInfoNumber" element={<BasicInfoNumber />}/>
        <Route path="/ParentVerification" element={<ParentVerification />}/>
        <Route path="/welcomeback" element={<Welcomeback/>} />
        <Route path="/Mydashbord" element={<Mydashbord/>}> 
          <Route path="/Mydashbord/more" element={<More/>} />
          <Route path="/Mydashbord/Notifications" element={<Notifications/>} />
        </Route>
        <Route path="/Rewards" element={<Rewards/>}> 
          <Route  path="/Rewards/RewardSetup" element={<RewardSetup/>}  />
        </Route>

        <Route path="/AadharPan" element={<AadharPan />}  />
        <Route path="/EnterOtp" element={<EnterOtp/>}/>
        <Route path="/Verify" element={<Verify/>} />
        <Route path="CreateChild" element={<CreateChild/>} />
        <Route path="/ChildInterest" element={<ChildInterest />} />
        <Route path="/ChildVerification" element={<ChildVerification />}  />
        <Route path="/ChildPhoto" element={<ChildPhoto />}  />
        <Route path="/ChildAvatar" element={<ChildAvatar />} />
        <Route path="/addchildinterests" element={<Addchildinterest/>} />
        <Route path="/addedavathar" element={<Addedavathar/>} />
        <Route path="/SelectedTaskAssign" element={<SelectedTaskAssign/>} />
        <Route path="/ChildOverview" element={<ChildOverview/>}>
                 <Route path="/ChildOverview/ChildTasks" element={<ChildTasks/>} /> 
                 <Route path="/ChildOverview/ChildRewards" element={<ChildRewards/>} />
        </Route>

        <Route  path="/CreateNewTask1"  element={<CreateNewTask1/>} />

        <Route path="/ExploreLibrary" element={<ExploreLibrary/>} />

        <Route path="/AddVideos" element={<AddVideos/>} />

        <Route path="/UserNameSuccess" element={<UserNameSuccess/>} />

        <Route path="/CreateNewTask" element={<CreateNewTask/>} />



      </Routes>
    </Router>
    </ChakraProvider>

  );
}

export default App;
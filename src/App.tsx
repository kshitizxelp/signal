
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import SignUpOrLogin from './screens/SignUpOrLogin'
import Login from './screens/Login'
import SIgnUp from './screens/SIgnUp'
import BasicInfo from "./screens/BasicInfo";
import BasicInfoNumber from "./screens/BasicInfoNumber";
import ParentVerification from "./screens/ParentVerification";
import CreateChild from "./screens/CreateChild";
import ChildInterest from "./screens/ChildInterest";
import ChildVerification from "./screens/ChildVerification";
import Welcomeback from "./pages/Welcomeback";
import Mydashbord from "./pages/Mydashbord";
import Addchildinterest from "./pages/Addchildinterest";
import More from "./pages/More";
import ChildOverview from "./pages/ChildOverview";
import ChildTasks from "./pages/ChildTasks";
import ChildRewards from "./pages/ChildRewards";
// import SelectTasks from "./pages/SelectTasks";
import SelectedTaskAssign from "./pages/SelectedTaskAssign";
import CreateNewTask from "./pages/CreateNewTask";
import ParentVerification1 from "./screens/ParentVerification1";
import ParentVerification2 from "./screens/ParentVerification2";
import ParentVerification3 from "./screens/ParentVerification3";
import ChildVerification1 from "./screens/ChildVerification1";
import ChildVerification2 from "./screens/ChildVerification2";
import ChildVerification3 from "./screens/ChildVerification3";
import LoginMobileOtp from "./screens/LoginMobileOtp";
import LoginMobileOtp1 from "./screens/LoginMobileOtp1";
import  Notifications from"./pages/Notifications";
import Rewards from "./pages/Rewards";
import RewardSetup from "./pages/RewardSetup";
import CreateNewTask1 from "./pages/CreateNewTask1";
import ExploreLibrary from "./pages/ExploreLibrary";
import AddVideos from "./pages/AddVideos";
import UserNameSuccess from "./screens/UserNameSuccess";
import RewardUpdate from "./pages/RewardUpdate";
import TopUp from "./pages/TopUp";
import UserNameSuccessRewards from "./screens/UserNameSuccessRewards";
import ContentSelection from "./pages/ContentSelection";
import ContentSelection23 from "./pages/ContentSelecton23";
import ContentSelection24 from "./pages/ContentSelection24";
import ContentSelection25 from "./pages/ContentSelection25";
import ContentSelection30 from "./pages/ContentSelection30";
import ContentSelection33 from "./pages/ContentSelection33";
import ContentSelection37 from "./pages/ContentSelection37";
import ContentSelection2 from "./pages/ContentSelection2";
import AddJumps from "./pages/AddJumps";
import Settings from "./pages/Settings";
import Jump from "./pages/Jump";
import AddSpeed from "./pages/AddSpeed";
// 



function App() {
  return (
    <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SignUpOrLogin />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SIgnUp />}/>
        <Route path="/BasicInfo" element={<BasicInfo />}/>
        <Route path="/LoginMobileOtp" element={<LoginMobileOtp/>}/> 


        <Route path="/BasicInfoNumber" element={<BasicInfoNumber />}/>
        <Route path="/ParentVerification" element={<ParentVerification />}/>
        <Route path="/Welcomeback" element={<Welcomeback/>} />
        <Route path="/Mydashbord" element={<Mydashbord/>}> 
          <Route path="/Mydashbord/more" element={<More/>} />
          <Route path="/Mydashbord/Notifications" element={<Notifications/>} />
        </Route>
        <Route path="/Rewards" element={<Rewards/>}> 
          <Route  path="/Rewards/RewardSetup" element={<RewardSetup/>}  />
          <Route  path="/Rewards/RewardUpdate" element={<RewardUpdate/>}  />
        </Route>

        <Route path="/ParentVerification1" element={<ParentVerification1 />}  />
        <Route path="/ParentVerification2" element={<ParentVerification2/>}/>
        <Route path="/LoginMobileOtp1" element={<LoginMobileOtp1/>}/>

        <Route path="/ParentVerification3" element={<ParentVerification3/>} />
        <Route path="CreateChild" element={<CreateChild/>} />
        <Route path="/ChildInterest" element={<ChildInterest />} />
        <Route path="/ChildVerification" element={<ChildVerification />}  />
        <Route path="/ChildVerification1" element={<ChildVerification1 />}  />
        <Route path="/ChildVerification2" element={<ChildVerification2 />} />
        <Route path="/addchildinterests" element={<Addchildinterest/>} />
        <Route path="/ChildVerification3" element={<ChildVerification3/>} />
        <Route path="/SelectedTaskAssign" element={<SelectedTaskAssign/>} />
        <Route path="/TopUp" element={<TopUp/>} />
        <Route path="/ContentSelection" element={<ContentSelection/>} />
        <Route path="/ContentSelection23" element={<ContentSelection23/>} />
        <Route path="/ContentSelection24" element={<ContentSelection24/>} />
        <Route path="/ContentSelection25" element={<ContentSelection25/>} />
        <Route path="/ContentSelection30" element={<ContentSelection30/>} />
        <Route path="/ContentSelection33" element={<ContentSelection33/>} />
        <Route path="/ContentSelection37" element={<ContentSelection37/>} />
        <Route path="/ContentSelection2" element={<ContentSelection2/>} />
        <Route path="/AddJumps" element={<AddJumps/>} />
        <Route path="/Settings" element={<Settings/>} />
        <Route path="/Jump" element={<Jump/>}/>
        <Route path="/AddSpeed" element={<AddSpeed/>}/>
        

        
        <Route path="/UserNameSuccessRewards" element={<UserNameSuccessRewards/>} />



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
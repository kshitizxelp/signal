
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
import SelectTasks from "./pages/SelectTasks";
import SelectedTaskAssign from "./pages/SelectedTaskAssign";


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
        <Route path="/mydashbord" element={<Mydashbord/>} />
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
        <Route path="/more" element={<More/>} />
        <Route path="/selecttasks" element={<SelectTasks/>} />
        <Route path="/selectedtasksassign" element={<SelectedTaskAssign/>} />
        <Route path="/ChildOverview" element={<ChildOverview/>}>
                 <Route path="/ChildOverview/ChildTasks" element={<ChildTasks/>} /> 
                 <Route path="/ChildOverview/ChildRewards" element={<ChildRewards/>} />
        </Route>

        

      </Routes>
    </Router>
    </ChakraProvider>

  );
}

export default App;
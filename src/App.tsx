
// import "./App.css";
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

import Nav from "./pages/Nav";
import Welcomeback from "./pages/Welcomeback";
import Mydashbord from "./pages/Mydashbord";
import Addchildinterest from "./pages/Addchildinterest";
import Addedavathar from "./screens/Addedavathar";
import More from "./pages/More";


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
        
        

      </Routes>
    </Router>
    </ChakraProvider>

  );
}

export default App;
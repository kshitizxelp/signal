
import "./App.css";
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


function App() {
  return (
    <Router>
      <ChakraProvider>
      <Routes>
        <Route path="/" element={<SignUpOrLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SIgnUp />}/>
        <Route path="/BasicInfo" element={<BasicInfo />}/>
        <Route path="/BasicInfoNumber" element={<BasicInfoNumber />}/>
        <Route path="/ParentVerification" element={<ParentVerification />}/>
        <Route path="/AadharPan" element={<AadharPan />}  />
        <Route path="/EnterOtp" element={<EnterOtp/>}/>
        <Route path="/Verify" element={<Verify/>} />
        <Route path="CreateChild" element={<CreateChild/>} />
        <Route path="/ChildInterest" element={<ChildInterest />} />
        <Route path="/ChildVerification" element={<ChildVerification/>}  />
      </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
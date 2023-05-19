
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import SignUpOrLogin from './screens/SignUpOrLogin'
import Login from './screens/Login'
import SIgnUp from './screens/SIgnUp'
import BasicInfo from "./screens/BasicInfo";
import BasicInfoNumber from "./screens/BasicInfoNumber";
import ParentVerification from "./screens/ParentVerification";

import Nav from "./pages/Nav";
import Welcomeback from "./pages/Welcomeback";
import Mydashbord from "./pages/Mydashbord";


function App() {
  return (
    <ChakraProvider>
    <Router>
      
      <Routes>
     
        
      {/* <Route path="/" element={<Nav/>} /> */}

        <Route path="/" element={<SignUpOrLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SIgnUp />}/>
        <Route path="/BasicInfo" element={<BasicInfo />}/>
        <Route path="/BasicInfoNumber" element={<BasicInfoNumber />}/>
        <Route path="/ParentVerification" element={<ParentVerification />}/>
        <Route path="/welcomeback" element={<Welcomeback/>} />
        <Route path="/mydashbord" element={<Mydashbord/>} />
      </Routes>
    </Router>
    </ChakraProvider>

  );
}

export default App;


import './App.css'

// import GanarateOtp from './screens/GanarateOtp'
// import EnterOtp from './screens/EnteOtp'
// function App() {
 

//   return (
//     //  <GanarateOtp/>
//     <EnterOtp/>
//   )
// }

// export default App

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Genarateotp from './screens/Genarateotp';
import Enterotp from './screens/Enterotp';
import GanarateOtp from './screens/GanarateOtp';
import EnterOtp from './screens/EnteOtp';









function App() {
  return (
    <Router>
      <ChakraProvider>
      <Routes>
      {/* <Route path="/" element={<Genarateotp/>} />
      <Route path="/enterOtp" element={<Enterotp/>} /> */}

        {/* <Route path="/enterotp" element={<EnterOtp />} /> */}
        
        
        <Route path="/" element={<GanarateOtp />} />
        <Route path="/enterotp" element={<EnterOtp />} />
        
      </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;


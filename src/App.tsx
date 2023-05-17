// // import { useState } from 'react'
// import { ChakraProvider } from '@chakra-ui/react'
// import './App.css'


// function App() {
//   return (
//     <ChakraProvider>
//     <SIgnUp />
//   </ChakraProvider>
//   )
// }

// export default App

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import SignUpOrLogin from './screens/SignUpOrLogin'
import Login from './screens/Login'
import SIgnUp from './screens/SIgnUp'
import BasicInfo from "./screens/BasicInfo";




function App() {
  return (
    <Router>
      <ChakraProvider>
      <Routes>
        <Route path="/" element={<SignUpOrLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SIgnUp />}/>
        <Route path="/BasicInfo" element={<BasicInfo />}/>
      </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;
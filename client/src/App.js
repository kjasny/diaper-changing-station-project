import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Screens/Error/Error";
import LandingPage from "./Screens/LandingPage/LandingPage";

import './App.css';

const App = () => {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="*" element= {<Error />}/>
    </Routes>
</BrowserRouter>
  );
};

export default App;

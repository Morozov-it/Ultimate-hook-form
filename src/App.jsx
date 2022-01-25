//основное
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//компоненты
import { Header } from './components/Header';
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        {/*
        <Route path="/step3" element={<Step3 />} />
        <Route path="/result" element={<Result />} /> 
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

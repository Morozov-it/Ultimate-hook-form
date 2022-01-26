//основное
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//компоненты
import { Header } from './components/Header';
//страницы
import { Result } from './pages/Result';
import { Step1 } from './pages/Step1';
import { Step2 } from './pages/Step2';
import { Step3 } from './pages/Step3';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/result" element={<Result />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

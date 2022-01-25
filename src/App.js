import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Header = () => (<h1>Header</h1>)
const Step1 = () => (<>Step1</>)
const Step2 = () => (<>Step2</>)
const Step3 = () => (<>Step3</>)
const Result = () => (<>Result</>)

function App() {
  return (
    <BrowserRouter>
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

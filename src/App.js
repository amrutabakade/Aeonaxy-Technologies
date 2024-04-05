import React from 'react'
import Title from './components/Title'
import Page2 from './components/Page2'
import Page3 from './components/Page_3';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title/>}/>
        <Route path="/p2" element={<Page2/>}/>
        <Route path="/p3" element={<Page3/>}/>
        <Route path="/p4" element={<Page4/>}/>
        <Route path="/p5" element={<Page5/>}/>
        <Route path="/p6" element={<Page6/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Earth from './Earth.jsx';
import SignIn from './SignIn.jsx';
import Info from './Info.jsx'
import Quote from './Quote.jsx'


createRoot(document.getElementById('root')).render(
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/earth" element={<Earth  style={{overflow: 'hidden'}} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>,
  document.getElementById('root')
);

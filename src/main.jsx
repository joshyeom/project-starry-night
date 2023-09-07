import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Earth from './Pages/EarthPage/Earth';
import SignIn from './Pages/SiginInPage/SignIn';
import Info from './Pages/InfoPage/Info'
import Quote from './Pages/QuotePage/Quote'
import { AboutStarryNightPage } from './Pages/AboutStarryNightPage/AboutStarryNightPage';

createRoot(document.getElementById('root')).render(
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quote />} />
          <Route path="/earth" element={<Earth  style={{overflow: 'hidden'}} />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
          <AboutStarryNightPage></AboutStarryNightPage>
      </BrowserRouter>
    </RecoilRoot>,
  document.getElementById('root')
);


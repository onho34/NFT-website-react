import { Route, Routes, Navigate } from 'react-router-dom'
import {NotificationContainer} from 'react-notifications';
import Home from './pages/Home';
import Map from './pages/Map';
import { useRef } from 'react';
import NFTs from './pages/NFTs';

function App() {
  const ref = useRef() as any

  return (
    <div className="App" ref={ref}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
      <NotificationContainer/>
    </div>
  );
}

export default App;

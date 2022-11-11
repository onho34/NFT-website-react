import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Map from './pages/Map';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

export default App;

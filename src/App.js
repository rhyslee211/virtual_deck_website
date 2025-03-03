import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Downloads from './components/Download.jsx'
import Contact from './components/Contact.jsx'
import Guide from './components/Guide.jsx'
import { React, useState } from 'react';
import { Routes, Route , useNavigate } from 'react-router-dom';

function App() {

  const [downloadType, setDownloadType] = useState("windowsLatest");

  const navigate = useNavigate();

  const GoToWindowsDownload = () => {
    setDownloadType("windowsLatest");
    navigate("/downloads");
  };

  return (
    <div className="h-screen w-full bg-gray-700 flex flex-col text-white">
      <Navbar />
      <div className="overflow-y-auto flex-grow scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-700">
        <Routes>
          <Route path="/" element={<Home GoToWindowsDownload={GoToWindowsDownload} />} />
          <Route path="/about" element={<About GoToWindowsDownload={GoToWindowsDownload} GoToContact={()=>{navigate("/contact")}} />} />
          <Route path="/downloads" element={<Downloads downloadType={downloadType} />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

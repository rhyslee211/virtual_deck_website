import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Downloads from './components/Download.jsx'
import Contact from './components/Contact.jsx'
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
    <div className="h-full w-full bg-gray-700 flex flex-col text-white">
      <Navbar />
      <div className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home GoToWindowsDownload={GoToWindowsDownload} />} />
          <Route path="/about" element={<About />} />
          <Route path="/downloads" element={<Downloads downloadType={downloadType} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

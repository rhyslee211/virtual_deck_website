import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Download from './components/Download.jsx'
import Contact from './components/Contact.jsx'
import { React, useState } from 'react';

function App() {

  const [section, setSection] = useState("home");
  const [downloadType, setDownloadType] = useState("windowsLatest");

  const GoToWindowsDownload = () => {
    setSection("download");
    setDownloadType("windowsLatest");
  };

  return (
    <div className="h-full w-full bg-gray-700 flex flex-col text-white">
      <Navbar section={section} setSection={setSection} />
      {section === "home" && <Home GoToWindowsDownload={GoToWindowsDownload} />}
      {section === "about" && <About />}
      {section === "download" && <Download downloadType={downloadType} />}
      {section === "contact" && <Contact />}
    </div>
  );
}

export default App;

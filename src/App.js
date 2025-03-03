import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Downloads from './components/Download.jsx'
import Contact from './components/Contact.jsx'
import Guide from './components/Guide.jsx'
import { React, useState } from 'react';
import { Routes, Route , useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function App() {

  const [downloadType, setDownloadType] = useState("windowsLatest");

  const navigate = useNavigate();

  const GoToWindowsDownload = () => {
    setDownloadType("windowsLatest");
    navigate("/downloads");
  };

  return (
    <div className="h-screen w-full bg-gray-700 flex flex-col text-white">
      <Helmet>
        <title>Virtual Deck - A Virtual Macro Deck for Streamers</title>
        <meta name="description" content="Download Virtual Deck, the free macro deck for streamers. Simplify your streaming setup with customizable macros. Enhance your streams today!"></meta>
        <meta name="keywords" content="stream deck, macros, streaming, customizable macros, virtual deck for streamers, enhance streams, streaming tools, twitch, youtube, obs, macro, stream deck, free, free stream deck" />
        <meta property="og:title" content="Virtual Deck - A Virtual Macro Deck for Streamers" />
        <meta property="og:description" content="Download Virtual Deck, the free macro deck for streamers. Simplify your streaming setup with customizable macros. Enhance your streams today!" />
        <meta property="og:image" content="/assets/virtualDeckLogo.png" />
        <meta property="og:url" content="https://www.thevirtualdeck.com" />
        <meta property="og:type" content="website" />
      </Helmet>
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

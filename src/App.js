import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Download from './components/Download.jsx'
import Contact from './components/Contact.jsx'
import { React, useState } from 'react';

function App() {

  const [section, setSection] = useState("home");

  return (
    <div className="h-screen w-screen bg-gray-700 flex flex-col">
      <Navbar section={section} setSection={setSection} />
      {section === "home" && <Home />}
      {section === "about" && <About />}
      {section === "download" && <Download />}
      {section === "contact" && <Contact />}
    </div>
  );
}

export default App;

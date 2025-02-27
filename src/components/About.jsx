import React from "react";

const About = ({GoToWindowsDownload , GoToContact}) => {

    const companyNameStyle = {
        fontFamily: "'Russo One', sans-serif",
        fontSize: "24px",
      };

    return (
    <div className="flex flex-col items-center justify-start h-full w-full text-white p-4">
        <h1 style={companyNameStyle} className="flex flex-row my-4"><div className="text-cyan-300 text-4xl">Virtual</div>&nbsp;<div className="text-red-600 text-4xl">Deck</div></h1>
        <div className="flex flex-col items-center justify-center w-1/3 mb-4">
            <h2 className="text-2xl font-bold underline">What is Virtual Deck?</h2>
            <p className="text-center mt-2">Virtual Deck is a powerful, intuitive, and cost-effective virtual macro deck software designed with streamers in mind. Whether you're managing your OBS scenes, controlling Twitch commands, or executing complex programs with a single tap, Virtual Deck provides a seamless way to streamline your setup.</p>
            <p className="text-center mt-2">With a customizable interface, responsive controls, OBS and Twitch integration, Virtual Deck gives you the freedom to create the perfect setup tailored to your streaming needs.</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/3 mb-4">
            <h2 className="text-2xl font-bold underline">Features</h2>
            <ul className="list-disc list-outside text-white mt-2">
                <li>OBS Commands for starting, and stopping streams/recordings; Switching scenes; Disabling audio or video inputs</li>
                <li>Twitch commands for placing markers; Creating clips; Running ads</li>
            </ul>
        </div>

        <div className="flex flex-col items-center justify-center w-1/3 mb-4">
            <h2 className="text-2xl font-bold underline">Setup Guide</h2>
            
        </div>

        <div className="flex flex-col items-center justify-center w-1/3 mb-4">
            <h2 className="text-2xl font-bold underline">About the Developer</h2>
            <p className="text-center mt-2">Virtual Deck is developed by me, Rhys Lee, a passionate software developer and Twitch viewer/ocassional streamer(ocassionally being once a year maybe). I created Virtual Deck to create a cost-effective alternative to physical macro decks and improve the streaming experience for content creators worldwide.</p>
        </div>
        
        <button className="text-white text-md font-bold mt-4 bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2 w-32" onClick={GoToWindowsDownload}>Download</button>
        <button className="text-white text-md font-bold mt-4 bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2 w-32" onClick={GoToContact}>Contact</button>
    </div>
);
};

export default About;
import React from "react";
import profileImage from "../assets/rhys-profile.jpg";

const About = ({GoToWindowsDownload , GoToContact}) => {

    const companyNameStyle = {
        fontFamily: "'Russo One', sans-serif",
        fontSize: "24px",
      };

    return (
    <div className="flex flex-col items-center justify-start h-fit w-full text-white p-4">
        <h1 style={companyNameStyle} className="flex flex-row my-4"><div className="text-cyan-300 text-4xl">Virtual</div>&nbsp;<div className="text-red-600 text-4xl">Deck</div></h1>
        <div className="flex flex-col items-center justify-center w-1/3 mb-4">
            <h2 className="text-2xl font-bold underline">What is Virtual Deck?</h2>
            <p className="text-center mt-2">Virtual Deck is a powerful, intuitive, and cost-effective virtual macro deck software designed with streamers in mind. Whether you're managing your OBS scenes, controlling Twitch commands, or executing complex programs with a single tap, Virtual Deck provides a seamless way to streamline your setup.</p>
            <p className="text-center mt-2">With a customizable interface, responsive controls, OBS and Twitch integration, Virtual Deck gives you the freedom to create the perfect setup tailored to your streaming needs.</p>
        </div>

        <div className="flex flex-col items-center justify-center w-1/3 mb-4">
            <h2 className="text-2xl font-bold underline">Features</h2>
            <ul className="list-disc list-outside text-white mt-2">
                <li>OBS Commands:
                    <ul className="list-inside list-disc">
                        <li>Start and stop streams/recordings</li>
                        <li>Switch scenes</li>
                        <li>Disable audio or video inputs</li>
                    </ul>
                </li>
                <li>Twitch Commands:
                    <ul className="list-inside list-disc">
                        <li>Place markers</li>
                        <li>Create clips</li>
                        <li>Run ads</li>
                    </ul>
                </li>
                <li>General Commands:
                    <ul className="list-inside list-disc">
                        <li>Open websites</li>
                        <li>Run applications</li>
                        <li>Run scripts</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className="flex flex-col items-center justify-center w-1/3 mb-4">
            <h2 className="text-2xl font-bold underline">About the Developer</h2>
            <img src={profileImage} alt="Rhys Lee" className="mt-2 mb-4 rounded-full h-48 w-48" />
            <p className="text-center mt-2">Virtual Deck is developed by me, <a className="underline text-blue-400 hover:text-white" href="https://www.rhyslee.dev/" target="_blank">Rhys Lee</a>, a passionate software developer and Twitch viewer/ocassional streamer (ocassionally being maybe once a year). I created Virtual Deck to create a cost-effective alternative to physical macro decks and improve the streaming experience for content creators. Click below to download Virtual Deck or contact me about issues with the tool or features you would like to request.</p>
        </div>
        
        <button className="text-white text-md font-bold mt-4 bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2 w-32" onClick={GoToWindowsDownload}>Download</button>
        <button className="text-white text-md font-bold mt-4 bg-red-600 hover:bg-red-700 rounded-lg px-4 py-2 w-32" onClick={GoToContact}>Contact</button>
    </div>
);
};

export default About;
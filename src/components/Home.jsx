import React from "react";
import VirtualDeckLogo from "../assets/virtualDeckLogo.png";
import VirtualDeckDemoVideo from "../assets/VirtualDeckButtonCreationGifLike.mp4";
import { IoLogoWindows } from "react-icons/io";

const Home = ({GoToWindowsDownload}) => {
    return (
    <div className="bg-gray-700 h-fit flex-grow flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
            <div className="flex flex-row items-center justify-center w-full">
                <img src={VirtualDeckLogo} className="h-40 w-40 lg:h-60 lg:w-60" alt="Homepage Logo" />
                <div className="font-bold text-xl lg:text-3xl bg-gradient-to-r from-white to-gray-300 leading-tight text-transparent bg-clip-text">Your customizable <br /> streaming solution.</div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center">
                    <IoLogoWindows size={100} />
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 h-fit" onClick={GoToWindowsDownload}>
                        <div className="flex flex-row items-center">
                            Windows Download
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <div className="flex flex-row items-center py-16 px-4">
            <video autoPlay loop muted className="rounded-lg border-2 border-black" height={800} width={800}>
                <source src={VirtualDeckDemoVideo} type="video/mp4" />
            </video>
        </div>
        <div>

        </div>
    </div>
    );
};

export default Home;
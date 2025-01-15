import React from "react";
import VirtualDeckLogo from "../assets/virtualDeckLogo.png";
import VirtualDeckDemoImage from "../assets/VirtualDeckDemoImage.png";
import { IoLogoWindows } from "react-icons/io";

const Home = ({GoToWindowsDownload}) => {
    return (
    <div className="bg-gray-700 h-full flex-grow flex flex-col items-center justify-between">
        <div className="flex flex-col items-center">
            <img src={VirtualDeckLogo} height={240} width={240} alt="Homepage Logo" />
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
            <img src={VirtualDeckDemoImage} height={960} width={960} alt="Virtual Deck Demo Image" className="border border-4 border-black" />
        </div>
        <div>

        </div>
    </div>
    );
};

export default Home;
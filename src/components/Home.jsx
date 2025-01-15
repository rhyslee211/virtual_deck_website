import React from "react";
import VirtualDeckLogo from "../virtualDeckLogo.png";

const Home = ({GoToWindowsDownload}) => {
    return (
    <div className="bg-gray-700 h-full flex-grow flex flex-col items-center">
        <img src={VirtualDeckLogo} height={240} width={240} alt="Homepage Logo" />
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 h-fit" onClick={GoToWindowsDownload}>
            <div className="flex flex-row items-center">
                Windows Download
            </div>
        </button>
        <div>

        </div>
    </div>);
};

export default Home;
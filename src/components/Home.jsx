import React from "react";
import VirtualDeckLogo from "../virtualDeckLogo.png";

const Home = () => {
    return (
    <div className="bg-gray-700 h-full flex-grow flex flex-col items-center justify-center">
        <img src={VirtualDeckLogo} height={240} width={240} />
    </div>);
};

export default Home;
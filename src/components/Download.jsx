import { React , useState , useEffect } from "react";
import DownloadCard from "./DownloadCard";
import { IoLogoWindows , IoLogoApple } from "react-icons/io";
import { FaLinux } from "react-icons/fa";

const Download = ({downloadType}) => {

    const [windowsDownloadDictionary] = useState({
        "windowsLatest": {
            name: "Windows Latest",
            os: "Windows",
            version: "0.1.0", 
            url: "https://github.com/rhyslee211/virtual-deck/releases/download/v0.1.0_Windows/Virtual.Deck.exe"
        }
    });

    const [selectedPlatform, setSelectedPlatform] = useState("Windows");

    const [downloadInfo, setDownloadInfo] = useState(null);

    useEffect(() => {
        console.log(downloadType);
        setDownloadInfo(windowsDownloadDictionary[downloadType] || null);
        console.log(downloadInfo);
    }, [downloadType, windowsDownloadDictionary, downloadInfo]);

    return (
    <div className="flex flex-col items-center">
        <div className="text-white text-2xl font-bold mt-4">Downloads</div>
        <div className="text-white text-lg font-bold mt-4 underline">Platforms</div>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-4">
            <button className={`flex flex-col items-center justify-center rounded-lg w-32 h-32 ${selectedPlatform === "Windows" ? "bg-slate-800" : ""}`} onClick={() => setSelectedPlatform("Windows")}>
                <IoLogoWindows size={100} />
                <div className="text-white">Windows</div>
            </button>
            <button className={`flex flex-col items-center justify-center rounded-lg w-32 h-32 ${selectedPlatform === "Mac" ? "bg-slate-800" : ""}`} onClick={() => setSelectedPlatform("Mac")}>
                <IoLogoApple size={100} />
                <div className="text-white">Mac</div>
            </button>
            <button className={`flex flex-col items-center justify-center rounded-lg w-32 h-32 ${selectedPlatform === "Linux" ? "bg-slate-800" : ""}`} onClick={() => setSelectedPlatform("Linux")}>
                <FaLinux size={100} />
                <div className="text-white">Linux</div>
            </button>
        </div>
        <div className="bg-gray-700 h-full flex-grow flex flex-col items-center justify-center mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {selectedPlatform === "Windows" && Object.entries(windowsDownloadDictionary).map(([key, value],index,array) => (
                    <div key={key} className={index === array.length - 1 && array.length % 2 !== 0 ? "lg:col-span-2 flex justify-center" : ""}>
                        <DownloadCard downloadInfo={value} />
                    </div>
                ))}
                {selectedPlatform === "Mac" && <div className="flex text-center">Mac versions available soon!</div>}
                {selectedPlatform === "Linux" && <div className="flex text-center">Linux versions available soon!</div>}
            </div>
        </div>
    </div>
    );
};

export default Download;
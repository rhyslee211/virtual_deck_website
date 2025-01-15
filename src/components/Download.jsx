import { React , useState , useEffect } from "react";
import DownloadCard from "./DownloadCard";

const Download = ({downloadType}) => {

    const [downloadDictionary] = useState({
        "windowsLatest": {
            name: "Windows Latest",
            os: "Windows",
            version: "0.9.0", 
            url: "https://github.com/rhyslee211/virtual-deck/releases/download/V0.1-windows-beta/Virtual_Deck.exe"
        }
    });

    const [downloadInfo, setDownloadInfo] = useState(null);

    useEffect(() => {
        console.log(downloadType);
        setDownloadInfo(downloadDictionary[downloadType] || null);
        console.log(downloadInfo);
    }, [downloadType, downloadDictionary, downloadInfo]);

    return (
    <div>
        <div className="bg-gray-700 h-full flex-grow flex flex-col items-center justify-center">
            {downloadInfo !== null && <DownloadCard downloadInfo={downloadInfo} />}
        </div>
    </div>
    );
};

export default Download;
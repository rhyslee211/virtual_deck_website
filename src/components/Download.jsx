import { React , useState , useEffect } from "react";

const Download = ({downloadType}) => {

    const [downloadDictionary, setDownloadDictionary] = useState({
        "windowsLatest": {
            name: "Windows Latest",
            version: "1.0.0", 
            url: "https://github.com/rhyslee211/virtual-deck/releases/download/V0.1-windows-beta/Virtual_Deck.exe"
        }
    });

    const [downloadInfo, setDownloadInfo] = useState(null);

    useEffect(() => {
        setDownloadInfo(downloadDictionary[downloadType] || null);
        console.log(downloadInfo);
    }, [downloadType, downloadDictionary]);

    return (
    <div>
        <div className="bg-gray-700 h-full flex-grow flex flex-col items-center">
            {downloadInfo !== null &&
            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 h-fit">
                <button onClick={() => window.open(downloadInfo.url)}>
                    <div className="flex flex-row items-center">
                        {downloadInfo.name} {downloadInfo.version}
                    </div>
                </button>
            </div>}
        </div>
    </div>
    );
};

export default Download;
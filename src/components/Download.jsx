import React from "react";

const Download = ({downloadType}) => {

    const [downloadDictionary, setDownloadDictionary] = useState({
        "windowsLatest": "Windows Latest",
        "windowsOld": "Windows Old",
        "macLatest": "Mac Latest",
        "macOld": "Mac Old",
        "linuxLatest": "Linux Latest",
        "linuxOld": "Linux Old",
    });

    return (
    <div>
        <div className="bg-gray-700 h-full flex-grow flex flex-col items-center">
            <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 h-fit">
                <div className="flex flex-row items-center">
                    {downloadType}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Download;
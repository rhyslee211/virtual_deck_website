import { React } from 'react';
import { IoLogoWindows } from "react-icons/io";

/*

downloadInfo is a dictionary with the following keys
- name: the name of the download
- os: the operating system of the download
- version: the version of the download
- url: the url of the download

*/

const DownloadCard = ({downloadInfo}) => {
    return(
    <div className="flex flex-col items-center border border-gray-500 rounded p-4 bg-gray-800 m-2">
    {downloadInfo !== null && downloadInfo.os === "Windows" && <IoLogoWindows size={100} />}
    {downloadInfo !== null &&
        <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 h-fit w-48">
            <button onClick={() => window.open(downloadInfo.url)}>
                <div className="flex flex-row items-center text-center">
                    {downloadInfo.name || downloadInfo.os} {downloadInfo.version}
                </div>
            </button>
        </div>}
    </div>
    );
}

export default DownloadCard;
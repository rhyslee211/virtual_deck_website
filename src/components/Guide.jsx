import React from "react";

const Guide = () => {
    
    
    return (
    <div>
        <div className="flex flex-col items-center justify-center h-full w-full text-white p-4">
            <div className="flex flex-col items-center justify-center w-1/3 mb-4">
                <h1 className="text-4xl text-white font-bold text-center underline my-4">Setup Guide</h1>
                <p className="text-white text-center mt-2">This guide will walk you through the process of setting up Virtual Deck on your computer and configuring it to work with OBS and Twitch. If you have any questions or issues during the setup process, please don't hesitate to <a className="underline text-blue-400 hover:text-white" href="/contact" target="">contact me</a> for assistance.</p>
                <div className="flex flex-col items-center justify-center w-full mb-4">
                    <h2 className="text-2xl font-bold underline mt-4">Step 1: Download and Install Virtual Deck</h2>
                    <p className="text-center mt-2">To begin, <a className="text-blue-400 hover:text-white underline" href="/downloads" target="_blank">download</a> the latest version of Virtual Deck for your operating system. Once the download is complete, run the installer and follow the on-screen instructions to install the software on your computer.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full mb-4">
                    <h2 className="text-2xl font-bold underline mt-4">Step 2: Connecting Twitch and OBS</h2>
                    <p className="text-center mt-2">After installing Virtual Deck, launch the application and configure your settings by clicking the Settings icon. Log in to Twitch by clicking the Connect to Twitch button. To connect to OBS, open OBS on your computer and go to Tools->Websocket Server Settings. Check the Enable Websocket Server button and check the Enable Authentication button in the Server Settings. Once done, add the Server Port and Server Password in OBS in your settings in Virtual Deck.</p>
                </div>
                <div className="flex flex-col items-center justify-center w-full mb-4">
                    <h2 className="text-2xl font-bold underline mt-4">Step 3: Creating Commands</h2>
                    <p className="text-center mt-2">To create a new command, click the + icon in the Virtual Deck interface. Select the type of command you want to create and configure the settings for the command. You can customize the name, icon, color, keybinds, and action for each command to suit your needs.</p>
                </div>
            </div>
        </div>
    </div>)
};

export default Guide;

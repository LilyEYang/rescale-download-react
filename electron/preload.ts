const {contextBridge, ipcRenderer} = require("electron");

// Expose protected methods that allow rended process to use
// the ipcRenderer without exposing the entire project.
contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            //whitelist channels
            let validChannels = ["toMain", "upload", "download"];

            //Send an event from the Renderer process to the main process
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        }
    }
);
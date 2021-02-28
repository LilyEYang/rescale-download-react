import { app, BrowserWindow, ipcMain, dialog, Notification } from 'electron'
import * as path from 'path'
import * as url from 'url'
//import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

const isDev = require("electron-is-dev");
const globalAny: any = global;
const files = {};
const request = require("request");
const fs = require("fs");

let mainWindow;

async function createWindow() {
    if (isDev) {
        try {
            const {
                default: installExtension,
                REACT_DEVELOPER_TOOLS,
            } = require("electron-devtools-installer");
            const name = await installExtension(REACT_DEVELOPER_TOOLS, true);
            console.log(name, "was installed");
        } catch (error) {}
    }
    mainWindow = new BrowserWindow({
        width: 1050,
        height: 625,
        show: false,
        webPreferences: {
            nodeIntegration: true, // is default value after Electron v5
            contextIsolation: true, // protect against prototype pollution
            enableRemoteModule: true, // turn off remote
            preload: path.join(__dirname, "preload.js") // use a preload script
          },      
        icon: path.join(
            isDev ? process.cwd() + "/resources" : process.resourcesPath,
            "media",
            "icon.ico"
        ),
    }); 
    mainWindow.on("ready-to-show", async () => {
        mainWindow.show();
        // if (isDev) mainWindow.webContents.openDevTools({ mode: "undocked" });
    });
    mainWindow.on("closed", () => (mainWindow = null));
    mainWindow.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
}

//Callback for uploading files
ipcMain.on("upload", async (event, data) => {
  console.log("[Backend] Uploading file");

  const Axios = require('axios');
  const FormData = require('form-data');
  const Fs = require('fs');

  // Show the file upload dialog

  // Send a HTTP POST request to /upload with the file as multipart/form-data
  dialog.showOpenDialog( mainWindow, {
      properties: ['openFile'],
      filters: [ 
          { 
              name: 'Text Files', 
              extensions: ['txt', 'docx', 'json'] 
          }, ],
  }).then(file => {
      if (!file.canceled) {
          var filepath = file.filePaths[0].toString();
          var formData = new FormData();

          formData.append('uploadFile', Fs.createReadStream(filepath));
          const uploadResponse = async () => {
              try {
                  const res = await Axios.post('http://localhost:8080/upload', formData,
                  {
                      headers:formData.getHeaders()
                  })
              } catch (err) {
                  console.error(err);
              }
          }
          uploadResponse();
          new Notification( { title: 'Codebase Transfer Manager', body: "File Was Uploaded Successfully" } ).show();
      }
  }).catch(err => {
      console.log(err);
  })
});


/* 
Add any more callbacks as you see fit
*/

app.on("ready", createWindow);

app.on("activate", () => {
    if (mainWindow === null) createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.allowRendererProcessReuse = true

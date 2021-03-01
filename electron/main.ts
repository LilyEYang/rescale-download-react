import { app, BrowserWindow, ipcMain, dialog, Notification } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'


//const globalAny: any = global;
let mainWindow: Electron.BrowserWindow;

const isDev = require("electron-is-dev");

async function createWindow () {
  //creates a browser window - gives access to the encapsulating window
  mainWindow = new BrowserWindow({   
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "../electron/preload,js")
    }
  })
  console.log("Micah is here")
  console.log(__dirname);
  console.log(__filename);

  // if (process.env.NODE_ENV === 'development') {
  //   //grabs the react app and display here
  //   mainWindow.loadURL('http://localhost:4000') 
  // } else {
  //   //updating the location where we plan on loading react in distribution
  //   mainWindow.loadURL(
  //     url.format({
  //       pathname: path.resolve(__dirname, '..', 'index.html'),
  //       protocol: 'file:',
  //       slashes: true
  //     })
  //   )
  // }

  //Emitted when the window is closed.
  mainWindow.on('closed', () => {
    //Dereference the window objest, usually you would store windows.
    //in an array if your app supports multi window. This is the time
    //When you should delete the corresponding element
    mainWindow.destroy();
  });

  mainWindow.loadURL(
    isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../index.html")}`
);
}

// Just for testing
ipcMain.on('toMain', (event, data) => {
  console.log('Hello there');
});

//Callback for uploading files
ipcMain.on('upload', async (event, data) => {
  console.log('[Backend] Uploading file');

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
})


//This method will be called when electron has finished 
//Initialization and is ready to create browser windows
//Some APIs can only be used after this event occurs
app.on('ready', createWindow)
  // creates a window when the app is ready
  .whenReady()
  .then(() => {
    // install react extensions if the app is run in dev mode
    if (process.env.NODE_ENV === 'development') {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
      installExtension(REDUX_DEVTOOLS)
        .then((name) => console.log(`Added Extension:  ${name}`))
        .catch((err) => console.log('An error occurred: ', err))
    }
  })

  app.on("activate", () => {
    if (mainWindow === null) createWindow();
});

// ensure renderer processes are restarted on each navigation
app.allowRendererProcessReuse = true 

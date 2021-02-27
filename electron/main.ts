import { app, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import * as url from 'url'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'

let mainWindow: Electron.BrowserWindow | null

function createWindow () {
  //creates a browser window - gives access to the encapsulating window
  mainWindow = new BrowserWindow({   
    width: 1100,
    height: 700,
    backgroundColor: '#191622',
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV === 'development') {
    //grabs the react app and display here
    mainWindow.loadURL('http://localhost:4000') 
  } else {
    //updating the location where we plan on loading react in distribution
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  //Emitted when the window is closed.
  mainWindow.on('closed', () => {
    //Dereference the window objest, usually you would store windows.
    //in an array if your app supports multi window. This is the time
    //When you should delete the corresponding element
    mainWindow = null
  })
}


// //Callback for uploading files
// ipcMain.on('upload', async (event, data) => {
//   console.log("[Backend] Uploading a File");

// })


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
// ensure renderer processes are restarted on each navigation
app.allowRendererProcessReuse = true 

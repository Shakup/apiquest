'use strict'

const
	electron      = require('electron'),
	app           = electron.app,
	BrowserWindow = electron.BrowserWindow

let 
	mainWindow


app.on('window-all-closed', function () {

	if (process.platform != 'darwin') {
		app.quit()
	}

});

app.on('ready', function () {

	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		minWidth: 640,
		minHeight: 480
	})

	mainWindow.loadURL(`file://${__dirname}/html/index.html`)

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', function () {
		mainWindow = null
	})

})
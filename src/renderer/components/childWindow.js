const { app, BrowserWindow } = require('electron')

secondaryWindow = new BrowserWindow({
  width: 600,
  height: 300,
  webPreferences: { nodeIntegration: true },
  parent: mainWindow, // *1 부모 윈도우 설정
  modal: true, // *2 모달설정
  show: false,
})

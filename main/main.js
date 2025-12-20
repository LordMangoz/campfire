const { app, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

const dataPath = path.join(app.getPath("userData"), "widgets.json");

ipcMain.handle("save-widgets", (_, widgets) => {
  fs.writeFileSync(dataPath, JSON.stringify(widgets, null, 2));
  console.log("UserData:", app.getPath("userData"));
});

ipcMain.handle("load-widgets", () => {
  if (!fs.existsSync(dataPath)) return [];
  console.log("UserData:", app.getPath("userData"));
  return JSON.parse(fs.readFileSync(dataPath, "utf8"));
  
});
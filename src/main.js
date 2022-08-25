const { app, BrowserWindow, ipcMain, dialog, Menu } = require("electron");
const fs = require("fs");
const path = require("path");
const modalPath = path.join(__dirname, "../renderer/xlsx/模板.xlsx");
const {
  spawnResultTableFromDataObj,
  parseTableToDataObj,
} = require("./tools/tools");

if (require("electron-squirrel-startup")) {
  app.quit();
}

function createWindow() {
  const settingPage = new BrowserWindow({
    show: false,
    webPreferences: {
      preload: SETTING_PRELOAD_WEBPACK_ENTRY,
    },
  });
  settingPage.setMenuBarVisibility(false);
  settingPage.on("close", (e) => {
    e.preventDefault();
    settingPage.hide();
  });
  settingPage.loadURL(SETTING_WEBPACK_ENTRY);

  const win = new BrowserWindow({
    width: 1024,
    height: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  const menu = Menu.buildFromTemplate([
    {
      label: "文件",
      submenu: [
        {
          label: "打开",
          click: async () => {
            const stateObj = await dialog.showOpenDialog({
              title: "打开综测表单，格式仅支持xlsx",
              filters: [{ name: "综测文件", extensions: ["xlsx", "xls"] }],
              properties: ["openFile"],
              defaultPath: path.join(__dirname, "../../"),
            });
            const { canceled, filePaths } = stateObj;
            if (canceled) {
              return;
            }
            if (filePaths[0].endsWith(".xlsx")) {
              const parseRet = await parseTableToDataObj(filePaths[0]);
              if (!parseRet) {
                await dialog.showMessageBox({
                  title: "解析失败",
                  type: "error",
                  message: "表单格式与综测表单不符",
                });
                return;
              }
              win.webContents.send("import-xlsx", parseRet);
            } else {
              await dialog.showMessageBox({
                title: "格式错误",
                type: "error",
                message: "解析表单仅支持xlsx格式，请将表单转换为xlsx格式",
              });
            }
          },
        },
        {
          label: "导出为",
          click: () => win.webContents.send("send-export-xlsx"),
        },
      ],
    },
    {
      label: "设置",
      submenu: [
        {
          label: "设置分数占比",
          click: () => win.webContents.send("open-setting"),
        },
      ],
    },
  ]);

  win.setMenu(menu);

  win.webContents.openDevTools();

  win.on("resize", () => {
    win.webContents.send("window-resize");
  });

  win.on("maximize", () => {
    win.webContents.send("window-resize");
  });
  win.on("unmaximize", () => {
    win.webContents.send("window-resize");
  });

  win.on("closed", () => {
    settingPage.destroy();
  });

  ipcMain.handle("export-xlsx", async (e, ...args) => {
    const dataObj = args[0];
    const stateObj = await dialog.showSaveDialog({
      title: "导出综测文件",
      filters: [{ name: "综测文件", extensions: ["xlsx"] }],
      defaultPath: path.join(__dirname, "../../我的综测文件.xlsx"),
    });
    if (stateObj.canceled) {
      return;
    }
    await spawnResultTableFromDataObj(dataObj, stateObj.filePath, modalPath);
  });

  ipcMain.handle("send-setting-object", async (e, ...args) => {
    const settingObj = args[0];
    settingPage.webContents.send("get-setting", settingObj);
    settingPage.show();
  });

  ipcMain.handle("new-setting-object", async (e, ...args) => {
    const settingObj = args[0];
    win.webContents.send("apply-setting", settingObj);
  });
}

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

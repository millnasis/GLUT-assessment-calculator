const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("ExportFile", {
  spawnXLSX: (data) => ipcRenderer.invoke("export-xlsx", data),
  onSpawnXLSX: (cb) => ipcRenderer.on("send-export-xlsx", cb),
});

contextBridge.exposeInMainWorld("ImportFile", {
  onImportDataObj: (cb) => ipcRenderer.on("import-xlsx", cb),
});

contextBridge.exposeInMainWorld("Setting", {
  onOpenSetting: (cb) => ipcRenderer.on("open-setting", cb),
  onGetSetting: (cb) => ipcRenderer.on("get-setting", cb),
  onApplySetting: (cb) => ipcRenderer.on("apply-setting", cb),
  openSetting: (setting) => ipcRenderer.invoke("send-setting-object", setting),
  newSetting: (setting) => ipcRenderer.invoke("new-setting-object", setting),
});

contextBridge.exposeInMainWorld("Global", {
  onResizeWindow: (cb) => ipcRenderer.on("window-resize", cb),
});

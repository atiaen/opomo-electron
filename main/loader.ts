import { contextBridge } from "electron";
import { Runners } from "./backend_runners/runner";

contextBridge.exposeInMainWorld('versions', {
    // node: () => process.versions.node,
    // chrome: () => process.versions.chrome,
    // electron: () => process.versions.electron
    getAllProjects: () => Runners.getAllProjects()
    // we can also expose variables, not just functions
  })
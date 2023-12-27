import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import { Database } from 'sqlite3';

export class Background {
  public isProd: boolean = process.env.NODE_ENV === 'production';
  public dev_mode = process.argv[3].split(" ")
  static db:Database;

  public main(){
    if (this.dev_mode[0] === "false") {
      serve({ directory: 'app' });
      Background.db = new Database('opomo.db');
    } else {
      app.setPath('userData', `${app.getPath('userData')} (development)`);
      Background.db = new Database(`${app.getPath('userData')}/opomo.db`);
    }
    
    (async () => {
      await app.whenReady();
    
      const mainWindow = createWindow('main', {
        width: 1000,
        height: 600,
      });
    
      if (this.isProd) {
        await mainWindow.setMenuBarVisibility(false);
        await mainWindow.loadURL('app://./home.html');
      } else {
        const port = process.argv[2];
        await mainWindow.setMenuBarVisibility(false);
        await mainWindow.loadURL(`http://localhost:${port}/home`);
        mainWindow.webContents.openDevTools();
      }
    })();
    
    app.on('window-all-closed', () => {
      Background.db.close()
      app.quit();
    });
    
  }
}


let back = new Background();
back.main();

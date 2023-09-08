import { app } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import { Database } from 'sqlite3';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
  const db = new Database('opomo.db');
  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS Users (name, lastName)");
    db.run("INSERT INTO Users VALUES (?, ?)", ['foo', 'bar']);
  });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
  console.log(app.getPath('userData'));
  const db = new Database(`${app.getPath('userData')}/opomo.db`);

  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS Users (name, lastName)");
    db.run("INSERT INTO Users VALUES (?, ?)", ['foo', 'bar']);
  });
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
  });

  if (isProd) {
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
  app.quit();
});

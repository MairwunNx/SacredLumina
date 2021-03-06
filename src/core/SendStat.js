const net = require('http')
const Store = require('electron-store')
const store = new Store()
const os = require('os')

export function sendStat () {
  createSettings()
  sendLaunch()
  sendIntall()
}

function createSettings () {
  if (store.get('downloaded', 'undefined')) {
    store.set('downloaded', false)
  }

  if (store.get('allowTelemetry', 'undefined')) {
    store.set('allowTelemetry', true)
  }
}

function sendIntall () {
  if (store.get('allowTelemetry', true)) {
    if (!store.get('downloaded', false)) {
      let time = (new Date()).toJSON().slice(0, 19).replace(/[-T]/g, ':')
      let data = `DATA: [${time}] | OS: [${os.release} \\ ${os.userInfo().username}] | VER: [1.0.1.310119.R2.B78 \\ undefined] | TYPE: [Release]`
      let dataEncoded = Buffer.from(data).toString('base64')

      let opt = net.request({
        method: 'post',
        host: 'mnxtelemetry.zzz.com.ua',
        path: `/send.php?type=sl&data=${dataEncoded}`
      })

      net.get(`http://mnxtelemetry.zzz.com.ua/send.php?type=sl&data=${dataEncoded}`, opt, null)

      store.set('downloaded', true)
    }
  }
}

function sendLaunch () {
  if (store.get('allowTelemetry', true)) {
    if (os.userInfo().username !== 'Nynxx') {
      let opt = net.request({
        method: 'post',
        host: 'mnxtelemetry.zzz.com.ua',
        path: '/send.php?type=sl&lnch=true'
      })

      net.get('http://mnxtelemetry.zzz.com.ua/send.php?type=sl&lnch=true', opt, null)
    }
  }
}

export function sendUseStat (stat) {
  if (store.get('allowTelemetry', true)) {
    if (os.userInfo().username !== 'Nynxx') {
      let opt = net.request({
        method: 'post',
        host: 'mnxtelemetry.zzz.com.ua',
        path: `/send.php?type=sl&spec=true&stat=${stat}`
      })

      net.get(`http://mnxtelemetry.zzz.com.ua/send.php?type=sl&spec=true&stat=${stat}`, opt, null)
    }
  }
}

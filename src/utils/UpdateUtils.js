const electron = require('electron')
const XMLHttpRequest = require('xhr2')

/**
 * Get latest version, if new version exists then add bottom notify.
 */
export function getLatest () {
  const current = 'v1.0.0.270119.R1'
  const requestURL = 'https://api.github.com/repos/MairwunNx/SacredLumina/releases/latest'

  let request = new XMLHttpRequest()
  request.open('GET', requestURL)
  request.responseType = 'json'
  request.send()

  request.onload = function () {
    let response = request.response
    let data = getLatestData(response, current)

    if (data) {
      addBottomNotify(data)
    }
  }
}

/**
 * Add bottom notify "new version available bla bla bla".
 *
 * @param  {string} data - json response from github api.
 */
function addBottomNotify (data) {
  let base = document.createElement('div')
  base.style.cssText = 'position:fixed;width:100%;height:30px;opacity:1.0;z-index:100;background:#212121;bottom:0;'

  let text = document.createElement('span')
  text.style.cssText = 'margin: auto; float: left; padding-left: 15px; padding-top: 6px; font-family: Roboto Mono, monospace; user-select: none;'
  text.innerText = 'New version ' + data[0] + ' available!'

  let link = document.createElement('a')
  link.style.cssText = 'margin: auto; float: right; padding-right: 15px; padding-top: 6px; cursor: pointer; font-family: Roboto Mono, monospace; user-select: none;'
  link.innerText = 'Download'
  link.onclick = function () {
    electron.shell.openExternal(data[1])
  }

  base.appendChild(text)
  base.appendChild(link)
  document.body.appendChild(base)
}

/**
 * Return false if current version is latest version, if not latest version - return last version tag and download URL.
 *
 * @param  {object} object - json response from github api.
 * @param  {string} current - current app version.
 * @returns {(array|boolean)} result of data.
 */
function getLatestData (object, current) {
  let lastVerstionTag = object['tag_name']

  let assets = object['assets']

  let downloadUrlWin = assets[0]['browser_download_url']
  //let downloadUrlMac = assets[1]['browser_download_url']

  if (lastVerstionTag !== current) {
    if (process.platform === 'win32') {
      return [lastVerstionTag, downloadUrlWin]
    //} else {
      //return [lastVerstionTag, downloadUrlMac]
    }
  } else {
    return false
  }
}

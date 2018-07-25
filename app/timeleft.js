const {ipcRenderer, remote} = require('electron')
let timeLeftParagraph = document.getElementById('timeleft-paragraph')

document.addEventListener('DOMContentLoaded', event => {
  ipcRenderer.send('refresh-time')
  setInterval(function() {
  	//timeLeftString = Utils.formatTillBreak(breakPlanner.scheduler.timeLeft)
  	//timeLeftString = i18next.t('main.timeToNext', {'timeLeft': Utils.formatTillBreak(breakPlanner.scheduler.timeLeft + notificationTime), 'breakType': i18next.t(`main.${breakType}`)})
  	ipcRenderer.send('refresh-time')
  }, 1000)
})

ipcRenderer.on('time-left', function (event, timeLeft) {
	timeLeftParagraph.innerHTML = timeLeft
})

document.addEventListener('dragover', event => event.preventDefault())
document.addEventListener('drop', event => event.preventDefault())

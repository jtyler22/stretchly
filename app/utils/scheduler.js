const pauseable = require('pauseable');

// Schedule event to occur after delay
class Scheduler {
  constructor (func, delay, reference = null) {
    this.timer = null
    this.delay = delay
    this.func = func
    this.reference = reference
  }

  get timeLeft () {
    if (this.timer === null) return false
    //return this.now + this.delay - Date.now()
    return this.timer.next()
  }

  plan () {
    this.now = Date.now()
    this.timer = pauseable.setTimeout(this.func, this.delay)
  }

  correct () {
    if (this.timer === null) return
    clearTimeout(this.timer)
    this.timer = pauseable.setTimeout(this.func, this.timeLeft)
  }

  cancel () {
    clearTimeout(this.timer)
    this.timer = null
    this.reference = null
    this.func = null
  }
}

module.exports = Scheduler

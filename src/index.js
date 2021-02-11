const { months, mons, days, dys } = require('./utils')

class D {
    constructor(...args) {
        this._date = new Date(...args)
    }

    get year() {
        return this._date.getFullYear()
    }
    get yr() {
        return this._date.getFullYear() % 100
    }

    get month() {
        return months[this._date.getMonth()]
    }

    get mon() {
        return mons[this._date.getMonth()]
    }

    get day() {
        return days[this._date.getDay()]
    }

    get dy() {
        return dys[this._date.getDay()]
    }
    get date() {
        return this._date.getDate()
    }

    get hours() {
        return this._date.getHours()
    }

    get mins() {
        return this._date.getMinutes()
    }

    get secs() {
        return this._date.getSeconds()
    }

    format(mask = 'M D Y') {
        const dict = {
            "Y": this.year,
            "y": this.yr,
            "M": this.month,
            "m": this.mon,
            "D": this._date.getDate(),
            "d": this.date,
            "H": this.date.getHours(),
            "h": this.date.getHours(),
            "I": this.date.getMinutes(),
            "i": this.mins,
            "S": this.date.getSeconds(),
            "s": this.secs,
        }

        let output = ''
        for (let i = 0; i < mask.length; i++) {
            if (dict[mask[i]] === undefined) {
                output += mask[i]
            } else {
                output += dict[mask[i]]
            }
        }
        return output
    }
    when() {
        const now = new D();
        
        
        }
}


module.exports = D

// const d = new D()
// console.log(d.year)
// console.log(d.yr)
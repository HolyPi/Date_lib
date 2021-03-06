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
            "H": this._date.getHours(),
            "h": this._date.getHours(),
            "I": this._date.getMinutes(),
            "i": this.mins,
            "S": this._date.getSeconds(),
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
        const yearDiff = this.year - now.year
        const monthDiff = this.date.getMonth() - now.date.getMonth() + yearDiff * 12;
        const dayDiff = this.date - now.date
        
        if (monthDiff > 11) {
            return `${yearDiff} year(s) from now`;
          } else if (monthDiff > 0) {
            return `${monthDiff} month(s) from now`;
          } else if (monthDiff < 0) {
            return `${monthDiff} month(s) ago`;
          } else if (monthDiff > 0) {
            return `${dayDiff} day(s) ago`;
          } else if (monthDiff < 0) {
            return `${dayDiff} days from now`;
          } else {
            return 'today';
          }
        }
    }


export default D

// const d = new D()
// console.log(d.year)
// console.log(d.yr)
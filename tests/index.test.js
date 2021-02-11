const D = require('../src/index')
const { months, mons, days, dys } = require('../src/utils')
const today = new Date()
const d = new D()
const bDay = new D(1965, 8, 26)

test('D.year', () => {
    expect( d.year ).toBe( today.getFullYear())
    expect(bDay.year).toBe(1965)
})

test('D.year', () => {
    expect( d.yr ).toBe( today.getFullYear() % 100)
    expect(bDay.yr).toBe(65)
})

test('D.month', () => {
    expect(bDay.month).toBe(months[8])
})

test('D.mon', () => {
    expect(bDay.mon).toBe(mons[8])
})


test('D.day', () => {
    expect(d.day).toBe(days[today.getDay()])
})

test('D.dy', () => {
    expect(d.dy).toBe(dys[today.getDay()])
})

test('D.date', () => {
    expect(d.date).toBe(today.getDate())
})

test('hours', () => {
    expect(d.hours).toBe(7);
})

test('minutes', () => {
    expect(d.mins).toBe(9);
})

test('seconds', () => {
    expect(d.secs).toBe(10);
})


